import { useState } from 'react';
import { khankhaEvents } from '../data/khankhaEvents';

function Gallery() {
  const [selectedImage, setSelectedImage] = useState(null);

  return (
    <div className="page">
      <div className="container">
        <div className="page-header">
          <h1 className="page-title">Photo Gallery</h1>
          <p className="page-subtitle">Moments captured through the years</p>
        </div>

        <div className="gallery-grid">
          {khankhaEvents.map((image) => (
            <div 
              key={image.id} 
              className="gallery-item"
              onClick={() => setSelectedImage(image)}
            >
              <img 
                src={image.image} 
                alt={image.title}
                onError={(e) => {
                  e.target.src = 'https://via.placeholder.com/400x400/2563eb/ffffff?text=Photo';
                }}
              />
            </div>
          ))}
        </div>

        {selectedImage && (
          <div 
            style={{
              position: 'fixed',
              top: 0,
              left: 0,
              right: 0,
              bottom: 0,
              backgroundColor: 'rgba(0,0,0,0.9)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              zIndex: 1000,
              padding: '2rem',
            }}
            onClick={() => setSelectedImage(null)}
          >
            <div style={{ maxWidth: '90%', maxHeight: '90%' }}>
              <img 
                src={selectedImage.image} 
                alt={selectedImage.title}
                style={{ 
                  maxWidth: '100%', 
                  maxHeight: '80vh',
                  borderRadius: '8px' 
                }}
              />
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default Gallery;
