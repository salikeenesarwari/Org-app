import { useEffect, useState } from 'react';
import { useRegisterSW } from 'virtual:pwa-register/react';

function UpdateNotification() {
  const {
    needRefresh: [needRefresh, setNeedRefresh],
    updateServiceWorker,
  } = useRegisterSW({
    onRegistered(r) {
      console.log('SW Registered');
      // Check for updates every hour
      r && setInterval(() => {
        r.update();
      }, 60 * 60 * 1000); // Check every hour
    },
    onRegisterError(error) {
      console.log('SW registration error', error);
    },
  });

  const handleUpdate = () => {
    updateServiceWorker(true);
  };

  if (!needRefresh) {
    return null;
  }

  return (
    <div
      style={{
        position: 'fixed',
        bottom: '20px',
        left: '50%',
        transform: 'translateX(-50%)',
        backgroundColor: '#10b981',
        color: 'white',
        padding: '15px 25px',
        borderRadius: '8px',
        boxShadow: '0 4px 12px rgba(0, 0, 0, 0.3)',
        zIndex: 10000,
        display: 'flex',
        alignItems: 'center',
        gap: '15px',
        maxWidth: '90%',
        animation: 'slideUp 0.3s ease'
      }}
    >
      <span>🔄 New update available!</span>
      <div style={{ display: 'flex', gap: '10px' }}>
        <button
          onClick={handleUpdate}
          style={{
            backgroundColor: 'white',
            color: '#10b981',
            border: 'none',
            padding: '8px 16px',
            borderRadius: '5px',
            cursor: 'pointer',
            fontWeight: 'bold',
            fontSize: '14px'
          }}
        >
          Update Now
        </button>
        <button
          onClick={() => setNeedRefresh(false)}
          style={{
            backgroundColor: 'transparent',
            color: 'white',
            border: '1px solid white',
            padding: '8px 16px',
            borderRadius: '5px',
            cursor: 'pointer',
            fontSize: '14px'
          }}
        >
          Later
        </button>
      </div>
    </div>
  );
}

export default UpdateNotification;
