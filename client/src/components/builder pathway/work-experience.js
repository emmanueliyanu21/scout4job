import React from 'react'
import { Link } from 'react-router-dom'

const WorkExperience = () => {
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
                                    <i className="fa fa-suitcase x0"></i>
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
                            <Link to="" className="btn btn-headers">Work Experince</Link>
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
                                        <label htmlFor="exampleInputEmail1">Job Title</label>
                                        <input type="text" className="form-control" id="exampleInputEmail1"
                                            aria-describedby="emailHelp" placeholder="Job Title" />
                                    </div>
                                    <div className="form-group col-md-6">
                                        <label htmlFor="exampleInputEmail1">Employer</label>
                                        <input type="text" className="form-control" id="exampleInputEmail1"
                                            aria-describedby="emailHelp" placeholder="Employer" />
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="form-group col-md-6">
                                        <label htmlFor="exampleInputEmail1">City</label>
                                        <input type="text" className="form-control" id="exampleInputEmail1"
                                            aria-describedby="emailHelp" placeholder="City" />
                                    </div>
                                    <div className="form-group col-md-6">
                                        <label htmlFor="exampleInputEmail1">State</label>
                                        <input type="text" className="form-control" id="exampleInputEmail1"
                                            aria-describedby="emailHelp" placeholder="State" />
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="form-group col-md-6">
                                        <label htmlFor="exampleInputEmail1">Start Date</label>
                                        <input type="text" className="form-control" id="exampleInputEmail1"
                                            aria-describedby="emailHelp" placeholder="Start Date" />
                                    </div>
                                    <div className="form-group col-md-6">
                                        <label htmlFor="exampleInputEmail1">End Date</label>
                                        <input type="text" className="form-control" id="exampleInputEmail1"
                                            aria-describedby="emailHelp" placeholder="End Date" />
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col-md-12 form-txt">
                                        
                                        <h2> <i className="fa fa-plus"></i> Tell us about your work experience</h2>
                                        <h2> <i className="fa fa-plus"></i> Start with your most recent job and work backward</h2>
                                    </div>
                                </div>

                            </form>
                            <div className="header-buttons">
                                <Link to="/header" className="btn btn-back">
                                    <i className="fa fa-angle-left"></i> Back</Link>
                                <Link to="/work-experience-extra" className="btn btn-next">Next<i
                                    className="fa fa-angle-right"></i></Link>
                            </div>
                        </div>
                        <div className="col-md-4 form-img">
                            <img src="../images/cv.jpg" alt="" className="img-responsive" />
                            <div className="preview">
                                <Link to="#" className="btn btn-preview"><i className="fa fa-eye"></i> Preview</Link>
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




