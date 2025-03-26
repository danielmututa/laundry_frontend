import { BrowserRouter, Routes, Route, NavLink } from 'react-router-dom';
import Hero from './pages/Hero';
import Services from './pages/Services';
import Experiences from './pages/Experiences';
import LaundryServiceSteps from './pages/LaundryServiceSteps';
import Testimonials from './pages/Testimonials';
import Articles from './pages/Articles';
import Footer from './pages/Footer';
import About from './components/About/About'; // Create this new component
import './App.css';

// Navigation component with TypeScript
const Navigation: React.FC = () => {
  const activeStyle = {
    fontWeight: 'bold',
    color: '#2c3e50',
    textDecoration: 'underline',
  };

  return (
    <nav className="navigation">
      <NavLink to="/" style={({ isActive }) => isActive ? activeStyle : undefined} end >
        Home
      </NavLink>
      <NavLink to="/services" style={({ isActive }) => isActive ? activeStyle : undefined} >
        Services
      </NavLink>
      <NavLink to="/about" style={({ isActive }) => isActive ? activeStyle : undefined} >
        About
      </NavLink>
    </nav>
  );
};

// Main App component
const App: React.FC = () => {
  return (
    <BrowserRouter>
      <Navigation />
      
      <Routes>
        {/* Home/Landing Page Route */}
        <Route path="/" element={
          <div className="landing-page">
            <Hero />
            <Experiences />
            <LaundryServiceSteps />
            <Testimonials />
            <Articles />
            <Footer />
          </div>
        } />

        {/* Services Page Route */}
        <Route path="/services" element={
          <div className="services-page">
            <Services />
            <Footer /> {/* Include footer if needed */}
          </div>
        } />

        {/* About Page Route */}
        <Route path="/about" element={
          <div className="about-page">
            <About />
            <Footer /> {/* Include footer if needed */}
          </div>
        } />
      </Routes>
    </BrowserRouter>
  );
};

export default App;