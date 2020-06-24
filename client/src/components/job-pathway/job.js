import React from 'react'
import { Link } from 'react-router-dom'
import Footer from '../pages/footer'

const Job = () => {
    return (
        <div className="">
            {/* <!-- body starts here --> */}
            <section class="bk-image">
                <div class="container">
                    <div class="row pace-down">
                        <div class="col-md-12 job-res">
                            <h2>Try Our No-Fuss Resume Builder</h2>
                            <p>It's Free-to-Use and Proven to
                        Get You Hired 33% Faster</p>
                        </div>
                    </div>
                    <div class="row job-form">
                        <div class="col-md-5 job-x1">
                            <div class="">
                                <form>
                                    <div class="form-group">
                                        <input type="email" class="form-control form-1" id="exampleInputEmail1"
                                            aria-describedby="emailHelp" placeholder="Enter email" />
                                    </div>
                                </form>
                            </div>
                        </div>
                        <div class="col-md-5 job-x2">
                            <div class="">
                                <div class="form-group">
                                    <select class="form-control space-select pt-2 pb-2">
                                        <option>Lagos</option>
                                        <option>Lagos Mainland</option>
                                        <option>Lekki</option>
                                        <option>Victoria Island</option>
                                        <option>Ikoyi</option>
                                    </select>
                                </div>
                            </div>
                        </div>
                        <div class="col-md-2 job-x3">
                            <div class="">
                                <Link to=""><i class="fa fa-search"></i><span>Search</span> </Link>
                            </div>
                        </div>
                    </div>
                    <div class="icon-d">
                        <div class="row">
                            <div class="col-md-12 icon-down mb-5 mt-2">
                                <i class="fa fa-angle-down"></i>
                            </div>
                        </div>

                    </div>
                </div>
            </section>

            {/* <!-- body ends here --> */}

            {/* <!-- section four starts here --> */}
            <section>
                <div class="container">
                    <div class="row">
                        <div class="col-md-12">
                            <div class="sec-header">
                                <h2><span><i class="fa fa-briefcase"></i>Recent Available Jobs</span> </h2>
                            </div>
                        </div>
                    </div>
                    <div class="row">
                        <div class="col-md-4 j-x">
                            <Link to="/job-details">
                                <div class="sc4-x1">
                                    <img src="../images/digital-marketing.png" class="img-responsive" alt="" />
                                    <div class="inner-content">
                                        <ul class="ul-sc4">
                                            <li>Status:<span class="status">Ongoing</span></li>
                                            <li class="pull-right"><i class="fa fa-clock-o"></i><span>Jan 12, 2020</span></li>
                                        </ul>
                                        <h2>Digital Marketing Agency</h2>
                                        <p>Tech Cabals: Old Online Trends That Have...</p>
                                        <ul class="ul-sc4-x1">
                                            <li><i class="fa fa-map-marker"></i> Lagos</li>
                                            <li class="pull-right">Read more <i class="fa fa-forward"></i></li>
                                        </ul>
                                    </div>
                                </div>
                            </Link>
                        </div>

                        <div class="col-md-4 j-x">
                            <Link to="/job-details">
                                <div class="sc4-x1">
                                    <img src="../images/web-design.png" class="img-responsive" alt="" />
                                    <div class="inner-content">
                                        <ul class="ul-sc4">
                                            <li>Status:<span class="status">Ongoing</span></li>
                                            <li class="pull-right"><i class="fa fa-clock-o"></i><span>Jan 12, 2020</span></li>
                                        </ul>
                                        <h2>Software Engineer</h2>
                                        <p>Andela: Old Online Trends That Have...</p>
                                        <ul class="ul-sc4-x1">
                                            <li><i class="fa fa-map-marker"></i> Lagos</li>
                                            <li class="pull-right">Read more <i class="fa fa-forward"></i></li>
                                        </ul>
                                    </div>
                                </div>
                            </Link>
                        </div>
                        <div class="col-md-4 j-x">
                            <Link to="/job-details">
                                <div class="sc4-x1">
                                    <img src="../images/plumbering.png" class="img-responsive" alt="" />
                                    <div class="inner-content">
                                        <ul class="ul-sc4">
                                            <li>Status:<span class="status">Ongoing</span></li>
                                            <li class="pull-right"><i class="fa fa-clock-o"></i><span>Jan 12, 2020</span></li>
                                        </ul>
                                        <h2>Plumber Agency</h2>
                                        <p>Digit Plum: we want to make sure every...</p>
                                        <ul class="ul-sc4-x1">
                                            <li><i class="fa fa-map-marker"></i> Lagos</li>
                                            <li class="pull-right">Read more <i class="fa fa-forward"></i></li>
                                        </ul>
                                    </div>
                                </div>
                            </Link>
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
            </section>
            {/* // <!-- section four ends here --> */}

            <Footer />

            {/* <!-- block 5 ends here --> */}
        </div>
    )
}

export default Job

