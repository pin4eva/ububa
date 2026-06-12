import { Quote } from 'lucide-react'
import { SectionHeader } from '../ui/SectionHeader'
import { testimonials } from '../../data/testimonials'

const flagMap: Record<string, string> = {
  Nigeria: '🇳🇬',
  Canada: '🇨🇦',
}

export function TestimonialsSection() {
  return (
    <section id="testimonials" className="py-20 lg:py-28 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          eyebrow="Client Voices"
          title="Don't Take Our Word for It"
          subtitle="Real feedback from the clients who trusted us with their most important systems."
          centered
        />

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {testimonials.map((t) => (
            <div key={t.id} className="card flex flex-col">
              <Quote size={28} className="text-primary/20 mb-4 shrink-0" />
              <p className="text-slate-600 text-sm leading-relaxed flex-1 mb-6 italic">"{t.quote}"</p>
              <div className="flex items-center gap-3 pt-4 border-t border-slate-100">
                <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center text-primary font-bold text-sm shrink-0">
                  {t.name.charAt(0)}
                </div>
                <div>
                  <p className="font-bold text-slate-900 text-sm">{t.name}</p>
                  <p className="text-slate-500 text-xs">{t.role}, {t.organisation}</p>
                  <p className="text-slate-400 text-xs">
                    {flagMap[t.country] ?? '🌍'} {t.country}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
