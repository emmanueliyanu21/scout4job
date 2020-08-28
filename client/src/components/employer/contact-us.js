import React from 'react'
import Navbar from '../pages/Navbar-Employer'
import Footer from '../pages/footer-employer'

const EmployerContact = () => {
    return (
        <div className="">
            <Navbar />
            <section className="bk-grey">
                <div className="container">
                    <div className="pad-employer-contact">
                        <div className="employer-contact-page">
                            <h2>Contact Us</h2>
                            <p>Have comments, questions, or feedback to share? Our team would love to hear from you. Give us a call or submit a message below.</p>
                        </div>
                        <div className="row">
                            <div className="col-md-12 employer-contact-page-white">
                                <h2>Select a topic</h2>
                                <form>
                                    <div className="row">
                                        <div className="col-md-6">
                                            <div className="row">
                                                <div class="form-group col-md-12">
                                                    <label for="country">Email</label>
                                                    <input type="text" placeholder="email" class="form-control" />
                                                </div>
                                            </div>
                                            <div className="row">
                                                <div class="form-group col-md-12">
                                                    <label for="country">Name</label>
                                                    <input type="text" placeholder="email" class="form-control" />
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-md-6">
                                            <div className="form-group col-md-12">
                                                <label htmlFor="exampleInputEmail1">Message</label>
                                                <textarea className="form-control" id="employmentSummary" placeholder="e.g. Passionate about software development for 8+ years and a track 
    record of...." rows="6"></textarea>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="row employer-contact-recaptcha pt-2">
                                        <div className="col-md-8">
                                            <p>This site is protected by reCAPTCHA and the Google Privacy Policy and Terms of Service apply.</p>
                                        </div>
                                        <div className="col-md-4">
                                            <button className="btn btn-contact-us">Send Message</button>
                                        </div>
                                    </div>
                                </form>
                            </div>
                            </div>
                    </div>
                </div>
            </section>
            <section>
                <div className="">

                </div>
            </section>

            <Footer />
        </div>
    )
}

export default EmployerContact
