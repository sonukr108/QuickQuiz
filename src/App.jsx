import './App.css'
import { BrowserRouter, Routes, Route, useLocation, Navigate } from 'react-router-dom'
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
import { useEffect, useState } from 'react'

function App() {
  const Layout = () => {
    const location = useLocation();
    const [dark, setDark] = useState(false);

    const hideNavbarFooter = location.pathname === '/login' || location.pathname === '/signup';

    useEffect(() => {
      // console.log(userName)
      const savedTheme = localStorage.getItem("theme");
      if (savedTheme) {
        if (savedTheme === "dark") {
          document.getElementById("root").classList.add("dark");
          setDark(true);
        } else {
          document.getElementById("root").classList.remove("dark");
          setDark(false);
        }
      } else {
        const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
        if (prefersDark) {
          document.getElementById("root").classList.add("dark");
          setDark(true);
        }
      }
    }, []);

    return (
      <div className='dark:bg-gray-950 bg-white dark:text-white'>
        {!hideNavbarFooter && <Navbar />}

        <Routes>
          <Route path='/' element={<LandingPage />} />
          <Route path='/login' element={<LogInPage />} />
          <Route
            path='/home'
            element={
              localStorage.getItem("userName")
                ? <Home />
                : <Navigate to="/login" replace />
            }
          />
          <Route path='/signup' element={<SignupPage />} />
          <Route path='/howitworks' element={<HowItWorks />} />
          <Route path='/features' element={<Features />} />
          <Route path='/about' element={<AboutUs />} />
          <Route path='/addq' element={<AddQuestion />} />
          <Route path="*" element={<div className="p-8 text-center text-xl">404 - Page Not Found</div>} />
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
