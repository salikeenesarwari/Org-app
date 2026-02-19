import { books } from '../data/books';

function Books() {
  return (
    <div className="page">
      <div className="container">
        <div className="page-header">
          <h1 className="page-title">Books by Hazrat Sultan Sarwar Ali Shah</h1>
          <p className="page-subtitle">Spiritual works illuminating the path of Tasawwuf and Divine Love</p>
        </div>

        <div className="card-grid">
          {books.map((book) => (
            <div key={book.id} className="card">
              <img 
                src={book.cover} 
                alt={book.title}
                className="card-image"
                onError={(e) => {
                  e.target.src = 'https://via.placeholder.com/300x400/2563eb/ffffff?text=Book+Cover';
                }}
              />
              <div className="card-content">
                <h3 className="card-title">{book.title}</h3>
                <p className="card-text">{book.description}</p>
                {book.category && (
                  <p className="card-meta">📚 Category: {book.category}</p>
                )}
                {book.language && (
                  <p className="card-meta">🌐 Language: {book.language}</p>
                )}
                {book.status && (
                  <p className="card-meta" style={{ color: '#f59e0b', fontWeight: 'bold' }}>
                    ⏳ Status: {book.status}
                  </p>
                )}
                <div style={{ display: 'flex', gap: '0.5rem', marginTop: '1rem', flexWrap: 'wrap' }}>
                  {book.file ? (
                    <a 
                      href={book.file}
                      download
                      className="btn"
                      style={{ 
                        textDecoration: 'none'
                      }}
                    >
                      📥 Download Book
                    </a>
                  ) : book.status === "Coming Soon" ? (
                    <span className="btn" style={{ backgroundColor: '#94a3b8', cursor: 'not-allowed' }}>
                      🔜 Coming Soon
                    </span>
                  ) : null}
                  {book.link && book.link !== "#" && (
                    <a href={book.link} target="_blank" rel="noopener noreferrer" className="btn btn-secondary">
                      View Details
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Books;
