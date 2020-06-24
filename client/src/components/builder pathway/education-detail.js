import React from 'react'
import {Link} from 'react-router-dom'

const EducationDetails = () => {
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
                                    <i class="fa fa-suitcase x1 x1-x"></i>
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
                            <Link href="" class="btn btn-headers">Work Experince</Link>
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
                                <div class="card form-card">
                                    <h2>University of Manchester <span class="pull-right">April 2020 - April 2021
                                </span></h2>
                                    <ul class="ul-edu">
                                        <li> <i class="fa fa-dashcube"></i>International Education </li>
                                        <li> <i class="fa fa-certificate"></i>Msc </li>
                                        <li> <i class="fa fa-graduation-cap"></i>Distinction </li>
                                        <li> <i class="fa fa-trash pull-right"></i> </li>
                                        <li> <i class="fa fa-edit pull-right"></i> </li>

                                    </ul>
                                </div>
                                <div class="card form-card">
                                    <h2>Ladoke Akintola University of technology <span class="pull-right">April 2009 - April
                                            2014
                                </span></h2>
                                    <ul class="ul-edu">
                                        <li> <i class="fa fa-dashcube"></i>Biochemistry </li>
                                        <li> <i class="fa fa-certificate"></i>BTech </li>
                                        <li> <i class="fa fa-graduation-cap"></i>Second Class Upper </li>
                                        <li> <i class="fa fa-trash pull-right"></i> </li>
                                        <li> <i class="fa fa-edit pull-right"></i> </li>
                                    </ul>
                                </div>
                                <div class="card form-card">
                                    <h2>Aatan Baptist Comprehensive High School, Oyo State <span class="pull-right">April 2003 -
                                            April 2009
                                </span></h2>
                                    <ul class="ul-edu">
                                        <li> <i class="fa fa-dashcube"></i>SSCE </li>
                                        <li> <i class="fa fa-certificate"></i>WAEC </li>
                                        <li> <i class="fa fa-graduation-cap"></i>Distinction </li>
                                        <li> <i class="fa fa-trash pull-right"></i> </li>
                                        <li> <i class="fa fa-edit pull-right"></i> </li>
                                    </ul>
                                </div>

                            </form>
                            <div class="header-buttons">
                                <Link to='/education'><i class="fa fa-plus pull-left"></i></Link>
                                <Link to="/education" class="btn btn-back">
                                    <i class="fa fa-angle-left"></i> Back</Link>
                                <Link to="/skill" class="btn btn-next">Next<i class="fa fa-angle-right"></i></Link>
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
            {/* // <!-- Form ends here --> */}

        </div>
    )
}

export default EducationDetails