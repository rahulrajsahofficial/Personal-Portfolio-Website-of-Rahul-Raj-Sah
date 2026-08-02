import "./Navbar.css";
import { Menu, Download, X } from "lucide-react";
import { useState } from "react";
import logo from "../../assets/logo/final-logo.png";
import resume from "../../assets/resume/Rahul_Raj_Sah_Resume.pdf";

function Navbar() {
  const [open, setOpen] = useState(false);

  const links = [
    ["Home","#home"],
    ["About Me","#about"],
    ["Education","#education"],
    ["Experience","#experience"],
    ["Projects","#projects"],
    ["Skills","#skills"],
    ["Contact","#contact"],
  ];

  return (
    <header className="navbar">
      <div className="navbar-container">
        <a href="#home" className="brand">
          <img src={logo} alt="Rahul Raj Sah logo" className="brand-logo"/>
          <div>
            <h2>Rahul Raj Sah</h2>
            <p>Building Value Through Business Excellence</p>
          </div>
        </a>

        <nav className={open ? "nav open":"nav"}>
          {links.map(([label,href])=>(
            <a key={label} href={href} onClick={()=>setOpen(false)}>{label}</a>
          ))}
          <a className="resume-btn" href={resume} download>
            <Download size={18}/>
            Download Resume
          </a>
        </nav>

        <button className="menu-btn" onClick={()=>setOpen(!open)} aria-label="Menu">
          {open ? <X size={24}/> : <Menu size={24}/>}
        </button>
      </div>
    </header>
  );
}

export default Navbar;
