import React from 'react'
import { Link } from 'react-router-dom'

const Education = () => {
    return (
        <div className="">
            < section class="bk-grey" >
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
                                    <i class="fa fa-graduation-cap x1 x1-x"></i>
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
                            <Link to="" class="btn btn-headers">Education</Link>
                        </div>
                    </div>
                </div>
            </section >
            {/* // <!-- Form starts here --> */}
            < section class="bk-grey" >
                <div class="container">
                    <div class="row">
                        <div class="col-md-8 head-form">
                            <form>
                                <div class="row">
                                    <div class="form-group col-md-6">
                                        <label for="exampleInputEmail1">School Name</label>
                                        <input type="text" class="form-control" id="exampleInputEmail1"
                                            aria-describedby="emailHelp" placeholder="School Name" />
                                    </div>
                                    <div class="form-group col-md-6">
                                        <label for="exampleInputEmail1">School Location</label>
                                        <input type="text" class="form-control" id="exampleInputEmail1"
                                            aria-describedby="emailHelp" placeholder="School Location" />
                                    </div>
                                </div>
                                <div class="row">
                                    <div class="form-group col-md-6">
                                        <label for="exampleInputEmail1">Degree</label>
                                        <input type="text" class="form-control" id="exampleInputEmail1"
                                            aria-describedby="emailHelp" placeholder="Degree" />
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
                                        <label for="exampleInputEmail1">Graduation Date</label>
                                        <input type="text" class="form-control" id="exampleInputEmail1"
                                            aria-describedby="emailHelp" placeholder="Graduation Date" />
                                    </div>
                                </div>
                                <div class="row">
                                    <div class="col-md-12 form-txt">
                                        <h2> <i class="fa fa-plus"></i> Tell us about your education</h2>
                                        <h2> <i class="fa fa-plus"></i> Include every school, even if you're still there or
                                    didn't graduate</h2>
                                    </div>
                                </div>

                            </form>
                            <div class="header-buttons">
                                <Link to="/work-experience-detail" class="btn btn-back">
                                    <i class="fa fa-angle-left"></i> Back</Link>
                                <Link to="/education-detail" class="btn btn-next">Next<i class="fa fa-angle-right"></i></Link>
                            </div>
                        </div>
                        <div class="col-md-4 form-img">
                            <img src="../images/cv.jpg" alt="" class="img-responsive" />
                            <div class="preview">
                                <Link to="" class="btn btn-preview"><i class="fa fa-eye"></i> Preview</Link>
                            </div>
                        </div>
                    </div>
                </div>
            </section >


            {/* // <!-- Form ends here --> */}

        </div>
    )
}

export default Education






