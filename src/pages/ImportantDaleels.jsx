import { importantDaleels } from '../data/importantDaleels';

function ImportantDaleels() {
  return (
    <div className="page">
      <div className="container">
        <div className="page-header">
          <h1 className="page-title">Important Daleels</h1>
          <p className="page-subtitle">Essential proofs and evidences from Islamic sources</p>
        </div>

        <div className="card-grid">
          {importantDaleels.map((daleel) => (
            <div key={daleel.id} className="card">
              <div className="card-content">
                <h3 className="card-title">{daleel.title}</h3>
                <p className="card-text">{daleel.description}</p>
                {daleel.language && (
                  <p className="card-meta">🌐 Language: {daleel.language}</p>
                )}
                {daleel.status && (
                  <p className="card-meta" style={{ color: '#f59e0b', fontWeight: 'bold' }}>
                    ⏳ Status: {daleel.status}
                  </p>
                )}
                <div style={{ display: 'flex', gap: '0.5rem', marginTop: '1rem', flexWrap: 'wrap' }}>
                  {daleel.file ? (
                    <>
                      {daleel.readUrl ? (
                        <a 
                          href={daleel.readUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="btn"
                          style={{ 
                            backgroundColor: '#10b981',
                            textDecoration: 'none'
                          }}
                        >
                          📖 Read Now
                        </a>
                      ) : null}
                      <a 
                        href={daleel.file}
                        download
                        className="btn"
                        style={{ 
                          textDecoration: 'none',
                          backgroundColor: '#2563eb'
                        }}
                      >
                        📥 Download
                      </a>
                    </>
                  ) : daleel.status === "Coming Soon" ? (
                    <span className="btn" style={{ backgroundColor: '#94a3b8', cursor: 'not-allowed' }}>
                      🔜 Coming Soon
                    </span>
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

export default ImportantDaleels;
