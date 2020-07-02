import React from 'react'
import {Link} from 'react-router-dom'

const EducationDetails = () => {
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
                                    <i className="fa fa-suitcase x1 x1-x"></i>
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
                            <Link href="" className="btn btn-headers">Work Experince</Link>
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
                                <div className="card form-card">
                                    <h2>University of Manchester <span className="pull-right">April 2020 - April 2021
                                </span></h2>
                                    <ul className="ul-edu">
                                        <li> <i className="fa fa-dashcube"></i>International Education </li>
                                        <li> <i className="fa fa-certificate"></i>Msc </li>
                                        <li> <i className="fa fa-graduation-cap"></i>Distinction </li>
                                        <li> <i className="fa fa-trash pull-right"></i> </li>
                                        <li> <i className="fa fa-edit pull-right"></i> </li>

                                    </ul>
                                </div>
                                <div className="card form-card">
                                    <h2>Ladoke Akintola University of technology <span className="pull-right">April 2009 - April
                                            2014
                                </span></h2>
                                    <ul className="ul-edu">
                                        <li> <i className="fa fa-dashcube"></i>Biochemistry </li>
                                        <li> <i className="fa fa-certificate"></i>BTech </li>
                                        <li> <i className="fa fa-graduation-cap"></i>Second Class Upper </li>
                                        <li> <i className="fa fa-trash pull-right"></i> </li>
                                        <li> <i className="fa fa-edit pull-right"></i> </li>
                                    </ul>
                                </div>
                                <div className="card form-card">
                                    <h2>Aatan Baptist Comprehensive High School, Oyo State <span className="pull-right">April 2003 -
                                            April 2009
                                </span></h2>
                                    <ul className="ul-edu">
                                        <li> <i className="fa fa-dashcube"></i>SSCE </li>
                                        <li> <i className="fa fa-certificate"></i>WAEC </li>
                                        <li> <i className="fa fa-graduation-cap"></i>Distinction </li>
                                        <li> <i className="fa fa-trash pull-right"></i> </li>
                                        <li> <i className="fa fa-edit pull-right"></i> </li>
                                    </ul>
                                </div>

                            </form>
                            <div className="header-buttons">
                                <Link to='/education'><i className="fa fa-plus pull-left"></i></Link>
                                <Link to="/education" className="btn btn-back">
                                    <i className="fa fa-angle-left"></i> Back</Link>
                                <Link to="/skill" className="btn btn-next">Next<i className="fa fa-angle-right"></i></Link>
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
            {/* // <!-- Form ends here --> */}

        </div>
    )
}

export default EducationDetails