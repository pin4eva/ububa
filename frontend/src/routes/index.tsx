import { createFileRoute } from '@tanstack/react-router'
import { RootLayout } from '../components/layout/RootLayout'
import { HeroSection } from '../components/sections/HeroSection'
import { ClientsSection } from '../components/sections/ClientsSection'
import { AboutSection } from '../components/sections/AboutSection'
import { ServicesSection } from '../components/sections/ServicesSection'
import { PortfolioSection } from '../components/sections/PortfolioSection'
import { TrainingSection } from '../components/sections/TrainingSection'
import { TestimonialsSection } from '../components/sections/TestimonialsSection'
import { CTASection } from '../components/sections/CTASection'
import { ContactSection } from '../components/sections/ContactSection'
import { buildHead } from '../lib/seo'

const homeJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'ProfessionalService',
  '@id': 'https://ububa.org/#service',
  name: 'Ububa Technology Limited',
  url: 'https://ububa.org',
  telephone: '+234-809-977-7733',
  email: 'mail@ububa.org',
  image: 'https://ububa.org/full-logo.png',
  priceRange: '$$',
  currenciesAccepted: 'NGN, CAD, USD, GBP',
  address: {
    '@type': 'PostalAddress',
    streetAddress: 'Victoria Plaza, off East/West Road, Rumuodara',
    addressLocality: 'Port Harcourt',
    addressRegion: 'Rivers State',
    addressCountry: 'NG',
  },
  geo: {
    '@type': 'GeoCoordinates',
    latitude: 4.8156,
    longitude: 7.0498,
  },
  openingHours: 'Mo-Fr 08:00-18:00',
  hasMap: 'https://maps.google.com/?q=Port+Harcourt+Nigeria',
  serviceType: [
    'Web Development',
    'Mobile App Development',
    'Enterprise Software',
    'UI/UX Design',
    'Data Analytics',
    'Tech Training',
    'E-Commerce Development',
    'Brand Identity Design',
  ],
  areaServed: ['Nigeria', 'Canada', 'United Kingdom', 'United States'],
  aggregateRating: {
    '@type': 'AggregateRating',
    ratingValue: '4.9',
    reviewCount: '47',
  },
}

export const Route = createFileRoute('/')({
  head: () =>
    buildHead({
      title: 'Ububa Technology Limited | #1 Software Development Company in Nigeria',
      description:
        'Ububa Technology Limited — Nigeria\'s leading software development company. We build enterprise web apps, mobile apps & custom software. 10+ years · Port Harcourt · Trusted in Nigeria & Canada.',
      path: '/',
      keywords:
        'software development company Nigeria, web development Nigeria, mobile app development Nigeria, software company Port Harcourt, enterprise software Nigeria, hire software developers Nigeria, custom software development Nigeria, tech company Nigeria, software development Rivers State, web development company Port Harcourt, app development Nigeria, software developers Nigeria',
      jsonLd: homeJsonLd,
    }),
  component: Home,
})

function Home() {
  return (
    <RootLayout>
      <HeroSection />
      <ClientsSection />
      <AboutSection />
      <ServicesSection />
      <PortfolioSection />
      <TrainingSection />
      <TestimonialsSection />
      <CTASection />
      <ContactSection />
    </RootLayout>
  )
}
