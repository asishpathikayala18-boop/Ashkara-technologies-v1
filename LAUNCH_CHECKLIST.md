# AshKara Technologies - Version 1.0 Launch Checklist

## Pre-Launch (Staging & Final QA)
- [ ] Verify Production Domain resolution.
- [ ] Configure DNS records (A/CNAME) for the Frontend on Vercel.
- [ ] Configure Environment Variables (`.env.production`) on Render and Vercel.
- [ ] Seed standard Admin accounts in MongoDB Atlas.
- [ ] Manually test Contact form -> Inquiry -> Admin Dashboard flow.
- [ ] Ensure Image uploads via Multer are saving locally on Render correctly (or verify persistent disk if using Render). *Note: Render free tier uses ephemeral storage. Ensure paid tier with persistent disk is used for uploads.*

## Launch Day
- [ ] Disable any Staging/Maintenance mode.
- [ ] Run Lighthouse Audit on Production URL (aiming for 90+ on SEO & Performance).
- [ ] Submit `sitemap.xml` to Google Search Console.
- [ ] Monitor Render logs for first 24 hours to catch unhandled edge cases.

## Post-Launch
- [ ] Setup Daily MongoDB Backups in Atlas.
- [ ] Setup Analytics (Google Analytics or PostHog).
