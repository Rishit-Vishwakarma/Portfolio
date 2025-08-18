import React from "react";
import Navbar from "../components/Navbar";
import '../Css/ProjectDetails.css'
import projectsData from "../data/Projectdata";
import { useParams, Link } from "react-router-dom";
import ScrollToTop from '../data/ScrollToTop'

const ProjectDetails = ({menuOpen, setMenuOpen}) =>{

  const {id} = useParams();
  const project = projectsData.find(p => String(p.id) === id);
  if(!project){
    return (
    <div className="error-wrapper">
      <h1 className="error">Project Not Found!</h1>
     <div className="pd-bottom-nav">
          <Link className="link-back" to="/Project">← Back to Projects</Link>
      </div>
    </div>
    )
  }
    return(
        <div className="pd-wrapper">
      <Navbar />
        <div className="par">
      <main className="pd">
        {/* HERO */}
        <section className="pd-hero">
          <div className="pd-hero-left">
            <h1 className="pd-title">{project.title}</h1>
            <p className="pd-tagline">
              {project.tagline}
            </p>

            <div className="pd-actions">
              <a className="btn btn-primary" href={project.liveDemo} target="_blank" rel="noreferrer">
                Live Demo
              </a>
              <a className="btn" href={project.github} target="_blank" rel="noreferrer">
                GitHub
              </a>
            </div>

            <ul className="pd-tags">
              {project.tags.map(tag => <li key={tag}>{tag}</li>)}
              {/* <li></li>
              <li></li>
              <li></li>
              <li></li> */}
            </ul>
          </div>

          <div className="pd-hero-media">
            <img src={project.image} alt={project.title} className="im"/>
            {/* <div className="pd-hero-img" aria-hidden="true" /> */}
          </div>
        </section>

        {/* OVERVIEW */}
        <section className="pd-section">
          <h2>Overview</h2>
          <p>{project.overview}</p>
        </section>

        {/* FEATURES + TECH STACK */}
        <section className="pd-section pd-grid-2">
          <div>
            <h2>Key Features</h2>
            <ul className="checklist"> {project.features.map((f, i) => <li key={i}>{f}</li>)}
              {/* <li></li>
              <li></li>
              <li></li>
              <li></li> */}
            </ul>
          </div>

          <div>
            <h2>Tech Stack</h2>
            <ul className="chips"> 
              {project.techStack.map((t, i) => <li key={i}>{t}</li>)}
              {/* <li></li>
              <li></li>
              <li></li>
              <li></li>
              <li></li> */}
            </ul>
          </div>
        </section>

        {/* HOW IT WORKS */}
        <section className="pd-section">
          <h2>How It Works</h2>
          <ol className="steps">
            {project.steps.map((s, i) => <li key={i}>{s}</li>)}
            {/* <li>.</li>
            <li></li>
            <li></li>
            <li></li> */}
          </ol>
        </section>

        {/* CHALLENGES */}
        <section className="pd-section">
          <h2>Challenges & Solutions</h2>
          <ul className="qa">
            {project.challenges.map((c, i) => (
              <li key={i}>
              <strong>Challenge:</strong> {c.challenge}<br />
              <strong>Solution:</strong> {c.solution}
            </li>
            ))}
            
          </ul>
        </section>

        {/* NAV */}
        <nav className="pd-bottom-nav">
          <Link className="link-back" to="/Project">← Back to Projects</Link>
        </nav>
      </main>
      </div>
    </div>
    )}

export default ProjectDetails;