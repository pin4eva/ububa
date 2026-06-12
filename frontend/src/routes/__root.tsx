import { HeadContent, Scripts, createRootRoute } from '@tanstack/react-router'
import { TanStackRouterDevtoolsPanel } from '@tanstack/react-router-devtools'
import { TanStackDevtools } from '@tanstack/react-devtools'

import appCss from '../styles.css?url'

const BASE_URL = 'https://ububa.org'

// Organization schema — used by Google Knowledge Panel
const organizationSchema = {
  '@context': 'https://schema.org',
  '@type': 'Organization',
  '@id': `${BASE_URL}/#organization`,
  name: 'Ububa Technology Limited',
  legalName: 'Ububa Technology LTD',
  url: BASE_URL,
  logo: {
    '@type': 'ImageObject',
    url: `${BASE_URL}/full-logo.png`,
    width: 400,
    height: 80,
  },
  description:
    'Ububa Technology Limited is a leading software development and tech training company in Nigeria. We build enterprise-grade web apps, mobile apps, and custom software for universities, enterprises, and growing businesses across Nigeria and Canada.',
  foundingDate: '2014',
  numberOfEmployees: { '@type': 'QuantitativeValue', minValue: 10, maxValue: 20 },
  address: {
    '@type': 'PostalAddress',
    streetAddress: 'Victoria Plaza, off East/West Road, Rumuodara',
    addressLocality: 'Port Harcourt',
    addressRegion: 'Rivers State',
    postalCode: '5001002',
    addressCountry: 'NG',
  },
  contactPoint: [
    {
      '@type': 'ContactPoint',
      telephone: '+234-809-977-7733',
      contactType: 'customer service',
      email: 'mail@ububa.org',
      availableLanguage: 'English',
      areaServed: ['NG', 'CA', 'GB'],
    },
    {
      '@type': 'ContactPoint',
      telephone: '+234-809-977-7733',
      contactType: 'sales',
      email: 'mail@ububa.org',
    },
  ],
  sameAs: [
    'https://twitter.com/ububa_tech',
    'https://facebook.com/ububa.tech',
    'https://linkedin.com/company/ububa',
    'https://instagram.com/ububa.tech',
  ],
  areaServed: [
    { '@type': 'Country', name: 'Nigeria' },
    { '@type': 'Country', name: 'Canada' },
    { '@type': 'Country', name: 'United Kingdom' },
    { '@type': 'Country', name: 'United State' },
  ],
  knowsAbout: [
    'Software Development',
    'Web Development',
    'Mobile App Development',
    'Enterprise Software',
    'UI/UX Design',
    'Data Analytics',
    'Tech Training',
    'E-Commerce Development',
  ],
}

// WebSite schema — enables Google Sitelinks Search Box
const websiteSchema = {
  '@context': 'https://schema.org',
  '@type': 'WebSite',
  '@id': `${BASE_URL}/#website`,
  url: BASE_URL,
  name: 'Ububa Technology Limited',
  description: 'Enterprise Software Development & Tech Training — Nigeria & Canada',
  publisher: { '@id': `${BASE_URL}/#organization` },
  potentialAction: {
    '@type': 'SearchAction',
    target: { '@type': 'EntryPoint', urlTemplate: `${BASE_URL}/?q={search_term_string}` },
    'query-input': 'required name=search_term_string',
  },
}

export const Route = createRootRoute({
  head: () => ({
    meta: [
      { charSet: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { title: 'Ububa Technology Limited | Software Development Company Nigeria' },
      {
        name: 'description',
        content:
          'Ububa Technology Limited — top software development company in Nigeria. We build enterprise web apps, mobile apps, and custom software. Based in Port Harcourt, serving clients in Nigeria and Canada since 2014.',
      },
      {
        name: 'keywords',
        content:
          'software development company Nigeria, web development Nigeria, mobile app development Nigeria, software company Port Harcourt, enterprise software Nigeria, tech company Nigeria',
      },
      { name: 'theme-color', content: '#1e3a8a' },
      { name: 'robots', content: 'index, follow' },
      { name: 'author', content: 'Ububa Technology Limited' },
      { property: 'og:type', content: 'website' },
      { property: 'og:url', content: BASE_URL },
      { property: 'og:site_name', content: 'Ububa Technology Limited' },
      { property: 'og:locale', content: 'en_NG' },
      { property: 'og:image', content: `${BASE_URL}/images/og-image.png` },
      { name: 'twitter:card', content: 'summary_large_image' },
      { name: 'twitter:site', content: '@ububa_tech' },
      { name: 'twitter:creator', content: '@ububa_tech' },
    ],
    links: [
      { rel: 'stylesheet', href: appCss },
      { rel: 'preconnect', href: 'https://fonts.googleapis.com' },
      { rel: 'preconnect', href: 'https://fonts.gstatic.com', crossOrigin: 'anonymous' },
      {
        rel: 'stylesheet',
        href: 'https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800;900&display=swap',
      },
      { rel: 'icon', href: '/favicon.ico' },
      { rel: 'icon', type: 'image/png', sizes: '32x32', href: '/favicon-32x32.png' },
      { rel: 'icon', type: 'image/png', sizes: '16x16', href: '/favicon-16x16.png' },
      { rel: 'apple-touch-icon', href: '/apple-touch-icon.png' },
      { rel: 'manifest', href: '/site.webmanifest' },
    ],
    scripts: [
      { type: 'application/ld+json', children: JSON.stringify(organizationSchema) },
      { type: 'application/ld+json', children: JSON.stringify(websiteSchema) },
    ],
  }),
  shellComponent: RootDocument,
})

function RootDocument({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en-NG">
      <head>
        <HeadContent />
      </head>
      <body>
        {children}
        <TanStackDevtools
          config={{ position: 'bottom-right' }}
          plugins={[{ name: 'Tanstack Router', render: <TanStackRouterDevtoolsPanel /> }]}
        />
        <Scripts />
      </body>
    </html>
  )
}
