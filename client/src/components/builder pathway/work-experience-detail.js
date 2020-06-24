import React from 'react'
import {Link} from 'react-router-dom'

const WorkExperienceDetail = () => {
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
                                <div class="card form-card">
                                    <h2>TechHaven Africa <span class="pull-right">April 2018 - Feb 2019
                                    <i class="fa fa-edit"></i>
                                        <i class="fa fa-trash"></i>
                                    </span></h2>
                                    <ul class="ul-work">
                                        <li> <i class="fa fa-plus"></i> Developing and fostering positive working relationships
                                    with external vendors, partners and Pearson global technology delivery centers</li>
                                        <li> <i class="fa fa-plus"></i> Excited to developing next generation educational
                                    technology</li>
                                        <li> <i class="fa fa-plus"></i> Research new technologies, identify and learn best
                                    practice, adapt quickly and provide technical guidance to other team members</li>
                                        <li> <i class="fa fa-plus"></i> Set and enforce best software development practices</li>
                                        <li> <i class="fa fa-plus"></i> Familiar with Front end testing tools such as Karma and
                                    Jasmine</li>
                                        <li> <i class="fa fa-plus"></i> Advise, collaborate with, and synthesize feedback from
                                    sales, product, editorial and technology stakeholders</li>
                                        <li> <i class="fa fa-plus"></i> Strong computer science fundamentals such as algorithms,
                                            data structures, multithreading, object-oriented development, distributed
                                    applications, client-server architecture</li>
                                    </ul>
                                </div>
                                <div class="card form-card">
                                    <h2>PASS.NG <span class="pull-right">April 2017 - Feb 2018
                                    <i class="fa fa-edit"></i>
                                        <i class="fa fa-trash"></i>
                                    </span></h2>
                                    <ul class="ul-work">
                                        <li> <i class="fa fa-plus"></i> Implement new features and improve existing ones</li>
                                        <li> <i class="fa fa-plus"></i> Building robust and performant new features in a Service
                                    Oriented Architecture</li>
                                        <li> <i class="fa fa-plus"></i> Beginner level knowledge of PHP and some Framework Zend
                                    or Yii</li>
                                        <li> <i class="fa fa-plus"></i> Working with code and development - reference
                                            architecture development, direct technical support for delivery projects,
                                    development tools maintenance,</li>
                                        <li> <i class="fa fa-plus"></i> Good knowledge of security on client side (JWT, RSA,
                                    XSS, CORS, CSRF, etc.)</li>
                                        <li> <i class="fa fa-plus"></i> Professional in HTML and CSS/SASS/LESS/PSCC</li>
                                        <li> <i class="fa fa-plus"></i> Profiling and optimization of existing features</li>
                                    </ul>
                                </div>
                            </form>
                            <div class="header-buttons">
                                <Link to="/work-experience"><i class="fa fa-plus pull-left"></i></Link>
                                <Link to="/work-experience-extra" class="btn btn-back">
                                    <i class="fa fa-angle-left"></i> Back</Link>
                                <Link to="/education" class="btn btn-next">Next<i class="fa fa-angle-right"></i></Link>
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

export default WorkExperienceDetail

