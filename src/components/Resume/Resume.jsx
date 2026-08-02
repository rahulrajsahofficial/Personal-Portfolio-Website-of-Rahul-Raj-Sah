import "./Resume.css";
import resumePDF from "../../assets/resume/Rahul_Raj_Sah_Resume.pdf";

function Resume() {
  return (
    <section className="resume-section" id="resume">

      <div className="resume-heading">

        <span className="section-tag">
          PROFESSIONAL RESUME
        </span>

        <h2>
          A Complete Overview of My Professional Profile
        </h2>

        <div className="heading-line"></div>

        <p>
          My resume provides a comprehensive overview of my academic background,
          professional experience, technical competencies, certifications and
          career aspirations. It reflects my commitment to continuous learning,
          operational excellence and creating value for organizations.
        </p>

      </div>

      <div className="resume-container">

        <div className="resume-preview">

          <div className="resume-paper">

            <h3>Rahul Raj Sah</h3>

            <span>
              Business Administration Graduate
            </span>

            <hr />

            <ul>

              <li>Business Administration</li>

              <li>Finance & Accounting</li>

              <li>Operations Management</li>

              <li>Human Resource Management</li>

              <li>Marketing & Strategy</li>

              <li>Leadership & Team Collaboration</li>

            </ul>

            <div className="paper-footer">
              Professional Resume
            </div>

          </div>

        </div>

        <div className="resume-content">

          <h3>
            Why Download My Resume?
          </h3>

          <p>
            My resume contains detailed information about my education,
            professional journey, technical skills, certifications and business
            competencies. It also highlights my experience working in dynamic,
            customer-oriented environments while maintaining high standards of
            professionalism and operational efficiency.
          </p>

          <div className="resume-highlights">

            <div className="highlight">
              <strong>Education</strong>
              <span>BBA • Jaipur National University</span>
            </div>

            <div className="highlight">
              <strong>Experience</strong>
              <span>Administration • Operations • Security</span>
            </div>

            <div className="highlight">
              <strong>Core Areas</strong>
              <span>Finance • Accounting • Management</span>
            </div>

            <div className="highlight">
              <strong>Career Goal</strong>
              <span>Business Leadership & Growth</span>
            </div>

          </div>

          <a
            href={resumePDF}
            download
            className="download-btn"
          >
            Download Resume
          </a>

        </div>

      </div>

    </section>
  );
}

export default Resume;