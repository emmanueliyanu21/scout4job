import React from 'react'
import { Link } from 'react-router-dom'
import Footer from '../pages/footer'

const ResumeBuilder = () => {
    return (
        <div className="">
            <section className="bk0-image">
                <div className="container">
                    <div className="row">
                        <div className="col-md-12 bk0-inner-text">
                            <h2>Try <span>CV-Builder</span> Resume</h2>
                            <p>It's Free-to-Use and Proven to Get You Hired 33% Faster</p>
                            <div className="bk0-button">
                                <Link to="/launch" className="btn btn-start" href="">Start Now</Link>
                                <Link to="/resume-sample" className="btn btn-more" href="">Learn more</Link>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            {/* // <!-- block0 ends here-- > */}
            {/* // < !--header starts here-- > */}
            <section className="bk-twitter">
                <div className="container">
                    <div className="row">
                        <div className="col-md-6 bk1-inner-text pt-3">
                            <h2>CV-Builder Resume is Perfect for YOU</h2>
                            <p>It takes the hassle out of resume writing and only ours is proven to help you get hired 70%
                        faster</p>
                        </div>
                        <div className="col-md-6 bk1-txt">
                            <Link className="btn btn-start" to="/launch">Start Now</Link>
                            <Link className="btn btn-more" to="/resume-sample">Learn more</Link>
                        </div>
                    </div>
                </div>
            </section>
            {/* // <!--header ends her /e-- > */}
            {/* // < !--block 2 start  s here-- > */}
            <section className="bk-grey">
                <div className="container">
                    <div className="row">
                        <div className="col-md-5 bk2-text">
                            <h2>CV-Builder Resume</h2>
                            <div className="bk2-inner-txt">
                                <p><i className="fa fa-circle"></i>Pick from our professionally crafted resume designs
                        </p>
                                <p><i className="fa fa-circle"></i>Tell us a few things about yourself</p>
                                <p><i className="fa fa-circle"></i>We’ll match you with the right resume personalized to
                            you</p>
                            </div>
                            <div className="bk2-btn">
                                <Link to="/launch" className="btn btn-start btn-now">Start Now</Link>
                                <Link to="/resume-sample" className="btn bk2-btn-more">Learn more</Link>
                            </div>
                        </div>
                        <div className="col-md-7 bk2-img pt-5 pb-5">
                            <img src="../images/cv-consultant.png" className="img-responsive" alt="" />
                        </div>
                    </div>
                </div>
            </section>
            {/* // <!-- block 2 ends here-- > */}

            {/* // < !--block 3 starts here-- > */}
            <section>
                <div className="container">

                    <div className="bk3-txt">
                        <h2>We have dozens of resume examples covering your industry and career field</h2>
                    </div>
                    <div className="row">
                        <div className="col-md-4 bk3-img">
                            <Link to=""><img src="../images/cv.jpg" alt="" className="img-responsive" /></Link>
                        </div>
                        <div className="col-md-4 bk3-img">
                            <Link to=""><img src="../images/cv.jpg" alt="" className="img-responsive" /></Link>
                        </div>
                        <div className="col-md-4 bk3-img">
                            <Link to=""><img src="../images/cv.jpg" alt="" className="img-responsive" /></Link>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-md-12">
                            <ul className="inner-arrow">
                                <li><Link to=""><i className="fa fa-long-arrow-left"></i></Link></li>
                                <li><Link to=""><i className="fa fa-long-arrow-right"></i></Link></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </section>
            {/* // {/* <!-- block 3 ends here --> */}
            {/* // {/* <!-- block 4 starts here --> */}
            <section className="bk-grey">
                <div className="container">
                    <div className="bk4-header">
                        <h2>10 Reasons to Start Your Resume Today</h2>
                    </div>
                    <div className="row bk4-txt">
                        <div className="col-md-12 bk4-inner">
                            <p className=" ">
                                <a className="btn pt-bk4 bk4-x1" data-toggle="collapse" href="#collapseExample" role="button" aria-expanded="false" aria-controls="collapseExample">
                                    <i className="fa fa-plus"></i>    No Technical Knowledge Required
                                </a>
                            </p>
                            <div className="collapse" id="collapseExample">
                                <div className="card card-body">
                                    Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident.
                                </div>
                            </div>
                            <p className="">
                                <a className="btn pt-bk4 bk4-x1" data-toggle="collapse" href="#collapseExample1" role="button" aria-expanded="false" aria-controls="collapseExample">
                                    <i className="fa fa-plus"></i>    Customizable Templates
                                </a>
                            </p>
                            <div className="collapse" id="collapseExample1">
                                <div className="card card-body">
                                    Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident.
                                </div>
                            </div>
                            <p className="">
                                <a className="btn pt-bk4 bk4-x1" data-toggle="collapse" href="#collapseExample2" role="button" aria-expanded="false" aria-controls="collapseExample">
                                    <i className="fa fa-plus"></i>    Easy to Use
                                </a>
                            </p>
                            <div className="collapse" id="collapseExample2">
                                <div className="card card-body">
                                    Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident.
                                </div>
                            </div>
                            <p className="">
                                <a className="btn pt-bk4 bk4-x1" data-toggle="collapse" href="#collapseExample3" role="button" aria-expanded="false" aria-controls="collapseExample">
                                    <i className="fa fa-plus"></i>    It Checks Before You Send
                                </a>
                            </p>
                            <div className="collapse" id="collapseExample3">
                                <div className="card card-body">
                                    Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident.
                                </div>
                            </div>
                            <p className="">
                                <a className="btn pt-bk4 bk4-x1" data-toggle="collapse" href="#collapseExample4" role="button" aria-expanded="false" aria-controls="collapseExample">
                                    <i className="fa fa-plus"></i>    Unlimited Resume Access
                                </a>
                            </p>
                            <div className="collapse" id="collapseExample4">
                                <div className="card card-body">
                                    Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident.
                                </div>
                            </div>
                            <p className="">
                                <a className="btn pt-bk4 bk4-x1" data-toggle="collapse" href="#collapseExample5" role="button" aria-expanded="false" aria-controls="collapseExample">
                                    <i className="fa fa-plus"></i>    Unlimited Resume Creation
                                </a>
                            </p>
                            <div className="collapse" id="collapseExample5">
                                <div className="card card-body">
                                    Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident.
                                </div>
                            </div>
                            <p className="">
                                <a className="btn pt-bk4 bk4-x1" data-toggle="collapse" href="#collapseExample6" role="button" aria-expanded="false" aria-controls="collapseExample">
                                    <i className="fa fa-plus"></i>    Cover Letter Help
                                </a>
                            </p>
                            <div className="collapse" id="collapseExample6">
                                <div className="card card-body">
                                    Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident.
                                </div>
                            </div>
                            <p className="">
                                <a className="btn pt-bk4 bk4-x1" data-toggle="collapse" href="#collapseExample7" role="button" aria-expanded="false" aria-controls="collapseExample">
                                    <i className="fa fa-plus"></i>    Confidence Booster
                                </a>
                            </p>
                            <div className="collapse" id="collapseExample7">
                                <div className="card card-body">
                                    Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident.
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <Footer />


        </div >
    )
}

export default ResumeBuilder


