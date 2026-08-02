import "./BusinessProjects.css";

const projects = [
  {
    title: "Business Administration Capstone",
    category: "Academic Project",
    year: "2022",
    description:
      "Analyzed organizational structures, management practices, and strategic decision-making through business case studies, proposing practical solutions for operational improvement.",
    skills: [
      "Business Analysis",
      "Strategic Thinking",
      "Management",
      "Research"
    ]
  },
  {
    title: "Marketing Strategy Analysis",
    category: "Case Study",
    year: "2021",
    description:
      "Conducted market research and consumer behavior analysis to develop branding and promotional strategies for a hypothetical business, focusing on sustainable growth.",
    skills: [
      "Marketing",
      "Market Research",
      "Branding",
      "Consumer Behaviour"
    ]
  },
  {
    title: "Financial Planning & Budget Analysis",
    category: "Academic Project",
    year: "2021",
    description:
      "Prepared financial statements, budgeting exercises and investment evaluations while applying accounting principles and financial analysis techniques.",
    skills: [
      "Accounting",
      "Finance",
      "Budgeting",
      "Financial Analysis"
    ]
  },
  {
    title: "Operations & Process Improvement",
    category: "Business Study",
    year: "2022",
    description:
      "Evaluated business workflows and proposed process improvements to increase efficiency, optimize resources and improve organizational performance.",
    skills: [
      "Operations",
      "Process Improvement",
      "Leadership",
      "Planning"
    ]
  }
];

function BusinessProjects() {
  return (
    <section className="business-projects" id="projects">
      <div className="projects-header">

        <span className="section-tag">
          BUSINESS PROJECTS
        </span>

        <h2>Academic & Business Projects</h2>

        <div className="heading-line"></div>

        <p className="section-description">
          Throughout my academic journey, I worked on business case studies,
          financial analysis, strategic planning and management projects that
          strengthened my analytical thinking and problem-solving abilities.
        </p>

      </div>

      <div className="projects-grid">

        {projects.map((project, index) => (

          <div className="project-card" key={index}>

            <div className="project-top">

              <span className="project-category">
                {project.category}
              </span>

              <span className="project-year">
                {project.year}
              </span>

            </div>

            <h3>{project.title}</h3>

            <p>{project.description}</p>

            <div className="project-skills">

              {project.skills.map((skill, i) => (

                <span key={i}>
                  {skill}
                </span>

              ))}

            </div>

          </div>

        ))}

      </div>

    </section>
  );
}

export default BusinessProjects;