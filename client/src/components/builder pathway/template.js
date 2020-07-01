import React from 'react'
import { Link } from 'react-router-dom'
import Footer from '../pages/footer'

const Template = () => {
    return (
        <div className="">
            {/* <!-- body part here --> */}
            <section className="bk-icon">
                <div className="container ">
                    <div className="row year-x1">
                        <div className="white-bk col-md-12">
                            <div className="three-text">
                                <h2>Here are the best templates for you</h2>
                                <p>They’re great for people with 0-3 years of experience.</p>
                            </div>
                            <div className="row temp-x1">
                                <div className="col-md-3">
                                    <Link to="/"><img src="../images/cv.jpg" className="img-responsive" alt="" /></Link>
                                </div>
                                <div className="col-md-3">
                                    <Link to="/"><img src="../images/cv.jpg" className="img-responsive" alt="" /></Link>
                                </div>
                                <div className="col-md-3">
                                    <Link to="/"><img src="../images/cv.jpg" className="img-responsive" alt="" /></Link>
                                </div>
                                <div className="col-md-3">
                                    <Link to="/"><img src="../images/cv.jpg" className="img-responsive" alt="" /></Link>
                                </div>
                            </div>

                            <div className="create pt-5">
                                <Link to="/year" className="btn-create mr-4"><i className="fa fa-backward"></i></Link>
                                <Link to="/start" className="btn-create"><i className="fa fa-forward"></i></Link>
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


