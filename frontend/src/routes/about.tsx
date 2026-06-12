import { createFileRoute } from '@tanstack/react-router'
import { RootLayout } from '../components/layout/RootLayout'
import { SectionHeader } from '../components/ui/SectionHeader'
import { CTASection } from '../components/sections/CTASection'
import { TestimonialsSection } from '../components/sections/TestimonialsSection'
import { company } from '../data/company'
import { team } from '../data/team'
import { Shield, Clock, Handshake, Globe, Linkedin, Twitter, Github } from 'lucide-react'
import { buildHead } from '../lib/seo'

const aboutJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'AboutPage',
  '@id': 'https://ububa.org/about',
  url: 'https://ububa.org/about',
  name: 'About Ububa Technology Limited',
  description:
    'Ububa Technology Limited is a software development company based in Port Harcourt, Nigeria, founded in 2014. We build enterprise-grade applications for universities, enterprises, and growing businesses across Nigeria and Canada.',
  mainEntity: {
    '@type': 'Organization',
    '@id': 'https://ububa.org/#organization',
    name: 'Ububa Technology Limited',
    foundingDate: '2014',
    foundingLocation: { '@type': 'Place', name: 'Port Harcourt, Nigeria' },
    slogan: 'Enterprise Software. Global Impact.',
    employee: team.map((m) => ({
      '@type': 'Person',
      name: m.name,
      jobTitle: m.role,
    })),
  },
}

export const Route = createFileRoute('/about')({
  head: () =>
    buildHead({
      title: 'About Us | Ububa Technology Limited — Software Company in Nigeria Since 2014',
      description:
        'Ububa Technology Limited is a software development company in Port Harcourt, Nigeria. Founded in 2014, we have delivered 150+ enterprise projects for clients in Nigeria and Canada. Meet our team.',
      path: '/about',
      keywords:
        'Ububa Technology Limited, software company Nigeria, tech company Port Harcourt, software developers Nigeria, enterprise software company Nigeria, IT company Port Harcourt, Nigeria software company, software development company Rivers State',
      jsonLd: aboutJsonLd,
    }),
  component: AboutPage,
})

const iconMap: Record<string, React.ReactNode> = {
  'shield-check': <Shield size={22} />,
  clock: <Clock size={22} />,
  handshake: <Handshake size={22} />,
  globe: <Globe size={22} />,
}

const socialIconMap: Record<string, React.ReactNode> = {
  linkedin: <Linkedin size={15} />,
  twitter: <Twitter size={15} />,
  github: <Github size={15} />,
}

const milestones = [
  { year: '2014', event: 'Ububa Technology Limited founded in Port Harcourt, Nigeria.' },
  { year: '2016', event: 'Delivered first enterprise system for the oil and gas sector.' },
  { year: '2018', event: 'Launched our tech training program — first cohort graduates.' },
  { year: '2019', event: 'Student Management Portal goes live at University of Port Harcourt.' },
  { year: '2021', event: 'First international project: Touchstone Institute, Toronto, Canada.' },
  { year: '2022', event: 'Kemcolfarms agro e-commerce platform serves 200+ farmers.' },
  { year: '2024', event: '150+ projects delivered. Training programme expands to corporate clients.' },
]

function AboutPage() {
  return (
    <RootLayout>
      {/* Hero */}
      <section className="bg-primary pt-32 pb-20 relative overflow-hidden">
        <div className="absolute inset-0 opacity-5" style={{ backgroundImage: 'radial-gradient(circle at 30% 50%, white 1px, transparent 1px)', backgroundSize: '40px 40px' }} />
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative">
          <span className="section-eyebrow text-white/60">Our Story</span>
          <h1 className="text-4xl sm:text-5xl font-black text-white mt-2 mb-6 leading-tight">
            Africa's Enterprise<br />Software Partner
          </h1>
          <p className="text-xl text-white/80 leading-relaxed max-w-2xl mx-auto">
            {company.shortDescription}
          </p>
        </div>
      </section>

      {/* Mission */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <SectionHeader eyebrow="Who We Are" title="Built on One Conviction" centered />
            <p className="text-slate-600 text-lg leading-relaxed">
              {company.longDescription}
            </p>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {company.stats.map((s) => (
              <div key={s.label} className="card text-center p-6">
                <p className="text-4xl font-black text-primary mb-1">{s.value}</p>
                <p className="font-bold text-slate-900 text-sm mb-1">{s.label}</p>
                <p className="text-slate-500 text-xs">{s.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader eyebrow="Our Values" title="How We Work" centered />
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {company.values.map((v) => (
              <div key={v.title} className="card text-center">
                <div className="w-14 h-14 rounded-2xl bg-primary/10 text-primary flex items-center justify-center mx-auto mb-4">
                  {iconMap[v.icon] ?? <Shield size={22} />}
                </div>
                <h3 className="font-bold text-slate-900 mb-2">{v.title}</h3>
                <p className="text-slate-500 text-sm leading-relaxed">{v.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-20 bg-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader eyebrow="Our Journey" title="A Decade of Building" centered />
          <div className="relative">
            <div className="absolute left-6 top-0 bottom-0 w-0.5 bg-slate-200" />
            <div className="space-y-8">
              {milestones.map((m) => (
                <div key={m.year} className="flex gap-5 relative">
                  <div className="w-12 h-12 rounded-full bg-primary flex items-center justify-center text-white font-bold text-sm shrink-0 z-10">
                    {m.year.slice(2)}
                  </div>
                  <div className="card py-4 flex-1">
                    <p className="text-xs font-bold text-accent mb-1">{m.year}</p>
                    <p className="text-slate-700 text-sm">{m.event}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader eyebrow="The Team" title="The People Behind the Code" centered />
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 max-w-4xl mx-auto">
            {team.map((member) => (
              <div key={member.id} className="card text-center">
                <div className="w-20 h-20 rounded-full bg-primary/10 mx-auto mb-4 overflow-hidden">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-full h-full object-cover"
                    onError={(e) => {
                      e.currentTarget.style.display = 'none'
                      e.currentTarget.parentElement!.innerHTML = `<span class="flex items-center justify-center w-full h-full text-primary font-black text-2xl">${member.name.charAt(0)}</span>`
                    }}
                  />
                </div>
                <h3 className="font-bold text-slate-900 text-lg">{member.name}</h3>
                <p className="text-accent font-semibold text-sm mb-2">{member.role}</p>
                <p className="text-slate-500 text-sm leading-relaxed mb-4">{member.bio}</p>
                <div className="flex items-center justify-center gap-2">
                  {Object.entries(member.socials).map(([key, href]) => (
                    href && (
                      <a key={key} href={href} aria-label={key} className="w-8 h-8 rounded-lg bg-slate-100 flex items-center justify-center text-slate-500 hover:text-primary hover:bg-blue-50 transition-colors">
                        {socialIconMap[key] ?? null}
                      </a>
                    )
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <TestimonialsSection />
      <CTASection />
    </RootLayout>
  )
}
