import React from 'react'
import { Link } from 'react-router-dom'

const Specific = () => {
    return (
        <div className="">
            {/* <!-- body part here --> */}
            <section className="bk-dotted">
                <div className="container">
                    <div className="row step-x1 pt-5 pb-5">
                        <div className="col-md-12 db-page pt-5">
                            <h2>Do you have a specific job in mind</h2>
                            <p>It’s okay if you dont have. We will give you a letter to customize later</p>
                            <div className="option-x1 pt-5 mb-5">
                                <Link to="/job-apply" className="btn btn-yes">Yes</Link>
                                <Link to="/years" className="btn btn-no">No</Link>
                            </div>
                            <div className="create">
                                <Link to="/cover" className="btn btn-create mr-4"><i className="fa fa-backward"></i></Link>
                                <Link to="/skill-detail" className="btn btn-create"><i className="fa fa-forward"></i></Link>
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


