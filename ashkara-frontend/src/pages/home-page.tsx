import { lazy, Suspense } from "react";
import { HeroSection } from "../sections/hero-section";
import { EngineeringUniverseSection } from "../sections/engineering-universe-section";

const ProjectVaultSection = lazy(() =>
  import("../sections/project-vault-section").then((module) => ({
    default: module.ProjectVaultSection,
  })),
);

const EngineeringSolutionsSection = lazy(() =>
  import("../sections/engineering-solutions-section").then((module) => ({
    default: module.EngineeringSolutionsSection,
  })),
);

import { SEO } from "../components/SEO";

export function HomePage() {
  return (
    <>
      <SEO 
        title="Engineering Final Year Projects | BTech & MTech Solutions"
        description="Premium final year engineering projects for BTech, MTech, and diploma students. We provide complete code, documentation, and technical support."
        url="/"
      />
      <HeroSection />
      <EngineeringUniverseSection />
      <Suspense fallback={null}>
        <ProjectVaultSection />
        <EngineeringSolutionsSection />
      </Suspense>
    </>
  );
}
