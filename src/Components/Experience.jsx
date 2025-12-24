import './Experience.css'
import React from 'react'
function Experience(){
    return(
        <>
        <h1>Experience</h1>
            <div className="expcontainer">
                <div className="expleft">
                   <h3 className="role">Full Stack Java Intern</h3>
                   <div className="compcontainer">
                      <span className="compname">ExcelR EdTech Pvt Ltd </span>
                      <span className="period">May 2024-July 2024</span>
                   </div>
                   <p>
                       Learned Full Stack Java including Spring Boot, REST APIs, HTML, CSS, JS, and MySQL. 
                       Built and deployed web-based mini projects during the internship.
                   </p>
                </div>
                <div className="expright">
                    <h3 className="role">Machine Learning Intern</h3>
                    <div className="compcontainer">
                      <span className="compname">Spypro Security Solutions pvt.Ltd </span>
                      <span className="period">May 2023-June 2023</span>
                   </div> 
                  <p>
                      Learned Machine Learning fundamentals including data analysis, model training, and evaluation.
                       Built and tested ML-based mini projects using Python during the internship.
                  </p> 
                </div>
            </div>
        </>
    )
}
export default Experience;
