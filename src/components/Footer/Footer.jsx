import "./Footer.css";
import logo from "../../assets/logo/final-logo.png";
import resume from "../../assets/resume/Rahul_Raj_Sah_Resume.pdf";

import {
  FaEnvelope,
  FaWhatsapp,
  FaLinkedin,
  FaInstagram,
  FaFacebookF,
  FaXTwitter,
  FaLocationDot,
  FaDownload,
  FaArrowUp,
} from "react-icons/fa6";

function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="footer">

      <div className="footer-container">

        {/* ================= LEFT ================= */}

        <div className="footer-brand">

          <img src={logo} alt="Rahul Raj Sah Logo" />

          <h2>Rahul Raj Sah</h2>

          <p className="footer-tagline">
            Analyze • Innovate • Lead
          </p>

          <p className="footer-description">
            Business Administration Graduate passionate about Business
            Administration, Finance, Management, Operations, Leadership,
            Human Resources and Business Development. Dedicated to creating
            measurable value, solving business challenges and driving
            sustainable organizational growth.
          </p>

          <a
            href={resume}
            download
            className="footer-resume-btn"
          >
            <FaDownload />
            Download Resume
          </a>

        </div>

        {/* ================= CENTER ================= */}

        <div className="footer-links">

          <h3>Quick Links</h3>

          <ul>

            <li><a href="#home">Home</a></li>

            <li><a href="#about">About</a></li>

            <li><a href="#education">Education</a></li>

            <li><a href="#experience">Experience</a></li>

            <li><a href="#projects">Projects</a></li>

            <li><a href="#skills">Skills</a></li>

            <li><a href="#contact">Contact</a></li>

          </ul>

        </div>

        {/* ================= RIGHT ================= */}

        <div className="footer-contact">

          <h3>Connect With Me</h3>

          <a
            href="mailto:rahulrajsah32@gmail.com"
            className="footer-contact-item"
          >
            <FaEnvelope />
            <span>rahulrajsah32@gmail.com</span>
          </a>

          <a
            href="https://wa.me/9779819755300"
            target="_blank"
            rel="noopener noreferrer"
            className="footer-contact-item"
          >
            <FaWhatsapp />
            <span>+977 9819755300</span>
          </a>

          <div className="footer-contact-item">
            <FaLocationDot />
            <span>Kathmandu, Nepal</span>
          </div>

          <div className="footer-socials">

            <a
              href="https://www.instagram.com/rahulrajsah1998?igsh=NTQ3cGdxcWNlcWh2"
              target="_blank"
              rel="noopener noreferrer"
              title="Instagram"
            >
              <FaInstagram />
            </a>

            <a
              href="https://www.facebook.com/share/1D7wuocRjH/"
              target="_blank"
              rel="noopener noreferrer"
              title="Facebook"
            >
              <FaFacebookF />
            </a>

            <a
              href="#"
              title="LinkedIn (Coming Soon)"
            >
              <FaLinkedin />
            </a>

            <a
              href="#"
              title="X (Coming Soon)"
            >
              <FaXTwitter />
            </a>

          </div>

        </div>

      </div>

      {/* ================= BOTTOM ================= */}

      <div className="footer-bottom">

        <p>
          © {year} Rahul Raj Sah. All Rights Reserved.
        </p>

        <p className="footer-credit">
          Designed & Developed by <strong>Rahul Raj Sah</strong>
        </p>

        <a
          href="#home"
          className="back-to-top"
        >
          <FaArrowUp />
          <span>Back to Top</span>
        </a>

      </div>

    </footer>
  );
}

export default Footer;