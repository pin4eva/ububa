const clients = [
  {
    name: 'University of Port Harcourt',
    logo: '/images/uniport-logo.png',
    country: '🇳🇬',
    description: 'Federal University, Nigeria',
  },
  {
    name: 'Touchstone Institute',
    logo: '/images/touchstone-logo4.svg',
    country: '🇨🇦',
    description: 'Healthcare Education, Toronto',
    background:"#002D74",
  },
  {
    name: 'Climax Inspection Service',
    logo: '/images/climax-logo.png',
    country: '🇳🇬',
    description: 'Oil & Gas Services, Nigeria',
  },
  {
    name: 'Kemcolfarms',
    logo: '/images/kemcolfarms-logo.svg',
    country: '🇳🇬',
    description: 'Agro E-Commerce, Nigeria',
  },
]

export function ClientsSection() {
  return (
    <section className="py-16 bg-white border-y border-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <p className="text-center text-xs font-bold uppercase tracking-widest text-slate-400 mb-10">
          Trusted by organisations across Nigeria and Canada
        </p>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {clients.map((c) => (
            <div
              key={c.name}
              className="flex flex-col items-center justify-center p-6 rounded-xl border border-slate-100 hover:border-primary/30 hover:shadow-md transition-all group"
            >
              <div className="h-14 flex items-center justify-center mb-3 cursor-pointer"
              style={{background: c.background||'inherit'}}
              >
                <img
                  src={c.logo}
                  alt={c.name}
                  className="max-h-14 max-w-35 w-auto object-contain grayscale group-hover:grayscale-0 transition-all duration-300"
                />
              </div>
              <p className="text-slate-400 text-xs text-center mt-1">
                {c.country} {c.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
