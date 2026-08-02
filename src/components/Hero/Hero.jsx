import "./Hero.css";
import { motion } from "framer-motion";
import { ArrowRight, Download, BriefcaseBusiness, Calculator, Building2 } from "lucide-react";
import heroImage from "../../assets/images/hero.jpeg";
import resume from "../../assets/resume/Rahul_Raj_Sah_Resume.pdf";

export default function Hero() {
  return (
    <section id="home" className="hero">
      <div className="hero-container">
        <motion.div className="hero-left" initial={{opacity:0,x:-40}} animate={{opacity:1,x:0}}>
          <span className="hero-tag">WELCOME TO MY PORTFOLIO</span>
          <h1>Rahul Raj Sah</h1>
          <h2>Building Value Through Business Excellence</h2>
          <p>Business Administration graduate with interests in finance, accounting, management, operations and administration.</p>
          <div className="hero-actions">
            <a href="#contact" className="primary-btn">Let's Connect <ArrowRight size={18}/></a>
            <a href={resume} download className="secondary-btn"><Download size={18}/>Download Resume</a>
          </div>
          <div className="hero-cards">
            <div><BriefcaseBusiness size={20}/><span>Operations</span></div>
            <div><Calculator size={20}/><span>Finance</span></div>
            <div><Building2 size={20}/><span>Management</span></div>
          </div>
        </motion.div>
        <motion.div className="hero-right" initial={{opacity:0,x:40}} animate={{opacity:1,x:0}}>
          <img src={heroImage} alt="Rahul Raj Sah"/>
        </motion.div>
      </div>
    </section>
  );
}
