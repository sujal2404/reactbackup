import "./Footer.css";

function Footer() {
  return (
    <footer className="footer">

      <div className="footer-container">

        {/* Brand */}
        <div className="footer-brand">

          <h2>🏠 Havyn</h2>

          <p>
            Helping you find a place you'll love to live.
            Discover your dream home with Havyn.
          </p>

          <div className="social-links">
            <a href="#">Facebook</a>
            <a href="#">Instagram</a>
            <a href="#">LinkedIn</a>
          </div>

        </div>

        {/* Quick Links */}
        <div className="footer-column">

          <h3>Quick Links</h3>

          <a href="#">Home</a>
          <a href="#">About Us</a>
          <a href="#">Properties</a>
          <a href="#">Our Team</a>
          <a href="#">Contact</a>

        </div>

        {/* Property Links */}
        <div className="footer-column">

          <h3>Properties</h3>

          <a href="#">Apartments</a>
          <a href="#">Villas</a>
          <a href="#">Luxury Homes</a>
          <a href="#">Commercial</a>
          <a href="#">For Rent</a>

        </div>

        {/* Contact */}
        <div className="footer-column">

          <h3>Contact Us</h3>

          <p>📍 Pune, Maharashtra</p>
          <p>📞 +91 98765 43210</p>
          <p>✉️ hello@havyn.com</p>

        </div>

      </div>

      {/* Bottom Footer */}

      <div className="footer-bottom">

        <p>
          © 2026 Havyn. All Rights Reserved.
        </p>

        <div>
          <a href="#">Privacy Policy</a>
          <a href="#">Terms & Conditions</a>
        </div>

      </div>

    </footer>
  );
}

export default Footer;