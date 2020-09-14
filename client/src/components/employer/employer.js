import React, { Component } from 'react'
import Navbar from '../pages/Navbar-Employer'
import Footer from '../pages/footer-employer'
import { Link } from 'react-router-dom'

class EmployerPage extends Component {

    render() {
        return (
            <div className="">
                <Navbar />
                <section className="bk-employer">
                    <div className="container">
                        <div className="row employer-form-pad">
                            <div className="col-md-12 col-lg-6 col-sm-12 animate__animated animate__fadeInLeft">
                                <div className="cont-txt">
                                    <h1>With Scout4Job!</h1>
                                    <p>We facilitate Recruitment, Employability, Enterprise, and Careers.</p>

                                </div>
                            </div>
                            <div className="col-md-12 col-lg-6 animate__animated animate__fadeInRight">
                                <div className="bodypage">
                                    <div className="posts pb-3">
                                        <h3>Register Today</h3>
                                    </div>
                                    <div className="formdiv">
                                        <form noValidate >
                                            <div className="row">
                                                <div className="form-group col-md-6">
                                                    <label htmlFor="company">Company name</label>
                                                    <input type="text" placeholder="e.g cocacola, IBM" className="form-control" />
                                                </div>
                                                <div className="form-group col-md-6">
                                                    <label htmlFor="country">Country</label>
                                                    <input type="text" placeholder="Nigeria" className="form-control" />
                                                </div>
                                            </div>
                                            <div className="row">
                                                <div className="form-group col-md-6">
                                                    <label htmlFor="tel">Phone Number</label>
                                                    <input type="text" placeholder="Telephone" className="form-control" />
                                                </div>
                                                <div className="form-group col-md-6">
                                                    <label htmlFor="tel">Address</label>
                                                    <input type="text" placeholder="Yaba, Lagos" className="form-control" />
                                                </div>
                                            </div>
                                            <div className="row">
                                                <div className="form-group col-md-6">
                                                    <label htmlFor="country">Email</label>
                                                    <input type="text" placeholder="email" className="form-control" />
                                                </div>
                                                <div className="form-group col-md-6">
                                                    <label htmlFor="country">Password</label>
                                                    <input type="text" placeholder="" className="form-control" />
                                                </div>
                                            </div>
                                            <div className="button text-center pt-3">
                                                <Link to="/employer-login" className="btn btn-contact-us mb-1">Register</Link>
                                            </div>
                                        </form>
                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>
                </section>

                <section className="sec3 dk-bk-grey">
                    <div className="container pad-features">
                        <div className="txt3 pt-5">
                            <h4>Features</h4>
                            <h3>Tools Designed To <br />
                                Empower Your Hiring Process</h3>
                        </div>
                        <div className="cont-grid">
                            <div className="job">
                                <div className="inner">
                                    <img src="../images/employer/job-search.jpg" className="img-fluid" alt="" />
                                </div>
                                {/* <div className="job-overlay">
                                <img src="../images/employer/wave_tri_01.svg" />
                            </div> */}
                                <div className="inner-job">
                                    <h5>Job Posting</h5>
                                    <p>A job posting is an advertisement created by an employer, his administrative or human resources staff, or a recruiter that alerts current employees.</p>
                                </div>
                                <Link to="" className="">
                                    <i className="pull-right fa fa-long-arrow-right" aria-hidden="true"></i>
                                </Link>
                            </div>
                            <div className="job">
                                <div className="inner">
                                    <img src="../images/employer/cv-search.jpg" className="img-fluid" alt="" />
                                </div>
                                <div className="inner-job">
                                    <h5>CV Search</h5>
                                    <p>Searching for CV to match the right job has been made easier with our cv collected from different verticals of employee with wide range of experience and exposure.</p>
                                </div>
                                <Link to="" className="">
                                    <i className="pull-right fa fa-long-arrow-right" aria-hidden="true"></i>
                                </Link>
                            </div>
                            <div className="job" style={{
                                transform: "translate3d(0px, 0px, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg)"
                            }}>
                                <div className="inner">
                                    <img src="../images/employer/exposure.jpg" className="img-fluid" alt="" />
                                </div>
                                <div className="inner-job">
                                    <h5>Maximum Exposure</h5>
                                    <p>Post Your Job in Scout4Job and Get a Maximum Exposure to our database of cv. This will fast track your recruitment process and getting the right candidate.</p>
                                </div>
                                <Link to="" className="">
                                    <i className="pull-right fa fa-long-arrow-right" aria-hidden="true"></i>
                                </Link>
                            </div>
                        </div>
                    </div>
                </section>

                {/*  */}
                <section className="dk-bk-grey additional-box">

                </section>

                {/*  */}

                <section>
                    <div className="container yellow-label">
                        <div className="row">
                            <div className="col-md-12 employer-caption">
                                <h2>Experience an efficient way to find the
                                best candidate for your role </h2>
                                <p>We guarantee a pocket-friendly rates on all our services to recruit your best candidate.</p>
                                <div className="text-center pt-5">
                                    <button className="btn btn-contact-us" >Contact us</button>
                                </div>
                            </div>
                        </div>
                        <div className="line-box-wrap">
                            <div className="line-background"></div>
                            <div className="line-background"></div>
                            <div className="line-background"></div>
                            <div className="line-background"></div>
                            <div className="line-background"></div>
                            <div className="line-background"></div>
                            <div className="line-background"></div>
                        </div>
                        <img src="../images/employer/mask-group-1.svg" className="img-fluid cta-yellow-shape" alt="" />
                    </div>
                </section>

                <Footer />
            </div>
        )
    }
}


// export default connect(mapStateToProps, { registerUser })(withRouter(EmployerPage));


export default EmployerPage
