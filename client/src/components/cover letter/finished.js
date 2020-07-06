import React from 'react'
import { Link } from 'react-router-dom'

const Finished = () => {
    return (
        <div className="">
            {/* <!-- body part here --> */}
            <section className="bk-icon">
                <div className="container ">
                    <div className="row year-x1">
                        <div className="white-bk col-md-12 p-5">
                            <p className="pull-right pb-4">emmanueliyanu@gmail.com</p>
                            <p className="pt-5">Dec 24, 2019</p>
                            <p>KPMG Nigeria</p>
                            <p>RE: Software Engineer, [Date]</p>
                            <p>Dear [Mr or Mrs Last Name]</p>
                            <p>It usually begins with: “Lorem ipsum dolor sit amet, consectetur
                                adipiscing elit, sed do eiusmod tempor incididunt ut labore et
                                dolore magna aliqua.” The purpose of lorem ipsum is to create a
                                natural looking block of text (sentence, paragraph, page, etc.)
                        that doesn't distract from the layout.</p>
                            <p>It usually begins with: “Lorem ipsum dolor sit amet, consectetur
                                adipiscing elit, sed do eiusmod tempor incididunt ut labore et
                                dolore magna aliqua.” The purpose of lorem ipsum is to create a
                                natural looking block of text (sentence, paragraph, page, etc.)
                        that doesn't distract from the layout.</p>
                            <p>It usually begins with: “Lorem ipsum dolor sit amet, consectetur
                                adipiscing elit, sed do eiusmod tempor incididunt ut labore et
                        dolore magna aliqua.”.</p>
                        </div>
                        <Link to="/dashboard">Dashboard</Link>
                    </div>
                </div>
            </section>

            {/* <!-- body ends here --> */}
        </div>
    )
}

export default Finished



