import React from 'react'
import { Link } from 'react-router-dom'
import Footer from '../pages/footer'
import Navbar from '../pages/Navbar'

const Cover = () => {
    return (
        <div className="">
            <Navbar />
            {/* <!-- block 1 starts here --> */}
            <section className="bk-cover-img">
                <div className="container">
                    <div className="row pace-down">
                        <div className="col-md-12 job-res">
                            <h2>Try Our Cover Letter Builder</h2>
                            <p>It's Free-to-Use and Proven to
                        Get You Hired 33% Faster</p>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-md-12 pb-4">
                            <Link to="/letter-template" className="btn btn-start-x1 mr-4">Start Now</Link>
                        </div>
                    </div>
                    <div className="row pt-5 pad-row">
                        <div className="col-md-4 cl-x1">
                            <div className="inner-cl">
                                <img src="../images/programmer.png" className="img-responsive" alt="" />
                                <h2>Accuraccy</h2>
                            </div>
                        </div>
                        <div className="col-md-4 cl-x1">
                            <div className="inner-cl inner-blue">
                                <img src="../images/time-management.png" className="img-responsive" alt="" />
                                <h2>Efficiency</h2>
                            </div>
                        </div>
                        <div className="col-md-4 cl-x1">
                            <div className="inner-cl inner-pink">
                                <img src="../images/innovation.png" className="img-responsive" alt="" />
                                <h2>Innovation</h2>
                            </div>
                        </div>
                    </div>
                </div>
            </section>


            {/* <!-- block 1 ends here --> */}

            {/* <!-- block 2 starts here --> */}
            <section>
                <div className="container">
                    <div className="row mt-5 mb-5">
                        <div className="col-md-6 bk2-i">
                            {/* <img src="../images/progressive.png" className="img-responsive" alt="" /> */}

                        </div>
                        <div className="col-md-6 bk2-text-cv">
                            <h2>Our Cover Letter is
                        perfect for you</h2>
                            <p>It takes the hassle out of resume writing
                                and only ours is proven to help you
                        get hired 33% faster.</p>
                            <div className="row pt-4">
                                <div className="col-md-4 col-sm-6 crafted">
                                    <div className="progress blue">
                                        <span className="progress-left">
                                            <span className="progress-bar"></span>
                                        </span>
                                        <span className="progress-right">
                                            <span className="progress-bar"></span>
                                        </span>
                                        <div className="progress-value">90%</div>

                                    </div>
                                    <p>Proffessionaly crafted</p>
                                </div>
                                {/* <div className="col-md-2"></div> */}
                                <div className="col-md-4 col-sm-6 crafted">
                                    <div className="progress yellow">
                                        <span className="progress-left">
                                            <span className="progress-bar"></span>
                                        </span>
                                        <span className="progress-right">
                                            <span className="progress-bar"></span>
                                        </span>
                                        <div className="progress-value">75%</div>
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
            <section className="bk-colored-img">
                <div className="container">
                    <div className="more-cv">
                        <h2>Professional Resumes Templates to work with</h2>
                    </div>
                    <div className="row pt-5 pb-5">
                        <div className="col-md-4 cv-more">
                            <Link to="/specific">
                                <img src="../images/cv.jpg" className="img-responsive" alt="" />
                            </Link>
                        </div>
                        <div className="col-md-4 cv-more">
                            <Link to="/specific">
                                <img src="../images/cv.jpg" className="img-responsive" alt="" />
                            </Link>
                        </div>
                        <div className="col-md-4 cv-more">
                            <Link to="/specific">
                                <img src="../images/cv.jpg" className="img-responsive" alt="" />
                            </Link>2
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