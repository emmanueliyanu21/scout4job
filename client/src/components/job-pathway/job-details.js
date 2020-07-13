import React from 'react'
import { Link } from 'react-router-dom'

const JobDetails = () => {
    return (
        <div className="">
            {/* <!-- body starts here --> */}
            <section className="bk-grey">
                <div className="container">
                    <div className="row pt-5 pb-5">
                        <div className="col-md-8 col-sm-12 db-page pt-4">
                            <div className="row">
                                <div className="col-md-2 and-x1">
                                    <img src="../images/andela.png" className="img-responsive" alt="" />
                                </div>
                                <div className="col-md-10">
                                    <h2>Creative and Passionate Writer</h2>
                                    <ul className="ul-job">
                                        <li>Writers Inc - <Link to=""> <span>(see more Jobs)</span></Link> </li>
                                        <li className=""><i className="fa fa-clock-o"></i> 4 days ago</li>
                                    </ul>
                                </div>
                            </div>
                            <div className="row pb-3">
                                <div className="col-md-4 inner-loc">
                                    <i className="fa fa-map-marker"></i>
                                    <span>Location(s):</span>
                                </div>
                                <div className="col-md-8 inner-det">
                                    <span>Not Specified — Nigeria</span>
                                </div>
                            </div>
                            <div className="row pb-3">
                                <div className="col-md-4 inner-loc">
                                    <i className="fa fa-certificate"></i>
                                    <span>Specialization:</span>
                                </div>
                                <div className="col-md-8 inner-det">
                                    <span>Media / Art / Entertainment </span>
                                </div>
                            </div>
                            <div className="row pb-3">
                                <div className="col-md-4 inner-loc">
                                    <i className="fa fa-industry"></i>
                                    <span>Industry::</span>
                                </div>
                                <div className="col-md-8 inner-det">
                                    <span>Advertising / Media / Publishing</span>
                                </div>
                            </div>
                            <div className="row pb-3">
                                <div className="col-md-4 inner-loc clock">
                                    <i className="fa fa-clock-o"></i>
                                    <span>Application Deadline:</span>
                                </div>
                                <div className="col-md-8 inner-det">
                                    <span>July 01, 2020</span>
                                </div>
                            </div>
                            <div className="row pb-3">
                                <div className="col-md-4 inner-loc">
                                    <i className="fa fa-briefcase"></i>
                                    <span>Job Type:</span>
                                </div>
                                <div className="col-md-8 inner-det">
                                    <span>Full Time</span>
                                </div>
                            </div>
                            <div className="row pb-3">
                                <div className="col-md-4 inner-loc">
                                    <i className="fa fa-paypal"></i>
                                    <span>Salary:</span>
                                </div>
                                <div className="col-md-8 inner-det">
                                    <span>₦600,000 - ₦1000,000 Naira per Annum</span>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-md-12 pb-5 pt-3 btn-x1">
                                    <Link to="/apply" className="btn btn-apply">Apply</Link>
                                    <Link to="/" className="btn btn-share"><i className="fa fa-share">Share</i></Link>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-4 db-page pt-4"></div>
                    </div>
                    <div className="row mt-2 mb-3">
                        <div className="col-md-8 db-page pt-4s db-more">
                            <h2>Innovations for Poverty Action is recruiting for fulltime Implementation
                        Coordinator</h2>
                            <h3>JOB DETAILS</h3>
                            <p>Innovations for Poverty Action (IPA) is a global research and policy nonprofit that discovers and
                                promotes
                                effective solutions to global poverty problems. As its core business, IPA brings together
                                researchers and
                                decision-makers to design, rigorously evaluate, and refine these solutions and their
                                applications, ensuring
                                that the evidence created is used to improve the lives of the world’s poor. IPA has conducted
                                hundreds of
                                randomized evaluations across sectors, learning both whether programs work, and how they can
                                work
                        better.</p>
                            <h3>RESPONSIBILITITES</h3>
                            <ul className="ul-res">
                                <li>Work with the Research Associate to organize and conduct training on impact evaluation for
                            implementing partners.</li>
                                <li>Work with the Research Associate to organize and conduct training on impact evaluation for
                            implementing partners.</li>
                            </ul>
                            <h3>JOB REQUIREMENTS</h3>
                            <ul className="ul-res">
                                <li>Min required experience: <span>3 years in relevant field</span></li>
                                <li>Minimum Qualification: <span>Bachelor Degree, HND</span></li>
                            </ul>
                            <div className="row">
                                <div className="col-md-12 pb-5 pt-3 btn-x1">
                                    <Link to="/apply" className="btn btn-apply">Apply</Link>
                                    <Link to="" className="btn btn-share"><i className="fa fa-share">Share</i></Link>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="row mt-2 mb-3">
                        <div className="col-md-8 db-page pt-4s db-more">
                            <h2>JOB SEEKERS ALSO VIEWED</h2>
                            <div className="more-job mb-2 mt-3">
                                <h2>Sales Representative</h2>
                                <ul className="ul-more-job">
                                    <li>International Rescue Committee (IRC) -</li>
                                    <li><i className="fa fa-map-marker"></i> Lagos</li>
                                    <li><i className="fa fa-clock-o"></i> About two hours ago</li>
                                </ul>
                            </div>
                            <div className="more-job mb-2">
                                <h2>Project Manager</h2>
                                <ul className="ul-more-job">
                                    <li>Telinno Consulting Limited (TCL) -</li>
                                    <li><i className="fa fa-map-marker"></i> Lagos</li>
                                    <li><i className="fa fa-clock-o"></i> About two hours ago</li>
                                </ul>
                            </div>
                            <div className="more-job mb-2">
                                <h2>Local Government Area (LGA) Coordinator</h2>
                                <ul className="ul-more-job">
                                    <li>International Rescue Committee (IRC) -</li>
                                    <li><i className="fa fa-map-marker"></i> Lagos</li>
                                    <li><i className="fa fa-clock-o"></i> About two hours ago</li>
                                </ul>
                            </div>
                            <div className="more-job mb-2">
                                <h2>Community Mobilization Assistant</h2>
                                <ul className="ul-more-job">
                                    <li>International Rescue Committee (IRC) -</li>
                                    <li><i className="fa fa-map-marker"></i> Lagos</li>
                                    <li><i className="fa fa-clock-o"></i> About two hours ago</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            {/* <!-- body ends here --> */}
            {/* <!-- block 5 starts here --> */}
            <section className="dk-bk-grey n1-line">
                <div className="container">
                    <div className="row">
                        <div className="col-md-12 short-mss">
                            <h2><span>Build your professional cv & cover letter and stand to get your dream job <m-span
                                className="sign-up">Sign up</m-span> </span> </h2>
                        </div>
                    </div>
                </div>
            </section>
            <section className="dk-bk-grey ul-f1">
                <div className="container">
                    <div className="row main-footer">
                        <div className="col-md-4">
                            <div className="ul-ft">
                                <img src="../images/logo2-template.png" className="img-responsive" alt="" />
                            </div>
                            <ul className="ul-footer pt-3">
                                <li><i className="fa fa-map-marker"></i>
                                    <p className="n-30">30, Commercial Road
                                Fracttion, United Kingdom</p>
                                </li>
                                <li><i className="fa fa-phone"></i>+2347-0685-6214</li>
                                <li><i className="fa fa-envelope"></i> info@coveero.com</li>

                            </ul>
                            <ul className="ul-foot">
                                <li className="active">Open Hours</li>
                                <li>Mon - Sat: 8am - 5pm</li>
                                <li>Sunday: Closed</li>
                            </ul>
                        </div>
                        <div className="col-md-4 row">
                            <div className="col-md-6">
                                <div className="ul-ft">
                                    <h2>Links</h2>
                                </div>
                                <ul className="ul-footer">
                                    <li><i className="fa fa-angle-right"></i> Home</li>
                                    <li><i className="fa fa-angle-right"></i> Job Search</li>
                                    <li><i className="fa fa-angle-right"></i> Build Resume</li>
                                    <li><i className="fa fa-angle-right"></i> Cover Letter</li>
                                    <li><i className="fa fa-angle-right"></i> About us</li>
                                    <li><i className="fa fa-angle-right"></i> Testimonials</li>
                                    <li><i className="fa fa-angle-right"></i> News</li>
                                </ul>
                            </div>
                            <div className="col-md-6">

                                <ul className="ul-footer pt-4 mt-3">
                                    <li><i className="fa fa-angle-right"></i>Gallery</li>
                                    <li><i className="fa fa-angle-right"></i>Our Team</li>
                                    <li><i className="fa fa-angle-right"></i>Portfolio</li>
                                    <li><i className="fa fa-angle-right"></i>Cover Letter</li>
                                    <li><i className="fa fa-angle-right"></i>Contact Us</li>
                                    <li><i className="fa fa-angle-right"></i>FAQ</li>
                                    <li><i className="fa fa-angle-right"></i>Careers</li>
                                </ul>
                            </div>
                        </div>
                        <div className="col-md-4 inner-d">
                            <div className="ul-ft">
                                <h2>Newsletter</h2>
                            </div>
                            <ul className="ul-footer">
                                <li>Send us a news letter to get update</li>
                            </ul>
                            <form>
                                <div className="form-group news-let">
                                    <input type="email" className="form-control x1" style={{ color: "#fff" }} id="exampleInputEmail1"
                                        aria-describedby="emailHelp" placeholder="Your email address here" />
                                </div>
                                <Link to=""><i className="fa fa-arrow-circle-o-right"></i></Link>
                            </form>
                            <ul className="soc-media">
                                <li><i className="fa fa-facebook x2"></i></li>
                                <li><i className="fa fa-instagram x3"></i></li>
                                <li><i className="fa fa-twitter x4"></i></li>
                                <li><i className="fa fa-linkedin x5"></i></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </section>
            <section className="dk-bk-grey">
                <div className="container">
                    <div className="row">
                        <div className="col-md-12 ft-copy">
                            <h2>2020 © All right reserved by <span>coovero.com</span></h2>
                        </div>
                    </div>
                </div>
            </section>

            {/* <!-- block 5 ends here --> */}
        </div>
    )
}

export default JobDetails


    // <!-- social-media icons -->
    // <section className="bk-twitter">
    //     <div className="container">
    //         <div className="row">
    //             <div className="col-md-6">
    //                 <ul className="soc-media-1">
    //                     <li><i className="fa fa-phone"></i> 07068576214</li>
    //                     <li><i className="fa fa-envelope"></i> info@covero.com </li>
    //                 </ul>
    //             </div>
    //             <div className="col-md-6">
    //                 <ul className="soc-media-2">
    //                     <li><i className="fa fa-facebook"></i></li>
    //                     <li><i className="fa fa-twitter"></i></li>
    //                     <li><i className="fa fa-instagram"></i></li>
    //                     <li><i className="fa fa-linkedin"></i></li>
    //                 </ul>
    //             </div>
    //         </div>
    //     </div>
    // </section>
    // <!-- social-media-icon -->
    // <!-- navbar starts here -->
    // <section>
    //     <nav className="navbar navbar-expand-lg wh-x1 navbar-dk">
    //         <div className="container">
    //             <a className="navbar-brand" href="../index.html">
    //                 <img src="../images/logo-template.png" alt="">
    //             </a>
    //             <button className="navbar-toggler" type="button" data-toggle="collapse"
    //                 data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false"
    //                 aria-label="Toggle navigation">
    //                 <span className="navbar-toggler-icon"></span>
    //             </button>
    //             <div className="collapse navbar-collapse" id="navbarSupportedContent">
    //                 <ul className="navbar-nav ml-auto" style="color: #343434;">
    //                     <li className="nav-item active">
    //                         <a className="nav-link" href="#">HOME <span className="sr-only">(current)</span></a>
    //                     </li>
    //                     <li className="nav-item">
    //                         <a className="nav-link" href="#">ABOUT</a>
    //                     </li>
    //                     <li className="nav-item dropdown">
    //                         <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button"
    //                             data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
    //                             RESUME
    //                         </a>
    //                         <div className="dropdown-menu" aria-labelledby="navbarDropdown">
    //                             <a className="dropdown-item" href="#">Action</a>
    //                             <a className="dropdown-item" href="#">Another action</a>
    //                             <div className="dropdown-divider"></div>
    //                             <a className="dropdown-item" href="#">Something else here</a>
    //                         </div>
    //                     </li>
    //                     <li className="nav-item">
    //                         <a className="nav-link" href="#">JOB SEARCH</a>
    //                     </li>
    //                     <li className="nav-item">
    //                         <a className="nav-link" href="#">COVER LETTER</a>
    //                     </li>
    //                     <li className="nav-item">
    //                         <a className="nav-link" href="#">SIGN IN</a>
    //                     </li>
    //                 </ul>
    //             </div>
    //         </div>
    //     </nav>

    // </section>
    // <!-- navbar ends here -->





