function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <p>&copy; {new Date().getFullYear()} Organization Name. All rights reserved.</p>
        <p style={{ marginTop: '0.5rem' }}>
          Built with ❤️ | <a href="mailto:info@organization.com">Contact Us</a>
        </p>
      </div>
    </footer>
  );
}

export default Footer;
