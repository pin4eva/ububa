import {
  Monitor, Smartphone, Building2, PenTool, ShoppingCart,
  GraduationCap, TrendingUp, Layers, ArrowRight,
} from 'lucide-react'
import { SectionHeader } from '../ui/SectionHeader'
import { services } from '../../data/services'

const iconMap: Record<string, React.ReactNode> = {
  monitor: <Monitor size={24} />,
  smartphone: <Smartphone size={24} />,
  'building-2': <Building2 size={24} />,
  'pen-tool': <PenTool size={24} />,
  'shopping-cart': <ShoppingCart size={24} />,
  'graduation-cap': <GraduationCap size={24} />,
  'trending-up': <TrendingUp size={24} />,
  layers: <Layers size={24} />,
}

const colorMap: Record<string, string> = {
  blue: 'bg-blue-50 text-blue-700',
  teal: 'bg-teal-50 text-teal-700',
  navy: 'bg-blue-100 text-blue-900',
  purple: 'bg-purple-50 text-purple-700',
  green: 'bg-green-50 text-green-700',
  orange: 'bg-orange-50 text-orange-700',
  rose: 'bg-rose-50 text-rose-700',
  amber: 'bg-amber-50 text-amber-700',
}

export function ServicesSection() {
  return (
    <section id="services" className="py-20 lg:py-28 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          eyebrow="What We Do"
          title="Services Built for Enterprise Demands"
          subtitle="From custom software to brand design, we cover the full technology stack your business needs to compete globally."
          centered
        />

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {services.map((service) => (
            <div key={service.id} className="card group cursor-pointer">
              <div className={`w-12 h-12 rounded-xl flex items-center justify-center mb-4 ${colorMap[service.color] ?? 'bg-slate-100 text-slate-700'}`}>
                {iconMap[service.icon] ?? <Monitor size={24} />}
              </div>
              <h3 className="font-bold text-slate-900 text-base mb-2">{service.title}</h3>
              <p className="text-slate-500 text-sm leading-relaxed mb-4">{service.description}</p>
              <ul className="space-y-1">
                {service.features.slice(0, 3).map((f) => (
                  <li key={f} className="text-xs text-slate-400 flex items-center gap-1.5">
                    <span className="w-1 h-1 rounded-full bg-accent shrink-0" />
                    {f}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <a href="/contact" className="btn-primary">
            Discuss Your Project <ArrowRight size={17} />
          </a>
        </div>
      </div>
    </section>
  )
}
