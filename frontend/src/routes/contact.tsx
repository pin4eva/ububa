import { createFileRoute } from '@tanstack/react-router'
import { RootLayout } from '../components/layout/RootLayout'
import { ContactSection } from '../components/sections/ContactSection'
import { company } from '../data/company'

export const Route = createFileRoute('/contact')({
  head: () => ({
    meta: [
      { title: 'Contact Us | Ububa Technology Limited' },
      {
        name: 'description',
        content:
          'Get in touch with Ububa Technology Limited. Start a project, request a quote, or ask about our training programs. Based in Port Harcourt, serving clients globally.',
      },
    ],
  }),
  component: ContactPage,
})

function ContactPage() {
  return (
    <RootLayout>
      {/* Hero */}
      <section className="bg-primary pt-32 pb-20 relative overflow-hidden">
        <div className="absolute inset-0 opacity-5" style={{ backgroundImage: 'radial-gradient(circle at 20% 80%, white 1px, transparent 1px)', backgroundSize: '40px 40px' }} />
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative">
          <span className="section-eyebrow text-white/60">Let's Talk</span>
          <h1 className="text-4xl sm:text-5xl font-black text-white mt-2 mb-6 leading-tight">
            Start a Conversation
          </h1>
          <p className="text-xl text-white/80 leading-relaxed">
            Whether you have a brief, an idea, or just a question — reach out and we'll get back within one business day.
          </p>
          <div className="flex flex-wrap justify-center gap-6 mt-10">
            <a href={`mailto:${company.email}`} className="btn-accent">{company.email}</a>
            <a href={`tel:${company.phone}`} className="btn-outline-white">{company.phone}</a>
          </div>
        </div>
      </section>

      <ContactSection />
    </RootLayout>
  )
}
