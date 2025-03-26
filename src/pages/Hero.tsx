import { Button } from "@/components/ui/button";

const Hero = () => {
  return (
    <div className="hero-container" style={{ backgroundColor: '#fff' }}>
      {/* Top Navigation Bar */}
     

    

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