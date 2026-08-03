import "./Hero.css";
import { motion } from "framer-motion";
import {
  ArrowRight,
  BriefcaseBusiness,
  Calculator,
  Building2,
  Landmark,
  ClipboardList,
} from "lucide-react";

import heroImage from "../../assets/hero2.jpg";

export default function Hero() {
  return (
    <section id="home" className="hero">
      <div className="hero-container">

        {/* LEFT SIDE */}
        <motion.div
          className="hero-left"
          initial={{ opacity: 0, x: -40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <span className="hero-tag">
            WELCOME TO MY PORTFOLIO
          </span>

          <h1>Rahul Raj Sah</h1>

          <h2>
            Building Value Through Business Excellence
          </h2>

          <p>
            Business Administration graduate with interests in finance,
            accounting, management, operations and administration.
          </p>

          <div className="hero-actions">
            <a href="#contact" className="primary-btn">
              Let's Connect
              <ArrowRight size={18} />
            </a>
          </div>

          <div className="hero-cards">

            <div className="hero-card">
              <BriefcaseBusiness size={24} />
              <span>Operations</span>
            </div>

            <div className="hero-card">
              <Calculator size={24} />
              <span>Finance</span>
            </div>

            <div className="hero-card">
              <Building2 size={24} />
              <span>Management</span>
            </div>

            <div className="hero-card">
              <Landmark size={24} />
              <span>Administration</span>
            </div>

            <div className="hero-card">
              <ClipboardList size={24} />
              <span>Accounting</span>
            </div>

          </div>
        </motion.div>

        {/* RIGHT SIDE */}
        <motion.div
          className="hero-right"
          initial={{ opacity: 0, x: 40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <img src={heroImage} alt="Rahul Raj Sah" />
        </motion.div>

      </div>
    </section>
  );
}