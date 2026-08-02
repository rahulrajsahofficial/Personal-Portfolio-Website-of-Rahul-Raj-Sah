import "./CoreCompetencies.css";

const competencies = [
  {
    icon: "💼",
    title: "Business Administration",
    description:
      "Strong foundation in business administration with knowledge of organizational management, planning, coordination and business operations."
  },
  {
    icon: "📊",
    title: "Finance & Accounting",
    description:
      "Knowledge of financial reporting, accounting principles, budgeting, cost analysis and financial decision-making."
  },
  {
    icon: "📈",
    title: "Business Strategy",
    description:
      "Ability to analyze business challenges, identify opportunities and contribute to strategic growth and organizational development."
  },
  {
    icon: "⚙️",
    title: "Operations Management",
    description:
      "Understanding of operational workflows, process optimization, resource utilization and continuous improvement."
  },
  {
    icon: "👥",
    title: "Human Resource Management",
    description:
      "Knowledge of recruitment, employee relations, organizational behavior and team management principles."
  },
  {
    icon: "📣",
    title: "Marketing",
    description:
      "Understanding of branding, consumer behavior, market research and digital marketing fundamentals."
  },
  {
    icon: "📁",
    title: "Project Coordination",
    description:
      "Capable of coordinating tasks, managing priorities and ensuring projects are completed efficiently."
  },
  {
    icon: "💻",
    title: "Microsoft Office Suite",
    description:
      "Proficient in Microsoft Excel, Word and PowerPoint for reporting, presentations, documentation and data analysis."
  },
  {
    icon: "🤝",
    title: "Leadership & Communication",
    description:
      "Strong interpersonal communication, teamwork, leadership and relationship-building skills developed through academic and professional experiences."
  },
  {
    icon: "🧠",
    title: "Problem Solving",
    description:
      "Analytical mindset with the ability to evaluate situations, identify solutions and make informed business decisions."
  },
  {
    icon: "🌍",
    title: "Cross-Cultural Adaptability",
    description:
      "Professional experience working in multicultural environments with the ability to collaborate effectively across diverse teams."
  },
  {
    icon: "🚀",
    title: "Continuous Learning",
    description:
      "Committed to personal and professional growth by continuously developing business knowledge, technical skills and leadership capabilities."
  }
];

function CoreCompetencies() {
  return (
    <section className="core-competencies" id="competencies">
      <div className="container">
        <div className="section-header">
          <span className="section-tag">
            CORE COMPETENCIES
          </span>

          <h2>Professional Expertise</h2>

          <div className="heading-line"></div>

          <p className="section-description">
            My expertise combines business knowledge, analytical thinking,
            leadership and operational excellence to deliver meaningful
            contributions across administration, finance, management and
            organizational development.
          </p>
        </div>

        <div className="competency-grid">
          {competencies.map((item, index) => (
            <div className="competency-card" key={index}>
              <div className="competency-icon">
                {item.icon}
              </div>

              <h3>{item.title}</h3>

              <p>{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default CoreCompetencies;