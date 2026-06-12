const BASE_URL = 'https://ububa.org'
const OG_IMAGE = `${BASE_URL}/images/og-image.png`
const TWITTER_HANDLE = '@ububa_tech'

export function buildHead({
  title,
  description,
  path,
  keywords,
  ogImage = OG_IMAGE,
  jsonLd,
}: {
  title: string
  description: string
  path: string
  keywords: string
  ogImage?: string
  jsonLd?: object | object[]
}) {
  const url = `${BASE_URL}${path}`

  const scripts = jsonLd
    ? (Array.isArray(jsonLd) ? jsonLd : [jsonLd]).map((ld) => ({
        type: 'application/ld+json' as const,
        children: JSON.stringify(ld),
      }))
    : []

  return {
    meta: [
      { title },
      { name: 'description', content: description },
      { name: 'keywords', content: keywords },
      { name: 'robots', content: 'index, follow' },
      { name: 'author', content: 'Ububa Technology Limited' },
      { property: 'og:title', content: title },
      { property: 'og:description', content: description },
      { property: 'og:url', content: url },
      { property: 'og:image', content: ogImage },
      { property: 'og:type', content: 'website' },
      { property: 'og:locale', content: 'en_NG' },
      { property: 'og:site_name', content: 'Ububa Technology Limited' },
      { name: 'twitter:card', content: 'summary_large_image' },
      { name: 'twitter:title', content: title },
      { name: 'twitter:description', content: description },
      { name: 'twitter:image', content: ogImage },
      { name: 'twitter:site', content: TWITTER_HANDLE },
    ],
    links: [{ rel: 'canonical', href: url }],
    scripts,
  }
}
