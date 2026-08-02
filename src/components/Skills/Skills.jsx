import "./Skills.css";

function Skills() {
  return (
    <section className="skills" id="skills">

      {/* ==========================================
          SECTION HEADER
      ========================================== */}

      <div className="skills-header">

        <p className="section-tag">
          PROFESSIONAL SKILLS & TECHNICAL PROFICIENCY
        </p>

        <h2>
          Skills That Drive Business Success
        </h2>

        <div className="heading-line"></div>

        <p className="skills-description">
          A combination of business knowledge, technical proficiency and
          interpersonal abilities developed through academic learning and
          professional experience across administration, operations,
          finance and customer-focused environments.
        </p>

      </div>

      {/* ==========================================
          SKILLS GRID
      ========================================== */}

      <div className="skills-grid">

        {/* Business Management */}

        <div className="skill-card">

          <h3>Business Management</h3>

          <div className="skill-tags">

            <span>Administration</span>
            <span>Operations</span>
            <span>Leadership</span>
            <span>Team Coordination</span>
            <span>Office Management</span>
            <span>Business Strategy</span>

          </div>

        </div>

        {/* Finance */}

        <div className="skill-card">

          <h3>Finance & Accounting</h3>

          <div className="skill-tags">

            <span>Finance</span>
            <span>Accounting</span>
            <span>Financial Reporting</span>
            <span>Budgeting</span>
            <span>Business Analysis</span>
            <span>Record Management</span>

          </div>

        </div>

        {/* Digital */}

        <div className="skill-card">

          <h3>Digital & Technical</h3>

          <div className="skill-tags">

            <span>Microsoft Office</span>
            <span>MS Excel</span>
            <span>MS Word</span>
            <span>PowerPoint</span>
            <span>Digital Marketing</span>
            <span>Documentation</span>

          </div>

        </div>

        {/* Professional */}

        <div className="skill-card">

          <h3>Professional Strengths</h3>

          <div className="skill-tags">

            <span>Communication</span>
            <span>Problem Solving</span>
            <span>Critical Thinking</span>
            <span>Adaptability</span>
            <span>Time Management</span>
            <span>Customer Service</span>

          </div>

        </div>

      </div>

    </section>
  );
}

export default Skills;