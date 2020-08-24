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
        </div>
    )
}

export default EmployerPage
