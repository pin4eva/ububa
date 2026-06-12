import { Monitor, Smartphone, PenTool, BarChart2, ArrowRight, Users, Building } from 'lucide-react'
import { SectionHeader } from '../ui/SectionHeader'
import { bootcamp } from '../../data/training'

const iconMap: Record<string, React.ReactNode> = {
  monitor: <Monitor size={22} />,
  smartphone: <Smartphone size={22} />,
  'pen-tool': <PenTool size={22} />,
  'bar-chart': <BarChart2 size={22} />,
}

const colorMap: Record<string, { bg: string; icon: string; border: string }> = {
  blue: { bg: 'bg-blue-50', icon: 'text-blue-700 bg-blue-100', border: 'border-blue-100' },
  teal: { bg: 'bg-teal-50', icon: 'text-teal-700 bg-teal-100', border: 'border-teal-100' },
  purple: { bg: 'bg-purple-50', icon: 'text-purple-700 bg-purple-100', border: 'border-purple-100' },
  green: { bg: 'bg-green-50', icon: 'text-green-700 bg-green-100', border: 'border-green-100' },
}

export function TrainingSection() {
  return (
    <section id="training" className="py-20 lg:py-28 bg-primary">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          eyebrow="Training Programs"
          title="Grow the Next Generation. Upskill Your Team."
          subtitle="We run Nigeria's most hands-on software training programs — cohort bootcamps for individuals and tailored corporate workshops for organisations."
          centered
          light
        />

        {/* Two columns: Bootcamp + Corporate */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-14">
          {/* Bootcamp card */}
          <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-2xl p-7 text-white">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-11 h-11 rounded-xl bg-accent/20 flex items-center justify-center">
                <Users size={22} className="text-accent-light" />
              </div>
              <div>
                <h3 className="font-bold text-lg">Cohort Bootcamps</h3>
                <p className="text-white/60 text-sm">{bootcamp.intakeFrequency} · {bootcamp.format}</p>
              </div>
            </div>
            <p className="text-white/80 text-sm leading-relaxed mb-5">{bootcamp.subheadline}</p>
            <div className="space-y-3 mb-6">
              {bootcamp.tracks.map((track) => (
                <div key={track.id} className="flex items-center gap-3 bg-white/5 rounded-xl px-4 py-3">
                  <div className="w-9 h-9 rounded-lg bg-white/10 flex items-center justify-center">
                    {iconMap[track.icon] ?? <Monitor size={18} />}
                  </div>
                  <div>
                    <p className="font-semibold text-sm">{track.title}</p>
                    <p className="text-white/50 text-xs">{track.duration}</p>
                  </div>
                </div>
              ))}
            </div>
            <a href="/training#bootcamp" className="btn-accent w-full justify-center">
              Explore Bootcamps <ArrowRight size={17} />
            </a>
          </div>

          {/* Corporate card */}
          <div className="bg-white rounded-2xl p-7">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-11 h-11 rounded-xl bg-primary/10 flex items-center justify-center">
                <Building size={22} className="text-primary" />
              </div>
              <div>
                <h3 className="font-bold text-lg text-slate-900">Corporate Training</h3>
                <p className="text-slate-500 text-sm">On-site · Remote · Hybrid</p>
              </div>
            </div>
            <p className="text-slate-600 text-sm leading-relaxed mb-5">
              Tailored technical workshops for engineering teams, product teams, and leadership. We design the curriculum around your stack and your goals.
            </p>
            <ul className="space-y-2 mb-6">
              {['Modern Web Development', 'React Native for Mobile Teams', 'UI/UX for Engineering Teams', 'Digital Transformation Strategy'].map((t) => (
                <li key={t} className="flex items-center gap-2 text-sm text-slate-700">
                  <span className="w-1.5 h-1.5 rounded-full bg-accent shrink-0" />
                  {t}
                </li>
              ))}
            </ul>
            <a href="/training#corporate" className="btn-primary w-full justify-center">
              Request Corporate Training <ArrowRight size={17} />
            </a>
          </div>
        </div>

        {/* Outcomes */}
        <div className="grid grid-cols-2 sm:grid-cols-5 gap-4">
          {bootcamp.outcomes.map((o) => (
            <div key={o} className="flex items-start gap-2 bg-white/5 rounded-xl p-3">
              <span className="text-teal-light mt-0.5 shrink-0">✓</span>
              <p className="text-white/80 text-xs leading-relaxed">{o}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
