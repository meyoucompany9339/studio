import Hero from '../components/home/Hero'
import TrustStats from '../components/home/TrustStats'
import Benefits from '../components/home/Benefits'
import Portfolio from '../components/home/Portfolio'
import Testimonials from '../components/home/Testimonials'
import Guarantees from '../components/home/Guarantees'
import ContactCTA from '../components/shared/ContactCTA'

export default function HomePage() {
  return (
    <>
      <Hero />
      <TrustStats />
      <Benefits />
      <Portfolio />
      <Testimonials />
      <Guarantees />
      <ContactCTA />
    </>
  )
}
