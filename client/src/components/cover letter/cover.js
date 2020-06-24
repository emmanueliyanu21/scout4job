import React from 'react'
import { Link } from 'react-router-dom'
import Footer from '../pages/footer'

const Cover = () => {
    return (
        <div className="">
            {/* <!-- block 1 starts here --> */}
            <section class="bk-cover-img">
                <div class="container pb-5">
                    <div class="row pace-down">
                        <div class="col-md-12 job-res">
                            <h2>Try Our Cover Letter Builder</h2>
                            <p>It's Free-to-Use and Proven to
                        Get You Hired 33% Faster</p>
                        </div>
                    </div>
                    <div class="row">
                        <div class="col-md-12 pb-4">
                            <Link to="/specific" class="btn btn-start-x1 mr-4">Start Now</Link>
                            <Link to="/specific" class="btn btn-learn-x1">Learn more</Link>
                        </div>
                    </div>
                    <div class="row pt-5 pad-row">
                        <div class="col-md-4 cl-x1">
                            <div class="inner-cl">
                                <img src="../images/programmer.png" class="img-responsive" alt="" />
                                <h2>Accuraccy</h2>
                            </div>
                        </div>
                        <div class="col-md-4 cl-x1">
                            <div class="inner-cl inner-blue">
                                <img src="../images/time-management.png" class="img-responsive" alt="" />
                                <h2>Efficiency</h2>
                            </div>
                        </div>
                        <div class="col-md-4 cl-x1">
                            <div class="inner-cl inner-pink">
                                <img src="../images/innovation.png" class="img-responsive" alt="" />
                                <h2>Innovation</h2>
                            </div>
                        </div>
                    </div>
                </div>
            </section>


            {/* <!-- block 1 ends here --> */}

            {/* <!-- block 2 starts here --> */}
            <section>
                <div class="container">
                    <div class="row mt-5 mb-5">
                        <div class="col-md-6 bk2-i">
                            {/* <img src="../images/progressive.png" class="img-responsive" alt="" /> */}
                            
                        </div>
                        <div class="col-md-6 bk2-text-cv">
                            <h2>CV-Builder Resume is
                        perfect for you</h2>
                            <p>It takes the hassle out of resume writing
                                and only ours is proven to help you
                        get hired 33% faster.</p>
                            <div class="row pt-4">
                                <div class="col-md-4 col-sm-6 crafted">
                                    <div class="progress blue">
                                        <span class="progress-left">
                                            <span class="progress-bar"></span>
                                        </span>
                                        <span class="progress-right">
                                            <span class="progress-bar"></span>
                                        </span>
                                        <div class="progress-value">90%</div>

                                    </div>
                                    <p>Proffessionaly crafted</p>
                                </div>
                                {/* <div className="col-md-2"></div> */}
                                <div class="col-md-4 col-sm-6 crafted">
                                    <div class="progress yellow">
                                        <span class="progress-left">
                                            <span class="progress-bar"></span>
                                        </span>
                                        <span class="progress-right">
                                            <span class="progress-bar"></span>
                                        </span>
                                        <div class="progress-value">75%</div>
                                    </div>
                                    <p>Tested & Trusted</p>
                                </div>

                            </div>
                        </div>
                    </div>

                </div>
            </section>

            {/* <!-- block 2 ends here --> */}
            {/* <!-- block 3 starts here --> */}
            <section class="bk-colored-img">
                <div class="container">
                    <div class="more-cv">
                        <h2>Over 10,000 Resumes Templates to work with</h2>
                    </div>
                    <div class="row pt-5 pb-5">
                        <div class="col-md-3 cv-more">
                            <img src="../images/cv.jpg" class="img-responsive" alt="" />
                        </div>
                        <div class="col-md-3 cv-more">
                            <img src="../images/cv.jpg" class="img-responsive" alt="" />
                        </div>
                        <div class="col-md-3 cv-more">
                            <img src="../images/cv.jpg" class="img-responsive" alt="" />
                        </div>
                        <div class="col-md-3 cv-more">
                            <img src="../images/cv.jpg" class="img-responsive" alt="" />
                        </div>
                    </div>
                </div>
            </section>
            <Footer />
            {/* <!-- block 3 ends here --> */}
        </div>
    )
}

export default Cover