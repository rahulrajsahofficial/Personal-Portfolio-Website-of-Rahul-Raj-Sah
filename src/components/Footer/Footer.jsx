import "./Footer.css";
import logo from "../../assets/logo/final-logo.png";

function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="footer">

      <div className="footer-container">

        <div className="footer-brand">

          <img src={logo} alt="Rahul Raj Sah Logo" />

          <h2>Rahul Raj Sah</h2>

          <p className="footer-tagline">
            Analyze • Innovate • Lead
          </p>

          <p className="footer-description">
            Business Administration Graduate passionate about
            Finance, Management, Operations, Leadership and
            Business Development. Dedicated to creating value,
            solving business challenges and driving sustainable growth.
          </p>

        </div>

        <div className="footer-links">

          <h3>Quick Links</h3>

          <ul>

            <li><a href="#home">Home</a></li>

            <li><a href="#about">About</a></li>

            <li><a href="#journey">Journey</a></li>

            <li><a href="#education">Education</a></li>

            <li><a href="#competencies">Competencies</a></li>

            <li><a href="#projects">Projects</a></li>

            <li><a href="#contact">Contact</a></li>

          </ul>

        </div>

        <div className="footer-contact">

          <h3>Contact</h3>

          <p>📧 rahulrajsah32@gmail.com</p>

          <p>📍 United Arab Emirates</p>

          <p>🎓 Jaipur National University</p>

          <p>💼 Business Administration Graduate</p>

        </div>

      </div>

      <div className="footer-bottom">

        <p>
          © {year} Rahul Raj Sah. All Rights Reserved.
        </p>

        <a href="#home" className="back-to-top">
          ↑ Back to Top
        </a>

      </div>

    </footer>
  );
}

export default Footer;