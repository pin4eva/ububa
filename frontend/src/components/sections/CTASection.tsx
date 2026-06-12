import { ArrowRight, Phone } from 'lucide-react'
import { company } from '../../data/company'

export function CTASection() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="bg-gradient-to-br from-primary to-teal rounded-3xl p-12 md:p-16 relative overflow-hidden">
          {/* Background decoration */}
          <div className="absolute top-0 right-0 w-64 h-64 rounded-full bg-white/5 translate-x-1/3 -translate-y-1/3" />
          <div className="absolute bottom-0 left-0 w-48 h-48 rounded-full bg-white/5 -translate-x-1/3 translate-y-1/3" />

          <div className="relative">
            <span className="section-eyebrow text-white/70 mb-4 block">Ready to Build?</span>
            <h2 className="section-title-white mb-4">
              Let's Turn Your Idea Into<br />
              <span className="text-accent">Shipped Software</span>
            </h2>
            <p className="section-subtitle-white mb-10 mx-auto text-center">
              Tell us what you're building. We'll tell you how we'd build it, what it would cost, and when we can start.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <a href="/contact" className="btn-accent">
                Start a Project <ArrowRight size={17} />
              </a>
              <a href={`tel:${company.phone}`} className="btn-outline-white">
                <Phone size={16} /> {company.phone}
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
