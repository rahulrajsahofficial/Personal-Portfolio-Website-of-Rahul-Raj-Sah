import "./About.css";
import { motion } from "framer-motion";
import {
  GraduationCap,
  BriefcaseBusiness,
  BadgeCheck,
  Calculator,
  Users,
  TrendingUp,
  Laptop,
} from "lucide-react";

import heroImage from "../../assets/images/hero.jpeg";

function About() {
  return (
    <section id="about" className="about">
      <div className="about-container">

        <motion.div
          className="about-image"
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
        >
          <img src={heroImage} alt="Rahul Raj Sah" />
        </motion.div>

        <motion.div
          className="about-content"
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
        >
          <span className="section-tag">ABOUT ME</span>

          <h2>Business Administration Graduate</h2>

          <p>
            I am Rahul Raj Sah, a Business Administration graduate with
            practical experience in operations, administration, customer
            service, facility management and business support. I enjoy
            improving processes, solving business problems and working with
            diverse teams.
          </p>

          <p>
            My objective is to build a successful career by combining
            analytical thinking, leadership, continuous learning and integrity
            while creating measurable value for every organization I work with.
          </p>

          <div className="about-highlights">

            <div>
              <GraduationCap size={24} />
              <span>BBA Graduate</span>
            </div>

            <div>
              <BriefcaseBusiness size={24} />
              <span>Operations & Administration</span>
            </div>

            <div>
              <BadgeCheck size={24} />
              <span>Professional Certifications</span>
            </div>

            <div>
              <Calculator size={24} />
              <span>Finance & Accounting</span>
            </div>

            <div>
              <Users size={24} />
              <span>Leadership & Teamwork</span>
            </div>

            <div>
              <TrendingUp size={24} />
              <span>Business Strategy</span>
            </div>

            <div>
              <Laptop size={24} />
              <span>MS Office & Digital Skills</span>
            </div>

          </div>

        </motion.div>

      </div>
    </section>
  );
}

export default About;