import { Outlet } from "react-router-dom";
import { Navbar } from "../components/navbar";
import { Footer } from "../components/footer";
import { FloatingContactDock } from "../components/floating-contact-dock";

export function RootLayout() {
  return (
    <div className="min-h-screen bg-surface-base text-ink-100 antialiased flex flex-col">
      <Navbar />
      <main className="flex-grow">
        <Outlet />
      </main>
      <Footer />
      <FloatingContactDock />
    </div>
  );
}
