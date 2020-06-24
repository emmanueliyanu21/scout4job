import React from 'react'
import { Link } from 'react-router-dom'

const Style = () => {
    return (
        <div className="">
            {/* <!-- body part here --> */}
            <section class="bk-dotted">
                <div class="container">
                    <div class="row step-x1 pt-5 pb-5">
                        <div class="col-md-12 db-page pt-5">
                            <h2>What is you working style?</h2>
                            <p>This helps us to personalize the tone of your letter</p>
                            <div class="option-x1 pt-5 mb-5">
                                <Link to="" class="btn btn-yes mb-3">
                                    Artistic
                            {/* <!-- <p>You thrive in dynamic
                                      environments driven by
                                innovation and creativity</p> --> */}
                                </Link>
                                <Link to="" class="btn btn-yes mb-3">Enterprising</Link>
                                <Link to="" class="btn btn-yes mb-3">Investigative</Link>
                                <Link to="" class="btn btn-yes mb-3">Organized</Link>
                                <Link to="" class="btn btn-yes mb-3">Practical</Link>
                                <Link to="" class="btn btn-yes mb-3">Serivce Oriented</Link>

                                {/* <!-- <a href="./job-apply.html" class="btn btn-yes mb-3">Project Management</a> --> */}

                            </div>
                            <div class="create">
                                <Link to="/out-of-job" class="btn btn-create mr-4"><i class="fa fa-backward"></i></Link>
                                <Link to="/finished" class="btn btn-create"><i class="fa fa-forward"></i></Link>
                            </div>
                        </div>
                    </div>

                </div>
            </section>

            {/* <!-- body ends here --> */}
        </div>
    )
}

export default Style


