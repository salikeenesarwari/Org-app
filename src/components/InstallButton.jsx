import { useState, useEffect } from 'react';

function InstallButton() {
  const [deferredPrompt, setDeferredPrompt] = useState(null);
  const [showInstall, setShowInstall] = useState(false);

  useEffect(() => {
    const handleBeforeInstallPrompt = (e) => {
      e.preventDefault();
      setDeferredPrompt(e);
      setShowInstall(true);
    };

    window.addEventListener('beforeinstallprompt', handleBeforeInstallPrompt);

    return () => {
      window.removeEventListener('beforeinstallprompt', handleBeforeInstallPrompt);
    };
  }, []);

  const handleInstallClick = async () => {
    if (!deferredPrompt) {
      return;
    }

    deferredPrompt.prompt();
    const { outcome } = await deferredPrompt.userChoice;
    
    if (outcome === 'accepted') {
      setShowInstall(false);
    }
    
    setDeferredPrompt(null);
  };

  if (!showInstall) {
    return null;
  }

  return (
    <button
      onClick={handleInstallClick}
      style={{
        position: 'fixed',
        bottom: '20px',
        right: '20px',
        backgroundColor: '#10b981',
        color: 'white',
        border: 'none',
        borderRadius: '50px',
        padding: '15px 25px',
        fontSize: '16px',
        fontWeight: '600',
        cursor: 'pointer',
        boxShadow: '0 4px 12px rgba(16, 185, 129, 0.4)',
        zIndex: 1000,
        display: 'flex',
        alignItems: 'center',
        gap: '8px',
        transition: 'all 0.3s ease'
      }}
      onMouseEnter={(e) => {
        e.target.style.transform = 'scale(1.05)';
        e.target.style.boxShadow = '0 6px 16px rgba(16, 185, 129, 0.5)';
      }}
      onMouseLeave={(e) => {
        e.target.style.transform = 'scale(1)';
        e.target.style.boxShadow = '0 4px 12px rgba(16, 185, 129, 0.4)';
      }}
    >
      <span style={{ fontSize: '20px' }}>📥</span>
      Install App
    </button>
  );
}

export default InstallButton;
