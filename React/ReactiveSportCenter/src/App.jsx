
import './App.css'
import Footer from './components/Footer/Footer'
import Header from './components/Header/Header'
import SectionBestTrainer from './components/SectionBestTrainer/SectionBestTrainer'
import SectionContact from './components/SectionContact/SectionContact'
import SectionFeatures from './components/SectionFeatures/SectionFeatures'
import SectionOur from './components/SectionOur/SectionOur'
import SectionPurchaseFrom from './components/SectionPurchaseFrom/SectionPurchaseForm'
import ReviewClientSection from './components/SectionReviewClient/SectionReviewClient'

function App() {


  return (
    <>
      <Header />
      <SectionFeatures />
      <SectionOur />
      <SectionBestTrainer />
      <SectionPurchaseFrom />
      <ReviewClientSection />
      <SectionContact />
      <Footer />
    </>
  )
}

export default App
