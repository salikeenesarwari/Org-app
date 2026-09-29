function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <p>&copy; {new Date().getFullYear()} Faizan-e-Sarwari. All rights reserved.</p>
        <p style={{ marginTop: '0.5rem' }}>
          Built by Khadim-e-Sarwar | <a href="mailto:info@faizanesarwari.com">Contact Us</a>
        </p>
      </div>
    </footer>
  );
}

export default Footer;
