import axios from "axios";

const API_BASE = import.meta.env.VITE_API_URL || "http://localhost:5000";

export const adminApi = axios.create({
  baseURL: `${API_BASE}/api/v1`,
  headers: { "Content-Type": "application/json" },
  withCredentials: true,
});

// Inject JWT on every request
adminApi.interceptors.request.use((config) => {
  const token = localStorage.getItem("ashkara_admin_token");
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});

// Auto redirect on 401
adminApi.interceptors.response.use(
  (res) => res,
  (error) => {
    if (error.response?.status === 401) {
      localStorage.removeItem("ashkara_admin_token");
      localStorage.removeItem("ashkara_admin_user");
      window.location.href = "/admin/login";
    }
    return Promise.reject(error);
  }
);

// ---- Auth ----
export const authApi = {
  login: (email: string, password: string) =>
    adminApi.post("/auth/login", { email, password }),
  me: () => adminApi.get("/auth/me"),
  changePassword: (currentPassword: string, newPassword: string) =>
    adminApi.put("/auth/change-password", { currentPassword, newPassword }),
};

// ---- Projects ----
export const projectsApi = {
  getAll: (params?: any) => adminApi.get("/projects", { params }),
  getById: (id: string) => adminApi.get(`/projects/${id}`),
  create: (data: any) => adminApi.post("/projects", data),
  update: (id: string, data: any) => adminApi.put(`/projects/${id}`, data),
  delete: (id: string) => adminApi.delete(`/projects/${id}`),
  duplicate: (id: string) => adminApi.post(`/projects/${id}/duplicate`),
  updateStatus: (id: string, status: string) =>
    adminApi.patch(`/projects/${id}/status`, { status }),
  getStats: () => adminApi.get("/projects/admin/stats"),
};

// ---- Categories ----
export const categoriesApi = {
  getAll: () => adminApi.get("/categories"),
  create: (data: any) => adminApi.post("/categories", data),
  update: (id: string, data: any) => adminApi.put(`/categories/${id}`, data),
  delete: (id: string) => adminApi.delete(`/categories/${id}`),
};

// ---- Inquiries ----
export const inquiriesApi = {
  getAll: (params?: any) => adminApi.get("/inquiries", { params }),
  getById: (id: string) => adminApi.get(`/inquiries/${id}`),
  updateStatus: (id: string, status: string) =>
    adminApi.patch(`/inquiries/${id}/status`, { status }),
  delete: (id: string) => adminApi.delete(`/inquiries/${id}`),
  exportCsv: (status?: string) =>
    adminApi.get("/inquiries/export", {
      params: { status },
      responseType: "blob",
    }),
};

// ---- Media ----
export const mediaApi = {
  upload: (file: File, folder: string = "gallery") => {
    const form = new FormData();
    form.append("file", file);
    return adminApi.post(`/media/upload?folder=${folder}`, form, {
      headers: { "Content-Type": "multipart/form-data" },
    });
  },
  list: (folder?: string) => adminApi.get("/media", { params: { folder } }),
  delete: (folder: string, filename: string) =>
    adminApi.delete(`/media/${folder}/${filename}`),
};

// ---- Settings ----
export const settingsApi = {
  getAll: () => adminApi.get("/settings"),
  update: (data: Record<string, any>) => adminApi.put("/settings", data),
};

// ---- Analytics ----
export const analyticsApi = {
  getDashboard: () => adminApi.get("/analytics/dashboard"),
  getActivity: (params?: any) => adminApi.get("/analytics/activity", { params }),
  search: (q: string) => adminApi.get("/analytics/search", { params: { q } }),
};

// ---- Project Blueprints ----
export const projectBlueprintsApi = {
  getAll: (params?: any) => adminApi.get("/project-blueprints", { params }),
  getById: (id: string) => adminApi.get(`/project-blueprints/${id}`),
  create: (data: any) => adminApi.post("/project-blueprints", data),
  update: (id: string, data: any) => adminApi.put(`/project-blueprints/${id}`, data),
  delete: (id: string) => adminApi.delete(`/project-blueprints/${id}`),
};

// ---- Notifications ----
export const notificationsApi = {
  getAll: () => adminApi.get("/notifications"),
};
