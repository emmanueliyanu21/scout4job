import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import Navbar from '../pages/Navbar-Employer'
import Footer from '../pages/footer-employer'

export class Employersignin extends Component {
    render() {
        return (
            <div className="">
                <Navbar />
                <section className="bk-grey">
                    <div className="container-fluid">
                        <div className="row">
                            <div className="col-md-6">
                                <div className="cta-section-leftside">
                                </div>
                            </div>
                            <div className="col-md-6">
                                <div className="cta-section-rightside ">
                                    <div className="form-container">
                                        <div className="form-box">
                                            <div className="header">
                                                <h4>Welcome Back</h4>
                                                <p className="text-muted">Get the right talent for that job now.</p>
                                            </div>
                                            <form>
                                                <div className="form-group pt-2">
                                                    <label htmlFor="exampleInputEmail1">Email address</label>
                                                    <input type="email" className="form-control form-control-lg" id="exampleInputEmail1"
                                                        aria-describedby="emailHelp" placeholder="Enter email" />
                                                </div>
                                                <div className="form-group pt-2">
                                                    <label>Password</label>
                                                    <input type="text" placeholder="at least 8 characters"
                                                        className="form-control form-control-lg" />
                                                </div>

                                                <div className="form-group text-center">
                                                    <Link to="/employer-dashboard" className="btn btn-contact-us mt-4 text-center" type="submit"
                                                        style={{ backgroundColor: "#00AEFF" }}>Log in</Link>
                                                </div>
                                                {/* <div className="form-group mt-3 text-center">
                                                    <span className="text-muted wor">OR</span>
                                                </div> */}
                                            </form>
                                        </div>
                                        <div className="text-center mt-4 acct">Don't have an account with us?&nbsp;&nbsp;
                                        <Link to="/employer-signup">Sign up</Link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                <Footer />
            </div>
        )
    }
}

export default Employersignin
