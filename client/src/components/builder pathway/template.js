import React from 'react'
import { Link } from 'react-router-dom'
import Footer from '../pages/footer'
import Navbar from '../pages/Navbar'

const Template = () => {
    return (
        <div className="">
            <Navbar />
            {/* <!-- body part here --> */}
            <section className="bk-grey">
                <div className="container">
                    <div className="row year-x1">
                        <div className=" col-md-12">
                            <div className="three-text">
                                <h2>Here are the best templates for you</h2>
                                {/* <p>They’re great for people with 0-3 years of experience.</p> */}
                            </div>
                            <div className="row temp-x1">
                                <div className="col-md-4">
                                    <Link to="/header"><img src="../images/template-0.jpg" className="img-responsive" alt="" /></Link>
                                </div>
                                <div className="col-md-4">
                                    <Link to="/header"><img src="../images/template-2.jpg" className="img-responsive" alt="" /></Link>
                                </div>
                                <div className="col-md-4">
                                    <Link to="/header"><img src="../images/template-3.jpg" className="img-responsive" alt="" /></Link>
                                </div>
                            </div>

                            {/* <div className="create pt-5">
                                <Link to="/launch" className="btn-create mr-4"><i className="fa fa-backward"></i></Link>
                                <Link to="/header" className="btn-create"><i className="fa fa-forward"></i></Link>
                            </div> */}
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


