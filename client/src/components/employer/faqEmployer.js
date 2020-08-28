import React from 'react'
import Navbar from '../pages/Navbar-Employer'
import Footer from '../pages/footer-employer'

const EmployerFAQ = () => {
    return (
        <div className="">
            <Navbar />
            <section className="bk-grey">
                <div className="container">
                    <div className="text-center employer-faq">
                        <h2>Frequently Asked Questions</h2>
                    </div>
                    <div className="row">
                        <div className="col-md-12 employer-faq-details">
                            <div id="accordion">
                                <div class="card">
                                    <div class="card-header" id="headingOne">
                                        <h5 class="mb-0">
                                            <button class="btn btn-link" data-toggle="collapse" data-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                                                How long is my job advert featured?
                                            </button>
                                            <i className="pull-right fa fa-angle-down"></i>
                                        </h5>
                                    </div>
                                    <div id="collapseOne" class="collapse" aria-labelledby="headingOne" data-parent="#accordion">
                                        <div class="card-body">
                                            Your job listing will be featured until the application deadline elapses or 60 days. Maximum duration of a job listing is 60 days, after that you will have to republish it.
                                        </div>
                                    </div>
                                </div>
                                <div class="card">
                                    <div class="card-header" id="headingTwo">
                                        <h5 class="mb-0">
                                            <button class="btn btn-link collapsed" data-toggle="collapse" data-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                                                How does your prescreening tool work?
                                            </button>
                                            <i className="pull-right fa fa-angle-down"></i>
                                        </h5>
                                    </div>
                                    <div id="collapseTwo" class="collapse" aria-labelledby="headingTwo" data-parent="#accordion">
                                        <div class="card-body">
                                            While posting your job advert, you have the option to set some questions applicants will answer before applications. This tool will help you automatically sort applications based on relevance. You can set any type of question you want.
                                        </div>
                                    </div>
                                </div>
                                <div class="card">
                                    <div class="card-header" id="headingThree">
                                        <h5 class="mb-0">
                                            <button class="btn btn-link collapsed" data-toggle="collapse" data-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                                                How does Candidates Search work?
                                            </button>
                                            <i className="pull-right fa fa-angle-down"></i>
                                        </h5>
                                    </div>
                                    <div id="collapseThree" class="collapse" aria-labelledby="headingThree" data-parent="#accordion">
                                        <div class="card-body">
                                            Our candidates search service helps you hire fast without stress of going through lots of CVs. It enables you to search for candidates on our datanase. You can search by entering keywords, specific requirements and skills.
                                        </div>
                                    </div>
                                </div>
                                <div class="card">
                                    <div class="card-header" id="headingFour">
                                        <h5 class="mb-0">
                                            <button class="btn btn-link collapsed" data-toggle="collapse" data-target="#collapseFour" aria-expanded="false" aria-controls="collapseFour">
                                                How do I cancel, downgrade or delete my account?
                                            </button>
                                            <i className="pull-right fa fa-angle-down"></i>
                                        </h5>
                                    </div>
                                    <div id="collapseFour" class="collapse" aria-labelledby="headingFour" data-parent="#accordion">
                                        <div class="card-body">
                                            You can send a message to us using our contact form to express your reason why you want an account deletion
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <Footer />
        </div>
    )
}

export default EmployerFAQ
