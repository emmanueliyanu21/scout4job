import React from 'react'
import { Link } from 'react-router-dom'

const WorkExperienceExtra = () => {
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
                                    <div className="col-md-12 form-txt">
                                        <h2> <i className="fa fa-plus"></i> What did you do at Crystal River as a Designer?</h2>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="form-group col-md-12">
                                        <input type="text" className="form-control" id="exampleInputEmail1"
                                            aria-describedby="emailHelp" placeholder="Updated and maintained graphics record" />
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="form-group col-md-12">
                                        <input type="text" className="form-control" id="exampleInputEmail1"
                                            aria-describedby="emailHelp"
                                            placeholder="Generated specification details of inline design" />
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="form-group col-md-12">
                                        <input type="text" className="form-control" id="exampleInputEmail1"
                                            aria-describedby="emailHelp"
                                            placeholder="Implement new features and improve existing ones" />
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="form-group col-md-12">
                                        <input type="text" className="form-control" id="exampleInputEmail1"
                                            aria-describedby="emailHelp"
                                            placeholder="Building robust and performant new features in a Service Oriented Architecture" />
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="form-group col-md-12">
                                        <input type="text" className="form-control" id="exampleInputEmail1"
                                            aria-describedby="emailHelp"
                                            placeholder="Beginner level knowledge of PHP and some Framework Zend or Yii" />
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="form-group col-md-12">
                                        <input type="text" className="form-control" id="exampleInputEmail1"
                                            aria-describedby="emailHelp" placeholder="Read and intepreted blueprints" />
                                    </div>
                                </div>

                                <div className="row">
                                    <div className="col-md-12 form-txt">

                                        <h2> <i className="fa fa-plus"></i> Use our expert recommendations above to get started</h2>
                                    </div>
                                </div>
                            </form>
                            <div className="header-buttons">
                                <Link to="/work-experience-extra" className="btn btn-back">
                                    <i className="fa fa-angle-left"></i> Back</Link>
                                <Link to="/work-experience-detail" className="btn btn-next">Next<i
                                    className="fa fa-angle-right"></i></Link>
                            </div>
                        </div>
                        <div className="col-md-4 form-img">
                            <img src="../images/cv.jpg" alt="" className="img-responsive" />
                            <div className="preview">
                                <Link href="" className="btn btn-preview"><i className="fa fa-eye"></i> Preview</Link>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default WorkExperienceExtra



