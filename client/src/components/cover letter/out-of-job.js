import React from 'react'
import { Link } from 'react-router-dom'

const componentName = () => {
    return (
        <div className="">
            {/* <!-- body part here --> */}
            <section className="bk-dotted">
                <div className="container">
                    <div className="row step-x1 pt-5 pb-5">
                        <div className="col-md-12 db-page pt-5">
                            <h2>Have you been out of job for last 6 month?</h2>
                            <p>It’s okay if you dont have. We will give you a letter to customer later</p>
                            <div className="option-x1 pt-5 mb-5">
                                <Link to="/more-details" className="btn btn-yes">Yes</Link>
                                <Link to="/style" className="btn btn-no">No</Link>
                            </div>
                            <div className="create">
                                <Link to="/job-title" className="btn btn-create mr-4"><i className="fa fa-backward"></i></Link>
                                <Link to="/style" className="btn btn-create"><i className="fa fa-forward"></i></Link>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* <!-- body ends here --> */}
        </div>
    )
}

export default componentName


