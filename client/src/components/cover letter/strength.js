import React from 'react'
import { Link } from 'react-router-dom'

const Strength = () => {
    return (
        <div className="">
            {/* <!-- body part here --> */}
            <section className="bk-dotted">
                <div className="container">
                    <div className="row step-x1 pt-5 pb-5">
                        <div className="col-md-12 db-page pt-5">
                            <h2>What skill makes you a good fit for the
                        software engineer position?</h2>

                            <div className="option-x1 pt-5 mb-5">
                                {/* <a href="" className="btn btn-yes mb-3">Collaboration</a>
                                <a href="" className="btn btn-yes mb-3">Communication</a>
                                <a href="" to="" className="btn btn-yes mb-3">Critical Thinking</a>
                                <a href="" className="btn btn-yes mb-3">Customer Service</a>
                                <a href="" className="btn btn-yes mb-3">Decision Making</a>
                                <a href="" className="btn btn-yes mb-3">Delegation</a>
                                <a href="" className="btn btn-yes mb-3">Innovation</a>
                                <a href="" className="btn btn-yes mb-3">Interpersonal</a>
                                <a href="" className="btn btn-yes mb-3">Leadership</a> */}
                                {/* <!-- <a href="./job-apply.html" className="btn btn-yes mb-3">Project Management</a> --> */}

                            </div>
                            <div className="create">
                                <Link to="/skill-detail" className="btn btn-create mr-4"><i className="fa fa-backward"></i></Link>
                                <Link to="/experience" className="btn btn-create"><i className="fa fa-forward"></i></Link>
                            </div>
                        </div>
                    </div>

                </div>
            </section>

            {/* <!-- body ends here --> */}
        </div>
    )
}

export default Strength


