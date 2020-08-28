import React from 'react'
import Navbar from '../pages/Navbar-Employer'
import Footer from '../pages/footer-employer'
import { Link } from 'react-router-dom'

const PostJob = () => {
    return (
        <div className="">
            <Navbar />
            <section className="dk-bk-grey">
                <div className="container">
                    <div className="row">
                        <div className="col-md-12">
                            <div class="txt3 pt-5 pb-5">
                                <h4>Post a Job</h4>
                                <h3>Post Your Job on Nigeria's Top <br />
                                    Career Site Target 1 million
                                </h3>
                                <ul className="post-job-list">
                                    <li>Target 1 million+ high quality candidates from our huge career individual pool</li>
                                    <li>Premium (featured) placement for your jobs on targetted user profiles, search results, homepage, mobile alerts & partner sites</li>
                                    <li>Filtering and Emailing tools to help manage and sort applications</li>
                                    <li>Prescreening and automatic shortlist of suitable candidates.</li>
                                    <li>Direct applications to your email or an external link if you choose</li>
                                    <li>No contracts, no obligations; Only pay for what you need</li>
                                </ul>
                                <Link to="/employer-signup" className="btn btn-contact-us btn-get-started">Get Started</Link>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* <section>
                <div className="container">
                    <div className="row">
                        <div className="col-md-6">
                            <div className="form-group">
                                <label for="">Job Title</label>
                                <input type="text" className="form-control form-1" id="jobTitle"
                                    placeholder="Job Title" />
                            </div>
                        </div>
                        <div className="col-md-6">
                            <div className="form-group">
                                <label for="">Company</label>
                                <input type="text" className="form-control form-1" id="jobTitle"
                                    placeholder="Job Title" />
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-md-6">
                            <div className="form-group">
                                <label for="">Status</label>
                                <input type="text" className="form-control form-1" id="jobTitle"
                                    placeholder="Full Time" />
                            </div>
                        </div>
                        <div className="col-md-6">
                            <div className="form-group">
                                <label for="">Amount</label>
                                <input type="text" className="form-control form-1" id="jobTitle"
                                    placeholder="N500,000" />
                            </div>
                        </div>
                    </div>
                </div>
            </section> */}
            <Footer />
        </div>
    )
}

export default PostJob
