import Hero from './pages/Hero'
import './App.css'
import Services from './pages/Services'
import Experiences from './pages/Experiences'
import LaundryServiceSteps from './pages/LaundryServiceSteps'
import Testimonials from './pages/Testimonials'
import Articles from './pages/Articles'
import Footer from './pages/Footer'



function App() {
    return (
        <div>
            <Hero />
            <Services/>
            <Experiences/>
            <LaundryServiceSteps/>
            <Testimonials/>
            <Articles/>
            <Footer/>
        </div>
    )
}

export default App
