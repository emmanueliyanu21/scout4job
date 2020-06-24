import React from 'react'
import { Link } from 'react-router-dom'

const SkillDetails = () => {
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
                                <a href="./job-apply.html" class="btn btn-yes mb-3">Technical Writing</a>
                                <a href="./job-apply.html" class="btn btn-yes mb-3">Network Development</a>
                                <a href="./job-apply.html" class="btn btn-yes mb-3">Technical Analysis</a>
                                <a href="./job-apply.html" class="btn btn-yes mb-3">Data Collection</a>
                                <a href="./job-apply.html" class="btn btn-yes mb-3">Project Management</a>
                                <a href="./job-apply.html" class="btn btn-yes mb-3">Virtualization</a>
                                <a href="./job-apply.html" class="btn btn-yes mb-3">Software Development</a>
                                <a href="./job-apply.html" class="btn btn-yes mb-3">Programming</a>
                                <a href="./job-apply.html" class="btn btn-yes mb-3">System Development</a>
                                <a href="./job-apply.html" class="btn btn-yes mb-3">Project Management</a>

                            </div>
                            <div class="create">
                                <Link to="/specific" class="btn btn-create mr-4"><i class="fa fa-backward"></i></Link>
                                <Link to="/strength" class="btn btn-create"><i class="fa fa-forward"></i></Link>
                            </div>
                        </div>
                    </div>

                </div>
            </section>

            {/* <!-- body ends here --> */}
        </div>
    )
}

export default SkillDetails


