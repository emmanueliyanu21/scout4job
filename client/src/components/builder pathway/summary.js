import React from 'react'
import {Link} from 'react-router-dom'

const Summary = () => {
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
                                    <i class="fa fa-graduation-cap x1 x1-x"></i>
                                    <span>3</span>
                                </li>
                                <li class="ul-h1">
                                    <i class="fa fa-clone x2 x2-x"></i>
                                    <span>4</span>
                                </li>
                                <li class="ul-h1">
                                    <i class="fa fa-align-left x3-x"></i>
                                    <span>5</span>
                                </li>
                            </ul>
                        </div>
                        <div class="col-md-4 txt-header">
                            <Link href="" class="btn btn-headers">Summary</Link>
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
                                <div class="row">
                                    <div class="form-group col-md-12">
                                        <textarea class="form-control" id="exampleFormControlTextarea1"
                                            rows="2">Development Specialist with numbers years of industry experience and knowledge of onboarding and training employees, effectively planning strategies to meet staff development requirements.</textarea>
                                    </div>
                                </div>
                                <div class="row">
                                    <div class="form-group col-md-12">
                                        <textarea class="form-control" id="exampleFormControlTextarea1"
                                            rows="2">Development Specialist with numbers years of industry experience and knowledge of onboarding and training employees, effectively planning strategies to meet staff development requirements.</textarea>
                                    </div>
                                </div>
                                <div class="row">
                                    <div class="form-group col-md-12">
                                        <textarea class="form-control" id="exampleFormControlTextarea1"
                                            rows="2">Development Specialist with numbers years of industry experience and knowledge of onboarding and training employees, effectively planning strategies to meet staff development requirements.</textarea>
                                    </div>
                                </div>
                                <div class="row">
                                    <div class="form-group col-md-12">
                                        <textarea class="form-control" id="exampleFormControlTextarea1"
                                            rows="2">Development Specialist with numbers years of industry experience and knowledge of onboarding and training employees, effectively planning strategies to meet staff development requirements.</textarea>
                                    </div>
                                </div>
                                <div class="row">
                                    <div class="form-group col-md-12">
                                        <textarea class="form-control" id="exampleFormControlTextarea1"
                                            rows="2">Development Specialist with numbers years of industry experience and knowledge of onboarding and training employees, effectively planning strategies to meet staff development requirements.</textarea>
                                    </div>
                                </div>
                                <div class="row">
                                    <div class="form-group col-md-12">
                                        <input type="text" class="form-control" id="exampleInputEmail1"
                                            aria-describedby="emailHelp"
                                            placeholder="Generated specification details of inline design" />
                                    </div>
                                </div>
                                <div class="row">
                                    <div class="col-md-12 form-txt">
                                        <h2> <i class="fa fa-plus"></i> What skills do you want to highlight?</h2>
                                        <h2> <i class="fa fa-plus"></i> Use our expert recommendations below to get started</h2>
                                    </div>
                                </div>

                            </form>
                            <div class="header-buttons">
                                <Link href="" class="btn btn-back">
                                    <i class="fa fa-angle-left"></i> Back</Link>
                                <Link href="" class="btn btn-next">Next<i class="fa fa-angle-right"></i></Link>
                            </div>
                        </div>
                        <div class="col-md-4 form-img">
                            <img src="../images/cv.jpg" alt="" class="img-responsive" />
                            <div class="preview">
                                <Link href="" class="btn btn-preview"><i class="fa fa-eye"></i> Preview</Link>
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


