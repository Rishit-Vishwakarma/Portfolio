import React, { useState } from "react";
import '../Css/Navbar.css'
import { NavLink } from "react-router-dom";
import ProjectDetails from "../pages/ProjectDetails";
import Project from '../pages/Project'
import resume from "../components/Rishit_Resume.pdf"

const Navbar = ({onMenuToggle}) =>{
    const [isOpen, setIsOpen] = useState(false);
    const [showResume, setShowResume] = useState(false);

    const toggleMenu = () => {
        const newState = !isOpen;
        setIsOpen(!isOpen);
        onMenuToggle(!isOpen)
    }

    return(
        <div className="nav-wapper">

            <div className="hamburger" onClick={toggleMenu}>
                <i className="bi bi-list"></i>
            </div>

            <div className="resume1">
                    <a href={resume}>Resume</a>
                </div>

            <div className={`hamburger-menu ${isOpen ? "open" : ""}`}>
                <NavLink to="/" className={({ isActive }) => isActive ? "active" : ""}>Home</NavLink>
                <NavLink to="/Project" className={({isActive}) => isActive ? "active" : ""}>Projects</NavLink>
                <NavLink to="/GetInTouch" className={({isActive}) => isActive ? "active" : ""}>Contact Me</NavLink>
            </div>

            <div className="nav-links">
                <NavLink to="/" className={({ isActive }) => isActive ? "active" : "" }>Home</NavLink>
                <NavLink to="/Project" className={({isActive}) => isActive ? "active" : ""}>Projects</NavLink>

                <div className="resume">
                    <a href={resume} target="_blank" rel="noopener noreferrer">Resume</a>
                </div>
            </div>

            <div className="nav-msg">
                <NavLink to="/GetInTouch" className={({isActive}) => isActive ? "active" : ""}>
                    <i className="bi bi-chat-dots-fill" ></i>
                </NavLink>
                
            </div>
        </div>
)}

export default Navbar;