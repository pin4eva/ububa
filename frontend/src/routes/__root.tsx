import { HeadContent, Scripts, createRootRoute } from '@tanstack/react-router'
import { TanStackRouterDevtoolsPanel } from '@tanstack/react-router-devtools'
import { TanStackDevtools } from '@tanstack/react-devtools'

import appCss from '../styles.css?url'

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Organization',
  name: 'Ububa Technology Limited',
  url: 'https://ububa.org',
  logo: 'https://ububa.org/images/Logo.svg',
  description:
    'Ububa Technology Limited builds enterprise software for universities, healthcare, agriculture, and commerce. Serving clients in Nigeria and Canada for over 10 years.',
  address: {
    '@type': 'PostalAddress',
    streetAddress: 'Victoria Plaza, off East/West Road, Rumuodara',
    addressLocality: 'Port Harcourt',
    addressRegion: 'Rivers State',
    addressCountry: 'NG',
  },
  contactPoint: {
    '@type': 'ContactPoint',
    telephone: '+234-809-977-7733',
    contactType: 'customer service',
    email: 'mail@ububa.org',
  },
  sameAs: [
    'https://twitter.com/ububa_tech',
    'https://facebook.com/ububa.org',
    'https://linkedin.com/company/ububa-technology',
  ],
  foundingDate: '2014',
  numberOfEmployees: { '@type': 'QuantitativeValue', value: 15 },
  areaServed: ['Nigeria', 'Canada', 'United Kingdom'],
}

export const Route = createRootRoute({
  head: () => ({
    meta: [
      { charSet: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { title: 'Ububa Technology Limited | Enterprise Software & Training' },
      {
        name: 'description',
        content:
          'Ububa Technology Limited builds enterprise software for universities, healthcare, agriculture, and commerce. Serving clients in Nigeria and Canada for over 10 years.',
      },
      { name: 'theme-color', content: '#1e3a8a' },
      { property: 'og:type', content: 'website' },
      { property: 'og:url', content: 'https://ububa.org' },
      { property: 'og:title', content: 'Ububa Technology Limited | Enterprise Software & Training' },
      {
        property: 'og:description',
        content:
          'Africa\'s enterprise software partner — 10+ years delivering mission-critical applications for universities, healthcare, agriculture, and commerce across Nigeria and Canada.',
      },
      { property: 'og:image', content: 'https://ububa.org/images/og-image.png' },
      { name: 'twitter:card', content: 'summary_large_image' },
      { name: 'twitter:site', content: '@ububa_tech' },
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
      { rel: 'apple-touch-icon', href: '/apple-touch-icon.png' },
    ],
    scripts: [
      {
        type: 'application/ld+json',
        children: JSON.stringify(jsonLd),
      },
    ],
  }),
  shellComponent: RootDocument,
})

function RootDocument({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
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
