import React from 'react'
import Navbar from '../pages/Navbar-Employer'
import Footer from '../pages/footer-employer'
import { Link } from 'react-router-dom'

const EmployerPage = () => {
    return (
        <div className="">
            <Navbar />
            <section class="bk-blue">
                <div class="container">
                    <div class="row employer-form-pad">
                        <div class="col-md-12 col-lg-6 col-sm-12 animate__animated animate__fadeInLeft">
                            <div class="cont-txt">
                                <h1>With Scout4Job!</h1>
                                <p>We facilitate Recruitment, Employability, Enterprise, and Careers.</p>

                            </div>
                        </div>
                        <div class="col-md-12 col-lg-6 animate__animated animate__fadeInRight">
                            <div class="bodypage">
                                <div class="posts pb-3">
                                    <h3>Register Today</h3>
                                </div>
                                <div class="formdiv">
                                    <form action="">
                                        <div className="row">
                                            <div class="form-group col-md-6">
                                                <label for="company">Company name</label>
                                                <input type="text" placeholder="e.g cocacola, IBM" class="form-control" />
                                            </div>
                                            <div class="form-group col-md-6">
                                                <label for="country">Country</label>
                                                <input type="text" placeholder="Nigeria" class="form-control" />
                                            </div>
                                        </div>
                                        <div className="row">
                                            <div class="form-group col-md-6">
                                                <label for="tel">Phone Number</label>
                                                <input type="text" placeholder="Telephone" class="form-control" />
                                            </div>
                                            <div class="form-group col-md-6">
                                                <label for="tel">Address</label>
                                                <input type="text" placeholder="Yaba, Lagos" class="form-control" />
                                            </div>
                                        </div>
                                        <div className="row">
                                            <div class="form-group col-md-6">
                                                <label for="country">Email</label>
                                                <input type="text" placeholder="email" class="form-control" />
                                            </div>
                                            <div class="form-group col-md-6">
                                                <label for="country">Password</label>
                                                <input type="text" placeholder="" class="form-control" />
                                            </div>
                                        </div>
                                        <div class="button text-center pt-3">
                                            <button class="btn btn-contact-us mb-1">Register</button>
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </section>

            <section class="sec3 dk-bk-grey">
                <div class="container pad-features">
                    <div class="txt3 pt-5">
                        <h4>Features</h4>
                        <h3>Tools Designed To <br />
                            Empower Your Hiring Process</h3>
                    </div>
                    <div class="cont-grid">
                        <div class="job">
                            <div className="inner">
                                <img src="../images/employer/job-search.jpg" className="img-fluid" alt="" />
                            </div>
                            {/* <div className="job-overlay">
                                <img src="../images/employer/wave_tri_01.svg" />
                            </div> */}
                            <div className="inner-job">
                                <h5>Job Posting</h5>
                                <p>A job posting is an advertisement created by an employer, his administrative or human resources staff, or a recruiter that alerts current employees or the public</p>
                            </div>
                            <Link to="" className="">
                                <i class="pull-right fa fa-long-arrow-right" aria-hidden="true"></i>
                            </Link>
                        </div>
                        <div class="job">
                            <div className="inner">
                                <img src="../images/employer/cv-search.jpg" className="img-fluid" alt="" />
                            </div>
                            <div className="inner-job">
                                <h5>CV Search</h5>
                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus doloribus dolores, quod porro voluptatum labore ipsam eum amet voluptas eveniet architecto </p>
                            </div>
                            <Link to="" className="">
                                <i class="pull-right fa fa-long-arrow-right" aria-hidden="true"></i>
                            </Link>
                        </div>
                        <div class="job" style={{
                            transform: "translate3d(0px, 0px, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg)"
                        }}>
                            <div className="inner">
                                <img src="../images/employer/exposure.jpg" className="img-fluid" alt="" />
                            </div>
                            <div className="inner-job">
                                <h5>Maximum Exposure</h5>
                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus doloribus dolores, quod porro voluptatum labore ipsam eum amet voluptas eveniet architecto.</p>
                            </div>
                            <Link to="" className="">
                                <i class="pull-right fa fa-long-arrow-right" aria-hidden="true"></i>
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
                            <p>We guarantee a pocket-friendly rates on all our services to any destination in the world.</p>
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

export default EmployerPage
