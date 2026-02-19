import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';

function Navigation() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();

  const isActive = (path) => location.pathname === path;

  return (
    <nav className="navbar">
      <div className="container">
        <div className="nav-content">
          <Link to="/" className="nav-brand">
            Welcome to Faizan e Sarwari <br/>
            (فیضان سروائی)<br/>
            <span style={{ fontSize: '0.8rem', color: '#64748b' }}>
              A Spiritual Journey of Love and Devotion
            </span>
          </Link>
          
          <button 
            className="mobile-menu-btn"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            ☰
          </button>

          <ul className={`nav-links ${mobileMenuOpen ? 'active' : ''}`}>
            <li>
              <Link 
                to="/" 
                className={isActive('/') ? 'active' : ''}
                onClick={() => setMobileMenuOpen(false)}
              >
                Home
              </Link>
            </li>
            <li>
              <Link 
                to="/books" 
                className={isActive('/books') ? 'active' : ''}
                onClick={() => setMobileMenuOpen(false)}
              >
                Books
              </Link>
            </li>
            <li>
              <Link 
                to="/events" 
                className={isActive('/events') ? 'active' : ''}
                onClick={() => setMobileMenuOpen(false)}
              >
                Events
              </Link>
            </li>
            <li>
              <Link 
                to="/gallery" 
                className={isActive('/gallery') ? 'active' : ''}
                onClick={() => setMobileMenuOpen(false)}
              >
                Gallery
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navigation;
