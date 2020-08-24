import React from 'react'
import Navbar from '../pages/Navbar'

const EmployerPage = () => {
    return (
        <div className="">
            <Navbar />
            <section class="bk-blue">
                <div class="container ">
                    <div class="row">
                        <div class="col-md-12 col-lg-6 col-sm-12">
                            <div class="cont-txt">
                                <h1>With Scout4Job!</h1>
                                <h2 class="bb"></h2>
                                <p>We facilitate Recruitment, Employability, Enterprise, and Careers.</p>
                                <div class="contacts">
                                    <p><i class="fa fa-envelope pr-2"></i>info@scout4job.com</p>
                                    <p><i class="fa fa-whatsapp pr-2"></i>+2348-0944-44912</p>
                                </div>
                            </div>
                        </div>
                        <div class="col-md-12 col-lg-6">
                            <div class="bodypage">
                                <div class="posts text-center">
                                    <h3>Sign-up Today</h3>
                                </div>
                                <div class="formdiv">
                                    <form action="">
                                        <div class="form-group">
                                            <label for="company">Company name</label>
                                            <input type="text" placeholder="e.g cocacola, IBM" class="form-control" />
                                        </div>
                                        <div class="form-group">
                                            <label for="country">Country</label>
                                            {/* <!-- <input type="text" placeholder="Nigeria" class="form-control"> --> */}
                                            <select name="" id="" class="form-control">
                                                <option value="1">Nigeria</option>
                                            </select>
                                        </div>
                                        <div class="form-group">
                                            <label for="tel">Telephone</label>
                                            {/* <!-- <select name="" id="">
                                                        <option value=""></option>
                                                    </select> --> */}
                                            <input type="text" placeholder="Telephone" class="form-control" />
                                        </div>
                                        <div class="form-group">
                                            <label for="country">Email</label>
                                            <input type="text" placeholder="email" class="form-control" />
                                        </div>
                                        <div class="form-group">
                                            <label for="country">Password</label>
                                            <input type="text" placeholder="" class="form-control" />
                                        </div>
                                        <div class="form-group">
                                            <label for="country">Contact Name</label>
                                            <input type="text" placeholder="" class="form-control" />
                                        </div>
                                        <div class="button text-center">
                                            <button class="btn btn-reg mb-1">Register</button>
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </section>

            {/* <section class="sec3">
                <div class="container text-center">
                    <div class="txt3 ">
                        <h4>Lorem.</h4>
                        <h3>Lorem ipsum dolor sit amet.</h3>
                    </div>
                    <div class="cont-grid">
                        <div class="job">
                            <img src="/img/pencil.png" alt="" />
                            <h5>Job Posting</h5>
                            <p>Post you job in 3 simple steps and recieve hundreds of applicants</p>
                            <div class="button1">
                                <button class="btn btn-job">
                                    Post  a Job
                        </button>
                            </div>
                        </div>
                        <div class="job">
                            <img src="/img/purple.png" alt="" />
                            <h5>Job Posting</h5>
                            <p>Post you job in 3 simple steps and recieve hundreds of applicants</p>
                            <div class="button1">
                                <button class="btn btn-job">
                                    Post  a Job
                        </button>
                            </div>
                        </div>
                        <div class="job">
                            <img src="/img/mouse.png" alt="" />
                            <h5>Job Posting</h5>
                            <p>Post you job in 3 simple steps and recieve hundreds of applicants</p>
                            <div class="button1">
                                <button class="btn btn-job">
                                    Post  a Job
                        </button>
                            </div>
                        </div>
                        <div class="job">
                            <img src="/img/spanner.png" alt="" />
                            <h5>Job Posting</h5>
                            <p>Post you job in 3 simple steps and recieve hundreds of applicants</p>
                            <div class="button1">
                                <button class="btn btn-job">
                                    Post  a Job
                        </button>
                            </div>
                        </div>
                    </div>
                    <div class="bts pb-5">
                        <button class="btn btn-more">
                            More Information
                    </button>
                    </div>
                </div>
            </section> */}
        </div>
    )
}

export default EmployerPage
