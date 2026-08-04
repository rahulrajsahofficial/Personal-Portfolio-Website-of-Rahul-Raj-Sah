import "./Contact.css";

import {
  FaWhatsapp,
  FaLinkedin,
  FaInstagram,
  FaFacebook,
  FaXTwitter,
} from "react-icons/fa6";

import {
  MdEmail,
  MdLocationOn,
} from "react-icons/md";

import { HiOutlineDocumentArrowDown } from "react-icons/hi2";

function Contact() {
  return (
    <section className="contact" id="contact">
      <div className="contact-header">
        <span className="section-tag">CONTACT</span>

        <h2>Let's Create Something Exceptional Together</h2>

        <div className="heading-line"></div>

        <p className="section-description">
          Whether you're looking for a dedicated professional, exploring
          collaboration opportunities, or simply want to connect, I'd be
          delighted to hear from you.
        </p>
      </div>

      <div className="contact-container">

        {/* LEFT SIDE */}

        <div className="contact-info">

          <div className="contact-card">
            <div className="contact-icon">
              <MdEmail />
            </div>

            <div>
              <h3>Email</h3>

              <a href="mailto:rahulrajsah32@gmail.com">
                rahulrajsah32@gmail.com
              </a>
            </div>
          </div>

          <div className="contact-card">
            <div className="contact-icon">
              <FaWhatsapp />
            </div>

            <div>
              <h3>WhatsApp</h3>

              <a
                href="https://wa.me/9779819755300"
                target="_blank"
                rel="noopener noreferrer"
              >
                +977 9819755300
              </a>
            </div>
          </div>

          <div className="contact-card">
  <div className="contact-icon">
    <FaLinkedin />
  </div>

  <div>
    <h3>LinkedIn</h3>

    <a
      href="https://www.linkedin.com/in/rahul-raj-sah-947b161bb"
      target="_blank"
      rel="noopener noreferrer"
    >
      Connect on LinkedIn
    </a>
  </div>
</div>

          <div className="contact-card">
            <div className="contact-icon">
              <FaInstagram />
            </div>

            <div>
              <h3>Instagram</h3>

              <a
                href="https://www.instagram.com/rahulrajsah1998?igsh=NTQ3cGdxcWNlcWh2"
                target="_blank"
                rel="noopener noreferrer"
              >
                @rahulrajsah1998
              </a>
            </div>
          </div>

          <div className="contact-card">
            <div className="contact-icon">
              <FaFacebook />
            </div>

            <div>
              <h3>Facebook</h3>

              <a
                href="https://www.facebook.com/share/1D7wuocRjH/"
                target="_blank"
                rel="noopener noreferrer"
              >
                View Profile
              </a>
            </div>
          </div>

          <div className="contact-card">
  <div className="contact-icon">
    <FaXTwitter />
  </div>

  <div>
    <h3>X (Twitter)</h3>

    <a
      href="https://x.com/RahulRajSah"
      target="_blank"
      rel="noopener noreferrer"
    >
      Follow on X
    </a>
  </div>
</div>

          <div className="contact-card">
            <div className="contact-icon">
              <MdLocationOn />
            </div>

            <div>
              <h3>Location</h3>

              <p>Kathmandu, Nepal</p>
            </div>
          </div>

        </div>

        {/* RIGHT SIDE */}

        <div className="contact-message">

          <h3>Available for Opportunities</h3>

          <p>
            I am actively seeking opportunities in Business Administration,
            Operations, Project Coordination, Human Resources, Finance,
            Customer Success, Administration, and Business Development. I am
            always excited to collaborate with forward-thinking organizations
            where I can create measurable value while continuously growing as a
            professional.
          </p>

          <div className="contact-buttons">

            <a
              href="mailto:rahulrajsah32@gmail.com"
              className="contact-btn"
            >
              Get In Touch
            </a>

          </div>

        </div>

      </div>
    </section>
  );
}

export default Contact;