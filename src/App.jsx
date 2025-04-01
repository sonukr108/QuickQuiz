import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import LandingPage from './Pages/LandingPage'
import Navbar from './Components/Navbar'

function App() {

  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path='/' element={<LandingPage />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
