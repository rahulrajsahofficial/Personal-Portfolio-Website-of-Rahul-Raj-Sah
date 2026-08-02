import "./App.css";

import Navbar from "./components/Navbar/Navbar";
import Hero from "./components/Hero/Hero";
import About from "./components/About/About";
import Education from "./components/Education/Education";
import CoreCompetencies from "./components/CoreCompetencies/CoreCompetencies";
import ExecutiveSummary from "./components/ExecutiveSummary/ExecutiveSummary";
import ProfessionalJourney from "./components/ProfessionalJourney/ProfessionalJourney";
import Certifications from "./components/Certifications/Certifications";
import BusinessProjects from "./components/BusinessProjects/BusinessProjects";
import Skills from "./components/Skills/Skills";
import Contact from "./components/Contact/Contact";
import Resume from "./components/Resume/Resume";
import Footer from "./components/Footer/Footer";
function App() {
  return (
    <>
      <Navbar />

      <main>

        {/* ===========================
            HERO
        =========================== */}
        <Hero />

        {/* ===========================
            ABOUT
        =========================== */}
        <About />

        {/* ===========================
            EDUCATION
        =========================== */}
        <Education />

        {/* ===========================
            CORE COMPETENCIES
        =========================== */}
        <CoreCompetencies />

        {/* ===========================
            EXECUTIVE SUMMARY
        =========================== */}
        <ExecutiveSummary />

        {/* ===========================
            PROFESSIONAL JOURNEY
        =========================== */}
        <ProfessionalJourney />

        {/* ===========================
            ACHIEVEMENTS & CERTIFICATIONS
        =========================== */}
        <Certifications />

<BusinessProjects />

<Skills />

<Contact />

<Resume />

<Footer />

      </main>
    </>
  );
}

export default App;