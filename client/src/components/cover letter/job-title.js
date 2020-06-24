import React from 'react'
import { Link } from 'react-router-dom'

const JobTitle = () => {
    return (
        <div className="">
            {/* <!-- body part here --> */}
            <section class="bk-dotted">
                <div class="container">
                    <div class="row step-x1 pt-5 pb-5">
                        <div class="col-md-12 db-page pt-5">
                            <h2>What’s you current or last job title?</h2>
                            <p>if you have a job that is more relevant to the job you want, use that instead</p>
                            <div class="option-x1 pt-5 mb-5">
                                <form>
                                    <div class="form-group">
                                        <label for="exampleInputEmail1">Job Title</label>
                                        <input type="email" class="form-control" id="exampleInputEmail1"
                                            aria-describedby="emailHelp" placeholder="Senior software developer" />
                                    </div>
                                </form>
                            </div>
                            <div class="create">
                                <Link to="/experience" class="btn btn-create mr-4"><i class="fa fa-backward"></i></Link>
                                <Link to="/out-of-job" class="btn btn-create"><i class="fa fa-forward"></i></Link>
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


