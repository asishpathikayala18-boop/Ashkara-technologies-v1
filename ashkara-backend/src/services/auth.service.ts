import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import { Admin } from "../models/Admin";
import { ActivityLog } from "../models/ActivityLog";

const JWT_SECRET = process.env.JWT_SECRET || "ashkara-secret-dev";
const JWT_EXPIRES_IN = process.env.JWT_EXPIRES_IN || "24h";

export class AuthService {
  static async login(email: string, password: string) {
    const admin = await Admin.findOne({ email: email.toLowerCase(), isActive: true });
    if (!admin) {
      throw new Error("Invalid credentials");
    }

    const isMatch = await bcrypt.compare(password, admin.passwordHash);
    if (!isMatch) {
      throw new Error("Invalid credentials");
    }

    // Update last login
    admin.lastLogin = new Date();
    await admin.save();

    const payload = {
      id: admin._id.toString(),
      email: admin.email,
      name: admin.name,
      role: admin.role,
    };

    const token = jwt.sign(payload, JWT_SECRET, { expiresIn: JWT_EXPIRES_IN } as any);

    return {
      token,
      admin: {
        id: admin._id,
        name: admin.name,
        email: admin.email,
        role: admin.role,
        mustChangePassword: admin.mustChangePassword,
        lastLogin: admin.lastLogin,
      },
    };
  }

  static async getMe(adminId: string) {
    const admin = await Admin.findById(adminId).select("-passwordHash");
    if (!admin) throw new Error("Admin not found");
    return admin;
  }

  static async changePassword(adminId: string, currentPassword: string, newPassword: string) {
    const admin = await Admin.findById(adminId);
    if (!admin) throw new Error("Admin not found");

    const isMatch = await bcrypt.compare(currentPassword, admin.passwordHash);
    if (!isMatch) throw new Error("Current password is incorrect");

    const salt = await bcrypt.genSalt(12);
    admin.passwordHash = await bcrypt.hash(newPassword, salt);
    admin.mustChangePassword = false;
    await admin.save();

    return { success: true };
  }

  static async logActivity(adminId: string, adminName: string, action: string, resource: string, resourceId?: string, details?: string) {
    await ActivityLog.create({ adminId, adminName, action, resource, resourceId, details });
  }
}
