import { useState } from 'react'
import { Mail, Phone, MapPin, Send, MessageCircle } from 'lucide-react'
import { SectionHeader } from '../ui/SectionHeader'
import { company } from '../../data/company'

export function ContactSection() {
  const [submitted, setSubmitted] = useState(false)
  const [loading, setLoading] = useState(false)

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    setLoading(true)
    await new Promise((r) => setTimeout(r, 900))
    setLoading(false)
    setSubmitted(true)
  }

  return (
    <section id="contact" className="py-20 lg:py-28 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          eyebrow="Get In Touch"
          title="Let's Start a Conversation"
          subtitle="Whether you have a brief, an idea, or just a question — reach out and we'll get back within one business day."
          centered
        />

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-10">
          {/* Info */}
          <div className="lg:col-span-2 space-y-5">
            {[
              { icon: <MapPin size={20} />, label: 'Office', value: company.address },
              { icon: <Phone size={20} />, label: 'Phone', value: company.phone, href: `tel:${company.phone}` },
              { icon: <Mail size={20} />, label: 'Email', value: company.email, href: `mailto:${company.email}` },
              { icon: <MessageCircle size={20} />, label: 'WhatsApp', value: 'Message us on WhatsApp', href: `https://wa.me/2348099777733` },
            ].map((item) => (
              <div key={item.label} className="card flex gap-4 p-5">
                <div className="w-11 h-11 rounded-xl bg-primary/10 text-primary flex items-center justify-center shrink-0">
                  {item.icon}
                </div>
                <div>
                  <p className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-0.5">{item.label}</p>
                  {item.href ? (
                    <a href={item.href} target={item.href.startsWith('http') ? '_blank' : undefined} rel="noopener noreferrer" className="text-slate-800 text-sm hover:text-primary transition-colors font-medium">
                      {item.value}
                    </a>
                  ) : (
                    <p className="text-slate-800 text-sm font-medium">{item.value}</p>
                  )}
                </div>
              </div>
            ))}
          </div>

          {/* Form */}
          <div className="lg:col-span-3 card p-8">
            {submitted ? (
              <div className="text-center py-10">
                <div className="w-16 h-16 rounded-full bg-teal/10 flex items-center justify-center mx-auto mb-4">
                  <Send size={28} className="text-teal" />
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-2">Message Received!</h3>
                <p className="text-slate-500">We'll get back to you within one business day.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div>
                    <label className="block text-sm font-semibold text-slate-700 mb-1.5">Full Name *</label>
                    <input required className="input-field" placeholder="John Doe" />
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-slate-700 mb-1.5">Email Address *</label>
                    <input required type="email" className="input-field" placeholder="john@company.com" />
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-semibold text-slate-700 mb-1.5">Company / Organisation</label>
                  <input className="input-field" placeholder="Acme Corp" />
                </div>
                <div>
                  <label className="block text-sm font-semibold text-slate-700 mb-1.5">What do you need? *</label>
                  <select required className="input-field">
                    <option value="">Select a service...</option>
                    <option>Web Development</option>
                    <option>Mobile App Development</option>
                    <option>Enterprise Software</option>
                    <option>UI/UX Design</option>
                    <option>E-Commerce</option>
                    <option>Tech Training</option>
                    <option>Digital Marketing</option>
                    <option>Brand Identity</option>
                    <option>Other</option>
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-semibold text-slate-700 mb-1.5">Tell us about your project *</label>
                  <textarea required rows={4} className="input-field resize-none" placeholder="Describe what you're building, your timeline, and any key requirements..." />
                </div>
                <button type="submit" disabled={loading} className="btn-primary w-full justify-center">
                  {loading ? 'Sending...' : <>Send Message <Send size={16} /></>}
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  )
}
