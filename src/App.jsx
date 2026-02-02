import './App.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import Activations from './pages/Activations'
import Advertising from './pages/Advertising'
import AnimationsPage from './pages/AnimationsPage'
import Brand from './pages/Brand'
import BrandIdentity from './pages/BrandIdentity'
import Branding from './pages/Branding'
import Events from './pages/Events'
import VideographyPhotgraphy from './pages/VideographyPhotgraphy'
import SocialMedia from './pages/SocialMedia'
import PrintingPublications from './pages/PrintingPublications'
import Launches from './pages/Launches'
import LaunchActivations from './pages/LaunchActivations'
import Exhibitions from './pages/Exhibitions'
import Projects from './pages/Projects'
import Header from './components/Header'
import Footer from './components/Footer'
import AnimatedText from './pages/Home/AnimatedText'
import WhatsAppIcon from './components/WhatsAppIcon'


function App() {
//hello
  return (
    <Router>
     <Header />
      <Routes>
        <Route path='/' element={<Home />} />

        <Route path='/activations' element={<Activations />} />
        <Route path='/advertising' element={<Advertising />} />
        <Route path='/animationspage' element={<AnimationsPage />} />
        <Route path='/brand' element={<Brand />} />
        <Route path='/brandidentity' element={<BrandIdentity />} />
        <Route path='/branding' element={<Branding />} />
        <Route path='/events' element={<Events />} />
        <Route path='/exhibitions' element={<Exhibitions />} />
        <Route path='/lauchexhibitions' element={<LaunchActivations />} />
        <Route path='/launches' element={<Launches />} />
        <Route path='/printingpublications' element={<PrintingPublications />} />
        <Route path='/socialmedia' element={<SocialMedia />} />
        <Route path='/videographyphotography' element={<VideographyPhotgraphy />} />
        <Route path='/projects' element={<Projects />} />
        <Route path='/animatedtext' element={<AnimatedText/>} />
      </Routes>
      <WhatsAppIcon/>
     <Footer />
    </Router>
  )
}

export default App
