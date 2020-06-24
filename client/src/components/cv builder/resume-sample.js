import React from 'react'
import { Link } from 'react-router-dom'
import Footer from '../pages/footer'

const ResumeBuilder = () => {
    return (
        <div className="">
            <section className="bk0-image">
                <div class="container">
                    <div class="row">
                        <div class="col-md-12 bk0-inner-text tv-1  ">
                            <h2>Writing the <span>perfect resume</span> </h2>
                            <p>has never been easier</p>
                            <div class="bk0-button">
                                <Link class="btn btn-start" to="/launch">Start Now</Link>
                                <Link class="btn btn-more" to="/resume-builder">Learn more</Link>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            {/* <!-- block0 ends here-- > */}
            {/* < !--header text-- > */}
            <section class="bk-twitter">
                <div class="container">
                    <div class="row">
                        <div class="col-md-6 bk1-inner-text pt-2">
                            <h2>CV Builder Resume is Perfect for YOU</h2>
                            <p>Just choose one of our job-winning designs and add our expert-written examples. In just 10
                        minutes, you’ll have a flawless professional resume</p>
                        </div>
                        <div class="col-md-6 bk1-txt">
                            <Link class="btn btn-start" to="/launch">Start Now</Link>
                            <Link class="btn btn-more" to="/resume-builder">Learn more</Link>
                        </div>
                    </div>
                </div>
            </section>
            {/* <!--header txt ends-- > */}
            {/* < !--block 1 starts here-- > */}
            <section>
                <div class="container">
                    <div class="row">
                        <div class="col-md-3 cv-sam-txt1">
                            <div class="cv-sam-txt">
                                <h2>Accounting & Finance</h2>
                            </div>
                        </div>
                        <div class="col-md-3 cv-sam-txt1">
                            <div class="cv-sam-txt">
                                <h2>Administration Support</h2>
                            </div>
                        </div>
                        <div class="col-md-3 cv-sam-txt1">
                            <div class="cv-sam-txt">
                                <h2>Automotive Resume</h2>
                            </div>
                        </div>
                        <div class="col-md-3 cv-sam-txt1">
                            <div class="cv-sam-txt">
                                <h2>Engineer Resume</h2>
                            </div>
                        </div>
                    </div>
                    <div class="row">
                        <div class="col-md-3 cv-sam-txt1">
                            <div class="cv-sam-txt">
                                <h2>Computer & Technology </h2>
                            </div>
                        </div>
                        <div class="col-md-3 cv-sam-txt1">
                            <div class="cv-sam-txt">
                                <h2>Construction Resume</h2>
                            </div>
                        </div>
                        <div class="col-md-3 cv-sam-txt1">
                            <div class="cv-sam-txt">
                                <h2>Education Resume</h2>
                            </div>
                        </div>
                        <div class="col-md-3 cv-sam-txt1">
                            <div class="cv-sam-txt">
                                <h2>Algorithm Resume</h2>
                            </div>
                        </div>
                    </div>
                    <div class="row">
                        <div class="col-md-3 cv-sam-txt1">
                            <div class="cv-sam-txt">
                                <h2>Sales & Marketing</h2>
                            </div>
                        </div>
                        <div class="col-md-3 cv-sam-txt1">
                            <div class="cv-sam-txt">
                                <h2>Salon & Fitness</h2>
                            </div>
                        </div>
                        <div class="col-md-3 cv-sam-txt1">
                            <div class="cv-sam-txt">
                                <h2>Driver Resume</h2>
                            </div>
                        </div>
                        <div class="col-md-3 cv-sam-txt1">
                            <div class="cv-sam-txt">
                                <h2>Others</h2>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <Footer />
            {/* <!--block 1 ends here-- > */}
        </div >
    )
}

export default ResumeBuilder


