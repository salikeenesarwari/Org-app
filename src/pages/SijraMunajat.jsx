import { sijraMunajat } from '../data/sijraMunajat';

function SijraMunajat() {
  return (
    <div className="page">
      <div className="container">
        <div className="page-header">
          <h1 className="page-title">Hussaini Qadri Sarwari Sijra Mubarak</h1>
          <p className="page-subtitle">Darood-e-Taj, Sijra, Fateha ka Darja, 11 Naam, Munajat</p>
        </div>

        <div className="card-grid">
          {sijraMunajat.map((item) => (
            <div key={item.id} className="card">
              <div className="card-content">
                <h3 className="card-title">{item.title}</h3>
                {item.language && (
                  <p className="card-meta">🌐 Language: {item.language}</p>
                )}
                <div style={{ display: 'flex', gap: '0.5rem', marginTop: '1rem', flexWrap: 'wrap' }}>
                  <a 
                    href={item.readUrl || '#'}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn"
                    style={{ 
                      backgroundColor: item.readUrl ? '#10b981' : '#94a3b8',
                      textDecoration: 'none',
                      cursor: item.readUrl ? 'pointer' : 'not-allowed'
                    }}
                    onClick={(e) => {
                      if (!item.readUrl) {
                        e.preventDefault();
                      }
                    }}
                  >
                    📖 Read Now
                  </a>
                  {item.file ? (
                    <a 
                      href={item.file}
                      download
                      className="btn"
                      style={{ 
                        textDecoration: 'none',
                        backgroundColor: '#2563eb'
                      }}
                    >
                      📥 Download
                    </a>
                  ) : null}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default SijraMunajat;
