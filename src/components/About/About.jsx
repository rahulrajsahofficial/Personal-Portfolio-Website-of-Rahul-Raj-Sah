import "./About.css";
import { motion } from "framer-motion";
import { GraduationCap, BriefcaseBusiness, BadgeCheck, Download } from "lucide-react";
import heroImage from "../../assets/images/hero.jpeg";
import resume from "../../assets/resume/Rahul_Raj_Sah_Resume.pdf";

function About() {
  return (
    <section id="about" className="about">
      <div className="about-container">
        <motion.div
          className="about-image"
          initial={{opacity:0,x:-40}}
          whileInView={{opacity:1,x:0}}
          transition={{duration:0.6}}
          viewport={{once:true}}
        >
          <img src={heroImage} alt="Rahul Raj Sah" />
        </motion.div>

        <motion.div
          className="about-content"
          initial={{opacity:0,x:40}}
          whileInView={{opacity:1,x:0}}
          transition={{duration:0.6}}
          viewport={{once:true}}
        >
          <span className="section-tag">ABOUT ME</span>

          <h2>Business Administration Graduate</h2>

          <p>
            I am Rahul Raj Sah, a Business Administration graduate with practical
            experience in operations, administration, customer service and facility
            management. I enjoy improving processes, solving business problems and
            working with diverse teams.
          </p>

          <p>
            My goal is to build a career where I can contribute through strategic
            thinking, continuous learning and professional integrity while creating
            measurable value for every organization I work with.
          </p>

          <div className="about-highlights">
            <div>
              <GraduationCap size={22}/>
              <span>BBA Graduate</span>
            </div>

            <div>
              <BriefcaseBusiness size={22}/>
              <span>Operations & Administration</span>
            </div>

            <div>
              <BadgeCheck size={22}/>
              <span>Professional Certifications</span>
            </div>
          </div>

          <a className="resume-button" href={resume} download>
            <Download size={18}/>
            Download Resume
          </a>
        </motion.div>
      </div>
    </section>
  );
}

export default About;
