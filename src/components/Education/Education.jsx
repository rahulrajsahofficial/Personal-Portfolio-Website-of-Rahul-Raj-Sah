import "./Education.css";

function Education() {
  return (
    <section className="education" id="education">

      <div className="education-heading">

       <p className="section-tag">
  ACADEMICS & EDUCATIONAL FOUNDATION
</p>

<h2>
  Academics & Educational Foundation
</h2>

        <div className="heading-line"></div>

        <p className="section-description">
          My academic journey has provided a strong foundation in business,
          finance, accounting, management and analytical thinking, preparing me
          to contribute effectively in today's dynamic business environment.
        </p>

      </div>

      <div className="education-timeline">

        {/* BBA */}

        <div className="education-card">

          <h3>
            Bachelor of Business Administration (BBA)
          </h3>

          <h4>
            Jaipur National University, Rajasthan
            <p className="education-year">
    2019 – 2022
</p>
          </h4>

          <p className="education-location">
            Rajasthan, India
          </p>

          <div className="subject-tags">

            <span>Management</span>
            <span>Finance</span>
            <span>Accounting</span>
            <span>Marketing</span>
            <span>Operations</span>
            <span>Human Resources</span>
            <span>Business Strategy</span>

          </div>

          <p>
            Developed comprehensive knowledge of business administration,
            organizational management, financial analysis, accounting
            principles, marketing strategies and operational excellence through
            practical and theoretical learning.
          </p>

        </div>

        {/* Intermediate */}

        <div className="education-card">

          <h3>
            Intermediate (10+2)
          </h3>

          <h4>
            Happyland Higher Secondary College
            <p className="education-year">
    Completed • 2019
</p>
          </h4>

          <p className="education-location">
            Rajbiraj, Nepal
          </p>

          <div className="subject-tags">

            <span>Business Studies</span>
            <span>Business Mathematics</span>
            <span>Economics</span>
            <span>Accountancy</span>
            <span>Finance</span>
            <span>Marketing</span>
            <span>Management</span>

          </div>

          <p>
            Established a strong understanding of commerce, finance,
            mathematics, economics and business principles while developing
            analytical and problem-solving abilities.
          </p>

        </div>

        {/* SEE */}

        <div className="education-card">

          <h3>
            Secondary Education Examination (SEE)
          </h3>

          <h4>
            Gautam Shishu Sadan Secondary English Boarding School
            <p className="education-year">
    Completed • 2016
</p>
          </h4>

          <p className="education-location">
            Rajbiraj, Nepal
          </p>

          <p>
            Successfully completed secondary education with excellent academic
            performance while building a solid foundation in mathematics,
            communication, science and leadership.
          </p>

        </div>

      </div>

      <div className="academic-profile">

        <h3>
          Academic Foundation
        </h3>

        <div className="academic-grid">

          <div className="academic-card">
            <h4>Business Management</h4>
            <p>Administration, Leadership & Organizational Management</p>
          </div>

          <div className="academic-card">
            <h4>Finance & Accounting</h4>
            <p>Financial Analysis, Budgeting & Accounting Principles</p>
          </div>

          <div className="academic-card">
            <h4>Marketing</h4>
            <p>Consumer Behaviour, Branding & Market Research</p>
          </div>

          <div className="academic-card">
            <h4>Operations</h4>
            <p>Business Processes & Operational Efficiency</p>
          </div>

          <div className="academic-card">
            <h4>Professional Skills</h4>
            <p>Communication, Leadership & Team Collaboration</p>
          </div>

          <div className="academic-card">
            <h4>Career Objective</h4>
            <p>
              Committed to continuous learning and contributing to organizational
              growth through business excellence.
            </p>
          </div>

        </div>

      </div>

    </section>
  );
}

export default Education;