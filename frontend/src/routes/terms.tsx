import { createFileRoute } from '@tanstack/react-router'
import { RootLayout } from '../components/layout/RootLayout'
import { company } from '../data/company'

export const Route = createFileRoute('/terms')({
  head: () => ({
    meta: [
      { title: 'Terms of Service | Ububa Technology Limited' },
      { name: 'description', content: 'Terms of Service for Ububa Technology Limited.' },
    ],
  }),
  component: TermsPage,
})

function TermsPage() {
  return (
    <RootLayout>
      <section className="bg-primary pt-32 pb-16">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl font-black text-white">Terms of Service</h1>
          <p className="text-white/70 mt-2 text-sm">Last updated: June 2025</p>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 prose prose-slate prose-lg">
          <p>
            By accessing or using the website of {company.name} ("Company", "we", "us") at {company.website}, you agree to be bound by these Terms of Service. Please read them carefully.
          </p>

          <h2>Use of Our Website</h2>
          <p>
            You may use our website for lawful purposes only. You agree not to use our site in any way that is unlawful, harmful, or fraudulent, or that infringes the rights of others.
          </p>

          <h2>Intellectual Property</h2>
          <p>
            All content on this website — including text, design, logos, and images — is the property of {company.name} and protected by applicable copyright and intellectual property laws. You may not reproduce, distribute, or use our content without written permission.
          </p>

          <h2>Services & Engagements</h2>
          <p>
            Enquiries submitted through our website do not constitute a binding contract. All client engagements are governed by separate written agreements (service contracts or statements of work) executed between you and {company.name}.
          </p>

          <h2>Disclaimer of Warranties</h2>
          <p>
            This website is provided "as is" without any warranties of any kind. We do not guarantee that the site will be error-free, uninterrupted, or free of viruses.
          </p>

          <h2>Limitation of Liability</h2>
          <p>
            To the maximum extent permitted by law, {company.name} shall not be liable for any indirect, incidental, or consequential damages arising from your use of this website.
          </p>

          <h2>Changes to These Terms</h2>
          <p>
            We may update these Terms from time to time. Continued use of the site after changes constitutes acceptance of the revised Terms.
          </p>

          <h2>Governing Law</h2>
          <p>
            These Terms are governed by the laws of the Federal Republic of Nigeria. Any disputes shall be subject to the exclusive jurisdiction of courts in Rivers State, Nigeria.
          </p>

          <h2>Contact</h2>
          <p>
            For questions about these Terms, contact us at{' '}
            <a href={`mailto:${company.email}`}>{company.email}</a>.
          </p>
        </div>
      </section>
    </RootLayout>
  )
}
