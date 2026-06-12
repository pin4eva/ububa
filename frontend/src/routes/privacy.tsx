import { createFileRoute } from '@tanstack/react-router'
import { RootLayout } from '../components/layout/RootLayout'
import { company } from '../data/company'

export const Route = createFileRoute('/privacy')({
  head: () => ({
    meta: [
      { title: 'Privacy Policy | Ububa Technology Limited' },
      { name: 'description', content: 'Privacy Policy for Ububa Technology Limited.' },
    ],
  }),
  component: PrivacyPage,
})

function PrivacyPage() {
  return (
    <RootLayout>
      <section className="bg-primary pt-32 pb-16">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl font-black text-white">Privacy Policy</h1>
          <p className="text-white/70 mt-2 text-sm">Last updated: June 2025</p>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 prose prose-slate prose-lg">
          <p>
            {company.name} ("we", "our", "us") is committed to protecting your personal information and your right to privacy. This policy explains what information we collect, how we use it, and what rights you have.
          </p>

          <h2>Information We Collect</h2>
          <p>We collect information you provide directly to us, including:</p>
          <ul>
            <li>Name and contact information (email address, phone number)</li>
            <li>Company or organisation name</li>
            <li>Messages and project enquiry details submitted through our contact form</li>
          </ul>
          <p>We may also automatically collect usage data such as browser type, pages visited, and time spent on our site through analytics tools.</p>

          <h2>How We Use Your Information</h2>
          <ul>
            <li>To respond to your enquiries and project requests</li>
            <li>To provide and improve our services</li>
            <li>To send occasional updates about our services (you may opt out at any time)</li>
            <li>To comply with legal obligations</li>
          </ul>

          <h2>Sharing Your Information</h2>
          <p>
            We do not sell, rent, or share your personal information with third parties for marketing purposes. We may share information with service providers who assist us in operating our website or conducting our business, under strict confidentiality agreements.
          </p>

          <h2>Data Retention</h2>
          <p>
            We retain your personal data only for as long as necessary to fulfil the purposes described in this policy, or as required by law.
          </p>

          <h2>Your Rights</h2>
          <p>Depending on your location, you may have the right to:</p>
          <ul>
            <li>Access the personal data we hold about you</li>
            <li>Request correction of inaccurate data</li>
            <li>Request deletion of your data</li>
            <li>Withdraw consent at any time</li>
          </ul>

          <h2>Contact Us</h2>
          <p>
            If you have questions about this policy or wish to exercise your rights, contact us at{' '}
            <a href={`mailto:${company.email}`}>{company.email}</a> or{' '}
            {company.address}.
          </p>
        </div>
      </section>
    </RootLayout>
  )
}
