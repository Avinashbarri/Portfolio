import './Project.css'
import React from "react";
function Project() {
    return (
        <>
            <h1 style={{ textAlign: "center" }}>Projects</h1>
            <div className="projectsec">
                <div className="leftproject">
                    <div className="projectcard1" >
                        <img src="p1.JPG" alt="project1" />
                        <h3 className="projectname" >Portfolio Website</h3>
                        <p style={{marginBottom:"25px"}}>
                            A personal portfolio built using React, showcasing my skills and
                            projects.
                        </p>
                        <div className="projectbtn1">
                            <div className="btn1">
                                <a href="#">Live Demo</a>
                            </div>
                            <div className="btn2">
                                <a href="#">Git Hub</a>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="rightproject">
                    <div className="projectcard2">
                        <img src="p2.png" alt="project1" />
                        <h3 className="projectname">Rock-Paper-Scissors</h3>
                        <p style={{marginBottom:"25px"}}>
                            A personal portfolio built using React, showcasing my skills and
                            projects.
                        </p>
                        <div className="projectbtn2">
                            <div className="btn1">
                                <a href="#">Play Game</a>
                            </div>
                            <div className="btn2">
                                <a href="#">Git Hub</a>
                            </div>
                        </div>
                    </div>
                </div>
           </div>
        </>
    )
}
export default Project;