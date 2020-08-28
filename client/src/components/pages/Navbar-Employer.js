import React from 'react'
import { Link, withRouter } from 'react-router-dom'

const NavbarEmployer = () => {
    return (
        <div className="">
            <nav className="navbar navbar-expand-lg navbar-light nav-line">
                <div className="container">

                    <Link className="navbar-brand d-flex align-items-center m-0 p-0" to="/">
                        <img src="images/scout4jobs-logo.png" className="img-responsive" alt="" />
                    </Link>

                    <button className="navbar-toggler custom-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent"
                        aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>

                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav cap-bt ml-auto">
                            {/* <li className="nav-item">
                                <Link className="nav-link" to="/">HOME <span className="sr-only">(current)</span></Link>
                            </li> */}
                            <li className="nav-item">
                                <Link className="nav-link" to="/employer">Home</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/cv-search">CV Search</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/post-job">Post a Job</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/contact">Contact Us</Link>
                            </li>
                            <li className="nav-item ">
                                <Link className="nav-link active" to="/Employer-FAQ">FAQ</Link>
                            </li>
                            <li className="nav-item account-employer">
                                <Link className="nav-link active" to="/employer-login">
                                    <span>Login</span>
                                </Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </div>
    )
}

export default withRouter(NavbarEmployer)
