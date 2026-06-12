import { Mail, Phone, MapPin, Twitter, Facebook, Linkedin, Instagram } from 'lucide-react'
import { company } from '../../data/company'

const footerServices = [
  { label: 'Web Development', href: '/#services' },
  { label: 'Mobile Apps', href: '/#services' },
  { label: 'Enterprise Software', href: '/#services' },
  { label: 'UI/UX Design', href: '/#services' },
  { label: 'E-Commerce', href: '/#services' },
]

const footerLinks = [
  { label: 'About Us', href: '/about' },
  { label: 'Portfolio', href: '/portfolio' },
  { label: 'Training', href: '/training' },
  { label: 'Contact', href: '/contact' },
]

const legalLinks = [
  { label: 'Privacy Policy', href: '/privacy' },
  { label: 'Terms of Service', href: '/terms' },
]

export function Footer() {
  return (
    <footer className="bg-slate-900 text-slate-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">
          {/* Brand */}
          <div className="lg:col-span-1">
            <a href="/" className="inline-flex mb-4">
              <img
                src="/full-logo.png"
                alt="Ububa Technology Limited"
                className="h-9 w-auto brightness-0 invert"
              />
            </a>
            <p className="text-sm leading-relaxed mb-5 text-slate-400">
              {company.shortDescription}
            </p>
            <div className="flex items-center gap-3">
              <a href={company.socials.twitter} aria-label="Twitter" className="w-9 h-9 rounded-lg bg-slate-800 flex items-center justify-center hover:bg-primary transition-colors">
                <Twitter size={16} />
              </a>
              <a href={company.socials.facebook} aria-label="Facebook" className="w-9 h-9 rounded-lg bg-slate-800 flex items-center justify-center hover:bg-primary transition-colors">
                <Facebook size={16} />
              </a>
              <a href={company.socials.linkedin} aria-label="LinkedIn" className="w-9 h-9 rounded-lg bg-slate-800 flex items-center justify-center hover:bg-primary transition-colors">
                <Linkedin size={16} />
              </a>
              <a href={company.socials.instagram} aria-label="Instagram" className="w-9 h-9 rounded-lg bg-slate-800 flex items-center justify-center hover:bg-primary transition-colors">
                <Instagram size={16} />
              </a>
            </div>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-white font-bold mb-4 text-sm uppercase tracking-wider">Services</h3>
            <ul className="space-y-2">
              {footerServices.map((s) => (
                <li key={s.label}>
                  <a href={s.href} className="text-sm text-slate-400 hover:text-white transition-colors">
                    {s.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="text-white font-bold mb-4 text-sm uppercase tracking-wider">Company</h3>
            <ul className="space-y-2">
              {footerLinks.map((l) => (
                <li key={l.label}>
                  <a href={l.href} className="text-sm text-slate-400 hover:text-white transition-colors">
                    {l.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-white font-bold mb-4 text-sm uppercase tracking-wider">Contact</h3>
            <ul className="space-y-3">
              <li className="flex items-start gap-2.5">
                <MapPin size={15} className="mt-0.5 text-accent shrink-0" />
                <span className="text-sm text-slate-400">{company.address}</span>
              </li>
              <li className="flex items-center gap-2.5">
                <Phone size={15} className="text-accent shrink-0" />
                <a href={`tel:${company.phone}`} className="text-sm text-slate-400 hover:text-white transition-colors">
                  {company.phone}
                </a>
              </li>
              <li className="flex items-center gap-2.5">
                <Mail size={15} className="text-accent shrink-0" />
                <a href={`mailto:${company.email}`} className="text-sm text-slate-400 hover:text-white transition-colors">
                  {company.email}
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-slate-800 pt-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs text-slate-500">
            © {new Date().getFullYear()} {company.name}. All rights reserved.
          </p>
          <div className="flex items-center gap-4">
            {legalLinks.map((l) => (
              <a key={l.label} href={l.href} className="text-xs text-slate-500 hover:text-slate-300 transition-colors">
                {l.label}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  )
}
