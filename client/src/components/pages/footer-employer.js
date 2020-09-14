import React from 'react'
import { Link } from 'react-router-dom'

const FooterEmloyer = () => {
    return (
        <div className="">
            {/* <!-- FOOTER STARTS HERE --> */}
            <section>
                <div className="container">
                    <div className="row pt-5 mt-5 pb-5 mb-5">
                        <div className="col-md-6 footer-caption">
                            <img src="images/scout4jobs-logo.png" className="img-fluid" alt="" />
                            <ul className="footer-text">
                                <li>
                                    <i className="fa fa-map-marker pr-2"></i>
                                    87A Ogudu Road, Ogudu, Lagos</li>
                                <li>
                                    <i className="fa fa-phone pr-1"></i>
                                    +234-811-227-0000</li>
                                <li>
                                    <i className="fa fa-envelope pr-1"></i>
                                    info@scout4job.com</li>
                            </ul>
                        </div>
                        <div className="col-md-6">
                            <div className="row">
                                <div className="col-md-4">
                                    <div className="footer-title">Company</div>
                                    <ul className="footer-text">
                                        <li><Link to="./about/about-us.html">About us</Link></li>
                                        <li><Link to="./about/about-us.html">Contact us</Link></li>
                                    </ul>
                                </div>
                                <div className="col-md-4">
                                    <div className="footer-title">Services</div>
                                    <ul className="footer-text">
                                        <li><Link to="">Job Posting</Link></li>
                                        <li><Link to="">CV Search</Link></li>
                                    </ul>
                                </div>
                                <div className="col-md-4">
                                    <div className="footer-title">Know more</div>
                                    <ul className="footer-text">
                                        <li><Link to="">Careers</Link></li>
                                        <li><Link to="">Blog</Link></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section>
                <div className="container">
                    <div className="row">
                        <div className="col-md-12 legal-text pb-5">
                            <h2>Copyright ©2020 <a href="index.html">Scout4Job</a>. All rights reserved.
                        Powered by <a href="index.html">Audrey
                            Systems</a>
                            </h2>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default FooterEmloyer
