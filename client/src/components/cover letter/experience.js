import React from 'react'
import { Link } from 'react-router-dom'

const Experince = () => {
    return (
        <div className="">
            {/* <!-- body part here --> */}
            <section className="bk-dotted">
                <div className="container">
                    <div className="row step-x1 pt-5 pb-5">
                        <div className="col-md-12 db-page pt-5">
                            <h2>How many years of experience do you have?</h2>
                            <p>We'll find the best templates for your experience level.</p>

                            <ul className="ul-number ul-num">
                                <li className="yr-x1">0</li>
                                <li className="yr-x1">1</li>
                                <li className="yr-x1">2</li>
                                <li className="yr-x2">3</li>
                                <li className="yr-x1">4</li>
                                <li className="yr-x3">5</li>
                                <li className="yr-x1">6</li>
                                <li className="yr-x1">7</li>
                                <li className="yr-x1">8</li>
                                <li className="yr-x1">9</li>
                                <li className="yr-x4">10</li>
                                <li className="yr-x5">10+</li>
                            </ul>

                            <div className="create">
                                <Link to="/strength" className="btn btn-create mr-4"><i className="fa fa-backward"></i></Link>
                                <Link to="/job-title" className="btn btn-create"><i className="fa fa-forward"></i></Link>
                            </div>

                        </div>
                    </div>
                </div>
            </section>

            {/* <!-- body ends here-- > */}
        </div >
    )
}

export default Experince



