import React from 'react'
import { Link } from 'react-router-dom'
import Footer from '../pages/footer'

const Start = () => {
    return (
        <div className="">
            {/* <!-- body part here --> */}
            <section class="bk-icon">
                <div class="container ">
                    <div class="row year-x1">
                        <div class="white-bk col-md-12">
                            <div class="three-text">
                                <h2>How do you want to start?</h2>

                            </div>
                            <div class="row start-com">
                                <div class="col-md-6 start-res">
                                    <Link to="/header">
                                        <div class="start-x1">
                                            <img src="../images/idea 1.png" class="img-responsive" alt="" />
                                            <h2>CREATE A NEW RESUME</h2>
                                            <p>We will help you create your
                                        resume step by step</p>
                                        </div>
                                    </Link>
                                </div>
                                <div class="col-md-6 start-res">
                                    <Link to="/dashboard">
                                        <div class="start-x2">
                                            <img src="../images/laptop 1.png" class="img-responsive" alt="" />
                                            <h2>I ALREADY HAVE A RESUME</h2>
                                            <p>We will format it to your
                                        specific information & details</p>
                                        </div>
                                    </Link>
                                </div>
                            </div>

                            <div class="create pt-5">
                                <Link to="/template" class="btn-create mr-4"><i class="fa fa-backward"></i></Link>
                                <Link to="/header" class="btn-create"><i class="fa fa-forward"></i></Link>
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

export default Start


