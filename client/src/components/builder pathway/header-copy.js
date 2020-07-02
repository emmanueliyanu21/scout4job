import React from 'react'
import { Link } from 'react-router-dom'

const HeaderCopy = () => {
    return (
        <div className="">
            <section className="bk-grey">
                <div className="container">
                    <div className="row">
                        <div className="col-md-8">
                            <ul className="ul-headers">
                                <li className="ul-h1">
                                    <i className="fa fa-edit"></i>
                                    <span>1</span>
                                </li>
                                <li className="ul-h1">
                                    <i className="fa fa-suitcase"></i>
                                    <span>2</span>
                                </li>
                                <li className="ul-h1">
                                    <i className="fa fa-suitcase x1"></i>
                                    <span>3</span>
                                </li>
                                <li className="ul-h1">
                                    <i className="fa fa-suitcase x2"></i>
                                    <span>4</span>
                                </li>
                                <li className="ul-h1">
                                    <i className="fa fa-suitcase"></i>
                                    <span>5</span>
                                </li>
                            </ul>
                        </div>
                        <div className="col-md-4 txt-header">
                            <Link to="" className="btn btn-headers">Headers</Link>
                        </div>
                    </div>
                </div>
            </section>
            {/* <!-- Form starts here --> */}
            <section className="bk-grey">
                <div className="container">
                    <div className="row">
                        <div className="col-md-8 head-form">
                            <form>
                                <div className="row">
                                    <div className="form-group col-md-6">
                                        <label for="exampleInputEmail1">First Name</label>
                                        <input type="text" className="form-control" id="exampleInputEmail1"
                                            aria-describedby="emailHelp" placeholder="First Name" />
                                    </div>
                                    <div className="form-group col-md-6">
                                        <label for="exampleInputEmail1">Middle Name</label>
                                        <input type="text" className="form-control" id="exampleInputEmail1"
                                            aria-describedby="emailHelp" placeholder="Middle Name" />
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="form-group col-md-6">
                                        <label for="exampleInputEmail1">Last Name</label>
                                        <input type="text" className="form-control" id="exampleInputEmail1"
                                            aria-describedby="emailHelp" placeholder="Last Name" />
                                    </div>
                                    <div className="form-group col-md-6">
                                        <label for="exampleInputEmail1">Age</label>
                                        <input type="text" className="form-control" id="exampleInputEmail1"
                                            aria-describedby="emailHelp" placeholder="Age" />
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="form-group col-md-6">
                                        <label for="exampleInputEmail1">Address</label>
                                        <input type="text" className="form-control" id="exampleInputEmail1"
                                            aria-describedby="emailHelp" placeholder="Home Address" />
                                    </div>
                                    <div className="form-group col-md-6">
                                        <label for="exampleInputEmail1">State</label>
                                        <input type="text" className="form-control" id="exampleInputEmail1"
                                            aria-describedby="emailHelp" placeholder="City, State" />
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="form-group col-md-6">
                                        <label for="exampleInputEmail1">Email Address</label>
                                        <input type="text" className="form-control" id="exampleInputEmail1"
                                            aria-describedby="emailHelp" placeholder="Email Address" />
                                    </div>
                                    <div className="form-group col-md-6">
                                        <label for="exampleInputEmail1">Phone Number</label>
                                        <input type="text" className="form-control" id="exampleInputEmail1"
                                            aria-describedby="emailHelp" placeholder="Phone Number" />
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col-md-12 form-txt">
                                        <h2> <i className="fa fa-plus"></i> What’s the best way for employers to contact you?</h2>
                                        <h2> <i className="fa fa-plus"></i> We suggest including an email and phone number</h2>
                                    </div>
                                </div>

                            </form>
                            <div className="header-buttons">
                                <Link to="" className="btn btn-back">
                                    <i className="fa fa-angle-left"></i> Back</Link>
                                <Link to="/work-experience" className="btn btn-next">Next<i className="fa fa-angle-right"></i></Link>
                            </div>
                        </div>
                        <div className="col-md-4 form-img">
                            <img src="../images/cv.jpg" alt="" className="img-responsive" />
                            <div className="preview">
                                <Link to="" className="btn btn-preview"><i className="fa fa-eye"></i> Preview</Link>
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



