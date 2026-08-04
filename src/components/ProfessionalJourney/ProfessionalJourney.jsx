import "./ProfessionalJourney.css";
import {
  Briefcase,
  TrendingUp,
  Building2,
  ShieldCheck,
  Users,
  Calculator,
  ClipboardCheck,
} from "lucide-react";

const experiences = [
  {
    company: "We One Facilities Management LLC",
    location: "Dubai, United Arab Emirates",
    duration: "May 2023 – Jan 2026",
    icon: <Building2 size={28} />,
    positions: [
      {
        title: "Assistant Facility Manager",
        badge: "Promoted",
        description: [
          "Promoted in recognition of consistent performance, leadership and operational excellence.",
          "Coordinated day-to-day facility operations across client locations.",
          "Managed staff deployment, scheduling and operational reporting.",
          "Worked closely with management to improve workflow efficiency and service quality.",
          "Handled client coordination, documentation and administrative responsibilities.",
          "Supported business operations while maintaining compliance with company standards.",
        ],
      },
      {
        title: "Receptionist / Security Officer",
        badge: "Joined",
        description: [
          "Joined MBR MORO HUB, Mohammed Bin Rashid Al Maktoum Solar Park as Receptionist / Security Officer.",
          "Managed front desk operations and visitor management.",
          "Maintained access control and security procedures.",
          "Prepared reports and handled daily operational documentation.",
          "Provided customer service while ensuring safety and professional communication.",
        ],
      },
    ],
  },

  {
    company: "Crystal Time Engineering Solution Pvt. Ltd.",
    location: "Kathmandu, Nepal",
    duration: "Sep 2020 – Oct 2022",
    icon: <TrendingUp size={28} />,
    positions: [
      {
        title: "Supervisor",
        badge: "Promoted",
        description: [
          "Promoted from Sales Assistant based on performance and leadership.",
          "Led daily sales operations and coordinated team activities.",
          "Monitored targets and prepared sales reports.",
          "Maintained client relationships and resolved customer issues.",
          "Supported management in planning and execution of business operations.",
        ],
      },
      {
        title: "Sales Assistant",
        badge: "Joined",
        description: [
          "Supported sales and customer service activities.",
          "Prepared quotations and maintained client records.",
          "Assisted in business development initiatives.",
          "Handled inventory coordination and documentation.",
        ],
      },
    ],
  },

  {
    company: "Aakash Jyoti Construction Pvt. Ltd.",
    location: "Nepal",
    duration: "Dec 2019 – May 2020",
    icon: <ClipboardCheck size={28} />,
    positions: [
      {
        title: "Assistant Project Manager",
        description: [
          "Supported project planning and execution.",
          "Prepared project documentation and reports.",
          "Coordinated between management, contractors and project teams.",
          "Assisted in project scheduling and resource planning.",
        ],
      },
    ],
  },

  {
    company: "Civil Action Security Pvt. Ltd.",
    location: "Nepal",
    duration: "Aug 2017 – Oct 2019",
    icon: <Calculator size={28} />,
    positions: [
      {
        title: "Accountant",
        description: [
          "Managed accounting records and financial documentation.",
          "Prepared invoices, vouchers and payment records.",
          "Performed bank reconciliation and bookkeeping.",
          "Supported budgeting and financial reporting activities.",
        ],
      },
    ],
  },

  {
    company: "Election Commission Nepal",
    location: "Nepal",
    duration: "Apr 2017 – Jul 2017",
    icon: <Users size={28} />,
    positions: [
      {
        title: "Election Officer",
        description: [
          "Supported election operations and administrative activities.",
          "Maintained official documentation and records.",
          "Assisted citizens during the election process.",
          "Worked with government officials to ensure smooth operations.",
        ],
      },
    ],
  },
];

function ProfessionalJourney() {
  return (
    <section className="professional-journey" id="experience">
      <div className="journey-header">
        <span className="section-tag">PROFESSIONAL JOURNEY</span>

        <h2>Career Timeline</h2>

        <div className="heading-line"></div>

        <p className="section-description">
          My professional journey reflects continuous growth, leadership,
          adaptability and commitment to delivering measurable results across
          business administration, operations, customer service, finance and
          project coordination.
        </p>
      </div>

      <div className="timeline">
        {experiences.map((job, index) => (
          <div className="timeline-item" key={index}>
            <div className="timeline-dot">
              {job.icon}
            </div>

            <div className="timeline-card">

              <div className="timeline-company">
                <h3>{job.company}</h3>

                <span>{job.duration}</span>

                <p>{job.location}</p>
              </div>

              {job.positions.map((position, idx) => (
                <div className="position-block" key={idx}>
                  <div className="position-header">

                    <h4>{position.title}</h4>

                    {position.badge && (
                      <span className="promotion-badge">
                        {position.badge}
                      </span>
                    )}

                  </div>

                  <ul>
                    {position.description.map((point, i) => (
                      <li key={i}>
                        <ShieldCheck size={16} />
                        <span>{point}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}

            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default ProfessionalJourney;