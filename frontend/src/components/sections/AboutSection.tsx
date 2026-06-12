import { ArrowRight, Shield, Clock, Handshake, Globe } from 'lucide-react'
import { SectionHeader } from '../ui/SectionHeader'
import { company } from '../../data/company'

const iconMap: Record<string, React.ReactNode> = {
  'shield-check': <Shield size={20} />,
  clock: <Clock size={20} />,
  handshake: <Handshake size={20} />,
  globe: <Globe size={20} />,
}

export function AboutSection() {
  return (
    <section id="about" className="py-20 lg:py-28 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 items-center">
          {/* Image side */}
          <div className="relative">
            <div className="relative rounded-2xl overflow-hidden bg-slate-100 aspect-4/3">
              <img
                src="/images/chukwudi.jpg"
                alt="Ububa Technology team"
                className="w-full h-full object-cover"
              />
            </div>
            {/* Floating badge */}
            <div className="absolute -bottom-6 -right-4 bg-white rounded-xl shadow-lg p-4 flex items-center gap-3 border border-slate-100">
              <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                <Globe size={22} className="text-primary" />
              </div>
              <div>
                <p className="font-bold text-slate-900 text-sm">Global Clients</p>
                <p className="text-slate-500 text-xs">Nigeria · Canada</p>
              </div>
            </div>
          </div>

          {/* Content side */}
          <div>
            <SectionHeader
              eyebrow="About Ububa"
              title="Africa's Enterprise Software Partner"
              subtitle={company.longDescription}
            />

            {/* Values grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
              {company.values.map((v) => (
                <div key={v.title} className="flex gap-3">
                  <div className="w-10 h-10 rounded-lg bg-primary/10 text-primary flex items-center justify-center shrink-0 mt-0.5">
                    {iconMap[v.icon] ?? <Shield size={20} />}
                  </div>
                  <div>
                    <h4 className="font-bold text-slate-900 text-sm mb-1">{v.title}</h4>
                    <p className="text-slate-500 text-sm leading-relaxed">{v.description}</p>
                  </div>
                </div>
              ))}
            </div>

            <a href="/about" className="btn-primary">
              Our Full Story <ArrowRight size={17} />
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
