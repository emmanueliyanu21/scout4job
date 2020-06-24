import React from 'react'
import { Link } from 'react-router-dom'

const JobApply = () => {
    return (
        <div className="">
            {/* <!-- body part here --> */}
            <section class="bk-dotted">
                <div class="container">
                    <div class="row step-x1 pt-5 pb-5">
                        <div class="col-md-12 db-page pt-5">
                            <h2>What job are you applying for?</h2>
                            {/* <!-- <p>It’s okay if you dont have. We will give you a letter to customize later</p> --> */}
                            <div class="option-x1 pt-5 mb-5">
                                <form>
                                    <div class="form-group">
                                        <label for="exampleInputEmail1">Desired position</label>
                                        <input type="email" class="form-control" id="exampleInputEmail1"
                                            aria-describedby="emailHelp" placeholder="Desired position" />
                                    </div>
                                    <div class="form-group">
                                        <label for="exampleInputEmail1">Desired company</label>
                                        <input type="email" class="form-control" id="exampleInputEmail1"
                                            aria-describedby="emailHelp" placeholder="Name of desired company" />
                                    </div>
                                </form>
                            </div>
                            <div class="create">
                                <Link to="/specific" class="btn btn-create"><i class="fa fa-backward"></i></Link>
                                <Link to="/skill-details" class="btn btn-create"><i class="fa fa-forward"></i></Link>
                            </div>
                        </div>
                    </div>

                </div>
            </section>

            {/* <!-- body ends here --> */}
        </div>
    )
}

export default JobApply


