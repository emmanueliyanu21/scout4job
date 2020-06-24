import React from 'react'
import { Link } from 'react-router-dom'

const Strength = () => {
    return (
        <div className="">
            {/* <!-- body part here --> */}
            <section class="bk-dotted">
                <div class="container">
                    <div class="row step-x1 pt-5 pb-5">
                        <div class="col-md-12 db-page pt-5">
                            <h2>What skill makes you a good fit for the
                        software engineer position?</h2>

                            <div class="option-x1 pt-5 mb-5">
                                <Link to="" class="btn btn-yes mb-3">Collaboration</Link>
                                <Link to="" class="btn btn-yes mb-3">Communication</Link>
                                <Link to="" class="btn btn-yes mb-3">Critical Thinking</Link>
                                <Link to="" class="btn btn-yes mb-3">Customer Service</Link>
                                <Link to="" class="btn btn-yes mb-3">Decision Making</Link>
                                <Link to="" class="btn btn-yes mb-3">Delegation</Link>
                                <Link to="" class="btn btn-yes mb-3">Innovation</Link>
                                <Link to="" class="btn btn-yes mb-3">Interpersonal</Link>
                                <Link to="" class="btn btn-yes mb-3">Leadership</Link>
                                {/* <!-- <a href="./job-apply.html" class="btn btn-yes mb-3">Project Management</a> --> */}

                            </div>
                            <div class="create">
                                <Link to="/skill-detail" class="btn btn-create mr-4"><i class="fa fa-backward"></i></Link>
                                <Link to="/experience" class="btn btn-create"><i class="fa fa-forward"></i></Link>
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


