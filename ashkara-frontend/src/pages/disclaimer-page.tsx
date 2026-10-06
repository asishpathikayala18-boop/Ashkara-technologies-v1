import { SEO } from "../components/SEO";
import { useEffect } from "react";
import { Container } from "../components/container";
import { SectionHeading } from "../components/ui/section-heading";
import { GlassCard } from "../components/ui/glass-card";
import { siteConfig } from "../config/site";

export function DisclaimerPage() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-[#040810] selection:bg-neon-cyan/30 selection:text-white pt-24 pb-20">
      <SEO title="Disclaimer" description="Disclaimer for AshKara Technologies." url="/disclaimer" />
    
      <div className="fixed inset-0 -z-10 pointer-events-none">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(0,163,255,0.05),transparent_50%),radial-gradient(ellipse_at_bottom,rgba(139,92,246,0.05),transparent_50%)]" />
        <div className="absolute inset-0 bg-radial-grid bg-[length:32px_32px] opacity-[0.1]" />
      </div>

      <Container>
        <div className="max-w-4xl mx-auto py-12 md:py-20">
          <SectionHeading
            title="Disclaimer"
            subtitle="Important Legal Notice"
            gradient="violet"
            align="left"
          />

          <GlassCard variant="default" className="p-8 md:p-12 mt-12 prose prose-invert prose-neon max-w-none">
            <p>
              The information provided by <strong>{siteConfig.companyName}</strong> on this website is for general informational purposes only. All information on the Site is provided in good faith, however, we make no representation or warranty of any kind, express or implied, regarding the accuracy, adequacy, validity, reliability, availability, or completeness of any information on the Site.
            </p>

            <h3>1. Academic Use Disclaimer</h3>
            <p>
              Projects provided by {siteConfig.companyName} for academic purposes (such as final year projects, mini-projects, or assignments) are intended to serve as <strong>learning aids and reference material</strong>. 
            </p>
            <p>
              It is the student's responsibility to understand the architecture, code, and implementation of the project before submitting it to any educational institution. We do not encourage academic dishonesty or plagiarism. By purchasing our academic engineering services, you agree to use them ethically and in accordance with your institution's guidelines.
            </p>

            <h3>2. External Links Disclaimer</h3>
            <p>
              The Site may contain (or you may be sent through the Site) links to other websites or content belonging to or originating from third parties. Such external links are not investigated, monitored, or checked for accuracy, adequacy, validity, reliability, availability, or completeness by us.
            </p>

            <h3>3. Professional Disclaimer</h3>
            <p>
              The Site cannot and does not contain legal, financial, or strict professional engineering advice without a formalized contract. Any reliance you place on general information provided on this website is strictly at your own risk.
            </p>

            <h3>4. "As-Is" Software Provision</h3>
            <p>
              Source code and software solutions are provided "as is", without warranty of any kind, express or implied, including but not limited to the warranties of merchantability, fitness for a particular purpose, and non-infringement.
            </p>
          </GlassCard>
        </div>
      </Container>
    </div>
  );
}
