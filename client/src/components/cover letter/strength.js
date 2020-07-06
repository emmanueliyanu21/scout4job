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
                                <Link to="" className="btn btn-yes mb-3">Collaboration</Link>
                                <Link to="" className="btn btn-yes mb-3">Communication</Link>
                                <Link to="" className="btn btn-yes mb-3">Critical Thinking</Link>
                                <Link to="" className="btn btn-yes mb-3">Customer Service</Link>
                                <Link to="" className="btn btn-yes mb-3">Decision Making</Link>
                                <Link to="" className="btn btn-yes mb-3">Delegation</Link>
                                <Link to="" className="btn btn-yes mb-3">Innovation</Link>
                                <Link to="" className="btn btn-yes mb-3">Interpersonal</Link>
                                <Link to="" className="btn btn-yes mb-3">Leadership</Link>
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


