import { ArrowRight } from 'lucide-react';

const stats = [
  { value: '10+', label: 'Years Experience' },
  { value: '150+', label: 'Projects Delivered' },
  { value: '500+', label: 'Happy Clients' },
  { value: 'NG · CA', label: 'Countries Served' },
]

export function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden bg-primary">
      {/* Background */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute -top-40 -right-40 w-150 h-150 rounded-full bg-primary-light opacity-25 blur-3xl" />
        <div className="absolute bottom-0 -left-20 w-96 h-96 rounded-full bg-teal opacity-20 blur-3xl" />
        <div
          className="absolute inset-0 opacity-[0.04]"
          style={{
            backgroundImage:
              'linear-gradient(rgba(255,255,255,0.6) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.6) 1px, transparent 1px)',
            backgroundSize: '60px 60px',
          }}
        />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-24 pb-20 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">

          {/* Left — copy */}
          <div>
            {/* Eyebrow */}
            <div className="inline-flex items-center gap-2 bg-white/10 border border-white/20 rounded-full px-4 py-1.5 mb-8">
              <span className="w-2 h-2 rounded-full bg-teal-light animate-pulse shrink-0" />
              <span className="text-white/90 text-sm font-medium">10+ Years · Nigeria & Canada</span>
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black text-white leading-[1.1] mb-5">
              Enterprise Software.<br />
              <span className="text-accent">Global Impact.</span>
            </h1>

            <p className="text-lg text-white/75 leading-relaxed mb-10 max-w-lg">
              We build mission-critical software for universities, enterprises, and growing businesses — and train the engineers who build them.
            </p>

            <div className="flex flex-wrap gap-4">
              <a href="/portfolio" className="btn-accent">
                See Our Work <ArrowRight size={17} />
              </a>
              <a href="/contact" className="btn-outline-white">
                Get a Free Quote
              </a>
            </div>

            {/* Stats */}
            <div className="mt-14 grid grid-cols-4 gap-4">
              {stats.map((s) => (
                <div key={s.label} className="border-l border-white/20 pl-3">
                  <p className="text-2xl font-black text-white leading-none">{s.value}</p>
                  <p className="text-white/50 text-xs mt-1 leading-tight">{s.label}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Right — device image */}
          <div className="hidden lg:flex items-center justify-center">
            <img
              src="/images/hero-image.png"
              alt="Software running on desktop"
              className="w-full max-w-lg object-contain drop-shadow-2xl"
            />
          </div>

        </div>
      </div>

      {/* Wave divider */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg viewBox="0 0 1440 60" fill="none" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none" className="w-full h-12">
          <path d="M0 60L1440 60L1440 20C1200 60 960 0 720 20C480 40 240 0 0 20L0 60Z" fill="white" />
        </svg>
      </div>
    </section>
  )
}
