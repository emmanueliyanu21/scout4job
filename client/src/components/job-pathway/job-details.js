import React from 'react'
import { Link } from 'react-router-dom'

const JobDetails = () => {
    return (
        <div className="">
            {/* <!-- body starts here --> */}
            <section class="bk-grey">
                <div class="container">
                    <div class="row pt-5 pb-5">
                        <div class="col-md-8 db-page pt-4">
                            <div class="row">
                                <div class="col-md-2 and-x1">
                                    <img src="../images/andela.png" class="img-responsive" alt="" />
                                </div>
                                <div class="col-md-10">
                                    <h2>Creative and Passionate Writer</h2>
                                    <ul class="ul-job">
                                        <li>Writers Inc - <Link to=""> <span>(see more Jobs)</span></Link> </li>
                                        <li class=""><i class="fa fa-clock-o"></i> 4 days ago</li>
                                    </ul>
                                </div>
                            </div>
                            <div class="row pb-3">
                                <div class="col-md-4 inner-loc">
                                    <i class="fa fa-map-marker"></i>
                                    <span>Location(s):</span>
                                </div>
                                <div class="col-md-8 inner-det">
                                    <span>Not Specified — Nigeria</span>
                                </div>
                            </div>
                            <div class="row pb-3">
                                <div class="col-md-4 inner-loc">
                                    <i class="fa fa-certificate"></i>
                                    <span>Specialization:</span>
                                </div>
                                <div class="col-md-8 inner-det">
                                    <span>Media / Art / Entertainment </span>
                                </div>
                            </div>
                            <div class="row pb-3">
                                <div class="col-md-4 inner-loc">
                                    <i class="fa fa-industry"></i>
                                    <span>Industry::</span>
                                </div>
                                <div class="col-md-8 inner-det">
                                    <span>Advertising / Media / Publishing</span>
                                </div>
                            </div>
                            <div class="row pb-3">
                                <div class="col-md-4 inner-loc clock">
                                    <i class="fa fa-clock-o"></i>
                                    <span>Application Deadline:</span>
                                </div>
                                <div class="col-md-8 inner-det">
                                    <span>July 01, 2020</span>
                                </div>
                            </div>
                            <div class="row pb-3">
                                <div class="col-md-4 inner-loc">
                                    <i class="fa fa-briefcase"></i>
                                    <span>Job Type:</span>
                                </div>
                                <div class="col-md-8 inner-det">
                                    <span>Full Time</span>
                                </div>
                            </div>
                            <div class="row pb-3">
                                <div class="col-md-4 inner-loc">
                                    <i class="fa fa-paypal"></i>
                                    <span>Salary:</span>
                                </div>
                                <div class="col-md-8 inner-det">
                                    <span>₦600,000 - ₦1000,000 Naira per Annum</span>
                                </div>
                            </div>
                            <div class="row">
                                <div class="col-md-12 pb-5 pt-3 btn-x1">
                                    <Link to="/apply" class="btn btn-apply">Apply</Link>
                                    <Link to="/" class="btn btn-share"><i class="fa fa-share">Share</i></Link>
                                </div>
                            </div>
                        </div>
                        <div class="col-md-4 db-page pt-4"></div>
                    </div>
                    <div class="row mt-2 mb-3">
                        <div class="col-md-8 db-page pt-4s db-more">
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
                            <ul class="ul-res">
                                <li>Work with the Research Associate to organize and conduct training on impact evaluation for
                            implementing partners.</li>
                                <li>Work with the Research Associate to organize and conduct training on impact evaluation for
                            implementing partners.</li>
                            </ul>
                            <h3>JOB REQUIREMENTS</h3>
                            <ul class="ul-res">
                                <li>Min required experience: <span>3 years in relevant field</span></li>
                                <li>Minimum Qualification: <span>Bachelor Degree, HND</span></li>
                            </ul>
                            <div class="row">
                                <div class="col-md-12 pb-5 pt-3 btn-x1">
                                    <Link to="apply.html" class="btn btn-apply">Apply</Link>
                                    <Link href="" class="btn btn-share"><i class="fa fa-share">Share</i></Link>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="row mt-2 mb-3">
                        <div class="col-md-8 db-page pt-4s db-more">
                            <h2>JOB SEEKERS ALSO VIEWED</h2>
                            <div class="more-job mb-2 mt-3">
                                <h2>Sales Representative</h2>
                                <ul class="ul-more-job">
                                    <li>International Rescue Committee (IRC) -</li>
                                    <li><i class="fa fa-map-marker"></i> Lagos</li>
                                    <li><i class="fa fa-clock-o"></i> About two hours ago</li>
                                </ul>
                            </div>
                            <div class="more-job mb-2">
                                <h2>Project Manager</h2>
                                <ul class="ul-more-job">
                                    <li>Telinno Consulting Limited (TCL) -</li>
                                    <li><i class="fa fa-map-marker"></i> Lagos</li>
                                    <li><i class="fa fa-clock-o"></i> About two hours ago</li>
                                </ul>
                            </div>
                            <div class="more-job mb-2">
                                <h2>Local Government Area (LGA) Coordinator</h2>
                                <ul class="ul-more-job">
                                    <li>International Rescue Committee (IRC) -</li>
                                    <li><i class="fa fa-map-marker"></i> Lagos</li>
                                    <li><i class="fa fa-clock-o"></i> About two hours ago</li>
                                </ul>
                            </div>
                            <div class="more-job mb-2">
                                <h2>Community Mobilization Assistant</h2>
                                <ul class="ul-more-job">
                                    <li>International Rescue Committee (IRC) -</li>
                                    <li><i class="fa fa-map-marker"></i> Lagos</li>
                                    <li><i class="fa fa-clock-o"></i> About two hours ago</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            {/* <!-- body ends here --> */}
            {/* <!-- block 5 starts here --> */}
            <section class="dk-bk-grey n1-line">
                <div class="container">
                    <div class="row">
                        <div class="col-md-12 short-mss">
                            <h2><span>Build your professional cv & cover letter and stand to get your dream job <m-span
                                class="sign-up">Sign up</m-span> </span> </h2>
                        </div>
                    </div>
                </div>
            </section>
            <section class="dk-bk-grey ul-f1">
                <div class="container">
                    <div class="row main-footer">
                        <div class="col-md-4">
                            <div class="ul-ft">
                                <img src="../images/logo2-template.png" class="img-responsive" alt="" />
                            </div>
                            <ul class="ul-footer pt-3">
                                <li><i class="fa fa-map-marker"></i>
                                    <p class="n-30">30, Commercial Road
                                Fracttion, United Kingdom</p>
                                </li>
                                <li><i class="fa fa-phone"></i>+2347-0685-6214</li>
                                <li><i class="fa fa-envelope"></i> info@coveero.com</li>

                            </ul>
                            <ul class="ul-foot">
                                <li class="active">Open Hours</li>
                                <li>Mon - Sat: 8am - 5pm</li>
                                <li>Sunday: Closed</li>
                            </ul>
                        </div>
                        <div class="col-md-4 row">
                            <div class="col-md-6">
                                <div class="ul-ft">
                                    <h2>Links</h2>
                                </div>
                                <ul class="ul-footer">
                                    <li><i class="fa fa-angle-right"></i> Home</li>
                                    <li><i class="fa fa-angle-right"></i> Job Search</li>
                                    <li><i class="fa fa-angle-right"></i> Build Resume</li>
                                    <li><i class="fa fa-angle-right"></i> Cover Letter</li>
                                    <li><i class="fa fa-angle-right"></i> About us</li>
                                    <li><i class="fa fa-angle-right"></i> Testimonials</li>
                                    <li><i class="fa fa-angle-right"></i> News</li>
                                </ul>
                            </div>
                            <div class="col-md-6">

                                <ul class="ul-footer pt-4 mt-3">
                                    <li><i class="fa fa-angle-right"></i>Gallery</li>
                                    <li><i class="fa fa-angle-right"></i>Our Team</li>
                                    <li><i class="fa fa-angle-right"></i>Portfolio</li>
                                    <li><i class="fa fa-angle-right"></i>Cover Letter</li>
                                    <li><i class="fa fa-angle-right"></i>Contact Us</li>
                                    <li><i class="fa fa-angle-right"></i>FAQ</li>
                                    <li><i class="fa fa-angle-right"></i>Careers</li>
                                </ul>
                            </div>
                        </div>
                        <div class="col-md-4 inner-d">
                            <div class="ul-ft">
                                <h2>Newsletter</h2>
                            </div>
                            <ul class="ul-footer">
                                <li>Send us a news letter to get update</li>
                            </ul>
                            <form>
                                <div class="form-group news-let">
                                    <input type="email" class="form-control x1" style={{ color: "#fff;" }} id="exampleInputEmail1"
                                        aria-describedby="emailHelp" placeholder="Your email address here" />
                                </div>
                                <Link><i class="fa fa-arrow-circle-o-right"></i></Link>
                            </form>
                            <ul class="soc-media">
                                <li><i class="fa fa-facebook x2"></i></li>
                                <li><i class="fa fa-instagram x3"></i></li>
                                <li><i class="fa fa-twitter x4"></i></li>
                                <li><i class="fa fa-linkedin x5"></i></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </section>
            <section class="dk-bk-grey">
                <div class="container">
                    <div class="row">
                        <div class="col-md-12 ft-copy">
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
    // <section class="bk-twitter">
    //     <div class="container">
    //         <div class="row">
    //             <div class="col-md-6">
    //                 <ul class="soc-media-1">
    //                     <li><i class="fa fa-phone"></i> 07068576214</li>
    //                     <li><i class="fa fa-envelope"></i> info@covero.com </li>
    //                 </ul>
    //             </div>
    //             <div class="col-md-6">
    //                 <ul class="soc-media-2">
    //                     <li><i class="fa fa-facebook"></i></li>
    //                     <li><i class="fa fa-twitter"></i></li>
    //                     <li><i class="fa fa-instagram"></i></li>
    //                     <li><i class="fa fa-linkedin"></i></li>
    //                 </ul>
    //             </div>
    //         </div>
    //     </div>
    // </section>
    // <!-- social-media-icon -->
    // <!-- navbar starts here -->
    // <section>
    //     <nav class="navbar navbar-expand-lg wh-x1 navbar-dk">
    //         <div class="container">
    //             <a class="navbar-brand" href="../index.html">
    //                 <img src="../images/logo-template.png" alt="">
    //             </a>
    //             <button class="navbar-toggler" type="button" data-toggle="collapse"
    //                 data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false"
    //                 aria-label="Toggle navigation">
    //                 <span class="navbar-toggler-icon"></span>
    //             </button>
    //             <div class="collapse navbar-collapse" id="navbarSupportedContent">
    //                 <ul class="navbar-nav ml-auto" style="color: #343434;">
    //                     <li class="nav-item active">
    //                         <a class="nav-link" href="#">HOME <span class="sr-only">(current)</span></a>
    //                     </li>
    //                     <li class="nav-item">
    //                         <a class="nav-link" href="#">ABOUT</a>
    //                     </li>
    //                     <li class="nav-item dropdown">
    //                         <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button"
    //                             data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
    //                             RESUME
    //                         </a>
    //                         <div class="dropdown-menu" aria-labelledby="navbarDropdown">
    //                             <a class="dropdown-item" href="#">Action</a>
    //                             <a class="dropdown-item" href="#">Another action</a>
    //                             <div class="dropdown-divider"></div>
    //                             <a class="dropdown-item" href="#">Something else here</a>
    //                         </div>
    //                     </li>
    //                     <li class="nav-item">
    //                         <a class="nav-link" href="#">JOB SEARCH</a>
    //                     </li>
    //                     <li class="nav-item">
    //                         <a class="nav-link" href="#">COVER LETTER</a>
    //                     </li>
    //                     <li class="nav-item">
    //                         <a class="nav-link" href="#">SIGN IN</a>
    //                     </li>
    //                 </ul>
    //             </div>
    //         </div>
    //     </nav>

    // </section>
    // <!-- navbar ends here -->





