import { createFileRoute } from '@tanstack/react-router'
import { RootLayout } from '../components/layout/RootLayout'
import { HeroSection } from '../components/sections/HeroSection'
import { ClientsSection } from '../components/sections/ClientsSection'
import { AboutSection } from '../components/sections/AboutSection'
import { ServicesSection } from '../components/sections/ServicesSection'
import { PortfolioSection } from '../components/sections/PortfolioSection'
import { TrainingSection } from '../components/sections/TrainingSection'
import { TestimonialsSection } from '../components/sections/TestimonialsSection'
import { CTASection } from '../components/sections/CTASection'
import { ContactSection } from '../components/sections/ContactSection'

export const Route = createFileRoute('/')({
  head: () => ({
    meta: [
      { title: 'Ububa Technology Limited | Enterprise Software & Training in Nigeria' },
      {
        name: 'description',
        content:
          'Ububa Technology Limited — 10+ years building enterprise software for universities, oil & gas, agriculture, and e-commerce. Clients in Nigeria and Canada. Software development + tech training.',
      },
    ],
  }),
  component: Home,
})

function Home() {
  return (
    <RootLayout>
      <HeroSection />
      <ClientsSection />
      <AboutSection />
      <ServicesSection />
      <PortfolioSection />
      <TrainingSection />
      <TestimonialsSection />
      <CTASection />
      <ContactSection />
    </RootLayout>
  )
}
