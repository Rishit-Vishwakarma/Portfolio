import React from "react";
import { NavLink } from "react-router-dom";
import Navbar from '../components/Navbar'
import leetcode from '../assets/leetcode.svg'
import leetcode2 from '../assets/leetcode3.svg'
import '../Css/GetInTouch.css'

const GetInTouch = ({menuOpen, setMenuOpen}) => {
    return (
        <div className="pre">
            <Navbar className="ss" onMenuToggle={setMenuOpen}/>
            <div className="GIT-container" style={{ transform: menuOpen ? "translateY(150px)" : "translateY(0)" }}>
                <div className="GIT-content" >
                <div className="info" >
                    <h2>Contact Me</h2>
                    <div><i class="bi bi-telephone"><p>+91-9244156661</p></i></div>
                    <div><i class="bi bi-envelope"><p>rishitvishwakarma87@gmail.com</p></i></div>
                    <div className="Soc-media-git na-git">
                            <div className="i-one-git"><a href="https://www.linkedin.com/in/rishit-vishwakarma-6a9797272/" target="_blank" rel="noopener noreferrer"><i class="bi bi-linkedin"></i></a></div>
                            <div className="i-two-git"><a href="https://github.com/Rishit-Vishwakarma" target="_blank" rel="noopener noreferrer"><i class="bi bi-github"></i></a></div>
                            <div className="i-three-git"><a href="https://medium.com/@rishitvish56" target="_blank" rel="noopener noreferrer"><i class="bi bi-medium"></i></a></div>
                        <div className="icon-wrapper-git">
                            <div className="i-four-git"><a href="https://leetcode.com/u/RishitVishwakarma/" target="_blank" rel="noopener noreferrer"><img src={leetcode} alt="" className="icon default" style={{width: "25px", height: "25px"}}/></a></div>
                            <div className="i-five-git"><a href="https://leetcode.com/u/RishitVishwakarma/" target="_blank" rel="noopener noreferrer"><img src={leetcode2} alt="" className="icon hover" style={{width: "25px", height: "25px"}}/></a></div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="GIT-profile-pic">
                <div className="GIT-pic">
                </div>
            </div>
        </div>
            
        </div>
    )}

export default GetInTouch;