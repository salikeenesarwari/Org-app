import { orgInfo } from '../data/orgInfo';

function Home() {
  return (
    <div className="page">
      <div className="container">
        <div className="page-header" style={{ display: 'flex', alignItems: 'center', gap: '2rem', flexWrap: 'wrap' }}>
          {orgInfo.profileImage && (
            <img 
              src={orgInfo.profileImage} 
              alt={orgInfo.name}
              style={{ 
                width: '150px', 
                height: '150px', 
                borderRadius: '50%', 
                objectFit: 'cover',
                border: '4px solid #2563eb',
                boxShadow: '0 4px 12px rgba(37, 99, 235, 0.3)'
              }}
              onError={(e) => {
                e.target.style.display = 'none';
              }}
            />
          )}
          <div style={{ flex: 1 }}>
            <h1 className="page-title">{orgInfo.name}</h1>
            <p className="page-subtitle">{orgInfo.tagline}</p>
            {orgInfo.Shaikh_e_Tariqat && (
              <p className="page-subtitle" style={{ marginTop: '0.5rem', fontSize: '1.1rem', color: '#2563eb' }}>
                <strong>Shaikh-e-Tariqat: </strong>{orgInfo.Shaikh_e_Tariqat}
              </p>
            )}
          </div>
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
