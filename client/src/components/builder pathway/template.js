import React from 'react'
import { Link } from 'react-router-dom'
import Footer from '../pages/footer'

const Template = () => {
    return (
        <div className="">
            {/* <!-- body part here --> */}
            <section class="bk-icon">
                <div class="container ">
                    <div class="row year-x1">
                        <div class="white-bk col-md-12">
                            <div class="three-text">
                                <h2>Here are the best templates for you</h2>
                                <p>They’re great for people with 0-3 years of experience.</p>
                            </div>
                            <div class="row temp-x1">
                                <div class="col-md-3">
                                    <Link to="/"><img src="../images/cv.jpg" class="img-responsive" alt="" /></Link>
                                </div>
                                <div class="col-md-3">
                                    <Link to="/"><img src="../images/cv.jpg" class="img-responsive" alt="" /></Link>
                                </div>
                                <div class="col-md-3">
                                    <Link to="/"><img src="../images/cv.jpg" class="img-responsive" alt="" /></Link>
                                </div>
                                <div class="col-md-3">
                                    <Link to="/"><img src="../images/cv.jpg" class="img-responsive" alt="" /></Link>
                                </div>
                            </div>

                            <div class="create pt-5">
                                <Link to="/year" class="btn-create mr-4"><i class="fa fa-backward"></i></Link>
                                <Link to="/start" class="btn-create"><i class="fa fa-forward"></i></Link>
                            </div>
                            <br /><br />
                        </div>
                    </div>
                </div>
            </section>
            <Footer />
            {/* <!-- body ends here --> */}
        </div>
    )
}

export default Template


