import { Suspense, lazy } from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { HelmetProvider } from "react-helmet-async";
import { RootLayout } from "./layouts/root-layout";
import { AdminAuthProvider } from "./admin/context/AdminAuthContext";
import { ProtectedRoute } from "./admin/components/ProtectedRoute";
import { AdminLayout } from "./admin/layouts/AdminLayout";
import { AdminAuthLayout } from "./admin/layouts/AdminAuthLayout";

// Code splitting for public routes
const HomePage = lazy(() => import("./pages/home-page").then(m => ({ default: m.HomePage })));
const ProjectDetailsPage = lazy(() => import("./pages/project-details-page").then(m => ({ default: m.ProjectDetailsPage })));
const ContactPage = lazy(() => import("./pages/contact-page").then(m => ({ default: m.ContactPage })));
const AboutPage = lazy(() => import("./pages/about-page").then(m => ({ default: m.AboutPage })));
const FAQPage = lazy(() => import("./pages/faq-page").then(m => ({ default: m.FAQPage })));
const PrivacyPolicyPage = lazy(() => import("./pages/privacy-policy-page").then(m => ({ default: m.PrivacyPolicyPage })));
const TermsPage = lazy(() => import("./pages/terms-page").then(m => ({ default: m.TermsPage })));
const DisclaimerPage = lazy(() => import("./pages/disclaimer-page").then(m => ({ default: m.DisclaimerPage })));
const NotFoundPage = lazy(() => import("./pages/not-found-page").then(m => ({ default: m.NotFoundPage })));

// Admin pages - lazy loaded
const LoginPage = lazy(() => import("./admin/pages/LoginPage").then(m => ({ default: m.LoginPage })));
const DashboardPage = lazy(() => import("./admin/pages/DashboardPage").then(m => ({ default: m.DashboardPage })));
const ProjectsPage = lazy(() => import("./admin/pages/ProjectsPage").then(m => ({ default: m.ProjectsPage })));
const CategoriesPage = lazy(() => import("./admin/pages/CategoriesPage").then(m => ({ default: m.CategoriesPage })));
const InquiriesPage = lazy(() => import("./admin/pages/InquiriesPage").then(m => ({ default: m.InquiriesPage })));
const MediaPage = lazy(() => import("./admin/pages/MediaPage").then(m => ({ default: m.MediaPage })));
const SettingsPage = lazy(() => import("./admin/pages/SettingsPage").then(m => ({ default: m.SettingsPage })));
const AnalyticsPage = lazy(() => import("./admin/pages/AnalyticsPage").then(m => ({ default: m.AnalyticsPage })));
const ProjectBlueprintsPage = lazy(() => import("./admin/pages/ProjectBlueprintsPage").then(m => ({ default: m.ProjectBlueprintsPage })));
const ClientsPage = lazy(() => import("./admin/pages/ClientsPage").then(m => ({ default: m.ClientsPage })));
const ClientDetailsPage = lazy(() => import("./admin/pages/ClientDetailsPage").then(m => ({ default: m.ClientDetailsPage })));
const ProfilePage = lazy(() => import("./admin/pages/ProfilePage").then(m => ({ default: m.ProfilePage })));

const router = createBrowserRouter([
  // ── Public Website ──
  {
    path: "/",
    element: <RootLayout />,
    children: [
      { index: true, element: <HomePage /> },
      { path: "projects/:id", element: <ProjectDetailsPage /> },
      { path: "contact", element: <ContactPage /> },
      { path: "about", element: <AboutPage /> },
      { path: "faq", element: <FAQPage /> },
      { path: "privacy-policy", element: <PrivacyPolicyPage /> },
      { path: "terms", element: <TermsPage /> },
      { path: "disclaimer", element: <DisclaimerPage /> },
      { path: "*", element: <NotFoundPage /> },
    ],
  },

  // ── Admin Auth (no sidebar) ──
  {
    path: "/admin",
    element: <AdminAuthLayout />,
    children: [
      { path: "login", element: <LoginPage /> },
    ],
  },

  // ── Admin Control Center ──
  {
    path: "/admin",
    element: (
      <ProtectedRoute>
        <AdminLayout />
      </ProtectedRoute>
    ),
    children: [
      { path: "dashboard", element: <DashboardPage /> },
      { path: "profile", element: <ProfilePage /> },
      { path: "clients", element: <ClientsPage /> },
      { path: "clients/:id", element: <ClientDetailsPage /> },
      { path: "projects", element: <ProjectsPage /> },
      { path: "categories", element: <CategoriesPage /> },
      { path: "inquiries", element: <InquiriesPage /> },
      { path: "media", element: <MediaPage /> },
      { path: "analytics", element: <AnalyticsPage /> },
      { path: "settings", element: <SettingsPage /> },
      { path: "project-blueprints", element: <ProjectBlueprintsPage /> },
    ],
  },
]);

// A simple loading spinner fallback for Suspense
const PageLoader = () => (
  <div className="min-h-screen bg-[#040810] flex items-center justify-center">
    <div className="size-12 border-4 border-white/10 border-t-cyan-400 rounded-full animate-spin"></div>
  </div>
);

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: false,
      staleTime: 5 * 60 * 1000,
    },
  },
});

export function App() {
  return (
    <HelmetProvider>
      <QueryClientProvider client={queryClient}>
        <AdminAuthProvider>
          <Suspense fallback={<PageLoader />}>
            <RouterProvider router={router} />
          </Suspense>
        </AdminAuthProvider>
      </QueryClientProvider>
    </HelmetProvider>
  );
}

