import Hero from '../components/home/Hero'
import FormatsTeaser from '../components/home/FormatsTeaser'
import TrustStats from '../components/home/TrustStats'
import Benefits from '../components/home/Benefits'
import Portfolio from '../components/home/Portfolio'
import Testimonials from '../components/home/Testimonials'
import ContactCTA from '../components/shared/ContactCTA'

export default function HomePage() {
  return (
    <>
      <Hero />
      <FormatsTeaser />
      <TrustStats />
      <Benefits />
      <Portfolio />
      <Testimonials />
      <ContactCTA />
    </>
  )
}
