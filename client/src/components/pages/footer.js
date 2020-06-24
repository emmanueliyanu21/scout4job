import React from 'react'
import { Link } from 'react-router-dom'

const Footer = () => {
    return (
        <div className="">
            {/* // < !--block 5 starts here-- > */}
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
                                <li class="n-30"><i class="fa fa-map-marker"></i> <span>No 3, Bola Onasanya Crescent, Ogudu, Lagos</span>
                                </li>
                                <li><i class="fa fa-phone"></i>+2347-0685-6214</li>
                                <li><i class="fa fa-envelope"></i> info@cv-builder.com.ng</li>
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
                                    <li><Link to="/"><i class="fa fa-angle-right"></i> Home</Link></li>
                                    <li><Link to="/job-search"><i class="fa fa-angle-right"></i> Job Search</Link></li>
                                    <li><Link to="/resume-builder"><i class="fa fa-angle-right"></i> Build Resume</Link></li>
                                    <li><Link to="/cover-letter"><i class="fa fa-angle-right"></i> Cover Letter</Link></li>
                                    <li><Link to="/about-us"><i class="fa fa-angle-right"></i> About us</Link></li>
                                    <li><Link to="/"><i class="fa fa-angle-right"></i> Testimonials</Link></li>
                                    <li><Link to="/"><i class="fa fa-angle-right"></i> News</Link></li>
                                </ul>
                            </div>
                            <div class="col-md-6">
                                <ul class="ul-footer pt-4 mt-3">
                                    <li><Link to=""><i class="fa fa-angle-right"></i>Gallery</Link></li>
                                    <li><Link to=""><i class="fa fa-angle-right"></i>Our Team</Link></li>
                                    <li><Link to=""><i class="fa fa-angle-right"></i>Portfolio</Link></li>
                                    <li><Link to="/cover-letter"><i class="fa fa-angle-right"></i>Cover Letter</Link></li>
                                    <li><Link to="/about-us"><i class="fa fa-angle-right"></i>Contact Us</Link></li>
                                    <li><Link to="/resume-builder"><i class="fa fa-angle-right"></i>FAQ</Link></li>
                                    <li><Link to="/job-search"><i class="fa fa-angle-right"></i>Careers</Link></li>
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
                                    <input type="email" class="form-control x1" style={{ color: "#fff" }} id="exampleInputEmail1"
                                        aria-describedby="emailHelp" placeholder="Your email address here" />
                                </div>
                                <Link><i class="fa fa-arrow-circle-o-right o-right"></i></Link>
                            </form>
                            <ul class="soc-media">
                                <li><Link to=""><i class="fa fa-facebook x2"></i></Link></li>
                                <li><Link to=""><i class="fa fa-instagram x3"></i></Link></li>
                                <li><Link to=""><i class="fa fa-twitter x4"></i></Link></li>
                                <li><Link to=""><i class="fa fa-linkedin x5"></i></Link></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </section>
            <section class="dk-bk-grey">
                <div class="container">
                    <div class="row">
                        <div class="col-md-12 ft-copy">
                            <h2>2020 © All right reserved by <span>cv-builder.com.ng</span></h2>
                        </div>
                    </div>
                </div>
            </section>

            {/* // <!-- block 5 ends here --> */}
        </div>
    )
}

export default Footer
