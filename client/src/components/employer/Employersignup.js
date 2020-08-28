import React, { Component } from 'react'
import Navbar from '../pages/Navbar-Employer'
import Footer from '../pages/footer-employer'
import { Link } from 'react-router-dom'

export class Employersignup extends Component {
    render() {
        return (
            <div className="">
                <Navbar />
                <section className="bk-grey">
                    <div className="container-fluid">
                        <div className="row">
                            <div className="col-md-6">
                                <div className="employer-leftside">
                                </div>
                            </div>
                            <div className="col-md-6">
                                <div className="cta-section-rightside">
                                    <div className="form-container">
                                        <div className="form-box">
                                            <div className="header">
                                                <h4>Welcome To Scout4Job</h4>
                                                <p className="text-muted">Setup your account to have access to a great pool of talent.</p>
                                            </div>
                                            <form>
                                                <div className="row">
                                                    <div class="form-group col-md-6">
                                                        <label for="company">Company name</label>
                                                        <input type="text" placeholder="e.g cocacola, IBM" class="form-control" />
                                                    </div>
                                                    <div class="form-group col-md-6">
                                                        <label for="country">Country</label>
                                                        <input type="text" placeholder="Nigeria" class="form-control" />
                                                    </div>
                                                </div>
                                                <div className="row">
                                                    <div class="form-group col-md-6">
                                                        <label for="tel">Phone Number</label>
                                                        <input type="text" placeholder="Telephone" class="form-control" />
                                                    </div>
                                                    <div class="form-group col-md-6">
                                                        <label for="tel">Address</label>
                                                        <input type="text" placeholder="Yaba, Lagos" class="form-control" />
                                                    </div>
                                                </div>
                                                <div className="row">
                                                    <div class="form-group col-md-6">
                                                        <label for="country">Email</label>
                                                        <input type="text" placeholder="email" class="form-control" />
                                                    </div>
                                                    <div class="form-group col-md-6">
                                                        <label for="country">Password</label>
                                                        <input type="text" placeholder="" class="form-control" />
                                                    </div>
                                                </div>

                                                <div className="form-group text-center">
                                                    <Link to="" className="btn btn-contact-us mt-4 text-center" type="submit"
                                                        style={{ backgroundColor: "#00AEFF" }}>Sign up</Link>
                                                </div>
                                                {/* <div className="form-group mt-3 text-center">
                                                    <span className="text-muted wor">OR</span>
                                                </div> */}
                                            </form>
                                        </div>
                                        <div className="text-center mt-4 acct">You already have an account with us?&nbsp;&nbsp;
                                        <Link to="/employer-login">Log in</Link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        )
    }
}

export default Employersignup
