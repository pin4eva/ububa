import { createFileRoute } from '@tanstack/react-router';
import { CheckCircle, MapPin } from 'lucide-react';
import { RootLayout } from '../components/layout/RootLayout';
import { CTASection } from '../components/sections/CTASection';
import { Badge } from '../components/ui/Badge';
import { projects } from '../data/projects';
import { buildHead } from '../lib/seo';

const portfolioJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'ItemList',
  name: 'Ububa Technology Portfolio — Software Development Projects Nigeria',
  description: 'Enterprise software projects delivered by Ububa Technology Limited for clients in Nigeria and Canada.',
  url: 'https://ububa.org/portfolio',
  numberOfItems: projects.length,
  itemListElement: projects.map((p, i) => ({
    '@type': 'ListItem',
    position: i + 1,
    item: {
      '@type': 'SoftwareApplication',
      name: p.title,
      description: p.description,
      applicationCategory: p.category,
      operatingSystem: 'Web',
      offers: { '@type': 'Offer', price: '0', priceCurrency: 'NGN' },
      author: { '@type': 'Organization', name: 'Ububa Technology Limited' },
    },
  })),
}

export const Route = createFileRoute('/portfolio')({
  head: () =>
    buildHead({
      title: 'Portfolio | Software Development Projects — Ububa Technology Nigeria',
      description:
        'Real enterprise software built by Ububa Technology Limited. Case studies: University of Port Harcourt student portal, Touchstone Institute Canada platform, Climax IMS, Kemcolfarms agro e-commerce.',
      path: '/portfolio',
      keywords:
        'software projects Nigeria, enterprise software case studies, university management system Nigeria, inventory management software Nigeria, agro ecommerce Nigeria, web app development Nigeria, student portal Nigeria, software development portfolio Nigeria',
      jsonLd: portfolioJsonLd,
    }),
  component: PortfolioPage,
})

const flagMap: Record<string, string> = {
  NG: '🇳🇬',
  CA: '🇨🇦',
}

const badgeColor: Record<string, 'blue' | 'teal' | 'green' | 'orange'> = {
  'Enterprise Software': 'blue',
  'Web Application': 'teal',
  'E-Commerce': 'green',
}

function PortfolioPage() {
  return (
    <RootLayout>
      {/* Hero */}
      <section className="bg-primary pt-32 pb-20 relative overflow-hidden">
        <div className="absolute inset-0 opacity-5" style={{ backgroundImage: 'radial-gradient(circle at 70% 50%, white 1px, transparent 1px)', backgroundSize: '40px 40px' }} />
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative">
          <span className="section-eyebrow text-white/60">Our Work</span>
          <h1 className="text-4xl sm:text-5xl font-black text-white mt-2 mb-6 leading-tight">
            Projects That Prove<br />Our Capability
          </h1>
          <p className="text-xl text-white/80 leading-relaxed max-w-2xl mx-auto">
            We don't do small talk. Here's what we've built — for real institutions, with outcomes that matter.
          </p>
        </div>
      </section>

      {/* Projects */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-16">
            {projects.map((project, i) => (
              <div key={project.id} className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-center ${i % 2 === 1 ? 'lg:flex-row-reverse' : ''}`}>
                {/* Image */}
                <div className={i % 2 === 1 ? 'lg:order-2' : ''}>
                  <div className="relative rounded-2xl overflow-hidden aspect-4/3 bg-linear-to-br from-primary to-teal">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover opacity-70"
                      onError={(e) => { e.currentTarget.style.display = 'none' }}
                    />
                    <div className="absolute bottom-4 left-4 flex items-center gap-2 bg-white/90 backdrop-blur-sm rounded-xl px-3 py-2">
                      <span className="text-xl">{flagMap[project.countryCode] ?? '🌍'}</span>
                      <div>
                        <p className="font-bold text-slate-900 text-xs">{project.client}</p>
                        <p className="text-slate-500 text-xs flex items-center gap-1"><MapPin size={10} /> {project.country}</p>
                      </div>
                    </div>
                    <div className="absolute top-4 right-4">
                      <Badge color={badgeColor[project.category] ?? 'gray'}>{project.category}</Badge>
                    </div>
                  </div>
                </div>

                {/* Content */}
                <div className={i % 2 === 1 ? 'lg:order-1' : ''}>
                  <div className="flex items-center gap-2 mb-3">
                    <span className="text-xs font-bold uppercase tracking-widest text-accent">{project.year}</span>
                    <span className="text-slate-300">·</span>
                    <span className="text-xs font-bold uppercase tracking-widest text-slate-400">{project.category}</span>
                  </div>
                  <h2 className="text-2xl sm:text-3xl font-black text-slate-900 mb-2">{project.title}</h2>
                  <p className="text-accent font-semibold text-sm mb-4">{project.client} — {project.country}</p>
                  <p className="text-slate-600 leading-relaxed mb-6">{project.description}</p>

                  <div className="mb-6">
                    <p className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-3">Key Outcomes</p>
                    <ul className="space-y-2">
                      {project.outcomes.map((o) => (
                        <li key={o} className="flex items-start gap-2.5">
                          <CheckCircle size={16} className="text-teal mt-0.5 shrink-0" />
                          <span className="text-slate-700 text-sm">{o}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div>
                    <p className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-2">Technologies</p>
                    <div className="flex flex-wrap gap-2">
                      {project.tech.map((t) => (
                        <span key={t} className="text-xs bg-slate-100 text-slate-600 px-3 py-1.5 rounded-full font-medium">
                          {t}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CTASection />
    </RootLayout>
  )
}
