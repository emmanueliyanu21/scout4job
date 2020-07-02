import React from 'react'
import {Link} from 'react-router-dom'

const WorkExperienceDetail = () => {
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
                                <div className="card form-card">
                                    <h2>TechHaven Africa <span className="pull-right">April 2018 - Feb 2019
                                    <i className="fa fa-edit"></i>
                                        <i className="fa fa-trash"></i>
                                    </span></h2>
                                    <ul className="ul-work">
                                        <li> <i className="fa fa-plus"></i> Developing and fostering positive working relationships
                                    with external vendors, partners and Pearson global technology delivery centers</li>
                                        <li> <i className="fa fa-plus"></i> Excited to developing next generation educational
                                    technology</li>
                                        <li> <i className="fa fa-plus"></i> Research new technologies, identify and learn best
                                    practice, adapt quickly and provide technical guidance to other team members</li>
                                        <li> <i className="fa fa-plus"></i> Set and enforce best software development practices</li>
                                        <li> <i className="fa fa-plus"></i> Familiar with Front end testing tools such as Karma and
                                    Jasmine</li>
                                        <li> <i className="fa fa-plus"></i> Advise, collaborate with, and synthesize feedback from
                                    sales, product, editorial and technology stakeholders</li>
                                        <li> <i className="fa fa-plus"></i> Strong computer science fundamentals such as algorithms,
                                            data structures, multithreading, object-oriented development, distributed
                                    applications, client-server architecture</li>
                                    </ul>
                                </div>
                                <div className="card form-card">
                                    <h2>PASS.NG <span className="pull-right">April 2017 - Feb 2018
                                    <i className="fa fa-edit"></i>
                                        <i className="fa fa-trash"></i>
                                    </span></h2>
                                    <ul className="ul-work">
                                        <li> <i className="fa fa-plus"></i> Implement new features and improve existing ones</li>
                                        <li> <i className="fa fa-plus"></i> Building robust and performant new features in a Service
                                    Oriented Architecture</li>
                                        <li> <i className="fa fa-plus"></i> Beginner level knowledge of PHP and some Framework Zend
                                    or Yii</li>
                                        <li> <i className="fa fa-plus"></i> Working with code and development - reference
                                            architecture development, direct technical support for delivery projects,
                                    development tools maintenance,</li>
                                        <li> <i className="fa fa-plus"></i> Good knowledge of security on client side (JWT, RSA,
                                    XSS, CORS, CSRF, etc.)</li>
                                        <li> <i className="fa fa-plus"></i> Professional in HTML and CSS/SASS/LESS/PSCC</li>
                                        <li> <i className="fa fa-plus"></i> Profiling and optimization of existing features</li>
                                    </ul>
                                </div>
                            </form>
                            <div className="header-buttons">
                                <Link to="/work-experience"><i className="fa fa-plus pull-left"></i></Link>
                                <Link to="/work-experience-extra" className="btn btn-back">
                                    <i className="fa fa-angle-left"></i> Back</Link>
                                <Link to="/education" className="btn btn-next">Next<i className="fa fa-angle-right"></i></Link>
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

export default WorkExperienceDetail

