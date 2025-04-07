import './App.css'
import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom'
import LandingPage from './Pages/LandingPage'
import Navbar from './Components/Navbar'
import Footer from './Components/Footer'
import HowItWorks from './Pages/HowItWorkPage'
import Features from './Pages/FeaturesPage'
import AboutUs from './Pages/AboutUsPage'
import LogInPage from './Pages/LogInPage'
import SignupPage from './Pages/SignupPage'
import Home from './Pages/Home '
import AddQuestion from './Pages/AddQuestion'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

function App() {
  const Layout = () => {
    const location = useLocation();

    const hideNavbarFooter = location.pathname === '/login' || location.pathname === '/signup';

    return (
      <div className='dark:bg-gray-950 dark:text-white'>
        {!hideNavbarFooter && <Navbar />}

        <Routes>
          <Route path='/' element={<LandingPage />} />
          <Route path='/login' element={<LogInPage />} />
          <Route path='/home' element={<Home />} />
          <Route path='/signup' element={<SignupPage />} />
          <Route path='/howitworks' element={<HowItWorks />} />
          <Route path='/features' element={<Features />} />
          <Route path='/about' element={<AboutUs />} />
          <Route path='/addq' element={<AddQuestion />} />
        </Routes>

        {!hideNavbarFooter && <Footer />}

        {/* Toast Container */}
        <ToastContainer position="top-center" autoClose={2000} />
      </div>
    );
  };

  return (
    <BrowserRouter>
      <Layout />
    </BrowserRouter>
  )
}

export default App
