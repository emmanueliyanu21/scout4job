import React from 'react'
import { Link } from 'react-router-dom'
import Footer from '../pages/footer'

const Launch = () => {
    return (
        <div className="">

            {/* <!-- body part here --> */}
            <section class="bk-dotted">
                <div class="container">
                    <div class="three-text">
                        <h2>Just three simple steps</h2>
                    </div>
                    <div class="row step-x1">
                        <div class="col-md-4">
                            <img src="../images/one.png" class="img-responsive" alt="" />
                            <h2>Select a template from our
                                library of professional
                        designs</h2>
                        </div>
                        <div class="col-md-4">
                            <img src="../images/two.png" class="img-responsive" alt="" />
                            <h2>Build your resume with
                                our industry-specific
                        bullet points</h2>
                        </div>
                        <div class="col-md-4">
                            <img src="../images/three.png" class="img-responsive" alt="" />
                            <h2>Download your resume,
                                print it out and get it
                        ready to send!</h2>
                        </div>

                    </div>
                    <div class="create pb-4 pt-4">
                        <Link to="/year" class="btn btn-create">Create my resume</Link>
                    </div>
                </div>
            </section>
            <Footer />
            {/* <!-- body ends here --> */}
        </div>
    )
}

export default Launch


