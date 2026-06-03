import ModelHero from '../components/cooperation/ModelHero'
import ModelIntro from '../components/cooperation/ModelIntro'
import FormatCards from '../components/cooperation/FormatCards'
import WhatsIncluded from '../components/cooperation/WhatsIncluded'
import Workflow from '../components/cooperation/Workflow'
import FAQSection from '../components/cooperation/FAQSection'
import ContactCTA from '../components/cooperation/ContactCTA'

export default function CooperationPage() {
  return (
    <>
      <ModelHero />
      <ModelIntro />
      <FormatCards />
      <WhatsIncluded />
      <Workflow />
      <FAQSection />
      <ContactCTA />
    </>
  )
}
