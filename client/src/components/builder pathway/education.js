import React, { Component } from 'react'
import { Link } from 'react-router-dom'

const initialState = {
    schoolName: '',
    schoolLocation: '',
    degreeName: '',
    state: '',
    address: '',
    state: '',
    startDate: '',
    phoneNumber: '',
    firstNameError: "",
    middleNameError: "",
    lastNameError: "",
    ageError: "",
    addressError: "",
    stateError: "",
    emailError: "",
};

const Education = () => {
    return (
        <div className="">
            <section className="bk-grey" >
                <div className="container">
                    <div className="row">
                        <div className="col-md-8">
                            <ul className="ul-headers">
                                <li className="ul-h1">
                                    <i className="fa fa-edit"></i>
                                    <span>1</span>
                                </li>
                                <li className="ul-h1">
                                    <i className="fa fa-suitcase x0"></i>
                                    <span>2</span>
                                </li>
                                <li className="ul-h1">
                                    <i className="fa fa-graduation-cap x1 x1-x"></i>
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
                            <Link to="" className="btn btn-headers">Education</Link>
                        </div>
                    </div>
                </div>
            </section >
            {/* // <!-- Form starts here --> */}
            < section className="bk-grey" >
                <div className="container">
                    <div className="row">
                        <div className="col-md-8 head-form">
                            <form>
                                <div className="row">
                                    <div className="form-group col-md-6">
                                        <label htmlFor="exampleInputEmail1">School Name</label>
                                        <input type="text" className="form-control" id="schoolName"
                                            aria-describedby="emailHelp" placeholder="School Name" />
                                    </div>
                                    <div className="form-group col-md-6">
                                        <label htmlFor="exampleInputEmail1">School Location</label>
                                        <input type="text" className="form-control" id="schoolLocation"
                                            aria-describedby="emailHelp" placeholder="School Location" />
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="form-group col-md-6">
                                        <label htmlFor="exampleInputEmail1">Degree</label>
                                        <input type="text" className="form-control" id="degreeName"
                                            aria-describedby="emailHelp" placeholder="Degree" />
                                    </div>
                                    <div className="form-group col-md-6">
                                        <label htmlFor="exampleInputEmail1">State</label>
                                        <input type="text" className="form-control" id="state"
                                            aria-describedby="emailHelp" placeholder="State" />
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="form-group col-md-6">
                                        <label htmlFor="exampleInputEmail1">Start Date</label>
                                        <input type="text" className="form-control" id="startDate"
                                            aria-describedby="emailHelp" placeholder="Start Date" />
                                    </div>
                                    <div className="form-group col-md-6">
                                        <label htmlFor="exampleInputEmail1">Graduation Date</label>
                                        <input type="text" className="form-control" id="gradDate"
                                            aria-describedby="emailHelp" placeholder="Graduation Date" />
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col-md-12 form-txt">
                                        <h2> <i className="fa fa-plus"></i> Tell us about your education</h2>
                                        <h2> <i className="fa fa-plus"></i> Include every school, even if you're still there or
                                    didn't graduate</h2>
                                    </div>
                                </div>

                            </form>
                            <div className="header-buttons">
                                <Link to="/work-experience-detail" className="btn btn-back">
                                    <i className="fa fa-angle-left"></i> Back</Link>
                                <Link to="/education-detail" className="btn btn-next">Next<i className="fa fa-angle-right"></i></Link>
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
            </section >


            {/* // <!-- Form ends here --> */}

        </div>
    )
}

export default Education






