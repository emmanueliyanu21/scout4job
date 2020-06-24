import React from 'react'
import { Link } from 'react-router-dom'

const HeaderCopy = () => {
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
                                    <i class="fa fa-suitcase"></i>
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
                            <Link to="" class="btn btn-headers">Headers</Link>
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
                                        <label for="exampleInputEmail1">First Name</label>
                                        <input type="text" class="form-control" id="exampleInputEmail1"
                                            aria-describedby="emailHelp" placeholder="First Name" />
                                    </div>
                                    <div class="form-group col-md-6">
                                        <label for="exampleInputEmail1">Middle Name</label>
                                        <input type="text" class="form-control" id="exampleInputEmail1"
                                            aria-describedby="emailHelp" placeholder="Middle Name" />
                                    </div>
                                </div>
                                <div class="row">
                                    <div class="form-group col-md-6">
                                        <label for="exampleInputEmail1">Last Name</label>
                                        <input type="text" class="form-control" id="exampleInputEmail1"
                                            aria-describedby="emailHelp" placeholder="Last Name" />
                                    </div>
                                    <div class="form-group col-md-6">
                                        <label for="exampleInputEmail1">Age</label>
                                        <input type="text" class="form-control" id="exampleInputEmail1"
                                            aria-describedby="emailHelp" placeholder="Age" />
                                    </div>
                                </div>
                                <div class="row">
                                    <div class="form-group col-md-6">
                                        <label for="exampleInputEmail1">Address</label>
                                        <input type="text" class="form-control" id="exampleInputEmail1"
                                            aria-describedby="emailHelp" placeholder="Home Address" />
                                    </div>
                                    <div class="form-group col-md-6">
                                        <label for="exampleInputEmail1">State</label>
                                        <input type="text" class="form-control" id="exampleInputEmail1"
                                            aria-describedby="emailHelp" placeholder="City, State" />
                                    </div>
                                </div>
                                <div class="row">
                                    <div class="form-group col-md-6">
                                        <label for="exampleInputEmail1">Email Address</label>
                                        <input type="text" class="form-control" id="exampleInputEmail1"
                                            aria-describedby="emailHelp" placeholder="Email Address" />
                                    </div>
                                    <div class="form-group col-md-6">
                                        <label for="exampleInputEmail1">Phone Number</label>
                                        <input type="text" class="form-control" id="exampleInputEmail1"
                                            aria-describedby="emailHelp" placeholder="Phone Number" />
                                    </div>
                                </div>
                                <div class="row">
                                    <div class="col-md-12 form-txt">
                                        <h2> <i class="fa fa-plus"></i> What’s the best way for employers to contact you?</h2>
                                        <h2> <i class="fa fa-plus"></i> We suggest including an email and phone number</h2>
                                    </div>
                                </div>

                            </form>
                            <div class="header-buttons">
                                <Link to="" class="btn btn-back">
                                    <i class="fa fa-angle-left"></i> Back</Link>
                                <Link to="/work-experience" class="btn btn-next">Next<i class="fa fa-angle-right"></i></Link>
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
            </section>


            {/* <!-- Form ends here --> */}
        </div>
    )
}

export default HeaderCopy



