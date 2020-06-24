import React from 'react'
import { Link } from 'react-router-dom'

const Specific = () => {
    return (
        <div className="">
            {/* <!-- body part here --> */}
            <section class="bk-dotted">
                <div class="container">
                    <div class="row step-x1 pt-5 pb-5">
                        <div class="col-md-12 db-page pt-5">
                            <h2>Do you have a specific job in mind</h2>
                            <p>It’s okay if you dont have. We will give you a letter to customize later</p>
                            <div class="option-x1 pt-5 mb-5">
                                <Link to="/job-apply" class="btn btn-yes">Yes</Link>
                                <Link to="/years" class="btn btn-no">No</Link>
                            </div>
                            <div class="create">
                                <Link to="/cover" class="btn btn-create mr-4"><i class="fa fa-backward"></i></Link>
                                <Link to="/skill-detail" class="btn btn-create"><i class="fa fa-forward"></i></Link>
                            </div>
                        </div>
                    </div>

                </div>
            </section>

            {/* <!-- body ends here --> */}
        </div>
    )
}

export default Specific


