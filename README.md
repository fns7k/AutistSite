# BrightSteps Autism & Development Clinic Website

A fast, accessible, SEO-friendly static website for a multidisciplinary clinic that supports children and young people with Autism Spectrum Disorder (ASD) and developmental delays.

## Why a static site?
- Fast to load, low cost to host (Netlify, Vercel, GitHub Pages, S3+CloudFront)
- Secure: no server required; contact form uses mailto fallback by default
- Accessible by design and responsive to all devices

## Structure
```
assets/
  css/styles.css        # Global responsive styles
  js/main.js            # Shared interactions (nav, smooth scroll, contact fallback)
  img/logo.svg          # Logo (SVG)
  img/favicon.svg       # Favicon (SVG)
index.html              # Home (hero, services, CTA)
about.html              # Mission, approach, values
services.html           # Therapies and supports
autism-education.html   # Educational content for families
team.html               # Clinician bios
faq.html                # FAQs with schema.org FAQPage
contact.html            # Contact form (mailto fallback)
robots.txt              # Allow all
sitemap.xml             # SEO sitemap
```

## Customize your clinic details
- Replace placeholder contact info in `index.html`, `about.html`, `contact.html`, and footer sections.
- Update organization name/logo in `assets/img/logo.svg` and titles.
- Adjust JSON-LD organization details in `index.html`.
- Replace `https://example.com` in `sitemap.xml` and `robots.txt` with your domain.

## Local preview
You can open `index.html` directly in a browser. For best results with routing and assets, run a simple server:

```bash
# Python 3
python3 -m http.server 8080
# then open http://localhost:8080/
```

## Deploy
- Netlify: drag-and-drop the folder, or connect repo (build = none, publish = `/`)
- Vercel: Import project, framework = "Other", output = `/`
- GitHub Pages: enable Pages on the main branch `/` root
- S3 + CloudFront: upload files, set `index.html` as root

## Optional: wire a backend contact handler
By default, the form in `contact.html` uses `mailto:`. To post to a server:
- Change `data-handler="mailto"` to `data-handler="server"` on `#contact-form`
- Set `action="https://your-endpoint"` and `method="POST"`
- Ensure CORS and spam protection (hCaptcha/Turnstile) if public

## Accessibility notes
- Uses system font stack for readability
- Large touch targets, high-contrast colors, focus-visible states
- Skip link for keyboard users

## License
You are free to use and modify this site for your clinic.
