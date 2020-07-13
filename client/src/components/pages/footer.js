import React from 'react'
import { Link } from 'react-router-dom'

const Footer = () => {
    return (
        <div className="">
            {/* // < !--block 5 starts here-- > */}
            <section className="dk-bk-grey n1-line">
                <div className="container">
                    <div className="row">
                        <div className="col-md-12 short-mss">
                            <h2><span>Build your professional cv & cover letter and stand to get your dream job  </span> </h2>
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
                                <li className="n-30"><i className="fa fa-map-marker"></i> <span>No 3, Bola Onasanya Crescent, Ogudu, Lagos</span>
                                </li>
                                <li><i className="fa fa-phone"></i>+2347-0685-6214</li>
                                <li><i className="fa fa-envelope"></i> info@scout4job.com</li>
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
                                    <li><Link to="/"><i className="fa fa-angle-right"></i> Home</Link></li>
                                    <li><Link to="/job-search"><i className="fa fa-angle-right"></i> Job Search</Link></li>
                                    <li><Link to="/resume-builder"><i className="fa fa-angle-right"></i> Build Resume</Link></li>
                                    <li><Link to="/cover-letter"><i className="fa fa-angle-right"></i> Cover Letter</Link></li>
                                    <li><Link to="/about-us"><i className="fa fa-angle-right"></i> About us</Link></li>
                                    <li><Link to="/"><i className="fa fa-angle-right"></i> Testimonials</Link></li>
                                    <li><Link to="/"><i className="fa fa-angle-right"></i> News</Link></li>
                                </ul>
                            </div>
                            <div className="col-md-6">
                                <ul className="ul-footer pt-4 mt-3">
                                    <li><Link to=""><i className="fa fa-angle-right"></i>Gallery</Link></li>
                                    <li><Link to=""><i className="fa fa-angle-right"></i>Our Team</Link></li>
                                    <li><Link to=""><i className="fa fa-angle-right"></i>Portfolio</Link></li>
                                    <li><Link to="/cover-letter"><i className="fa fa-angle-right"></i>Cover Letter</Link></li>
                                    <li><Link to="/about-us"><i className="fa fa-angle-right"></i>Contact Us</Link></li>
                                    <li><Link to="/resume-builder"><i className="fa fa-angle-right"></i>FAQ</Link></li>
                                    <li><Link to="/job-search"><i className="fa fa-angle-right"></i>Careers</Link></li>
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
                                <Link to="#"><i className="fa fa-arrow-circle-o-right o-right"></i></Link>
                            </form>
                            <ul className="soc-media">
                                <li><Link to=""><i className="fa fa-facebook x2"></i></Link></li>
                                <li><Link to=""><i className="fa fa-instagram x3"></i></Link></li>
                                <li><Link to=""><i className="fa fa-twitter x4"></i></Link></li>
                                <li><Link to=""><i className="fa fa-linkedin x5"></i></Link></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </section>
            <section className="dk-bk-grey">
                <div className="container">
                    <div className="row">
                        <div className="col-md-12 ft-copy">
                            <h2>2020 © All right reserved by <span>scout4job.com</span></h2>
                        </div>
                    </div>
                </div>
            </section>

            {/* // <!-- block 5 ends here --> */}
        </div>
    )
}

export default Footer
