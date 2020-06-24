import React from 'react'
import { Link } from 'react-router-dom'

const Experince = () => {
    return (
        <div className="">
            {/* <!-- body part here --> */}
            <section class="bk-dotted">
                <div class="container">
                    <div class="row step-x1 pt-5 pb-5">
                        <div class="col-md-12 db-page pt-5">
                            <h2>How many years of experience do you have?</h2>
                            <p>We'll find the best templates for your experience level.</p>

                            <ul class="ul-number ul-num">
                                <li class="yr-x1">0</li>
                                <li class="yr-x1">1</li>
                                <li class="yr-x1">2</li>
                                <li class="yr-x2">3</li>
                                <li class="yr-x1">4</li>
                                <li class="yr-x3">5</li>
                                <li class="yr-x1">6</li>
                                <li class="yr-x1">7</li>
                                <li class="yr-x1">8</li>
                                <li class="yr-x1">9</li>
                                <li class="yr-x4">10</li>
                                <li class="yr-x5">10+</li>
                            </ul>

                            <div class="create">
                                <Link to="/strength" class="btn btn-create mr-4"><i class="fa fa-backward"></i></Link>
                                <Link to="/job-title" class="btn btn-create"><i class="fa fa-forward"></i></Link>
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



