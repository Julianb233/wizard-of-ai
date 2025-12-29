// Schema.org Markup Generator for SEO Optimization

export interface BlogPostSchemaProps {
  title: string
  description: string
  content: string
  author: string
  datePublished: string
  dateModified?: string
  image?: string
  url: string
  wordCount?: number
}

export interface FAQSchemaProps {
  question: string
  answer: string
}

export interface ServiceSchemaProps {
  name: string
  description: string
  price?: string
  currency?: string
  url: string
  image?: string
}

/**
 * Generate Article/BlogPosting Schema.org structured data
 * Helps with featured snippets and SERP rich results
 */
export function generateBlogPostSchema(props: BlogPostSchemaProps) {
  return {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    "headline": props.title,
    "description": props.description,
    "image": props.image || "https://v0-the-wizard-of-ai.vercel.app/images/og-wizard-of-ai.webp",
    "datePublished": props.datePublished,
    "dateModified": props.dateModified || props.datePublished,
    "author": {
      "@type": "Person",
      "name": props.author,
      "url": "https://v0-the-wizard-of-ai.vercel.app"
    },
    "publisher": {
      "@type": "Organization",
      "name": "The Wizard of AI",
      "logo": {
        "@type": "ImageObject",
        "url": "https://v0-the-wizard-of-ai.vercel.app/images/og-wizard-of-ai.webp"
      }
    },
    "mainEntityOfPage": {
      "@type": "WebPage",
      "@id": props.url
    },
    "articleBody": props.content,
    "wordCount": props.wordCount || 0,
    "isAccessibleForFree": true,
    "isPartOf": {
      "@type": "Blog",
      "name": "The Wizard of AI Blog"
    }
  }
}

/**
 * Generate FAQ Schema for featured snippet optimization
 * Improves chances of appearing in position zero
 */
export function generateFAQSchema(faqs: FAQSchemaProps[]) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": faqs.map(faq => ({
      "@type": "Question",
      "name": faq.question,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": faq.answer
      }
    }))
  }
}

/**
 * Generate Service Schema for service pages
 * Helps with local/service search results
 */
export function generateServiceSchema(props: ServiceSchemaProps) {
  return {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": props.name,
    "description": props.description,
    "url": props.url,
    "image": props.image,
    "provider": {
      "@type": "Person",
      "name": "Julian Bradley",
      "url": "https://v0-the-wizard-of-ai.vercel.app"
    },
    "areaServed": "Worldwide",
    "hasOfferCatalog": {
      "@type": "OfferCatalog",
      "name": "AI Consulting & Automation Services",
      "itemListElement": [
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": props.name
          }
        }
      ]
    },
    ...(props.price && props.currency && {
      "offers": {
        "@type": "Offer",
        "price": props.price,
        "priceCurrency": props.currency,
        "availability": "https://schema.org/InStock"
      }
    })
  }
}

/**
 * Generate Breadcrumb Schema for navigation
 * Improves SERP appearance and click-through
 */
export function generateBreadcrumbSchema(items: { name: string; url: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": items.map((item, index) => ({
      "@type": "ListItem",
      "position": index + 1,
      "name": item.name,
      "item": item.url
    }))
  }
}

/**
 * Generate Organization Schema for homepage/global
 * Establishes brand authority and contact info
 */
export function generateOrganizationSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "The Wizard of AI",
    "description": "AI consulting and business automation solutions helping businesses transform operations, automate workflows, and scale with AI agents.",
    "url": "https://v0-the-wizard-of-ai.vercel.app",
    "logo": "https://v0-the-wizard-of-ai.vercel.app/images/og-wizard-of-ai.png",
    "image": "https://v0-the-wizard-of-ai.vercel.app/images/og-wizard-of-ai.png",
    "contactPoint": {
      "@type": "ContactPoint",
      "contactType": "Sales",
      "email": "julian@aiacrobatics.com",
      "availableLanguage": ["en"]
    },
    "sameAs": [
      "https://www.linkedin.com/in/julian-bradley",
      "https://twitter.com/wizardofai"
    ],
    "founder": {
      "@type": "Person",
      "name": "Julian Bradley"
    },
    "foundingDate": "2024"
  }
}

/**
 * Generate Person Schema for author pages
 * Builds author authority for E-A-T signals
 */
export function generatePersonSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "Person",
    "name": "Julian Bradley",
    "jobTitle": "AI Consultant & Business Automation Expert",
    "description": "Expert in AI consulting, business automation, and custom AI agent implementation. Helps businesses scale operations without increasing headcount.",
    "url": "https://v0-the-wizard-of-ai.vercel.app",
    "email": "julian@aiacrobatics.com",
    "sameAs": [
      "https://www.linkedin.com/in/julian-bradley",
      "https://twitter.com/wizardofai"
    ],
    "knowsAbout": [
      "AI Consulting",
      "Business Automation",
      "AI Agents",
      "Workflow Automation",
      "AI Implementation",
      "Process Optimization",
      "BottleneckBots",
      "Exactech AI"
    ]
  }
}

/**
 * Generate Product/Service Review Schema
 * For case study and testimonial optimization
 */
export function generateReviewSchema(props: {
  itemName: string
  author: string
  description: string
  ratingValue: number
  bestRating?: number
  worstRating?: number
}) {
  return {
    "@context": "https://schema.org",
    "@type": "Review",
    "reviewRating": {
      "@type": "Rating",
      "ratingValue": props.ratingValue,
      "bestRating": props.bestRating || 5,
      "worstRating": props.worstRating || 1
    },
    "reviewBody": props.description,
    "author": {
      "@type": "Person",
      "name": props.author
    },
    "itemReviewed": {
      "@type": "Service",
      "name": props.itemName
    }
  }
}

/**
 * Generate Video Object Schema for video content
 * Improves video SERP appearance and click-through
 */
export function generateVideoSchema(props: {
  title: string
  description: string
  thumbnailUrl: string
  uploadDate: string
  duration: string
  url: string
}) {
  return {
    "@context": "https://schema.org",
    "@type": "VideoObject",
    "name": props.title,
    "description": props.description,
    "thumbnailUrl": props.thumbnailUrl,
    "uploadDate": props.uploadDate,
    "duration": props.duration,
    "url": props.url,
    "author": {
      "@type": "Person",
      "name": "Julian Bradley"
    }
  }
}

/**
 * Generate Event Schema for webinars/masterclasses
 * Increases visibility in event search results
 */
export function generateEventSchema(props: {
  name: string
  description: string
  startDate: string
  endDate: string
  eventUrl: string
  image?: string
  location?: string
  price?: string
}) {
  return {
    "@context": "https://schema.org",
    "@type": "Event",
    "name": props.name,
    "description": props.description,
    "image": props.image || "https://v0-the-wizard-of-ai.vercel.app/images/og-wizard-of-ai.webp",
    "startDate": props.startDate,
    "endDate": props.endDate,
    "url": props.eventUrl,
    "organizer": {
      "@type": "Person",
      "name": "Julian Bradley",
      "url": "https://v0-the-wizard-of-ai.vercel.app"
    },
    ...(props.location && {
      "location": {
        "@type": "VirtualLocation",
        "url": props.eventUrl
      }
    }),
    ...(props.price && {
      "offers": {
        "@type": "Offer",
        "price": props.price,
        "priceCurrency": "USD",
        "url": props.eventUrl,
        "availability": "https://schema.org/PreOrder"
      }
    })
  }
}
