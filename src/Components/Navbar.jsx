import React from "react";
import { Link } from 'react-router-dom'
function Navbar1() {
    return (
        <>
            <div className="navbar-container">
                <h3>Avinash Portfolio</h3>
                <div className="leftsec">
                    <ul>
                        <li>
                            <Link to='/home'>Home</Link>
                        </li>
                        <li>
                            <Link to='/skills'>Skills</Link>
                        </li>
                        <li>
                            <Link to='/experience'>Experience</Link>
                        </li>
                        <li>
                            <Link to='/project'>Project</Link>
                        </li>
                        {/* <li>
                            <Link to='/contact'>Contact</Link>
                        </li> */}
                    </ul>
                </div>
            </div>
        </>
    )
}
export default Navbar1;