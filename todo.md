# Portfolio Website Optimization Checklist

## Phase 0: Baseline Audit
- [x] Review current website files and structure
- [x] Run Google Lighthouse audit (mobile & desktop)
- [x] Track key metrics: LCP ≤ 2.5s, CLS ≤ 0.1, INP ≤ 200ms

## Phase 1: Color & Contrast
- [x] Ensure all text/background combinations pass 4.5:1 contrast ratio (WCAG AA)
- [x] Update color variables in CSS
- [x] Add proper focus indicators for interactive elements
- [x] Test color contrast with accessibility tools

## Phase 2: Typography & Spacing
- [x] Update font family from Tahoma to Inter (body) and Playfair Display (headings)
- [x] Implement fluid typography using clamp()
- [x] Improve line height and spacing for better readability
- [x] Check for and fix any widows/orphans in text

## Phase 3: Media Performance
- [x] Replace standard YouTube iframes with lite-youtube-embed
- [x] Add loading="lazy" and decoding="async" to images
- [x] Optimize video loading and playback
- [x] Test media performance on mobile devices

## Phase 4: SEO & Social
- [x] Add proper page titles and meta descriptions
- [x] Implement Open Graph tags (og:title, og:image, etc.)
- [x] Create optimized social sharing images (1200×630px)
- [x] Add canonical links

## Phase 5: Accessibility
- [x] Add alt text to all images
- [x] Ensure keyboard navigation works throughout the site
- [x] Add reduced-motion alternatives for animations
- [x] Test with screen readers

## Phase 6: Deployment & Monitoring
- [x] Set up monitoring for ongoing performance tracking
- [x] Create backup of original site for rollback if needed
- [ ] Deploy optimized site
- [ ] Verify all optimizations are working in production

## Rollback Plan
- [x] Create complete backup of current website
- [x] Document all changes for easy troubleshooting
- [x] Maintain separate deployment branches
