import React from 'react'
import { Link, withRouter } from 'react-router-dom'

const Navbar = () => {
    return (
        <div className="">
            <nav className="navbar navbar-expand-lg navbar-light nav-line">
                <div className="container">

                    <Link className="navbar-brand d-flex align-items-center m-0 p-0" to="./index.html">
                        <img src="images/logo2-template.png" className="img-responsive" alt="" />
                        <span>SCOUT4JOB</span>
                    </Link>

                    <button className="navbar-toggler custom-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent"
                        aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>

                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav cap-bt ml-auto">
                            <li className="nav-item">
                                <Link className="nav-link" to="/">HOME <span className="sr-only">(current)</span></Link>
                            </li>
                            <li className="nav-item dropdown">
                                <Link className="nav-link dropdown-toggle" to="/" id="navbarDropdown" role="button"
                                    data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                    RESUME
                        </Link>
                                <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                                    <Link className="dropdown-item" to="/resume-builder">Resume Builder</Link>
                                    <Link className="dropdown-item" to="/resume-sample">Resume Samples</Link>
                                    {/* <!-- <a class="dropdown-item" href="#">Write Resume</a> --> */}
                                </div>
                            </li>

                            <li className="nav-item">
                                <Link className="nav-link" to="/job-search">JOB SEARCH</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/cover-letter">COVER LETTER</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/about-us">ABOUT</Link>
                            </li>
                            <li className="nav-item ">
                                <Link className="nav-link active" to="/login">SIGN IN</Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </div>
    )
}

export default withRouter(Navbar)
