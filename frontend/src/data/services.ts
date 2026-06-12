export interface Service {
  id: string
  title: string
  description: string
  longDescription: string
  icon: string
  color: string
  features: string[]
}

export const services: Service[] = [
  {
    id: 'web-development',
    title: 'Web Development',
    description: 'Scalable, high-performance web applications built with modern frameworks for enterprises and growing businesses.',
    longDescription:
      'From customer portals to complex internal dashboards, we build web applications that handle real load. Our stack choices are opinionated and production-proven: React, Next.js, Node.js, and PostgreSQL or MongoDB depending on your use case.',
    icon: 'monitor',
    color: 'blue',
    features: ['Progressive Web Apps', 'RESTful & GraphQL APIs', 'Admin dashboards', 'Multi-tenant architectures'],
  },
  {
    id: 'mobile-development',
    title: 'Mobile App Development',
    description: 'Cross-platform iOS and Android applications that feel native, perform fast, and scale with your user base.',
    longDescription:
      'We build mobile applications using React Native and Flutter, delivering a single codebase that performs on both iOS and Android. From fintech to logistics, our apps are built for real-world conditions including poor connectivity.',
    icon: 'smartphone',
    color: 'teal',
    features: ['React Native & Flutter', 'Offline-first design', 'Push notifications', 'App Store deployment'],
  },
  {
    id: 'enterprise-software',
    title: 'Enterprise Software',
    description: 'Mission-critical business systems — ERP, inventory management, HR, and custom workflow automation.',
    longDescription:
      'We have delivered enterprise systems for institutions that cannot afford downtime — including federal universities managing tens of thousands of students and international certification bodies. We understand compliance, data integrity, and audit trails.',
    icon: 'building-2',
    color: 'navy',
    features: ['ERP systems', 'Inventory & asset management', 'Workflow automation', 'Multi-role access control'],
  },
  {
    id: 'ui-ux-design',
    title: 'UI/UX Design',
    description: 'User interfaces designed for clarity and conversion — grounded in research, tested with real users.',
    longDescription:
      'Great software starts with great design. Our designers work from user research to high-fidelity Figma prototypes, then hand off to development with full design systems. We design for accessibility and mobile-first.',
    icon: 'pen-tool',
    color: 'purple',
    features: ['User research & wireframes', 'Figma design systems', 'Accessibility (WCAG 2.1)', 'Usability testing'],
  },
  {
    id: 'ecommerce',
    title: 'E-Commerce Solutions',
    description: 'Full-featured online stores with payment integration, inventory sync, and logistics-ready fulfillment flows.',
    longDescription:
      'We have built e-commerce platforms connecting farmers to buyers and retailers to customers across Nigeria. We integrate local and international payment gateways (Paystack, Flutterwave, Stripe), handle inventory management, and support multi-vendor marketplaces.',
    icon: 'shopping-cart',
    color: 'green',
    features: ['Multi-vendor marketplaces', 'Paystack & Stripe integration', 'Inventory management', 'Order fulfillment'],
  },
  {
    id: 'tech-training',
    title: 'Tech Training & Consulting',
    description: 'Cohort bootcamps for individuals and bespoke corporate workshops for teams ready to level up.',
    longDescription:
      'Our training arm runs structured cohort programs in software development, UI/UX design, and digital marketing, as well as tailored corporate training for organizations. We train to employment — our graduates go on to build real products.',
    icon: 'graduation-cap',
    color: 'orange',
    features: ['Cohort bootcamps', 'Corporate workshops', 'Curriculum: Web, Mobile, UI/UX', 'Job-ready graduates'],
  },
  {
    id: 'digital-marketing',
    title: 'Digital Marketing',
    description: 'Data-driven marketing strategy — SEO, paid ads, content, and social media that converts.',
    longDescription:
      'We combine technical SEO expertise with compelling content strategy to drive qualified traffic. From search engine optimization to Google Ads and Meta campaigns, we build marketing systems that compound over time.',
    icon: 'trending-up',
    color: 'rose',
    features: ['Technical SEO', 'Google & Meta Ads', 'Content marketing', 'Analytics & reporting'],
  },
  {
    id: 'brand-identity',
    title: 'Brand Identity Design',
    description: 'Visual identities that communicate trust, authority, and purpose — built to last.',
    longDescription:
      'A strong brand is a business asset. We develop full brand identities: logo, typography, color systems, and brand guidelines. Our work has helped businesses establish authority in competitive markets from Port Harcourt to Toronto.',
    icon: 'layers',
    color: 'amber',
    features: ['Logo & visual identity', 'Brand guidelines', 'Marketing collateral', 'Pitch decks & presentations'],
  },
]
