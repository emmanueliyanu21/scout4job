import React from 'react'
import { Link } from 'react-router-dom'
import Footer from '../pages/footer'


const Home = () => {
    return (
        <div className="app-header">

            {/* <!-- section two starts here --> */}
            <div class="bk-blue">
                <div class="container">
                    <div class="row fr-block">
                        <div class="col-md-6 lp-block">
                            <h2>Your Resume, Made Easy</h2>
                            <p>CV Builder takes the hassle out of resume writing. You can choose from several templates and follow easy prompts
                    to create the perfect job-ready resume effortlessly.</p>
                            <Link to="/resume-sample" class="btn btn-more btn-lick mb-5 mt-2">
                                Learn more
                </Link>
                        </div>
                        <div class="col-md-6 lp-img">
                            {/* <!-- <img src="images/banner-1.jpg" class="img-responsive" alt=""> --> */}
                            {/* <!-- <img src="images/undraw.png" class="img-responsive" alt=""> --> */}
                        </div>
                    </div>
                </div>
            </div>

            {/* <!-- section two ends here --> */}

            {/* <!-- section three starts here --> */}
            <div class="bk-grey">
                <div class="container">
                    <div class="row">
                        <div class="col-md-12">
                            <div class="sec-header">
                                <h2><span><i class="fa fa-briefcase"></i> Featured services</span> </h2>
                            </div>
                            <div class="sc-3">
                                <h2>Additional Service that will</h2>
                                <p>Grow your career</p>
                            </div>
                            <div class="sc3-x1">
                                <h3>As a SEO Advisor or web crawler expert, I help organization adjust to the expanding significance
                                    of internet
                        promoting</h3>
                            </div>
                        </div>
                    </div>
                    <div class="row">
                        <div class="col-md-3">
                            <div class="sc3-x2 sc3-x3">
                                <img src="./images/first.png" class="img-responsive" alt="" />
                                <h2>CV Builder</h2>
                                <p>For every experience level of professionals as well as the fresh graduates, our resume service will serve your need to stay relevant.</p>

                                <Link to="/launch">
                                    <h3>
                                        <i class="fa fa-long-arrow-right pr-2"></i> Learn more</h3>
                                </Link>
                            </div>
                        </div>
                        <div class="col-md-3">
                            <div class="sc3-x2">
                                <img src="./images/second.png" class="img-responsive" alt="" />
                                <h2>Cover Letter</h2>
                                <p>For every experience level of professionals as well as the fresh graduates, our cover letter service will serve your need to stay relevant.</p>
                                <Link to="/cover-letter">
                                    <h3><i class="fa fa-long-arrow-right pr-2"></i>Learn more</h3>
                                </Link>
                            </div>
                        </div>
                        <div class="col-md-3 sc3-x2">
                            <img src="./images/thrid.png" class="img-responsive" alt="" />
                            <h2>Job Search</h2>
                            <p>For every experience level of professionals as well as the fresh graduates, our Job updates service will serve get you hired.</p>
                            <Link to="/job-search">
                                <h3><i class="fa fa-long-arrow-right pr-2"></i>Learn more</h3>
                            </Link>
                        </div>
                        <div class="col-md-3 sc3-x2">
                            <img src="./images/fourth.png" class="img-responsive" alt="" />
                            <h2>Interviews</h2>
                            <p>For every experience level of professionals as well as the fresh graduates, our Interview service will serve get you hired.</p>
                            <Link to="/interviews">
                                <h3><i class="fa fa-long-arrow-right pr-2"></i>Learn more</h3>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>

            {/* <!-- section three ends here --> */}

            {/* <!-- section four starts here --> */}
            <div>
                <div class="container">
                    <div class="row">
                        <div class="col-md-12">
                            <div class="sec-header">
                                <h2><span><i class="fa fa-briefcase"></i> Available Jobs</span> </h2>
                            </div>
                        </div>
                    </div>
                    <div class="row ">
                        <div class="col-md-4 ">
                            <div class="sc4-x1">
                                <Link to="/job-search">
                                    <img src="./images/digital-marketing.png" class="img-responsive" alt="" />
                                    <div class="inner-content">
                                        <ul class="ul-sc4">
                                            <li>Status:<span class="status">Ongoing</span></li>
                                            <li class="pull-right"><i class="fa fa-clock-o"></i><span>Jan 12, 2020</span></li>
                                        </ul>
                                        <h2>Digital Marketing Agency</h2>
                                        <p>Tech Cabals: Old Online
                            Trends That Have...</p>
                                        <ul class="ul-sc4-x1">
                                            <li><i class="fa fa-map-marker"></i> Lagos</li>
                                            <li class="pull-right">Read more <i class="fa fa-forward"></i></li>
                                        </ul>
                                    </div>
                                </Link>
                            </div>
                        </div>
                        <div class="col-md-4">
                            <div class="sc4-x1">
                                <Link to="/job-search">
                                    <img src="./images/web-design.png" class="img-responsive" alt="" />
                                    <div class="inner-content">
                                        <ul class="ul-sc4">
                                            <li>Status:<span class="status">Ongoing</span></li>
                                            <li class="pull-right"><i class="fa fa-clock-o"></i><span>Jan 12, 2020</span></li>
                                        </ul>
                                        <h2>Software Engineer</h2>
                                        <p>Andela: Old Online
                            Trends That Have...</p>
                                        <ul class="ul-sc4-x1">
                                            <li><i class="fa fa-map-marker"></i> Lagos</li>
                                            <li class="pull-right">Read more <i class="fa fa-forward"></i></li>
                                        </ul>
                                    </div>
                                </Link>
                            </div>
                        </div>
                        <div class="col-md-4 ">
                            <div class="sc4-x1">
                                <Link to="/job-search">
                                    <img src="./images/plumbering.png" class="img-responsive" alt="" />
                                    <div class="inner-content">
                                        <ul class="ul-sc4">
                                            <li>Status:<span class="status">Ongoing</span></li>
                                            <li class="pull-right"><i class="fa fa-clock-o"></i><span>Jan 12, 2020</span></li>
                                        </ul>
                                        <h2>Plumber Agency</h2>
                                        <p>Digit Plum: we want to make sure
                            every...</p>
                                        <ul class="ul-sc4-x1">
                                            <li><i class="fa fa-map-marker"></i> Lagos</li>
                                            <li class="pull-right">Read more <i class="fa fa-forward"></i></li>
                                        </ul>
                                    </div>
                                </Link>
                            </div>
                        </div>


                    </div>
                    <div class="row">
                        <div class="col-md-12">
                            <ul class="inner-arrow">
                                <li><i class="fa fa-long-arrow-left"></i></li>
                                <li><i class="fa fa-long-arrow-right"></i></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
            {/* <!-- section four ends here --> */}

            {/* Extra features starts here */}
            {/* <section>
                <div className="container">
                    <div className="row pad-upper-show-off">
                        <div className="col-md-4 ">
                            <div className="upper-show-off-section request-info">
                                <h2><span>01.</span> Request Info</h2>
                                <h3>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Rem consequatur fugit cupiditate sed nobis hic dolorem optio pariatur. </h3>
                                <p>Request online</p>
                            </div>
                        </div>
                        <div className="col-md-4">
                            <div className="upper-show-off-section apply">
                                <h2><span>02.</span> Apply</h2>
                                <h3>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Rem consequatur fugit cupiditate sed nobis hic dolorem optio pariatur. </h3>
                                <p>Apply online</p>
                            </div>
                        </div>
                        <div className="col-md-4">
                            <div className="upper-show-off-section submit">
                                <h2><span>03.</span> Submit</h2>
                                <h3>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Rem consequatur fugit cupiditate sed nobis hic dolorem optio pariatur. </h3>
                                <p>Submit online</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section> */}

            <section className="bk-dark-purple">
                <div className="container">
                    <div className="row pad-show-off">
                        <div className="col-md-3 show-off-section">
                            <div className="line-show">
                                <i className="fa fa-check-circle"></i>
                                <h2>99%</h2>
                                <p>PASSING TO UNIVERSITIES</p>
                            </div>
                        </div>
                        <div className="col-md-3 show-off-section">
                            <div className="line-show">
                                <i className="fa fa-user"></i>
                                <h2>49K</h2>
                                <p>STUDENTS ENROLLED</p>
                            </div>
                        </div>
                        <div className="col-md-3 show-off-section">
                            <div className="line-show">
                                <i className="fa fa-smile-o"></i>
                                <h2>2458</h2>
                                <p>HAPPY SMILE</p>
                            </div>
                        </div>
                        <div className="col-md-3 show-off-section">
                            <div className="line-show">
                                <i className="fa fa-address-card"></i>
                                <h2>1090</h2>
                                <p>CERTIFIED TEACHERS</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            {/* Extra features ends here */}


            {/* <!-- TESTIMONIAL STARTS HERE --> */}
            <section class="bk-grey">
                <div class="container-fluid pad-test">
                    <div class="row">
                        <div class="col-md-12 pb-5">
                            <div class="sec-header">
                                <h2><span><i class="fa fa-briefcase"></i> Testimonials</span> </h2>
                            </div>
                            <div class="sc-3">
                                <h2>We serve our clients with the</h2>
                                <p>best of our capacity</p>
                            </div>
                        </div>
                    </div>
                    <div class="test-content row ">
                        <div class="col-md-4">
                            <div className="test-sec sec-1">
                                <div className="row">
                                    <div className="col-md-3 test-img">
                                        <img src="./images/emmanuel.png" className="img-responsive" alt="Emmanuel" />
                                    </div>
                                    <div className="col-md-9 test-details">
                                        <h2>Emmanuel Iyanu</h2>
                                        <p>CTO, TechHaven</p>
                                    </div>
                                </div>
                                <div className="text-center pt-3">
                                    <p>Through your brilliant resume re-write and spot-on counseling and advice, I have secured 6 interviews in 3 days. In case you think you miss-read that: 6 interviews in 3 days! Quality, C-level executive positions with solid, reputable companies, exactly what I was targeting.</p>
                                    <i className="fa fa-comments"></i>
                                </div>
                            </div>
                        </div>
                        <div class="col-md-4">
                            <div className="test-sec">
                                <div className="row">
                                    <div className="col-md-3 test-img">
                                        <img src="./images/testimonial-1.jpg" className="img-responsive" alt="Samuel" />
                                    </div>
                                    <div className="col-md-9 test-details">
                                        <h2>Sam Afemikhe Jr.</h2>
                                        <p>CEO, Ikooba Tech</p>

                                    </div>
                                </div>
                                <div className="text-center pt-3">
                                    <p>This is amazing!!! you have managed to capture what I have been struggling to express for the very longest! I love how you made the resume much more "ageless." I love the tone of the cover letter and I am overall very impressed how you managed to give the documents "my" voice.</p>
                                    <i className="fa fa-comments"></i>
                                </div>
                            </div>
                        </div>
                        <div class="col-md-4">
                            <div className="test-sec sec-1">
                                <div className="row">
                                    <div className="col-md-3 test-img">
                                        <img src="./images/ellipse.png" className="img-responsive" alt="Dumpe" />
                                    </div>
                                    <div className="col-md-9 test-details">
                                        <h2>Lilian Dumpe</h2>
                                        <p>Student, University of Lagos</p>
                                    </div>
                                </div>
                                <div className="text-center pt-3">
                                    <p>“I wanted to start off by saying thank-you very much for writing such a beautiful resume and cover  letter for me, I truly believe that the words chosen accurately represents my personality and achievements.”</p>
                                    <i className="fa fa-comments"></i>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* <!-- TESTIMONIAL ENDS HERE --> */}

            <Footer />

            {/* <!-- block 5 ends here --> */}
        </div>
    )
}

export default Home
