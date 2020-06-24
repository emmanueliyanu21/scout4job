import React from 'react'
import { Link } from 'react-router-dom'

const Apply = () => {
    return (
        <div className="">
            {/* <!-- body starts here --> */}
            <section>
                <div class="container">
                    <div class="row pt-5 pb-5">
                        <div class="col-md-8 db-page pt-2 db-more">
                            <h2>Application for Implementation Coordinator at Innovations for Poverty Action</h2>
                            <form>
                                <div class="form-group">
                                    <label for="exampleInputEmail1">Subject / Title</label>
                                    <input type="email" class="form-control" id="exampleInputEmail1"
                                        aria-describedby="emailHelp" placeholder="Application for implementation coordinator" />
                                </div>
                                <div class="form-group">
                                    <label for="exampleInputEmail1">Cover Letter: (Letter to Convince the employer to hire
                                you!.</label>
                                    <ul class="ul-form">
                                        <li><Link href=""><i class="fa fa-hand-pointer-o"></i> Select crafted cover letter</Link></li>
                                        <li><Link href=""><i class="fa fa-edit"></i> Create a cover letter
                                    </Link></li>
                                    </ul>
                                    <textarea class="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
                                </div>
                                <div class="form-group form-check">
                                    <input type="checkbox" class="form-check-input" id="exampleCheck1" />
                                    <label class="form-check-label" for="exampleCheck1">Attach my profile
                            <span><Link to=""><i
                                            class="fa fa-eye"></i> View profile</Link>
                                        </span></label>
                                </div>
                                <div class="form-group">
                                    <label htmlFor="exampleInputEmail1">Upload Resume: (attach your current CV. File size less than
                                3MB).</label>
                                    <ul class="ul-form">
                                        <li><Link href=""><i class="fa fa-hand-pointer-o"></i> Select crafted resume</Link></li>
                                        <li><Link href=""><i class="fa fa-edit"></i> Create a resume</Link></li>
                                    </ul>
                                    <textarea class="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
                                </div>
                                <div class="form-group">
                                    <label htmlFor="exampleInputEmail1">Upload Additional Document: (attach any additional doc if
                                any or leave blank)</label>
                                    <input type="file" class="form-control-file" id="exampleFormControlFile1" />
                                </div>
                                <div class="questions">
                                    <div class="form-group">
                                        <label for="exampleFormControlSelect1">Do you have previous experience in
                                    research?</label>
                                        <select class="form-control" style={{ width: "20%" }} id="exampleFormControlSelect1">
                                            <option>Yes</option>
                                            <option>No</option>
                                        </select>
                                    </div>
                                    <div class="form-group">
                                        <label htmlFor="exampleFormControlSelect1">Do you have experience monitoring
                                    projects?</label>
                                        <select class="form-control" style={{ width: "20%;" }} id="exampleFormControlSelect1">
                                            <option>Yes</option>
                                            <option>No</option>
                                        </select>
                                    </div>
                                </div>
                                <div class="row">
                                    <div class="col-md-12 text-center mb-4 mt-4">
                                        <Link to="/dashboard" class="btn btn-apply">Submit application</Link>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </section>

            {/* <!-- body wnds here --> */}
            {/* <!-- block 5 starts here --> */}
            <section class="dk-bk-grey n1-line">
                <div class="container">
                    <div class="row">
                        <div class="col-md-12 short-mss">
                            <h2><span>Build your professional cv & cover letter and stand to get your dream job
                            <m-span class="sign-up">Sign up</m-span> </span> </h2>
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
                                <li><i class="fa fa-map-marker"></i>
                                    <p class="n-30">30, Commercial Road
                                Fracttion, United Kingdom</p>
                                </li>
                                <li><i class="fa fa-phone"></i>+2347-0685-6214</li>
                                <li><i class="fa fa-envelope"></i> info@coveero.com</li>

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
                                    <li><i class="fa fa-angle-right"></i> Home</li>
                                    <li><i class="fa fa-angle-right"></i> Job Search</li>
                                    <li><i class="fa fa-angle-right"></i> Build Resume</li>
                                    <li><i class="fa fa-angle-right"></i> Cover Letter</li>
                                    <li><i class="fa fa-angle-right"></i> About us</li>
                                    <li><i class="fa fa-angle-right"></i> Testimonials</li>
                                    <li><i class="fa fa-angle-right"></i> News</li>
                                </ul>
                            </div>
                            <div class="col-md-6">

                                <ul class="ul-footer pt-4 mt-3">
                                    <li><i class="fa fa-angle-right"></i>Gallery</li>
                                    <li><i class="fa fa-angle-right"></i>Our Team</li>
                                    <li><i class="fa fa-angle-right"></i>Portfolio</li>
                                    <li><i class="fa fa-angle-right"></i>Cover Letter</li>
                                    <li><i class="fa fa-angle-right"></i>Contact Us</li>
                                    <li><i class="fa fa-angle-right"></i>FAQ</li>
                                    <li><i class="fa fa-angle-right"></i>Careers</li>
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
                                    <input type="email" class="form-control x1" style={{ color: "#fff;" }} id="exampleInputEmail1"
                                        aria-describedby="emailHelp" placeholder="Your email address here" />
                                </div>
                                <Link><i class="fa fa-arrow-circle-o-right"></i></Link>
                            </form>
                            <ul class="soc-media">
                                <li><i class="fa fa-facebook x2"></i></li>
                                <li><i class="fa fa-instagram x3"></i></li>
                                <li><i class="fa fa-twitter x4"></i></li>
                                <li><i class="fa fa-linkedin x5"></i></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </section>
            <section class="dk-bk-grey">
                <div class="container">
                    <div class="row">
                        <div class="col-md-12 ft-copy">
                            <h2>2020 © All right reserved by <span>coovero.com</span></h2>
                        </div>
                    </div>
                </div>
            </section>

            {/* <!-- block 5 ends here --> */}
        </div>
    )
}

export default Apply


