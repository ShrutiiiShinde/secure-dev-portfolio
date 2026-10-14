# Shruti Shinde — Secure Developer Portfolio

[![DevSecOps CI Pipeline](https://github.com/ShrutiiiShinde/secure-dev-portfolio/actions/workflows/ci.yml/badge.svg)](https://github.com/ShrutiiiShinde/secure-dev-portfolio/actions/workflows/ci.yml)

A personal portfolio built with security-first development practices — **Next.js 15 App Router**, **TypeScript strict mode**, **Tailwind CSS v4**, and **shadcn/ui**. Features real secure-development controls (active HTTP security headers, zero-trust server validation, rate limiting, and automated DevSecOps CI scanning) documented rather than simulated.

---

## 🛡️ DevSecOps Security Pipeline & Automated Controls

Every Pull Request and commit to `main` is automatically scanned by our GitHub Actions pipeline:
- **Lint, Typecheck & Build**: ESLint compliance, zero TypeScript errors (`npx tsc --noEmit`), and Next.js SSR build verification.
- **CodeQL (SAST)**: GitHub's Static Application Security Testing engine analyzing code paths for security vulnerabilities.
- **Gitleaks**: Automated secret scanner ensuring no hardcoded credentials, API keys, or tokens are committed.
- **Dependabot**: Weekly automated vulnerability scanning across npm dependencies and GitHub Actions.

---

## 🚀 Local Development Setup

```bash
# 1. Clone repository
git clone https://github.com/ShrutiiiShinde/secure-dev-portfolio.git
cd secure-dev-portfolio

# 2. Install dependencies
npm install

# 3. Start Next.js development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser to view the portfolio live locally!

---

## 🔒 Active HTTP Security Headers

- `Content-Security-Policy`
- `Strict-Transport-Security` (HSTS)
- `X-Frame-Options` (`DENY`)
- `X-Content-Type-Options` (`nosniff`)
- `Referrer-Policy` (`strict-origin-when-cross-origin`)
- `Permissions-Policy`

Explore full documentation at [/security](http://localhost:3000/security).

---

## 📝 Recent Cybersecurity Articles

- **[Broken Access Control OWASP Top 10 (2025): A Practical Checklist (Part 2)](https://medium.com/@shrutishinde1319/broken-access-control-owasp-top-10-2025-a-practical-checklist-part-2-c22c078e0cae)**
- **[Broken Access Control (OWASP Top 10): The #1 Web Security Risk (Part 1)](https://medium.com/@shrutishinde1319/broken-access-control-owasp-top-10-2025-the-1-web-security-risk-d843bd36ef5e)**
- **[Reading a Website Like a Pentester: What to Test in Every Functionality](https://medium.com/@shrutishinde1319/reading-a-website-like-a-pentester-what-to-test-in-every-functionality-6375f58ba8fe)**
- **[Decoding a URL: Paths, Parameters, and the Art of Finding What’s Hidden](https://medium.com/@shrutishinde1319/decoding-a-url-paths-parameters-and-the-art-of-finding-whats-hidden-087f3b420d4c)**

