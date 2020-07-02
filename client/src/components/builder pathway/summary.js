import React from 'react'
import {Link} from 'react-router-dom'

const Summary = () => {
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
                                    <i className="fa fa-graduation-cap x1 x1-x"></i>
                                    <span>3</span>
                                </li>
                                <li className="ul-h1">
                                    <i className="fa fa-clone x2 x2-x"></i>
                                    <span>4</span>
                                </li>
                                <li className="ul-h1">
                                    <i className="fa fa-align-left x3-x"></i>
                                    <span>5</span>
                                </li>
                            </ul>
                        </div>
                        <div className="col-md-4 txt-header">
                            <Link href="" className="btn btn-headers">Summary</Link>
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
                                    <div className="form-group col-md-12">
                                        <textarea className="form-control" id="exampleFormControlTextarea1"
                                            rows="2">Development Specialist with numbers years of industry experience and knowledge of onboarding and training employees, effectively planning strategies to meet staff development requirements.</textarea>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="form-group col-md-12">
                                        <textarea className="form-control" id="exampleFormControlTextarea1"
                                            rows="2">Development Specialist with numbers years of industry experience and knowledge of onboarding and training employees, effectively planning strategies to meet staff development requirements.</textarea>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="form-group col-md-12">
                                        <textarea className="form-control" id="exampleFormControlTextarea1"
                                            rows="2">Development Specialist with numbers years of industry experience and knowledge of onboarding and training employees, effectively planning strategies to meet staff development requirements.</textarea>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="form-group col-md-12">
                                        <textarea className="form-control" id="exampleFormControlTextarea1"
                                            rows="2">Development Specialist with numbers years of industry experience and knowledge of onboarding and training employees, effectively planning strategies to meet staff development requirements.</textarea>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="form-group col-md-12">
                                        <textarea className="form-control" id="exampleFormControlTextarea1"
                                            rows="2">Development Specialist with numbers years of industry experience and knowledge of onboarding and training employees, effectively planning strategies to meet staff development requirements.</textarea>
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
                                    <div className="col-md-12 form-txt">
                                        <h2> <i className="fa fa-plus"></i> What skills do you want to highlight?</h2>
                                        <h2> <i className="fa fa-plus"></i> Use our expert recommendations below to get started</h2>
                                    </div>
                                </div>

                            </form>
                            <div className="header-buttons">
                                <Link href="" className="btn btn-back">
                                    <i className="fa fa-angle-left"></i> Back</Link>
                                <Link href="" className="btn btn-next">Next<i className="fa fa-angle-right"></i></Link>
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


            {/* <!-- Form ends here --> */}
        </div>
    )
}

export default Summary


