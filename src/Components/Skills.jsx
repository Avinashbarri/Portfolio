import React from "react";
import './Skills.css'
function Skills() {
    return (
        <>
          <div className="skillscontainer">
                <h1>Skills</h1>
                <div className="skillssec">
                    <h2 style={{ marginBottom: "4px" }}>Programming Languages</h2>
                    <div className="skills">
                        <div className="skillsborder">
                            <img src="java.png" alt="java" />
                            <div>Java</div>
                        </div>
                    </div>
                </div>
                <div className="skillssec">
                    <h2 style={{ marginBottom: "4px" }}>Frontend Skills</h2>
                    <div className="skills">
                        <div className="skillsborder">
                            <img src="Html.png" alt="java" />
                            <div>HTML</div>
                        </div>
                        <div className="skillsborder">
                            <img src="css.png" alt="java" />
                            <div>CSS</div>
                        </div>
                        <div className="skillsborder">
                            <img src="JS.png" alt="javaScript" />
                            <div>JavaScript</div>
                        </div>
                        <div className="skillsborder">
                            <img src="react.png" alt="ReactJS" />
                            <div>React</div>
                        </div>
                    </div>
                </div>
            </div>          
        </>            
   )
   }
   export default Skills