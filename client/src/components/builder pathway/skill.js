import React from 'react'
import { Link } from 'react-router-dom'

const Skill = () => {
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
                                    <i className="fa fa-suitcase"></i>
                                    <span>5</span>
                                </li>
                            </ul>
                        </div>
                        <div className="col-md-4 txt-header">
                            <Link href="" className="btn btn-headers">Skill Experince</Link>
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
                                        <input type="text" className="form-control" id="exampleInputEmail1"
                                            aria-describedby="emailHelp"
                                            placeholder="Generated specification details of inline design" />
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="form-group col-md-12">
                                        <input type="text" className="form-control" id="exampleInputEmail1"
                                            aria-describedby="emailHelp"
                                            placeholder="Updated and maintained graphics record for different client" />
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
                                            placeholder="Generated specification details of inline design" />
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="form-group col-md-12">
                                        <input type="text" className="form-control" id="exampleInputEmail1"
                                            aria-describedby="emailHelp"
                                            placeholder="Updated and maintained graphics record for different client" />
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
                                <Link to="/education-detail" className="btn btn-back">
                                    <i className="fa fa-angle-left"></i> Back</Link>
                                <Link to="/finalize" className="btn btn-next">Next<i className="fa fa-angle-right"></i></Link>
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

export default Skill


