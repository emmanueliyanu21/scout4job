import React from 'react'
import { Link } from 'react-router-dom'
import Footer from '../pages/footer'
import Navbar from '../pages/Navbar'

const Launch = () => {
    return (
        <div className="">
            <Navbar />
            {/* <!-- body part here --> */}
            <section className="bk-dotted">
                <div className="container">
                    <div className="three-text">
                        <h2>Just three simple steps</h2>
                    </div>
                    <div className="row step-x1">
                        <div className="col-md-4 text-center">
                            <img src="../images/one.png" className="img-responsive" alt="" />
                            <h2>Select a template from our
                                library of professional
                        designs</h2>
                        </div>
                        <div className="col-md-4 text-center">
                            <img src="../images/two.png" className="img-responsive" alt="" />
                            <h2>Build your resume with
                                our industry-specific
                        bullet points</h2>
                        </div>
                        <div className="col-md-4 text-center">
                            <img src="../images/three.png" className="img-responsive" alt="" />
                            <h2>Download your resume,
                                print it out and get it
                        ready to send!</h2>
                        </div>

                    </div>
                    <div className="create pb-4 pt-4">
                        <Link to="/template" className="btn btn-create">Create my resume</Link>
                    </div>
                </div>
            </section>
            <Footer />
            {/* <!-- body ends here --> */}
        </div>
    )
}

export default Launch


