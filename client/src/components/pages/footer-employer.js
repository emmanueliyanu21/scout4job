import React from 'react'

const FooterEmloyer = () => {
    return (
        <div className="">
            {/* <!-- FOOTER STARTS HERE --> */}
            <section>
                <div class="container">
                    <div class="row pt-5 mt-5 pb-5 mb-5">
                        <div class="col-md-6 footer-caption">
                            <img src="images/scout4jobs-logo.png" class="img-fluid" alt="" />
                            <ul class="footer-text">
                                <li>
                                    <i class="fa fa-map-marker pr-2"></i>
                                    87A Ogudu Road, Ogudu, Lagos</li>
                                <li>
                                    <i class="fa fa-phone pr-1"></i>
                                    +234-811-227-0000</li>
                                <li>
                                    <i class="fa fa-envelope pr-1"></i>
                                    info@scout4job.com</li>
                            </ul>
                        </div>
                        <div class="col-md-6">
                            <div class="row">
                                <div class="col-md-4">
                                    <div class="footer-title">Company</div>
                                    <ul class="footer-text">
                                        <li><a href="./about/about-us.html">About us</a></li>
                                        <li><a href="./about/about-us.html">Contact us</a></li>
                                    </ul>
                                </div>
                                <div class="col-md-4">
                                    <div class="footer-title">Services</div>
                                    <ul class="footer-text">
                                        <li><a href="">Job Posting</a></li>
                                        <li><a href="">CV Search</a></li>
                                    </ul>
                                </div>
                                <div class="col-md-4">
                                    <div class="footer-title">Know more</div>
                                    <ul class="footer-text">
                                        <li><a href="">Careers</a></li>
                                        <li><a href="">Blog</a></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section>
                <div class="container">
                    <div class="row">
                        <div class="col-md-12 legal-text pb-5">
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
