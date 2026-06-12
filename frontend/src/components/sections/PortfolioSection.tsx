import { ArrowRight, MapPin } from 'lucide-react'
import { SectionHeader } from '../ui/SectionHeader'
import { Badge } from '../ui/Badge'
import { projects } from '../../data/projects'

const flagMap: Record<string, string> = {
  NG: '🇳🇬',
  CA: '🇨🇦',
}

export function PortfolioSection() {
  return (
    <section id="portfolio" className="py-20 lg:py-28 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          eyebrow="Our Work"
          title="Projects That Prove Our Capability"
          subtitle="We don't do small talk. Here's what we've actually built — for real clients, with measurable outcomes."
          centered
        />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-7">
          {projects.map((project) => (
            <div key={project.id} className="card group overflow-hidden p-0">
              {/* Image */}
              <div className="relative h-48 bg-linear-to-br from-primary to-teal overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover opacity-60 group-hover:opacity-80 transition-opacity"
                  onError={(e) => { e.currentTarget.style.display = 'none' }}
                />
                <div className="absolute inset-0 flex items-end p-5">
                  <div className="flex items-center gap-2">
                    <span className="text-xl">{flagMap[project.countryCode] ?? '🌍'}</span>
                    <div>
                      <p className="text-white font-bold text-sm">{project.client}</p>
                      <p className="text-white/70 text-xs flex items-center gap-1">
                        <MapPin size={11} /> {project.country} · {project.year}
                      </p>
                    </div>
                  </div>
                </div>
                <div className="absolute top-4 right-4">
                  <Badge color="orange">{project.category}</Badge>
                </div>
              </div>

              {/* Content */}
              <div className="p-6">
                <h3 className="font-bold text-slate-900 text-lg mb-2">{project.title}</h3>
                <p className="text-slate-500 text-sm leading-relaxed mb-4">{project.description}</p>

                {/* Outcomes */}
                <ul className="space-y-1.5 mb-4">
                  {project.outcomes.slice(0, 3).map((o) => (
                    <li key={o} className="flex items-start gap-2 text-sm">
                      <span className="text-teal mt-0.5">✓</span>
                      <span className="text-slate-600">{o}</span>
                    </li>
                  ))}
                </ul>

                {/* Tech tags */}
                <div className="flex flex-wrap gap-1.5">
                  {project.tech.map((t) => (
                    <span key={t} className="text-xs bg-slate-100 text-slate-600 px-2.5 py-1 rounded-full">
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <a href="/portfolio" className="btn-outline">
            View All Case Studies <ArrowRight size={17} />
          </a>
        </div>
      </div>
    </section>
  )
}
