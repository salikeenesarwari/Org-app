import { useState, useEffect } from 'react';
import { orgInfo } from '../data/orgInfo';
import EventCarousel from '../components/EventCarousel';

function Home() {
  const [deferredPrompt, setDeferredPrompt] = useState(null);
  const [isInstalled, setIsInstalled] = useState(false);

  useEffect(() => {
    // Check if app is already installed (running in standalone mode)
    const isStandalone = window.matchMedia('(display-mode: standalone)').matches ||
                         window.navigator.standalone ||
                         document.referrer.includes('android-app://');
    
    if (isStandalone) {
      setIsInstalled(true);
      return;
    }

    const handleBeforeInstallPrompt = (e) => {
      e.preventDefault();
      setDeferredPrompt(e);
    };

    const handleAppInstalled = () => {
      setIsInstalled(true);
      setDeferredPrompt(null);
    };

    window.addEventListener('beforeinstallprompt', handleBeforeInstallPrompt);
    window.addEventListener('appinstalled', handleAppInstalled);

    return () => {
      window.removeEventListener('beforeinstallprompt', handleBeforeInstallPrompt);
      window.removeEventListener('appinstalled', handleAppInstalled);
    };
  }, []);

  const handleInstallClick = async () => {
    if (!deferredPrompt) {
      alert('Installation is not available on this browser. Please use Chrome, Edge, or Samsung Internet on Android/Desktop to install the app.');
      return;
    }

    deferredPrompt.prompt();
    const { outcome } = await deferredPrompt.userChoice;
    
    if (outcome === 'accepted') {
      setIsInstalled(true);
      setDeferredPrompt(null);
    }
  };

  return (
    <div className="page">
      <div className="container">
        <div className="page-header" style={{ 
          display: 'flex', 
          flexDirection: 'column', 
          alignItems: 'center', 
          textAlign: 'center',
          gap: '1.5rem',
          marginBottom: '3rem'
        }}>
          <h1 style={{ 
            fontSize: '3rem', 
            fontWeight: 'bold', 
            background: 'linear-gradient(135deg, #10b981 0%, #059669 100%)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            marginBottom: '0.5rem',
            fontFamily: 'Georgia, serif'
          }}>
            Faizan e Sarwari
            <br />
            <span style={{ fontSize: '2.5rem' }}>فیضانِ سرواری</span>
          </h1>
          
          <p style={{ 
            fontSize: '1.5rem', 
            color: '#64748b',
            marginBottom: '1.5rem',
            fontFamily: 'Georgia, serif',
            fontStyle: 'italic'
          }}>
            A Spiritual Journey of Love and Devotion
          </p>

          {orgInfo.profileImage && (
            <img 
              src={orgInfo.profileImage} 
              alt={orgInfo.name}
              style={{ 
                width: '280px', 
                height: '350px', 
                borderRadius: '16px', 
                objectFit: 'cover',
                border: '4px solid #10b981',
                boxShadow: '0 12px 32px rgba(16, 185, 129, 0.3)',
                marginBottom: '1rem'
              }}
              onError={(e) => {
                e.target.style.display = 'none';
              }}
            />
          )}

          {orgInfo.Shaikh_e_Tariqat && (
            <p style={{ 
              fontSize: '1.3rem', 
              color: '#10b981',
              fontWeight: '600',
              fontFamily: 'Georgia, serif',
              maxWidth: '600px',
              lineHeight: '1.6'
            }}>
              <span style={{ color: '#1e293b', fontWeight: '700' }}>Shaikh-E-Tariqat:</span>
              <br />
              {orgInfo.Shaikh_e_Tariqat}
            </p>
          )}
        </div>

        {/* Install App Section - Only show if not installed */}
        {!isInstalled && (
          <div style={{
            backgroundColor: 'linear-gradient(135deg, #10b981 0%, #059669 100%)',
            background: 'linear-gradient(135deg, #10b981 0%, #059669 100%)',
            borderRadius: '12px',
            padding: '2rem',
            marginBottom: '2rem',
            color: 'white',
            boxShadow: '0 4px 12px rgba(16, 185, 129, 0.3)',
            textAlign: 'center'
          }}>
            <div style={{ fontSize: '3rem', marginBottom: '1rem' }}>📱</div>
            <h2 style={{ color: 'white', marginBottom: '1rem', fontSize: '1.8rem' }}>Install Our App</h2>
            <p style={{ fontSize: '1.1rem', marginBottom: '1.5rem', opacity: 0.95 }}>
              Download Faizan-E-Sarwari on your device for easy access to spiritual books, events, and updates anytime, anywhere.
            </p>
            <button
              onClick={handleInstallClick}
              style={{
                backgroundColor: 'white',
                color: '#10b981',
                border: 'none',
                borderRadius: '50px',
                padding: '15px 40px',
                fontSize: '18px',
                fontWeight: '700',
                cursor: 'pointer',
                boxShadow: '0 4px 12px rgba(0, 0, 0, 0.2)',
                transition: 'all 0.3s ease',
                display: 'inline-flex',
                alignItems: 'center',
                gap: '10px'
              }}
              onMouseEnter={(e) => {
                e.target.style.transform = 'scale(1.05)';
                e.target.style.boxShadow = '0 6px 16px rgba(0, 0, 0, 0.3)';
              }}
              onMouseLeave={(e) => {
                e.target.style.transform = 'scale(1)';
                e.target.style.boxShadow = '0 4px 12px rgba(0, 0, 0, 0.2)';
              }}
            >
              <span style={{ fontSize: '24px' }}>📥</span>
              Install App Now
            </button>
            <p style={{ marginTop: '1rem', fontSize: '0.9rem', opacity: 0.85 }}>
              Works on Android, iOS, Windows, and Mac
            </p>
          </div>
        )}

        {/* Khankha Events Carousel */}
        <div style={{ margin: '3rem 0' }}>
          <h2 style={{ textAlign: 'center', marginBottom: '1.5rem', fontSize: '2rem', color: '#1e293b' }}>
            Important Events at Khankha e Sarwari
          </h2>
          <EventCarousel />
        </div>

        <div className="about-section">
          <h2>About Us</h2>
          <p>{orgInfo.description}</p>
          <p><strong>Khankha:</strong> {orgInfo.khankha}</p>
        </div>

        <div className="about-section">
          <h2>Our Mission</h2>
          <p>{orgInfo.mission}</p>
        </div>

        <div className="about-section">
          <h2>Contact Information</h2>
          <p><strong>Email:</strong> <a href={`mailto:${orgInfo.contact.email}`}>{orgInfo.contact.email}</a></p>
          {orgInfo.contact.website && (
            <p><strong>Website:</strong> <a href={orgInfo.contact.website} target="_blank" rel="noopener noreferrer">{orgInfo.contact.website}</a></p>
          )}
        </div>
      </div>
    </div>
  );
}

export default Home;
