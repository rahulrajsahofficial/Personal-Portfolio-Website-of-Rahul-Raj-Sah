import "./Achievements.css";

const achievements = [
  {
    year: "2022",
    title: "Bachelor of Business Administration",
    subtitle: "Jaipur National University, Rajasthan",
    description:
      "Successfully completed a Bachelor of Business Administration with specialization across finance, accounting, management, marketing and business strategy, building a strong foundation for a professional business career."
  },
  {
    year: "Professional",
    title: "International Work Experience",
    subtitle: "United Arab Emirates",
    description:
      "Gained valuable professional experience while working in the UAE in customer-facing operational roles, strengthening communication, discipline, professionalism and adaptability within multicultural environments."
  },
  {
    year: "Leadership",
    title: "District Level Cricket Player",
    subtitle: "Teamwork & Leadership",
    description:
      "Represented at district level cricket competitions, developing leadership, teamwork, strategic thinking and the ability to perform under pressure."
  },
  {
    year: "Community",
    title: "Volunteer Experience",
    subtitle: "Social Contribution",
    description:
      "Participated in community engagement and volunteer activities, demonstrating commitment towards social responsibility, collaboration and positive community impact."
  },
  {
    year: "Growth",
    title: "Continuous Professional Development",
    subtitle: "Lifelong Learning",
    description:
      "Committed to continuous learning through certifications, business research and practical experience to enhance professional knowledge and leadership capabilities."
  }
];

function Achievements() {
  return (
    <section className="achievements" id="achievements">
      <div className="achievements-header">

        <span className="section-tag">
          ACHIEVEMENTS
        </span>

        <h2>Milestones & Professional Growth</h2>

        <div className="heading-line"></div>

        <p className="section-description">
          Every milestone has contributed to my personal and professional
          development, shaping my leadership mindset, business knowledge and
          commitment to continuous growth.
        </p>

      </div>

      <div className="timeline">

        {achievements.map((item, index) => (

          <div className="timeline-item" key={index}>

            <div className="timeline-dot"></div>

            <div className="timeline-content">

              <span className="timeline-year">
                {item.year}
              </span>

              <h3>{item.title}</h3>

              <h4>{item.subtitle}</h4>

              <p>{item.description}</p>

            </div>

          </div>

        ))}

      </div>

    </section>
  );
}

export default Achievements;