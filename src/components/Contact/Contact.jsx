import "./Contact.css";

function Contact() {
  return (
    <section className="contact" id="contact">

      <div className="contact-header">

        <span className="section-tag">
          CONTACT
        </span>

        <h2>
          Let's Build Something Meaningful Together
        </h2>

        <div className="heading-line"></div>

        <p className="section-description">
          Whether you're looking for a dedicated professional, exploring
          collaboration opportunities or simply want to connect, I'd be
          delighted to hear from you.
        </p>

      </div>

      <div className="contact-container">

        <div className="contact-info">

          <div className="contact-card">
            <div className="contact-icon">📧</div>

            <div>
              <h3>Email</h3>
              <a href="mailto:rahulrajsah32@gmail.com">
                rahulrajsah32@gmail.com
              </a>
            </div>
          </div>

          <div className="contact-card">
            <div className="contact-icon">📱</div>

            <div>
              <h3>WhatsApp</h3>
              <a
                href="https://wa.me/+977 9819755300"
                target="_blank"
                rel="noopener noreferrer"
              >
                Let's Chat
              </a>
            </div>
          </div>

          <div className="contact-card">
            <div className="contact-icon">💼</div>

            <div>
              <h3>LinkedIn</h3>
              <a
                href="https://linkedin.com/rahulrajsah"
                target="_blank"x
                rel="noopener noreferrer"
              >
                View Profile
              </a>
            </div>
          </div>

          <div className="contact-card">
            <div className="contact-icon">📍</div>

            <div>
              <h3>Location</h3>
              <p>Kathmandu, Nepal</p>
            </div>
          </div>

        </div>

        <div className="contact-message">

          <h3>Available for Opportunities</h3>

          <p>
            I am open to opportunities in Business Administration,
            Operations, Finance, Human Resources, Business Development,
            Customer Success and Management roles.
          </p>

          <a
            href="mailto:rahulrajsah32@gmail.com"
            className="contact-btn"
          >
            Get In Touch
          </a>

        </div>

      </div>

    </section>
  );
}

export default Contact;