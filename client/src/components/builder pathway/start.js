import React from 'react'
import { Link } from 'react-router-dom'
import Footer from '../pages/footer'

const Start = () => {
    return (
        <div className="">
            {/* <!-- body part here --> */}
            <section className="bk-icon">
                <div className="container ">
                    <div className="row year-x1">
                        <div className="white-bk col-md-12">
                            <div className="three-text">
                                <h2>How do you want to start?</h2>
                            </div>
                            <div className="row start-com">
                                <div className="col-md-6 start-res mb-5">
                                    <Link to="/header">
                                        <div className="start-x1">
                                            <img src="../images/idea 1.png" className="img-responsive" alt="" />
                                            <h2>CREATE A NEW RESUME</h2>
                                            <p>We will help you create your
                                        resume step by step</p>
                                        </div>
                                    </Link>
                                </div>
                                <div className="col-md-6 start-res mb-5">
                                    <Link to="/dashboard">
                                        <div className="start-x2">
                                            <img src="../images/laptop 1.png" className="img-responsive" alt="" />
                                            <h2>I ALREADY HAVE A RESUME</h2>
                                            <p>We will format it to your
                                        specific information & details</p>
                                        </div>
                                    </Link>
                                </div>
                            </div>

                            <div className="create pt-5">
                                <Link to="/template" className="btn-create mr-4"><i className="fa fa-backward"></i></Link>
                                <Link to="/header" className="btn-create"><i className="fa fa-forward"></i></Link>
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


