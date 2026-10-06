import "dotenv/config";
import mongoose from "mongoose";
import bcrypt from "bcryptjs";
import { Admin } from "../models/Admin";
import { Category } from "../models/Category";
import { Setting } from "../models/Setting";
import { Project } from "../models/Project";

const MONGO_URI = process.env.MONGODB_URI || "mongodb://localhost:27017/ashkara";

const defaultCategories = [
  { name: "Final Year Projects", slug: "final-year", description: "Comprehensive final year engineering projects with full documentation", order: 1 },
  { name: "Artificial Intelligence", slug: "artificial-intelligence", description: "AI, Machine Learning, and Deep Learning projects", order: 2 },
  { name: "MERN Stack", slug: "mern-stack", description: "Full-stack web development projects using MongoDB, Express, React, Node", order: 3 },
  { name: "IoT & Embedded", slug: "iot", description: "Internet of Things and embedded systems projects", order: 4 },
  { name: "Data Science", slug: "data-science", description: "Data analysis, visualization, and machine learning projects", order: 5 },
  { name: "Android Development", slug: "android", description: "Native and cross-platform Android mobile applications", order: 6 },
  { name: "Cloud & DevOps", slug: "cloud-devops", description: "Cloud infrastructure and DevOps automation projects", order: 7 },
  { name: "Cyber Security", slug: "cyber-security", description: "Security analysis, penetration testing and defensive systems", order: 8 },
  { name: "Electronics & Communication", slug: "ece", description: "ECE domain projects with signal processing and hardware interfaces", order: 9 },
  { name: "Documentation & Presentation", slug: "documentation", description: "Technical reports, PPTs and presentation support", order: 10 },
];

const defaultSettings = {
  companyName: "AshKara Technologies",
  email: "asishpathikayala05@gmail.com",
  phone: "+91 XXXXXXXXXX",
  whatsapp: "https://wa.me/91XXXXXXXXXX",
  instagram: "https://instagram.com/ashkara.tech",
  linkedin: "",
  github: "",
  seoTitle: "AshKara Technologies — Engineering Project Development",
  seoDescription: "AshKara Technologies provides premium engineering project development, documentation, and deployment support for final year students.",
  seoKeywords: "engineering projects, final year projects, MERN stack, AI projects, IoT projects",
};

// Sample projects based on the data from project-data.ts
const sampleProjects = [
  { title: "Smart Home Automation System", slug: "smart-home-automation", category: "iot", engineeringBranch: "ECE", description: "A comprehensive IoT-based home automation system using Arduino and NodeMCU", technologies: ["Arduino", "NodeMCU", "MQTT", "React"], status: "active" as const },
  { title: "AI Resume Analyzer", slug: "ai-resume-analyzer", category: "artificial-intelligence", engineeringBranch: "CSE", description: "Machine learning system to analyze and score resumes against job descriptions", technologies: ["Python", "NLP", "TensorFlow", "Flask"], status: "active" as const },
  { title: "E-Commerce Platform with MERN", slug: "ecommerce-mern", category: "mern-stack", engineeringBranch: "CSE", description: "Full-stack e-commerce platform with payment integration", technologies: ["MongoDB", "Express", "React", "Node.js"], status: "featured" as const },
  { title: "Face Recognition Attendance System", slug: "face-recognition-attendance", category: "artificial-intelligence", engineeringBranch: "CSE", description: "Automated attendance tracking using facial recognition technology", technologies: ["Python", "OpenCV", "TensorFlow", "Flask"], status: "active" as const },
  { title: "Patient Health Monitoring IoT", slug: "patient-health-monitoring", category: "iot", engineeringBranch: "ECE", description: "Real-time patient vitals monitoring using IoT sensors and cloud dashboard", technologies: ["Arduino", "AWS", "React", "Node.js"], status: "active" as const },
  { title: "Stock Price Prediction ML", slug: "stock-price-prediction", category: "data-science", engineeringBranch: "CSE", description: "LSTM-based stock price prediction with real-time data feeds", technologies: ["Python", "TensorFlow", "Pandas", "Streamlit"], status: "active" as const },
  { title: "Social Media App (React Native)", slug: "social-media-react-native", category: "android", engineeringBranch: "CSE", description: "Cross-platform social media application with real-time features", technologies: ["React Native", "Firebase", "Node.js", "MongoDB"], status: "active" as const },
  { title: "Blockchain Voting System", slug: "blockchain-voting-system", category: "mern-stack", engineeringBranch: "CSE", description: "Decentralized voting system using Ethereum smart contracts", technologies: ["Solidity", "Ethereum", "React", "Web3.js"], status: "active" as const },
  { title: "Predictive Maintenance System", slug: "predictive-maintenance", category: "data-science", engineeringBranch: "Mechanical", description: "ML-powered system to predict machinery failures before they occur", technologies: ["Python", "Scikit-learn", "MQTT", "Grafana"], status: "active" as const },
  { title: "Cloud Infrastructure Monitor", slug: "cloud-infrastructure-monitor", category: "cloud-devops", engineeringBranch: "CSE", description: "Real-time cloud resource monitoring and alerting dashboard", technologies: ["AWS", "Docker", "Prometheus", "React"], status: "active" as const },
];

async function seed() {
  try {
    await mongoose.connect(MONGO_URI);
    console.log("✅ Connected to MongoDB");

    // 1. Seed Super Admin
    const existingAdmin = await Admin.findOne({ email: "asishpathikayala05@gmail.com" });
    if (!existingAdmin) {
      const salt = await bcrypt.genSalt(12);
      const passwordHash = await bcrypt.hash("AshKara@2026!", salt);
      await Admin.create({
        name: "Asish Pathikayala",
        email: "asishpathikayala05@gmail.com",
        passwordHash,
        role: "SUPER_ADMIN",
        mustChangePassword: true,
        isActive: true,
      });
      console.log("✅ Super Admin created: asishpathikayala05@gmail.com");
    } else {
      console.log("⏭  Super Admin already exists, skipping.");
    }

    // 2. Seed Categories
    let catCount = 0;
    for (const cat of defaultCategories) {
      const exists = await Category.findOne({ slug: cat.slug });
      if (!exists) {
        await Category.create({ ...cat, isVisible: true });
        catCount++;
      }
    }
    console.log(`✅ Seeded ${catCount} new categories`);

    // 3. Seed Default Settings
    let settingsCount = 0;
    for (const [key, value] of Object.entries(defaultSettings)) {
      const exists = await Setting.findOne({ key });
      if (!exists) {
        await Setting.create({ key, value });
        settingsCount++;
      }
    }
    console.log(`✅ Seeded ${settingsCount} new settings`);

    // 4. Seed Sample Projects
    let projectCount = 0;
    for (const proj of sampleProjects) {
      const exists = await Project.findOne({ slug: proj.slug });
      if (!exists) {
        await Project.create({
          ...proj,
          features: ["Complete source code", "Documentation", "PPT presentation"],
          deliverables: ["Source Code", "Technical Report", "PPT"],
        });
        projectCount++;
      }
    }
    console.log(`✅ Seeded ${projectCount} sample projects`);

    console.log("\n🎉 Database seeded successfully!");
    console.log("━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━");
    console.log("   Admin Panel: http://localhost:5173/admin/login");
    console.log("   Email:       asishpathikayala05@gmail.com");
    console.log("   Password:    AshKara@2026!");
    console.log("   ⚠️  Change password after first login!");
    console.log("━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━\n");
  } catch (error) {
    console.error("❌ Seed failed:", error);
  } finally {
    await mongoose.disconnect();
    process.exit(0);
  }
}

seed();
