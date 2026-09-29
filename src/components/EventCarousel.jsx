import { useState, useEffect } from 'react';
import { khankhaEvents } from '../data/khankhaEvents';

function EventCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => 
        prevIndex === khankhaEvents.length - 1 ? 0 : prevIndex + 1
      );
    }, 4000); // Change image every 4 seconds

    return () => clearInterval(interval);
  }, []);

  const goToNext = () => {
    setCurrentIndex(currentIndex === khankhaEvents.length - 1 ? 0 : currentIndex + 1);
  };

  const goToPrevious = () => {
    setCurrentIndex(currentIndex === 0 ? khankhaEvents.length - 1 : currentIndex - 1);
  };

  return (
    <div style={{
      position: 'relative',
      width: '100%',
      maxWidth: '800px',
      margin: '2rem auto',
      borderRadius: '12px',
      overflow: 'hidden',
      boxShadow: '0 8px 24px rgba(0, 0, 0, 0.15)',
      backgroundColor: '#fff'
    }}>
      {/* Image */}
      <div style={{ position: 'relative', paddingBottom: '56.25%' }}>
        <img
          src={khankhaEvents[currentIndex].image}
          alt={khankhaEvents[currentIndex].title}
          style={{
            position: 'absolute',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
            objectFit: 'cover'
          }}
          onError={(e) => {
            e.target.style.display = 'none';
          }}
        />
      </div>

      {/* Caption */}
      <div style={{
        padding: '1rem',
        backgroundColor: 'rgba(16, 185, 129, 0.95)',
        color: 'white',
        textAlign: 'center'
      }}>
        <h3 style={{ margin: 0, fontSize: '1.2rem', fontWeight: 'bold' }}>
          {khankhaEvents[currentIndex].title}
        </h3>
        <p style={{ margin: '0.5rem 0 0 0', fontSize: '0.9rem', opacity: 0.95 }}>
          {khankhaEvents[currentIndex].description}
        </p>
      </div>

      {/* Navigation Arrows */}
      <button
        onClick={goToPrevious}
        style={{
          position: 'absolute',
          top: '50%',
          left: '10px',
          transform: 'translateY(-50%)',
          backgroundColor: 'rgba(255, 255, 255, 0.9)',
          border: 'none',
          borderRadius: '50%',
          width: '40px',
          height: '40px',
          fontSize: '20px',
          cursor: 'pointer',
          boxShadow: '0 2px 8px rgba(0, 0, 0, 0.2)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          color: '#10b981',
          fontWeight: 'bold',
          transition: 'all 0.3s ease'
        }}
        onMouseEnter={(e) => {
          e.target.style.backgroundColor = '#10b981';
          e.target.style.color = 'white';
          e.target.style.transform = 'translateY(-50%) scale(1.1)';
        }}
        onMouseLeave={(e) => {
          e.target.style.backgroundColor = 'rgba(255, 255, 255, 0.9)';
          e.target.style.color = '#10b981';
          e.target.style.transform = 'translateY(-50%) scale(1)';
        }}
      >
        ‹
      </button>

      <button
        onClick={goToNext}
        style={{
          position: 'absolute',
          top: '50%',
          right: '10px',
          transform: 'translateY(-50%)',
          backgroundColor: 'rgba(255, 255, 255, 0.9)',
          border: 'none',
          borderRadius: '50%',
          width: '40px',
          height: '40px',
          fontSize: '20px',
          cursor: 'pointer',
          boxShadow: '0 2px 8px rgba(0, 0, 0, 0.2)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          color: '#10b981',
          fontWeight: 'bold',
          transition: 'all 0.3s ease'
        }}
        onMouseEnter={(e) => {
          e.target.style.backgroundColor = '#10b981';
          e.target.style.color = 'white';
          e.target.style.transform = 'translateY(-50%) scale(1.1)';
        }}
        onMouseLeave={(e) => {
          e.target.style.backgroundColor = 'rgba(255, 255, 255, 0.9)';
          e.target.style.color = '#10b981';
          e.target.style.transform = 'translateY(-50%) scale(1)';
        }}
      >
        ›
      </button>

      {/* Dots Indicator */}
      <div style={{
        position: 'absolute',
        bottom: '70px',
        left: '50%',
        transform: 'translateX(-50%)',
        display: 'flex',
        gap: '8px'
      }}>
        {khankhaEvents.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentIndex(index)}
            style={{
              width: currentIndex === index ? '24px' : '8px',
              height: '8px',
              borderRadius: '4px',
              border: 'none',
              backgroundColor: currentIndex === index ? 'white' : 'rgba(255, 255, 255, 0.5)',
              cursor: 'pointer',
              transition: 'all 0.3s ease'
            }}
          />
        ))}
      </div>
    </div>
  );
}

export default EventCarousel;
