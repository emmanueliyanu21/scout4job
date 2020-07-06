import React from 'react'
import { Link } from 'react-router-dom'

const JobTitle = () => {
    return (
        <div className="">
            {/* <!-- body part here --> */}
            <section className="bk-dotted">
                <div className="container">
                    <div className="row step-x1 pt-5 pb-5">
                        <div className="col-md-12 db-page pt-5">
                            <h2>What’s you current or last job title?</h2>
                            <p>if you have a job that is more relevant to the job you want, use that instead</p>
                            <div className="option-x1 pt-5 mb-5">
                                <form>
                                    <div className="form-group">
                                        <label htmlFor="exampleInputEmail1">Job Title</label>
                                        <input type="email" className="form-control" id="exampleInputEmail1"
                                            aria-describedby="emailHelp" placeholder="Senior software developer" />
                                    </div>
                                </form>
                            </div>
                            <div className="create">
                                <Link to="/experience" className="btn btn-create mr-4"><i className="fa fa-backward"></i></Link>
                                <Link to="/out-of-job" className="btn btn-create"><i className="fa fa-forward"></i></Link>
                            </div>
                        </div>
                    </div>

                </div>
            </section>

            {/* <!-- body ends here --> */}
        </div>
    )
}

export default JobTitle


