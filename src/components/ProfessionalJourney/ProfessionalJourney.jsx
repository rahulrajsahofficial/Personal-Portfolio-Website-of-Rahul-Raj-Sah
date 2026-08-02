import "./ProfessionalJourney.css";
import { motion } from "framer-motion";

export default function ProfessionalJourney() {
  return (
    <section className="professional-journey" id="experience">

      <div className="journey-header">

        <span className="section-tag">
          PROFESSIONAL JOURNEY
        </span>

        <h2>
          Building Experience Through Growth
        </h2>

        <div className="heading-line"></div>

        <p className="journey-description">
          My professional journey has been shaped by continuous learning,
          operational excellence, customer service and business administration.
          Every experience has strengthened my ability to adapt, collaborate and
          deliver meaningful results.
        </p>

      </div>

      <div className="journey-chapter">

        <span className="chapter-number">
          CHAPTER 01
        </span>

        <h3>
          Professional Experience
        </h3>

        <p className="chapter-intro">
          Working in operations and facility management has enabled me to
          develop strong communication, leadership, administrative and
          problem-solving abilities while serving diverse clients in a
          professional environment.
        </p>

        <div className="career-timeline">

          <motion.div
            className="career-card"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: .6 }}
            viewport={{ once: true }}
          >

            <h4>Receptionist / Security Officer</h4>

            <span className="company">
              We One Facilities Management LLC • United Arab Emirates
            </span>

            <ul>

              <li>
                Delivered professional front-desk and customer support services.
              </li>

              <li>
                Coordinated visitor management and daily administrative
                operations.
              </li>

              <li>
                Maintained documentation, reporting and operational compliance.
              </li>

              <li>
                Worked collaboratively with multicultural teams to ensure
                excellent customer experience.
              </li>

              <li>
                Demonstrated professionalism, integrity and effective
                communication under pressure.
              </li>

            </ul>

            <div className="business-value">

              <strong>
                Business Value Delivered
              </strong>

              <p>
                Strengthened organizational efficiency through professional
                administration, operational discipline, customer engagement and
                continuous process improvement.
              </p>

            </div>

          </motion.div>

        </div>

      </div>

      <div className="career-highlights">

        <div className="journey-header">

          <span className="section-tag">
            PROFESSIONAL SNAPSHOT
          </span>

          <h2>
            Areas of Expertise
          </h2>

          <div className="heading-line"></div>

        </div>

        <div className="highlights-grid">

          <div className="highlight-card">

            <div className="highlight-icon">📊</div>

            <h4>Business Administration</h4>

            <p>
              Business operations, administration and organizational
              coordination.
            </p>

          </div>

          <div className="highlight-card">

            <div className="highlight-icon">💼</div>

            <h4>Operations Management</h4>

            <p>
              Daily operations, process optimization and customer experience.
            </p>

          </div>

          <div className="highlight-card">

            <div className="highlight-icon">📈</div>

            <h4>Finance & Accounting</h4>

            <p>
              Financial awareness, accounting fundamentals and analytical
              decision-making.
            </p>

          </div>

          <div className="highlight-card">

            <div className="highlight-icon">🤝</div>

            <h4>Leadership & Teamwork</h4>

            <p>
              Collaboration, communication and continuous professional
              development.
            </p>

          </div>

        </div>

      </div>

    </section>
  );
}