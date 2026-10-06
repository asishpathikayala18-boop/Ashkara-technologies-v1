import { SEO } from "../components/SEO";
import { useEffect } from "react";
import { Container } from "../components/container";
import { SectionHeading } from "../components/ui/section-heading";
import { GlassCard } from "../components/ui/glass-card";
import { siteConfig } from "../config/site";

export function PrivacyPolicyPage() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-[#040810] selection:bg-neon-cyan/30 selection:text-white pt-24 pb-20">
      <SEO title="Privacy Policy" description="Privacy Policy for AshKara Technologies." url="/privacy-policy" />
    
      <div className="fixed inset-0 -z-10 pointer-events-none">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(0,163,255,0.05),transparent_50%),radial-gradient(ellipse_at_bottom,rgba(139,92,246,0.05),transparent_50%)]" />
        <div className="absolute inset-0 bg-radial-grid bg-[length:32px_32px] opacity-[0.1]" />
      </div>

      <Container>
        <div className="max-w-4xl mx-auto py-12 md:py-20">
          <SectionHeading
            title="Privacy Policy"
            subtitle="Last Updated: January 2025"
            gradient="cyan"
            align="left"
          />

          <GlassCard variant="default" className="p-8 md:p-12 mt-12 prose prose-invert prose-neon max-w-none">
            <p>
              At <strong>{siteConfig.companyName}</strong>, we are committed to protecting your privacy and ensuring the security of your personal information. This Privacy Policy outlines how we collect, use, and safeguard your data when you visit our website or use our engineering services.
            </p>

            <h3>1. Information We Collect</h3>
            <p>
              We may collect personal information that you voluntarily provide to us when expressing an interest in obtaining information about us or our products and services, when participating in activities on the Website, or otherwise contacting us.
            </p>
            <ul>
              <li><strong>Personal Info Provided by You:</strong> We collect names; phone numbers; email addresses; contact preferences; and other similar information.</li>
              <li><strong>Project Requirements:</strong> Technical specifications and academic/business requirements shared during consultations.</li>
            </ul>

            <h3>2. How We Use Your Information</h3>
            <p>
              We process your information for purposes based on legitimate business interests, the fulfillment of our contract with you, compliance with our legal obligations, and/or your consent. Specifically, we use it to:
            </p>
            <ul>
              <li>Facilitate project delivery and communication.</li>
              <li>Respond to user inquiries and offer support to users.</li>
              <li>Send administrative information to you.</li>
              <li>Protect our Services from malicious activity.</li>
            </ul>

            <h3>3. Information Sharing and Disclosure</h3>
            <p>
              We only share information with your consent, to comply with laws, to provide you with services, to protect your rights, or to fulfill business obligations. We <strong>never</strong> sell or rent your personal information to third parties.
            </p>

            <h3>4. Data Security</h3>
            <p>
              We have implemented appropriate technical and organizational security measures designed to protect the security of any personal information we process. However, despite our safeguards and efforts to secure your information, no electronic transmission over the Internet can be guaranteed to be 100% secure.
            </p>

            <h3>5. Contact Us</h3>
            <p>
              If you have questions or comments about this notice, you may email us at <strong>{siteConfig.email}</strong> or by phone at <strong>{siteConfig.phone}</strong>.
            </p>
          </GlassCard>
        </div>
      </Container>
    </div>
  );
}
