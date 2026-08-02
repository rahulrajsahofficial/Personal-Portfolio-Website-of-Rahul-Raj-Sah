import "./Certifications.css";

const certifications = [
  {
    title: "Bachelor of Business Administration",
    issuer: "Jaipur National University",
    year: "2022",
    description:
      "Completed a comprehensive undergraduate program covering business administration, finance, accounting, marketing, human resources and operations management."
  },
  {
    title: "Digital Marketing",
    issuer: "Professional Certification",
    year: "Certified",
    description:
      "Acquired practical knowledge of digital marketing strategies, branding, social media marketing and customer engagement."
  },
  {
    title: "Life Insurance Agent",
    issuer: "Licensed Certification",
    year: "Certified",
    description:
      "Completed professional training in insurance advisory, customer relationship management and financial product consultation."
  },
  {
    title: "Continuous Learning",
    issuer: "Professional Development",
    year: "Ongoing",
    description:
      "Continuously enhancing knowledge through business research, online learning and industry best practices."
  }
];

function Certifications() {
  return (
    <section className="certifications" id="certifications">

      <div className="certifications-header">

        <span className="section-tag">
          CERTIFICATIONS
        </span>

        <h2>Professional Certifications</h2>

        <div className="heading-line"></div>

        <p className="section-description">
          Continuous learning has always been an essential part of my
          professional journey. These certifications demonstrate my commitment
          to expanding my knowledge and developing practical business skills.
        </p>

      </div>

      <div className="certification-grid">

        {certifications.map((item, index) => (

          <div className="certificate-card" key={index}>

            <div className="certificate-top">

              <div className="certificate-icon">
                📜
              </div>

              <span className="certificate-year">
                {item.year}
              </span>

            </div>

            <h3>{item.title}</h3>

            <h4>{item.issuer}</h4>

            <p>{item.description}</p>

          </div>

        ))}

      </div>

    </section>
  );
}

export default Certifications;