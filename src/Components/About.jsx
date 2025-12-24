import React from "react";
import './About.css'
function About() {
    return (
        <>
            <h1>About</h1>
            <div className="aboutcontainer">
                <div className="aboutleft">
                    <h3 className="head">About me</h3>
                    <p>
                        Hello! I am <span id="name">Avinash</span>,a passionate and dedicated Computer Science
                        graduate from Sir C R Reddy College of Engineering. Skilled in
                        <span id="sname">Java, CSS, JavaScript, ReactJS, and SQL</span>
                        , I enjoy building clean and user-friendly web interfaces.
                    </p>
                    <p>
                        I have built projects like <span id="pname">Portfolio Website</span>
                        and a <span id="pname">Rock-Paper-Scissors Game</span>
                        ,which helped me strengthen my front-end development skills.
                    </p>
                    <p>
                        I am a strong team player who adapts quickly to new technologies and
                        currently focused on building better UIs using React.
                    </p>
                </div>
                <div className="aboutright">
                    <h3 className="head">Education</h3>
                    <div className="educationwrap">
                        <div className="btech">
                        <div className="clgyear">2021-2025</div>
                        <div className="clg">
                            <div className="clgname">Sir C R Reddy College of Engineering</div>
                            <div>BTech-CSE</div>
                            <div>CGPA:7.95</div>
                        </div>
                    </div>
                    <div className="inter">
                        <div className="clgyear">2019-2021</div>
                        <div className="clg">
                            <div className="clgname">Vamsadhara Junior College</div>
                            <div className="clgdetails">MPC</div>
                            <div className="clgdetails">Percentage:95.2</div>
                        </div>
                    </div>
                    </div>
                </div>
            </div>
        </>
    )
}
export default About;
