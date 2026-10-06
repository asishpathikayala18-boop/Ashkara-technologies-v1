import { SEO } from "../components/SEO";
import { useEffect } from "react";
import { Container } from "../components/container";
import { SectionHeading } from "../components/ui/section-heading";
import { GlassCard } from "../components/ui/glass-card";
import { siteConfig } from "../config/site";

export function TermsPage() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-[#040810] selection:bg-neon-cyan/30 selection:text-white pt-24 pb-20">
      <SEO title="Terms of Service" description="Terms of Service for AshKara Technologies." url="/terms" />
    
      <div className="fixed inset-0 -z-10 pointer-events-none">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(0,163,255,0.05),transparent_50%),radial-gradient(ellipse_at_bottom,rgba(139,92,246,0.05),transparent_50%)]" />
        <div className="absolute inset-0 bg-radial-grid bg-[length:32px_32px] opacity-[0.1]" />
      </div>

      <Container>
        <div className="max-w-4xl mx-auto py-12 md:py-20">
          <SectionHeading
            title="Terms & Conditions"
            subtitle="Last Updated: January 2025"
            gradient="blue"
            align="left"
          />

          <GlassCard variant="default" className="p-8 md:p-12 mt-12 prose prose-invert prose-neon max-w-none">
            <p>
              Welcome to <strong>{siteConfig.companyName}</strong>. These terms and conditions outline the rules and regulations for the use of our website and services.
            </p>

            <h3>1. Agreement to Terms</h3>
            <p>
              By accessing this website, we assume you accept these terms and conditions. Do not continue to use {siteConfig.companyName} if you do not agree to take all of the terms and conditions stated on this page.
            </p>

            <h3>2. Intellectual Property Rights</h3>
            <p>
              Other than the content you own, under these Terms, {siteConfig.companyName} and/or its licensors own all the intellectual property rights and materials contained in this Website. You are granted limited license only for purposes of viewing the material contained on this Website.
            </p>

            <h3>3. Project Deliverables & Source Code</h3>
            <p>
              When a project is commissioned and delivered:
            </p>
            <ul>
              <li>You receive the rights to use the provided source code for academic, personal, or agreed-upon commercial purposes.</li>
              <li>{siteConfig.companyName} retains the right to reuse underlying boilerplate architectures or non-proprietary algorithms.</li>
              <li>Complete documentation and reports are provided "as is". Revisions are subject to the initial agreement.</li>
            </ul>

            <h3>4. Restrictions</h3>
            <p>You are specifically restricted from all of the following:</p>
            <ul>
              <li>Publishing any Website material in any other media without credit.</li>
              <li>Using this Website in any way that is or may be damaging to this Website.</li>
              <li>Using this Website in any way that impacts user access to this Website.</li>
            </ul>

            <h3>5. Payment Terms</h3>
            <p>
              Payments for engineering projects must be made according to the milestone schedule agreed upon during the initial consultation. Deposits are generally non-refundable once active development has commenced.
            </p>

            <h3>6. Governing Law</h3>
            <p>
              These Terms will be governed by and interpreted in accordance with the laws of our jurisdiction, and you submit to the non-exclusive jurisdiction of the state and federal courts for the resolution of any disputes.
            </p>
          </GlassCard>
        </div>
      </Container>
    </div>
  );
}
