import React from 'react'
import { Link } from 'react-router-dom'

const SkillDetails = () => {
    return (
        <div className="">
            {/* <!-- body part here --> */}
            <section className="bk-dotted">
                <div className="container">
                    <div className="row step-x1 pt-5 pb-5">
                        <div className="col-md-12 db-page pt-5">
                            <h2>What skill makes you a good fit for the
                        software engineer position?</h2>

                            <div className="option-x1 pt-5 mb-5">
                                {/* <a href="" className="btn btn-yes mb-3">Technical Writing</a>
                                <a href="" className="btn btn-yes mb-3">Network Development</a>
                                <a href="" className="btn btn-yes mb-3">Technical Analysis</a>
                                <a href="" className="btn btn-yes mb-3">Data Collection</a>
                                <a href="" className="btn btn-yes mb-3">Project Management</a>
                                <a href="" className="btn btn-yes mb-3">Virtualization</a>
                                <a href="" className="btn btn-yes mb-3">Software Development</a>
                                <a href="" className="btn btn-yes mb-3">Programming</a>
                                <a href="" className="btn btn-yes mb-3">System Development</a>
                                <a href="" className="btn btn-yes mb-3">Project Management</a> */}

                            </div>
                            <div className="create">
                                <Link to="/specific" className="btn btn-create mr-4"><i className="fa fa-backward"></i></Link>
                                <Link to="/strength" className="btn btn-create"><i className="fa fa-forward"></i></Link>
                            </div>
                        </div>
                    </div>

                </div>
            </section>

            {/* <!-- body ends here --> */}
        </div>
    )
}

export default SkillDetails


