import React from 'react'
import { Link } from 'react-router-dom'

const NavHeader = () => {
    return (
        <div className="">
            {/* <!-- social-media icons --> */}
            <section className="bk-twitter">
                <div className="container">
                    <div className="row">
                        <div className="col-md-6">
                            <ul className="soc-media-1">
                                <li><i className="fa fa-phone"></i>07068576214</li>
                                <li><i className="fa fa-envelope"></i>info@covero.com </li>
                            </ul>
                        </div>
                        <div className="col-md-6">
                            <ul className="soc-media-2">
                                <li><i className="fa fa-facebook"></i></li>
                                <li><i className="fa fa-twitter"></i></li>
                                <li><i className="fa fa-instagram"></i></li>
                                <li><i className="fa fa-linkedin"></i></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </section>
            {/* <!-- social-media-icon -->
    <!-- navbar starts here --> */}
            <section>
                <nav className="navbar navbar-expand-lg wh-x1 navbar-dk">
                    <div className="container">
                        <Link className="navbar-brand" to="../index.html">
                            <img src="../images/logo-template.png" alt="" />
                        </Link>
                        <button className="navbar-toggler" type="button" data-toggle="collapse"
                            data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false"
                            aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"></span>
                        </button>
                        <div className="collapse navbar-collapse" id="navbarSupportedContent">
                            <ul className="navbar-nav ml-auto" style={{ color: "#343434;" }}>
                                <li className="nav-item active">
                                    <Link class="nav-link" to="/">HOME <span class="sr-only">(current)</span></Link>
                                </li>
                                <li class="nav-item">
                                    <Link className="nav-link" to="/">ABOUT</Link>
                                </li>
                                <li className="nav-item dropdown">
                                    <Link className="nav-link dropdown-toggle" to="/" id="navbarDropdown" role="button"
                                        data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                        RESUME
                            </Link>
                                    <div class="dropdown-menu" aria-labelledby="navbarDropdown">
                                        <Link class="dropdown-item" to="/">Action</Link>
                                        <Link class="dropdown-item" to="/">Another action</Link>
                                        <div class="dropdown-divider"></div>
                                        <Link class="dropdown-item" to="/">Something else here</Link>
                                    </div>
                                </li>
                                 <li class="nav-item">
                                    <Link class="nav-link" href="#">JOB SEARCH</Link>
                                </li>
                                <li class="nav-item">
                                    <Link class="nav-link" href="#">COVER LETTER</Link>
                                </li>
                                <li class="nav-item">
                                    <Link class="nav-link" href="#">SIGN IN</Link>
                                </li>
                            </ul>
                        </div>
                    </div>
                </nav>

            </section>
            {/* <!-- navbar ends here --> */}

        </div>
    )
}

export default NavHeader
