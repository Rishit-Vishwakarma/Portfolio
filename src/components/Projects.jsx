import React from "react";
import '../Css/Projects.css'
import { Link, useNavigate} from "react-router-dom";
import ProjectDetails from "../pages/ProjectDetails";

const Projects = ({menuOpen, setMenuOpen}) =>{

    const Navigate = useNavigate();

    const handleProjectClick = (id) => {
        Navigate(`/ProjectDetails/${id}`)
    }

    return(
        <div className="projects-wapper" style={{transform: menuOpen ?  "translateY(150px)" : "translateY(0)"}}>
            <div className="heading"><h2>Projects<span>.</span></h2></div>
            <div className="projects-info-wapper">
                <div className="project-info-1 res p1">
                    <div className="project-img-1 i  ">
                        <div className="main-img-1"></div>
                    </div>
                    <div className="project-text-1">
                        <div className="proj-title-1" onClick={() => {handleProjectClick(1)}} style={{cursor: "pointer"}}>
                             <h3>Movix</h3>
                            <div className="icon">
                                <i className="bi bi-arrow-up-right-circle"></i>
                            </div>
                        </div>
                        <div className="project-description-1"><p>A React-based movie search application using OMDB API, allowing users to add favorites and track watch history locally via localStorage.</p></div>
                    </div>
                </div>
                <div className="project-info-2 res p2">
                    <div className="project-img-2 i">
                        <div className="main-img-2"></div>
                    </div>
                    <div className="project-text-1">
                        <div className="proj-title-1 la" onClick={() => {handleProjectClick(2)}} style={{cursor: "pointer"}}>
                             <h3>SMS Spam Detection</h3>
                            <div className="icon">
                                <i className="bi bi-arrow-up-right-circle"></i>
                            </div>
                        </div>
                        <div className="project-description-1"><p>A machine learning web app to classify SMS messages as Spam or Not Spam."</p></div>
                    </div>
                </div>
                <div className="project-info-3 res p2">
                    <div className="project-img-3 i">
                        <div className="main-img-3"></div>
                    </div>
                    <div className="project-text-1">
                        <div className="proj-title-1 la1" onClick={() => {handleProjectClick(3)}} style={{cursor: "pointer"}}>
                             <h3>Banking system</h3>
                            <div className="icon">
                                <i className="bi bi-arrow-up-right-circle"></i>
                            </div>
                        </div>
                        <div className="project-description-1"><p>A console-based banking application for managing user accounts and transactions.</p></div>
                    </div>
                </div>
                <div className="project-info-4 res p1">
                    <div className="project-img-4 i">
                        <div className="main-img-4"></div>
                    </div>
                    <div className="project-text-1">
                       <div className="proj-title-1 la2" onClick={() => {handleProjectClick(4)}} style={{cursor: "pointer"}}>
                             <h3>Wether site</h3>
                            <div className="icon">
                                <i className="bi bi-arrow-up-right-circle"></i>
                            </div>
                        </div>
                        <div className="project-description-1"><p>A simple weather application to find real-time weather data for any city.</p></div>
                    </div>
                </div>
            </div>
        </div>
    )}

export default Projects;