import React from 'react'
import { Link } from 'react-router-dom'

const WorkExperience = () => {
    return (
        <div className="">
            <section class="bk-grey">
                <div class="container">
                    <div class="row">
                        <div class="col-md-8">
                            <ul class="ul-headers">
                                <li class="ul-h1">
                                    <i class="fa fa-edit"></i>
                                    <span>1</span>
                                </li>
                                <li class="ul-h1">
                                    <i class="fa fa-suitcase x0"></i>
                                    <span>2</span>
                                </li>
                                <li class="ul-h1">
                                    <i class="fa fa-suitcase x1"></i>
                                    <span>3</span>
                                </li>
                                <li class="ul-h1">
                                    <i class="fa fa-suitcase x2"></i>
                                    <span>4</span>
                                </li>
                                <li class="ul-h1">
                                    <i class="fa fa-suitcase"></i>
                                    <span>5</span>
                                </li>
                            </ul>
                        </div>
                        <div class="col-md-4 txt-header">
                            <Link to="" class="btn btn-headers">Work Experince</Link>
                        </div>
                    </div>
                </div>
            </section>
            {/* <!-- Form starts here --> */}
            <section class="bk-grey">
                <div class="container">
                    <div class="row">
                        <div class="col-md-8 head-form">
                            <form>
                                <div class="row">
                                    <div class="form-group col-md-6">
                                        <label for="exampleInputEmail1">Job Title</label>
                                        <input type="text" class="form-control" id="exampleInputEmail1"
                                            aria-describedby="emailHelp" placeholder="Job Title" />
                                    </div>
                                    <div class="form-group col-md-6">
                                        <label for="exampleInputEmail1">Employer</label>
                                        <input type="text" class="form-control" id="exampleInputEmail1"
                                            aria-describedby="emailHelp" placeholder="Employer" />
                                    </div>
                                </div>
                                <div class="row">
                                    <div class="form-group col-md-6">
                                        <label for="exampleInputEmail1">City</label>
                                        <input type="text" class="form-control" id="exampleInputEmail1"
                                            aria-describedby="emailHelp" placeholder="City" />
                                    </div>
                                    <div class="form-group col-md-6">
                                        <label for="exampleInputEmail1">State</label>
                                        <input type="text" class="form-control" id="exampleInputEmail1"
                                            aria-describedby="emailHelp" placeholder="State" />
                                    </div>
                                </div>
                                <div class="row">
                                    <div class="form-group col-md-6">
                                        <label for="exampleInputEmail1">Start Date</label>
                                        <input type="text" class="form-control" id="exampleInputEmail1"
                                            aria-describedby="emailHelp" placeholder="Start Date" />
                                    </div>
                                    <div class="form-group col-md-6">
                                        <label for="exampleInputEmail1">End Date</label>
                                        <input type="text" class="form-control" id="exampleInputEmail1"
                                            aria-describedby="emailHelp" placeholder="End Date" />
                                    </div>
                                </div>
                                <div class="row">
                                    <div class="col-md-12 form-txt">
                                        <h2> <i class="fa fa-plus"></i> Tell us about your work experience</h2>
                                        <h2> <i class="fa fa-plus"></i> Start with your most recent job and work backward</h2>
                                    </div>
                                </div>

                            </form>
                            <div class="header-buttons">
                                <Link to="/header" class="btn btn-back">
                                    <i class="fa fa-angle-left"></i> Back</Link>
                                <Link to="/work-experience-extra" class="btn btn-next">Next<i
                                    class="fa fa-angle-right"></i></Link>
                            </div>
                        </div>
                        <div class="col-md-4 form-img">
                            <img src="../images/cv.jpg" alt="" class="img-responsive" />
                            <div class="preview">
                                <Link href="" class="btn btn-preview"><i class="fa fa-eye"></i> Preview</Link>
                            </div>
                        </div>
                    </div>
                </div>
            </section>


            {/* <!-- Form ends here --> */}
        </div>
    )
}

export default WorkExperience




