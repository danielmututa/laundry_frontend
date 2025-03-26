import Hero from './pages/Hero'
import './App.css'
// import Services from './pages/Services'
// import Experiences from './pages/Experiences'
// import LaundryServiceSteps from './pages/LaundryServiceSteps'
// import Testimonials from './pages/Testimonials'
// import Articles from './pages/Articles'
// import Footer from './pages/Footer'
import { Routes, Route } from 'react-router-dom';
import {lazy} from 'react'
import path from 'path';
// import Navbar from './context/Navbar';

const Navbar = lazy(() => import('./context/Navbar'))


function App() {
    return (
        <div>
            {/* <Hero />
            <Services/>
            <Experiences/>
            <LaundryServiceSteps/>
            <Testimonials/>
            <Articles/>
            <Footer/> */}
      <Navbar/>
      <Routes>
        <Route path='/' element={<Hero/>}/>
      </Routes>
        </div>
    )
}

export default App
