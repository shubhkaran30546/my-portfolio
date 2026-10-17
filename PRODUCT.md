# Product

<!-- impeccable:product-schema 1 -->

## Platform

web

## Users

Hiring managers, recruiters, and senior engineers evaluating Shubhkaran Dhillon for software engineering roles. They skim for about 20 seconds, often arriving from a resume or LinkedIn link, and decide whether to read further or reach out. Target roles are both infrastructure/platform/SRE and backend/full-stack SWE, presented as one profile: a software engineer who runs production systems.

## Product Purpose

A personal portfolio that makes one claim stick: this person keeps real systems alive. Success means a visitor leaves knowing the scale (150K+ users, 99.9% uptime), the infrastructure depth (AWS, Terraform, CI/CD), and how to get in touch, with email as the main next step.

## Positioning

Shubhkaran is a software engineer at FastTrack Technologies (Edmonton, AB) who builds and runs the cloud infrastructure behind an LMS and online exam platform. That is production ownership, with measured results, not a list of tutorial projects.

## Operating Context

- Deployed to GitHub Pages at `https://shubhkaran30546.github.io/my-portfolio` (CRA `homepage` set; assets must resolve through `process.env.PUBLIC_URL`).
- It is a single-page site with anchor navigation. Visitors use both desktop and mobile, down to 360px wide.
- The resume PDF is at `public/SWE_dhillon.pdf` and can be downloaded from the site.

## Capabilities and Constraints

- Stack: React 18 on Create React App (`react-scripts` 5), deployed with `gh-pages`. Uses `react-github-calendar` (username `shubhkaran30546`) and `react-icons`.
- All factual content and outbound links must be kept. The redesign changes only the presentation.
- The phone number is intentionally left off the web page itself (decided 2026-10-17). The downloadable résumé PDF does include it, which the user approved (see Evidence on Hand).

## Brand Commitments

- Name: Shubhkaran Dhillon.
- The existing orange accent should evolve rather than be dropped (user direction).
- `public/IMG_4993.jpg` (sunset photo) is the user's own image and the emotional reference for the site.

## Evidence on Hand

- **Work at FastTrack Technologies Inc.:** Software Engineer, Edmonton, AB, Mar 2026 to present.
  - Scaled the LMS and exam platform to 150K+ users at 99.9% uptime.
  - Improved performance 30% and reduced latency 25%.
  - Cut cloud cost about 20% and deployment time 40%.
  - Reduced manual configuration errors 90% with Terraform IaC.
  - Built AI-augmented Node.js systems.
- **Work at Cardify:** Software Engineer Intern, Remote, Jan to Aug 2025.
  - Supported 1,000+ pilot users.
  - Built an AI onboarding agent that cut onboarding time 35%.
  - Implemented OAuth2 and JWT auth, improving security and login reliability 35%.
  - Set up GitHub Actions CI/CD, cutting deploy time 40%.
  - Improved PostgreSQL efficiency 25%.
- **Projects (all with GitHub links):**
  - QR Code Event Check-In (Android)
  - Cardify
  - CodeTweet (Python/SQLite CLI)
  - FEELFLOW (NeuroTech hackathon)
  - SPARK (online computer store)
- **Stack confirmed by user (2026-10-17):** Django, FastAPI and Go are all shown on the site, although the résumé lists only Django.
- **Résumé updated (2026-10-17):** The role descriptions now mirror the new résumé (`public/SWE_dhillon.pdf`). It adds a LangGraph CI/CD triage agent (−70% debugging time) and Terraform (−60% provisioning time). It drops the earlier CI/CD −40% deploy-time and Node.js bullets. The user chose not to show the Learning Activity Games project or the DeepLearning.AI certificate yet. The downloadable PDF includes the phone number; the user approved this.
- **Credentials** (Credly links):
  - AWS Certified Cloud Practitioner
  - AWS Certified Developer Associate
  - AWS Cloud Quest
  - LPI Linux
- **Education:** BSc Computing Science, University of Alberta.
- **Contact:**
  - Email: shubh.karan30@gmail.com
  - GitHub: github.com/shubhkaran30546
  - LinkedIn: linkedin.com/in/shubhkaran-dhillon-a73651217
  - Resume PDF
- **What the site must not include:** testimonials, employer logos beyond those listed, or any metric that isn't in the list above.

## Product Principles

1. **Proof over adjectives.** Every claim has a number or a link behind it.
2. **Respect the 20-second skim.** Who he is, the scale he runs at, and how to reach him must all be clear above the fold or one scroll below it.
3. **Production-grade, inside and out.** The site should be fast, accessible, and correct, because its quality is part of the evidence.
4. **Warmth with precision.** The site should feel human, not like a cold "hacker" persona.

## Accessibility & Inclusion

- Meet WCAG AA contrast for body text.
- Visible focus states and semantic landmarks.
- Honor `prefers-reduced-motion`.
- Lighthouse 95+ target.
