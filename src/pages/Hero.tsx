import { Button } from "@/components/ui/button";

const Hero = () => {
  return (
    <div className="hero-container" style={{ backgroundColor: '#fff' }}>
      {/* Top Navigation Bar */}
      <div className="top-bar" style={{ backgroundColor: '#36a9e1', color: 'white', padding: '10px 0', display: 'flex', justifyContent: 'space-between' }}>
        <div className="contact-info" style={{ display: 'flex', gap: '20px', paddingLeft: '20px' }}>
          <div><span role="img" aria-label="phone">📞</span> (323) 238-0682</div>
          <div><span role="img" aria-label="email">✉️</span> info@freshwash.co.zw</div>
        </div>
        <div className="hours-location" style={{ display: 'flex', gap: '20px', paddingRight: '20px' }}>
          <div><span role="img" aria-label="clock">🕒</span> Mon - Fri: 6:00AM - 10:00PM</div>
          <div><span role="img" aria-label="location">📍</span> 149 W 70th St, 9000 Los Angeles, CA</div>
        </div>
      </div>

      {/* Main Navigation */}
      <div className="main-nav" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '15px 20px' }}>
        <div className="logo-container" style={{ display: 'flex', alignItems: 'center' }}>
          <div className="logo" style={{ backgroundColor: '#36a9e1', color: 'white', width: '40px', height: '40px', borderRadius: '5px', display: 'flex', justifyContent: 'center', alignItems: 'center', marginRight: '10px' }}>
            <span role="img" aria-label="washing machine">🧺</span>
          </div>
          <span style={{ fontWeight: 'bold', fontSize: '1.5rem' }}>FreshWash</span>
        </div>
        
        {/* <div className="nav-links" style={{ display: 'flex', gap: '20px' }}>
          <a href="#" style={{ textDecoration: 'none', color: '#333' }}>Home</a>
          <a href="#" style={{ textDecoration: 'none', color: '#333' }}>About</a>
          <a href="#" style={{ textDecoration: 'none', color: '#333' }}>Blog</a>
          <a href="#" style={{ textDecoration: 'none', color: '#333' }}>Services</a>
          <a href="#" style={{ textDecoration: 'none', color: '#333' }}>Pages ▾</a>
          <a href="#" style={{ textDecoration: 'none', color: '#333' }}>Cart ()</a>
        </div> */}

        <Button style={{ backgroundColor: '#36a9e1', color: 'white', padding: '10px 20px', border: 'none', borderRadius: '50px', cursor: 'pointer' }}>
          Browse packages
        </Button>
      </div>

      {/* Hero Content */}
      <div className="hero-content" style={{ display: 'flex', padding: '0 20px 50px 20px' }}>
        <div className="hero-text" style={{ flex: '1', paddingRight: '20px', display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
          <h1 style={{ color: '#1a2b49', fontSize: '3rem', marginBottom: '20px' }}>
            The best laundry services in <span style={{ color: '#36a9e1' }}>Harare</span>
          </h1>
          <p style={{ color: '#6c757d', marginBottom: '30px' }}>
            Elementum orci vulputate pharetra lorem in feugiat pulvinar dolor accumsan nisi faucibus amet interdum nec nulla elementum sediam vulputate consectur dolor.
          </p>
          <div style={{ display: 'flex', gap: '20px' }}>
            <Button style={{ backgroundColor: '#36a9e1', color: 'white', padding: '12px 24px', border: 'none', borderRadius: '50px', cursor: 'pointer' }}>
              Browse packages
            </Button>
            <Button style={{ backgroundColor: 'transparent', color: '#333', padding: '12px 24px', border: '1px solid #333', borderRadius: '50px', cursor: 'pointer' }}>
              Our services
            </Button>
          </div>
        </div>
        
        <div className="hero-image" style={{ flex: '1', maxWidth: '500px', margin: '0 auto' }}>
          <img 
            src="/women loading.jpg" 
            alt="Person using laundry machine" 
            style={{ width: '100%', height: 'auto', borderRadius: '10px' }}
          />
        </div>  </div>
    </div>
  );
};

export default Hero;