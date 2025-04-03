import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import LandingPage from './Pages/LandingPage'
import Navbar from './Components/Navbar'
import Footer from './Components/Footer'
import HowItWorks from './Pages/HowItWorkPage'
import Features from './Pages/FeaturesPage'
import AboutUs from './Pages/AboutUsPage'
import LogInPage from './Pages/LogInPage'

function App() {

  return (
    <div className='dark:bg-gray-800 dark:text-white'>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path='/' element={<LandingPage />} />
          <Route path='/login' element={<LogInPage />} />
          <Route path='/howitworks' element={<HowItWorks />} />
          <Route path='/features' element={<Features />} />
          <Route path='/about' element={<AboutUs />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  )
}

export default App
