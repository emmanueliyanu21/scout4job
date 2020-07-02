import React from 'react'
import { Link } from 'react-router-dom'

const Finalize = () => {
    return (
        <div className="">
            < section className="bk-grey" >
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
                            <Link href="" className="btn btn-headers">Extra Information</Link>
                        </div>
                    </div>
                </div>
            </section >
            {/* // <!-- Form starts here --> */}
            <section className="bk-grey">
                <div className="container">
                    <div className="row">
                        <div className="col-md-8 head-form">
                            <form>
                                <div className="row">
                                    <div className="form-group col-md-12">
                                        <div className="form-check">
                                            <input className="form-check-input" type="checkbox" value="" id="defaultCheck1" />
                                            <label className="form-check-label" for="defaultCheck1" >
                                                Acomplishments
                                    </label>
                                        </div>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="form-group col-md-12">
                                        <div className="form-check">
                                            <input className="form-check-input" type="checkbox" value="" id="defaultCheck1" />
                                            <label className="form-check-label" for="defaultCheck1" >
                                                Affiliations
                                    </label>
                                        </div>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="form-group col-md-12">
                                        <div className="form-check">
                                            <input className="form-check-input" type="checkbox" value="" id="defaultCheck1" />
                                            <label className="form-check-label" for="defaultCheck1" >
                                                Website, Portfolio, Profiles
                                    </label>
                                        </div>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="form-group col-md-12">
                                        <div className="form-check">
                                            <input className="form-check-input" type="checkbox" value="" id="defaultCheck1" />
                                            <label className="form-check-label" for="defaultCheck1" >
                                                Additional Information
                                    </label>
                                        </div>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="form-group col-md-12">
                                        <div className="form-check">
                                            <input className="form-check-input" type="checkbox" value="" id="defaultCheck1" />
                                            <label className="form-check-label" for="defaultCheck1" >
                                                Acomplishments
                                    </label>
                                        </div>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="form-group col-md-12">
                                        <div className="form-check">
                                            <input className="form-check-input" type="checkbox" value="" id="defaultCheck1" />
                                            <label className="form-check-label" for="defaultCheck1" >
                                                Acomplishments
                                    </label>
                                        </div>
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
                                <Link to="/skill" className="btn btn-back">
                                    <i className="fa fa-angle-left"></i> Back</Link>
                                <Link to="/cv-preview" className="btn btn-next">Next<i className="fa fa-angle-right"></i></Link>
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

export default Finalize




