import { createFileRoute } from '@tanstack/react-router'
import { RootLayout } from '../components/layout/RootLayout'
import { SectionHeader } from '../components/ui/SectionHeader'
import { CTASection } from '../components/sections/CTASection'
import { bootcamp, corporateTraining } from '../data/training'
import { Monitor, Smartphone, PenTool, BarChart2, Code, TrendingUp, CheckCircle, ArrowRight, Users, Building } from 'lucide-react'

export const Route = createFileRoute('/training')({
  head: () => ({
    meta: [
      { title: 'Tech Training Programs | Ububa Technology Limited' },
      {
        name: 'description',
        content:
          'Software bootcamps and corporate training in Nigeria. Learn web development, mobile apps, UI/UX design, and data analytics with Ububa Technology Limited in Port Harcourt.',
      },
    ],
  }),
  component: TrainingPage,
})

const iconMap: Record<string, React.ReactNode> = {
  monitor: <Monitor size={22} />,
  smartphone: <Smartphone size={22} />,
  'pen-tool': <PenTool size={22} />,
  'bar-chart': <BarChart2 size={22} />,
  code: <Code size={22} />,
  'trending-up': <TrendingUp size={22} />,
}

const trackColors = [
  'bg-blue-50 border-blue-100',
  'bg-teal-50 border-teal-100',
  'bg-purple-50 border-purple-100',
  'bg-green-50 border-green-100',
]
const trackIconColors = [
  'bg-blue-100 text-blue-700',
  'bg-teal-100 text-teal-700',
  'bg-purple-100 text-purple-700',
  'bg-green-100 text-green-700',
]

function TrainingPage() {
  return (
    <RootLayout>
      {/* Hero */}
      <section className="bg-primary pt-32 pb-20 relative overflow-hidden">
        <div className="absolute inset-0 opacity-5" style={{ backgroundImage: 'radial-gradient(circle at 50% 50%, white 1px, transparent 1px)', backgroundSize: '40px 40px' }} />
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative">
          <span className="section-eyebrow text-white/60">Training Programs</span>
          <h1 className="text-4xl sm:text-5xl font-black text-white mt-2 mb-6 leading-tight">
            Grow the Next Generation.<br />Upskill Your Team.
          </h1>
          <p className="text-xl text-white/80 leading-relaxed max-w-2xl mx-auto">
            Cohort bootcamps for career changers and recent grads. Corporate workshops for teams that need to ship better software.
          </p>
          <div className="flex flex-wrap justify-center gap-4 mt-8">
            <a href="#bootcamp" className="btn-accent">Individual Bootcamps</a>
            <a href="#corporate" className="btn-outline-white">Corporate Training</a>
          </div>
        </div>
      </section>

      {/* Bootcamp section */}
      <section id="bootcamp" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-3 mb-3">
            <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center">
              <Users size={20} className="text-primary" />
            </div>
            <span className="section-eyebrow">{bootcamp.headline}</span>
          </div>
          <SectionHeader
            title="Intensive Cohort Bootcamps"
            subtitle={bootcamp.subheadline}
          />

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
            {bootcamp.tracks.map((track, i) => (
              <div key={track.id} className={`rounded-2xl border-2 p-7 ${trackColors[i]}`}>
                <div className={`w-12 h-12 rounded-xl flex items-center justify-center mb-4 ${trackIconColors[i]}`}>
                  {iconMap[track.icon] ?? <Monitor size={22} />}
                </div>
                <h3 className="font-black text-slate-900 text-lg mb-1">{track.title}</h3>
                <p className="text-accent font-bold text-sm mb-3">{track.duration}</p>
                <p className="text-slate-600 text-sm leading-relaxed mb-4">{track.description}</p>
                <ul className="space-y-1.5">
                  {track.curriculum.map((c) => (
                    <li key={c} className="flex items-center gap-2 text-xs text-slate-600">
                      <span className="w-1.5 h-1.5 rounded-full bg-accent shrink-0" />
                      {c}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          {/* What you get */}
          <div className="bg-slate-50 rounded-2xl p-8">
            <h3 className="font-black text-slate-900 text-xl mb-6 text-center">What Every Graduate Gets</h3>
            <div className="grid grid-cols-1 sm:grid-cols-5 gap-4">
              {bootcamp.outcomes.map((o) => (
                <div key={o} className="flex items-start gap-2.5">
                  <CheckCircle size={16} className="text-teal mt-0.5 shrink-0" />
                  <p className="text-slate-700 text-sm leading-snug">{o}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Corporate training */}
      <section id="corporate" className="py-20 bg-primary">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-3 mb-3">
            <div className="w-10 h-10 rounded-xl bg-white/10 flex items-center justify-center">
              <Building size={20} className="text-white" />
            </div>
            <span className="section-eyebrow">For Organisations</span>
          </div>
          <SectionHeader
            title={corporateTraining.headline}
            subtitle={corporateTraining.subheadline}
            light
          />

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 mb-12">
            {corporateTraining.topics.map((topic) => (
              <div key={topic.title} className="bg-white/10 border border-white/20 rounded-2xl p-6">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-xl bg-white/10 flex items-center justify-center shrink-0">
                    {iconMap[topic.icon] ?? <Code size={20} />}
                  </div>
                  <div>
                    <h3 className="font-bold text-white mb-1">{topic.title}</h3>
                    <p className="text-white/70 text-xs mb-2">{topic.duration}</p>
                    <p className="text-white/70 text-sm leading-relaxed">{topic.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="bg-white rounded-2xl p-8">
            <h3 className="font-black text-slate-900 text-xl mb-4">What's Included</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 mb-6">
              {corporateTraining.benefits.map((b) => (
                <div key={b} className="flex items-start gap-2.5">
                  <CheckCircle size={16} className="text-teal mt-0.5 shrink-0" />
                  <p className="text-slate-700 text-sm">{b}</p>
                </div>
              ))}
            </div>
            <div className="flex flex-wrap gap-4">
              <a href="/contact" className="btn-primary">
                Request a Corporate Proposal <ArrowRight size={17} />
              </a>
              <div className="flex flex-wrap gap-2 items-center">
                {corporateTraining.deliveryModes.map((m) => (
                  <span key={m} className="text-xs bg-slate-100 text-slate-600 px-3 py-1.5 rounded-full font-medium">{m}</span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <CTASection />
    </RootLayout>
  )
}
