import { LanguageProvider } from './context/LanguageContext'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Services from './components/Services'
import ProcessSteps from './components/ProcessSteps'
import LeadForm from './components/LeadForm'
import Footer from './components/Footer'
import MobileNav from './components/MobileNav'
import FloatingSocial from './components/FloatingSocial'

export default function App() {
  return (
    <LanguageProvider>
      <Navbar />
      <Hero />
      <Services />
      <ProcessSteps />
      <LeadForm />
      <Footer />
      <MobileNav />
      <FloatingSocial />
    </LanguageProvider>
  )
}
