import React from "react";
import { NavLink } from "react-router-dom";
import '../Css/Footer.css'
import leetcode from '../assets/leetcode.svg'
import leetcode2 from '../assets/leetcode3.svg'
import resume from "../components/Rishit_Resume.pdf"

const Footer = () => {
    return(
        <div className="footer-wapper">
            <div className="skill-section">
                <div className="head"><h2>Skills<span>.</span></h2></div>
            </div>

            <div className="skills">
                <div className="group-One grp">
                    <div className="grp-head"><h4>Programming & </h4> <h4>Databases</h4></div>
                    <div className="grp-sec s3">
                        <p>Java(Core)</p>
                        <p>DBMS (MySQL/PostgreSQL)</p>
                        <p>JDBC</p>
                    </div>
                </div>

                <div className="group-two grp">
                    <div className="grp-head"><h4>Backend</h4></div>
                    <div className="grp-sec s3">
                        <p>Spring</p>
                        <p>Spring Boot</p>
                        <p>Rest API Development</p>
                    </div>
                </div>
                
                <div className="group-three grp">
                    <div className="grp-head"><h4>Frontend</h4></div>
                    <div className="grp-sec">
                        <p>HTML</p>
                        <p>CSS</p>
                        <p>JavaScript</p> 
                        <p>React</p>
                    </div>
                </div>

                <div className="group-four grp">
                    <div className="grp-head"><h4>Tools & Soft Skills</h4></div>
                    <div className="grp-sec ">
                        <p>Git & GitHub</p>
                        <p>Maven / Gradle</p>
                        <p>Effective Communication</p>
                        <p>Leadership</p>
                    </div>
                </div>
            </div>

            <div className="social">
                <div className="foot-nav na">
                    <NavLink to="/" className={({isActive}) => isActive ? "active" : ""}>Home</NavLink>
                    <NavLink to="/Project" className={({isActive}) => isActive ? "active" : ""}>Projects</NavLink>
                    <NavLink to="/GetInTouch" className={({isActive}) => isActive ? "active" : ""}>Contact Me</NavLink>

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
    )}

export default Footer;