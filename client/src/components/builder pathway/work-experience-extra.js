import React from 'react'
import { Link } from 'react-router-dom'

const WorkExperienceExtra = () => {
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
                                <div class="row">
                                    <div class="col-md-12 form-txt">
                                        <h2> <i class="fa fa-plus"></i> What did you do at Crystal River as a Designer?</h2>
                                    </div>
                                </div>
                                <div class="row">
                                    <div class="form-group col-md-12">
                                        <input type="text" class="form-control" id="exampleInputEmail1"
                                            aria-describedby="emailHelp" placeholder="Updated and maintained graphics record" />
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
                                    <div class="form-group col-md-12">
                                        <input type="text" class="form-control" id="exampleInputEmail1"
                                            aria-describedby="emailHelp"
                                            placeholder="Implement new features and improve existing ones" />
                                    </div>
                                </div>
                                <div class="row">
                                    <div class="form-group col-md-12">
                                        <input type="text" class="form-control" id="exampleInputEmail1"
                                            aria-describedby="emailHelp"
                                            placeholder="Building robust and performant new features in a Service Oriented Architecture" />
                                    </div>
                                </div>
                                <div class="row">
                                    <div class="form-group col-md-12">
                                        <input type="text" class="form-control" id="exampleInputEmail1"
                                            aria-describedby="emailHelp"
                                            placeholder="Beginner level knowledge of PHP and some Framework Zend or Yii" />
                                    </div>
                                </div>
                                <div class="row">
                                    <div class="form-group col-md-12">
                                        <input type="text" class="form-control" id="exampleInputEmail1"
                                            aria-describedby="emailHelp" placeholder="Read and intepreted blueprints" />
                                    </div>
                                </div>

                                <div class="row">
                                    <div class="col-md-12 form-txt">

                                        <h2> <i class="fa fa-plus"></i> Use our expert recommendations above to get started</h2>
                                    </div>
                                </div>
                            </form>
                            <div class="header-buttons">
                                <Link to="/work-experience-extra" class="btn btn-back">
                                    <i class="fa fa-angle-left"></i> Back</Link>
                                <Link to="/work-experience-detail" class="btn btn-next">Next<i
                                    class="fa fa-angle-right"></i></Link>
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
        </div>
    )
}

export default WorkExperienceExtra



