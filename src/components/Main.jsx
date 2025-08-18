import React from "react";
import '../Css/Main.css'

const Main = ({menuOpen}) => {
    return(
        <div className="main-wapper" style={{transform: menuOpen ?  "translateY(150px)" : "translateY(0)"}}>
            <div className="main-container">
                <div className="main-content">
                <h1>Hey, I'm Rishit Vishwakarma</h1>
                <h2><span>Full</span>Stack Developer</h2>
                <p>Skilled in Java (Core) with solid expertise in React, JDBC, and SQL. Passionate about building efficient front-end interfaces and robust backend integrations.</p>
            </div>
            <div className="main-profile-pic">
                <div className="profile-pic">
                </div>
            </div>
            </div>
        </div>    
    )}

export default Main;