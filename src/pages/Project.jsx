import React from "react";
import { NavLink, useNavigate, Link } from "react-router-dom";
import Navbar from '../components/Navbar'
import '../Css/Project.css'
import leetcode from '../assets/leetcode.svg'
import leetcode2 from '../assets/leetcode3.svg'
import { style } from "framer-motion/client";

const Project = ({menuOpen, setMenuOpen}) => {

    const navigate = useNavigate();

    const handleProjectClick = (id) => {
        navigate (`/ProjectDetails/${id}`)
    }

    return (
        <div>
            <Navbar onMenuToggle={setMenuOpen}/>
            <div className="swap" style={{ transform: menuOpen ? "translateY(150px)" : "translateY(0)" }}>
            <div className="creation-wapper">
                <div className="heading"><h1>My Projects<span>.</span></h1></div>
            </div>
            <div className="wapper">
            <div className="all-projects">
                <div className="project-info" >
                    <div className="project-img-1t i i2">
                        <div className="main-img-1"></div>
                    </div>
                    <div className="project-text-1">
                        <div className="proj-title-1" onClick={() => {handleProjectClick(1)}}  style={{cursor: "pointer"}}>
                             <h3>Movix</h3>
                            <div className="icon">
                                <i className="bi bi-arrow-up-right-circle"></i>
                            </div>
                        </div>
                        <div className="project-description-1"><p>A React-based movie search application using OMDB API, allowing users to add favorites and track watch history locally via localStorage.</p></div>
                    </div>
                </div>
                <div className="project-info" >
                    <div className="project-img-2t i i2">
                        <div className="main-img-2">
                            <div className="main-img 2t"></div>
                        </div>
                    </div>
                    <div className="project-text-1">
                        <div className="proj-title-1 o2" onClick={() => {handleProjectClick(2)}}  style={{cursor: "pointer"}}>
                             <h3>Sms Spam Detection</h3>
                            <div className="icon">
                                <i className="bi bi-arrow-up-right-circle"></i>
                            </div>
                        </div>
                        <div className="project-description-1"><p>A React-based movie search application using OMDB API, allowing users to add favorites and track watch history locally via localStorage.</p></div>
                    </div>
                </div>
                <div className="project-info">
                    <div className="project-img-3t i i2">
                        <div className="main-img-3t"></div>
                    </div>
                    <div className="project-text-1">
                        <div className="proj-title-1 o2 ph"  onClick={() => {handleProjectClick(3)}}  style={{cursor: "pointer"}}>
                             <h3>Banking System</h3>
                            <div className="icon">
                                <i className="bi bi-arrow-up-right-circle"></i>
                            </div>
                        </div>
                        <div className="project-description-1"><p>A React-based movie search application using OMDB API, allowing users to add favorites and track watch history locally via localStorage.</p></div>
                    </div>
                </div>
                <div className="project-info" >
                    <div className="project-img-4t i i2">
                        <div className="main-img-4t"></div>
                    </div>
                    <div className="project-text-1">
                        <div className="proj-title-1 la2" onClick={() => {handleProjectClick(4)}}  style={{cursor: "pointer"}}>
                             <h3>Wether site</h3>
                            <div className="icon">
                                <i className="bi bi-arrow-up-right-circle"></i>
                            </div>
                        </div>
                        <div className="project-description-1"><p>A React-based movie search application using OMDB API, allowing users to add favorites and track watch history locally via localStorage.</p></div>
                    </div>
                </div>
            </div>
            </div>
            
            <div className="social">
                 <div className="foot-nav na">
                    <NavLink to="/" className={({ isActive }) => isActive ? "active" : ""} onClick={() => window.scrollTo(0, 0)}>Home</NavLink>
                    <NavLink to="/Project" className={({isActive}) => isActive ? "active" : ""} onClick={() => window.scrollTo(0, 0)}>Projects</NavLink>
                    <NavLink to="/GetInTouch" className={({isActive}) => isActive ? "active" : ""} onClick={() => window.scrollTo(0, 15)}>Contact Me</NavLink>
                 </div>
                <div className="Soc-media na">
                     <div className="i-one"><a href="https://www.linkedin.com/in/rishit-vishwakarma-6a9797272/" target="_blank" rel="noopener noreferrer"><i class="bi bi-linkedin"></i></a></div>
                    <div className="i-two"><a href="https://github.com/Rishit-Vishwakarma" target="_blank" rel="noopener noreferrer"><i class="bi bi-github"></i></a></div>
                    <div className="i-three"><a href="https://medium.com/@rishitvish56" target="_blank" rel="noopener noreferrer"><i class="bi bi-medium"></i></a></div>
                     <div className="icon-wrapper">
                        <div className="i-four"><a href="https://leetcode.com/u/RishitVishwakarma/" target="_blank" rel="noopener noreferrer"><img src={leetcode} alt="" className="icon default" style={{width: "25px", height: "25px"}}/></a></div>
                        <div className="i-five"><a href="https://leetcode.com/u/RishitVishwakarma/" target="_blank" rel="noopener noreferrer"><img src={leetcode2} alt="" className="icon hover" style={{width: "25px", height: "25px"}}/></a></div>
                    </div>
                </div>
            </div>
</div>
        </div>
    )}

export default Project;