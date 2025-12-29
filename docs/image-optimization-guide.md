# Image Optimization Guide

## Overview

This guide explains how to maintain optimal image performance for The Wizard of AI website.

## Quick Start

### For New Images

When adding new images to the project:

```bash
# 1. Add your image to /public/images/
cp my-new-image.png public/images/

# 2. Run the compression script
node scripts/compress-images.js

# 3. Use the optimized image in your component (see below)
```

## Using Optimized Images in Components

### Method 1: Picture Element (Recommended for critical images)

```tsx
<picture>
  <source srcSet="/images/my-image.webp" type="image/webp" />
  <img
    src="/images/my-image.png"
    alt="Description"
    className="w-full h-auto"
  />
</picture>
```

### Method 2: Next.js Image Component (Recommended for most cases)

Next.js automatically optimizes images and serves WebP to supporting browsers:

```tsx
import Image from 'next/image'

<Image
  src="/images/my-image.png"
  alt="Description"
  width={1200}
  height={630}
  priority // for above-fold images
  quality={85}
/>
```

### Method 3: OptimizedImage Component (Custom wrapper)

```tsx
import { OptimizedImage } from '@/components/optimized-image'

<OptimizedImage
  src="/images/my-image.png"
  alt="Description"
  width={1200}
  height={630}
  priority
/>
```

## Image Size Guidelines

### Target File Sizes
- Hero images: < 200 KB (WebP)
- Content images: < 150 KB (WebP)
- Thumbnails: < 50 KB (WebP)
- Icons/logos: < 30 KB (WebP or SVG)

### Recommended Dimensions
- **Desktop hero**: 1920x1080 (Full HD)
- **Mobile hero**: 750x1334 (Mobile optimized)
- **OG image**: 1200x630 (Social media standard)
- **Blog thumbnails**: 800x450
- **Avatar/profile**: 400x400

## Compression Script

### Basic Usage

```bash
# Compress all images over 500KB
node scripts/compress-images.js
```

### Script Features
- Automatically finds images over 500KB
- Creates WebP versions at 85% quality
- Optimizes original PNG/JPEG files
- Backs up originals to `/public/images/originals/`
- Generates detailed compression report
- Prioritizes images used on main pages

### Configuration

Edit the script to adjust settings:

```javascript
// scripts/compress-images.js

const MIN_SIZE_KB = 500 // Minimum size to compress
const WEBP_QUALITY = 85 // WebP quality (0-100)
const WEBP_EFFORT = 6   // Compression effort (0-6)
const PNG_QUALITY = 85  // PNG quality
const JPEG_QUALITY = 85 // JPEG quality
```

## Best Practices

### 1. Choose the Right Format

| Format | Best For | Pros | Cons |
|--------|----------|------|------|
| **WebP** | Photos, graphics, most images | Best compression, wide support | Not universal |
| **JPEG** | Photos, complex images | Universal support | Lossy, no transparency |
| **PNG** | Graphics with transparency | Lossless, transparency | Large file size |
| **SVG** | Icons, logos, simple graphics | Scalable, tiny files | Not for photos |
| **AVIF** | Next-gen (future) | Better than WebP | Limited browser support |

### 2. Responsive Images

Use different sizes for different screen sizes:

```tsx
<Image
  src="/images/hero.png"
  alt="Hero"
  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
  width={1200}
  height={630}
/>
```

### 3. Lazy Loading

Load images only when they enter viewport:

```tsx
<Image
  src="/images/below-fold.png"
  alt="Below fold content"
  loading="lazy" // Browser native lazy loading
  width={800}
  height={600}
/>
```

### 4. Priority Loading

Mark critical above-fold images as priority:

```tsx
<Image
  src="/images/hero.png"
  alt="Hero"
  priority // Preload this image
  width={1920}
  height={1080}
/>
```

### 5. Image Optimization Checklist

Before adding images:
- [ ] Resize to appropriate dimensions
- [ ] Compress at 85% quality
- [ ] Create WebP version
- [ ] Add descriptive alt text
- [ ] Use lazy loading for below-fold images
- [ ] Set priority for above-fold images
- [ ] Test on mobile and desktop
- [ ] Verify Core Web Vitals

## Performance Monitoring

### Local Testing

```bash
# 1. Build production version
npm run build

# 2. Start production server
npm start

# 3. Open Chrome DevTools
# - Run Lighthouse audit
# - Check Network tab for image sizes
# - Verify WebP is being served
```

### Production Monitoring

1. **Google PageSpeed Insights**
   - URL: https://pagespeed.web.dev/
   - Check desktop and mobile scores
   - Monitor LCP (should be < 2.5s)

2. **Vercel Analytics**
   - Real user monitoring
   - Core Web Vitals tracking
   - Performance insights

3. **Chrome DevTools**
   - Network throttling (3G, 4G)
   - Coverage tab (unused bytes)
   - Performance tab (load timeline)

## Common Issues & Solutions

### Issue: Images not loading

**Solution:**
- Check file path is correct
- Verify WebP file was created
- Check browser console for errors
- Ensure Next.js Image domain is configured (if using external images)

### Issue: Poor image quality

**Solution:**
- Increase WebP quality in compression script
- Use PNG for images requiring perfect quality
- Check original image quality
- Avoid upscaling images

### Issue: Slow LCP

**Solution:**
- Add `priority` to hero images
- Preload critical images in `<head>`
- Reduce hero image file size
- Use responsive images
- Consider CDN for faster delivery

### Issue: Layout shift (CLS)

**Solution:**
- Always specify width and height
- Use aspect ratio CSS
- Reserve space for images
- Avoid inserting images above existing content

## Advanced Optimization

### 1. Image CDN

Configure Vercel's built-in image optimization:

```javascript
// next.config.js
module.exports = {
  images: {
    formats: ['image/avif', 'image/webp'],
    deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
    minimumCacheTTL: 60,
  },
}
```

### 2. AVIF Format

Enable next-gen AVIF format (even better compression):

```tsx
<picture>
  <source srcSet="/images/hero.avif" type="image/avif" />
  <source srcSet="/images/hero.webp" type="image/webp" />
  <img src="/images/hero.png" alt="Hero" />
</picture>
```

### 3. Blur Placeholder

Add blur placeholder for better perceived performance:

```tsx
<Image
  src="/images/hero.png"
  alt="Hero"
  placeholder="blur"
  blurDataURL="data:image/jpeg;base64,..." // Generated blur data
  width={1200}
  height={630}
/>
```

### 4. Automatic Compression Workflow

Add to package.json:

```json
{
  "scripts": {
    "optimize-images": "node scripts/compress-images.js",
    "prebuild": "npm run optimize-images"
  }
}
```

## Resources

### Tools
- [TinyPNG](https://tinypng.com/) - Online compression
- [Squoosh](https://squoosh.app/) - Image optimizer
- [ImageOptim](https://imageoptim.com/) - Mac desktop app
- [Sharp](https://sharp.pixelplumbing.com/) - Node.js image processing

### Testing
- [PageSpeed Insights](https://pagespeed.web.dev/)
- [WebPageTest](https://www.webpagetest.org/)
- [Lighthouse](https://developers.google.com/web/tools/lighthouse)

### Documentation
- [Next.js Image Optimization](https://nextjs.org/docs/basic-features/image-optimization)
- [Web.dev Image Guide](https://web.dev/fast/#optimize-your-images)
- [WebP Documentation](https://developers.google.com/speed/webp)

## Maintenance Schedule

### Weekly
- [ ] Review new images added
- [ ] Run compression script if needed
- [ ] Check PageSpeed scores

### Monthly
- [ ] Full Lighthouse audit
- [ ] Review Core Web Vitals
- [ ] Clean up unused images
- [ ] Update compression settings if needed

### Quarterly
- [ ] Evaluate new image formats (AVIF, etc.)
- [ ] Review CDN performance
- [ ] Optimize image loading strategy
- [ ] Update documentation

---

**Last Updated:** December 20, 2024
**Maintained by:** The Wizard of AI Team
