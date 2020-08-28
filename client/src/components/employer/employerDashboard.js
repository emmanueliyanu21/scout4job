import React, { Component } from 'react'
import Navbar from '../pages/Navbar-Employer'
import { Link } from 'react-router-dom'

export class EmployerDashboard extends Component {
    render() {
        return (
            <div className="">
                <Navbar />
                <section class="bk-grey">
                    <div class="container">
                        <div class="row pad-dashboard">
                            <div class="col-md-3 col-sm-12">
                                <div class="card">
                                    <img src="../images/bk1.png" class="card-img-top" alt="..." />
                                    <div class="card-body">
                                        <h5 class="card-title">Benjamin Frankline</h5>
                                        <p class="card-text small">info@scout4job <br /> +234 905 040 7881</p>
                                    </div>
                                    <div class="list-group list-group-flush nav nav-tabs">
                                        <a role="tab" data-toggle="tab" href="#dashboard"
                                            class="nav-link list-group-item list-group-item-action active"><i
                                                class="fa fa-home"></i>&nbsp;&nbsp;Dashboard</a>
                                        <a role="tab" data-toggle="tab" href="#post-job"
                                            class="nav-link list-group-item list-group-item-action"><i
                                                class="fa fa-briefcase"></i> Post Job</a>
                                        <a role="tab" data-toggle="tab" href="#cv-search"
                                            class="nav-link list-group-item list-group-item-action"><i class="fa fa-bars"></i>
                                            &nbsp;&nbsp;CV Search</a>
                                        <a role="tab" data-toggle="tab" href="#interview-procedure"
                                            class="nav-link list-group-item list-group-item-action"><i class="fa fa-bookmark"></i>
                                            &nbsp;&nbsp;Interview Procedure</a>
                                        <a role="tab" data-toggle="tab" href="#resource-download"
                                            class="nav-link list-group-item list-group-item-action"><i class="fa fa-download"></i>
                                            &nbsp;Resource Download</a>
                                    </div>
                                    <div class="card-body">
                                        <a href="#" class="card-link"><i class="fa fa-sign-out"></i> Logout</a>
                                    </div>
                                </div>
                            </div>
                            <div class="col-md-9 col-sm-12 tab-content">
                                <div role="tabpanel" id="dashboard" class="tab-pane active">
                                    <div class="row">
                                        <div class="col-md-12 col-sm-12">
                                            <div class="main-header">
                                                <div class="header-lined">
                                                    <h2>My Dashboard</h2>
                                                    <div class="d-flex space-between align-center">
                                                        <ol class="breadcrumb">
                                                            <li class="breadcrumb-item"><a href=""><i class="fa fa-home"></i>
                                                                Home</a>
                                                            </li>
                                                            <li class="breadcrumb-item active">Applicant Area</li>
                                                        </ol>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="jumbotron text-center">
                                        <h1 class="display-6">No Application Found!</h1>
                                        <p class="lead">You currently do not have any application available on your account.</p>
                                        <hr class="my-4" />
                                        <p>Good thing is that you can easily create new application.</p>
                                        <a class="btn btn-primary btn-sm" href="#">Apply Now</a>
                                    </div>
                                    <div class="row">
                                        <div class="col-sm-6">
                                            <div class="card">
                                                <div class="card-header">
                                                    <strong>Job Application Posted</strong>
                                                </div>
                                                <div class="list-group list-group-flush">
                                                    <a href="#" class="list-group-item list-group-item-action small">
                                                        Full Stack Developer, Andela, Lagos Nigeria
                                        </a>
                                                    <a href="#" class="list-group-item list-group-item-action small">
                                                        Front-End Developer, Crowywise, Lagos Nigeria
                                        </a>
                                                    <a href="#" class="list-group-item list-group-item-action small">
                                                        Digital Marketer, Alopay, Lagos Nigeria
                                        </a>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="col-sm-6">
                                            <div class="card">
                                                <div class="card-header">
                                                    <strong>Recommended CV</strong>
                                                </div>
                                                <div class="list-group list-group-flush">
                                                    <Link to="#" class="list-group-item list-group-item-action small">
                                                        Chibuzo Edwin [3 Years Experience]
                                                    </Link>
                                                    <Link to="#" class="list-group-item list-group-item-action small">
                                                        Prof. John Struthers [25 Years Experience]
                                                    </Link>
                                                    <Link to="#" class="list-group-item list-group-item-action small">
                                                        Funmi Oyatogun [10 Years Experience]
                                                    </Link>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div role="tabpanel" id="post-job" class="tab-pane fade">
                                    <div class="row pb-5">
                                        <div class="visa-form col-md-12">
                                            <h2>Job Posting Application</h2>
                                            <form id="msform">
                                                <fieldset>
                                                    <div class="form-card p-5">
                                                        <div class="row">
                                                            <div class="form-group col-md-6">
                                                                <label for="exampleInputEmail1">Job Title</label>
                                                                <input type="text" class="form-control" id="exampleInputEmail1"
                                                                    aria-describedby="emailHelp" placeholder="Full Stack Developer" />
                                                            </div>
                                                            <div class="form-group col-md-6">
                                                                <label for="exampleInputPassword1">Company</label>
                                                                <input type="text" class="form-control" id="exampleInputPassword1"
                                                                    placeholder="Andela" />
                                                            </div>
                                                        </div>
                                                        <div class="row">
                                                            <div class="form-group col-md-6">
                                                                <label for="exampleFormControlSelect1">Location</label>
                                                                <input type="text" class="form-control" id="exampleInputPassword1"
                                                                    placeholder="Lagos, Nigeria" />
                                                            </div>
                                                            <div class="form-group col-md-6">
                                                                <label for="exampleFormControlSelect1">Specialization</label>
                                                                <input type="text" class="form-control" id="exampleInputPassword1"
                                                                    placeholder="Technology" />
                                                            </div>
                                                        </div>
                                                        <div class="row">
                                                            <div class="form-group col-md-6">
                                                                <label for="exampleInputEmail1">Date Posted</label>
                                                                <input type="text" class="form-control" id="exampleInputPassword1"
                                                                    placeholder="08 July" />
                                                            </div>
                                                            <div class="form-group col-md-6">
                                                                <label for="exampleInputPassword1">Application Deadline</label>
                                                                <input type="text" class="form-control" id="exampleInputPassword1"
                                                                    placeholder="Nigeria" />
                                                            </div>
                                                        </div>
                                                        <div class="row">
                                                            <div class="form-group col-md-6">
                                                                <label for="exampleInputEmail1">Salary</label>
                                                                <input type="text" class="form-control" id="exampleInputEmail1"
                                                                    aria-describedby="emailHelp" placeholder="N300,000" />
                                                            </div>

                                                            <div class="form-group col-md-6">
                                                                <label for="exampleInputPassword1">Telephone Number</label>
                                                                <input type="text" class="form-control" id="exampleInputPassword1"
                                                                    placeholder="070-6857-6214" />
                                                            </div>
                                                        </div>
                                                        <div class="row">
                                                            <div class="form-group col-md-6">
                                                                <label for="exampleInputEmail1">Job Requirements</label>
                                                                <textarea type="text" class="form-control" id="exampleInputEmail1"
                                                                    aria-describedby="emailHelp" rows="2" placeholder="" ></textarea>
                                                            </div>

                                                            <div class="form-group col-md-6">
                                                                <label for="exampleInputPassword1">Job Responsibility</label>
                                                                <textarea type="text" class="form-control" id="exampleInputEmail1"
                                                                    aria-describedby="emailHelp" rows="2" placeholder="" ></textarea>
                                                            </div>
                                                        </div>
                                                        <div class="row">
                                                            <div class="form-group col-md-12">
                                                                <label for="exampleInputEmail1">Job Description</label>
                                                                <textarea type="text" class="form-control" id="exampleInputEmail1"
                                                                    aria-describedby="emailHelp" rows="3" placeholder="" ></textarea>
                                                            </div>
                                                        </div>

                                                        <input type="button" name="submit" class="next action-button" value="Submit" />
                                                    </div>
                                                </fieldset>
                                            </form>
                                        </div>
                                    </div>
                                </div>
                                <div role="tabpanel" id="cv-search" class="tab-pane fade">
                                    <div class="row">
                                        <div class="col-md-12 col-sm-12">
                                            <div class="main-header">
                                                <div class="header-lined">
                                                    <h2>CV Search</h2>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="jumbotron text-center">
                                        <form className="space-icon-d">
                                            <div className="row job-form">
                                                <div className="col-md-6 job-x1">
                                                    <div className="">
                                                        <div className="form-group">
                                                            <input type="text" className="form-control form-1" id="jobTitle"
                                                                placeholder="Job Title" />
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="col-md-6 job-x2">
                                                    <div className="">
                                                        <div className="form-group">
                                                            <select className="form-control space-select pt-2 pb-2">
                                                                <option>Lagos</option>
                                                                <option>Lagos Mainland</option>
                                                                <option>Lekki</option>
                                                                <option>Victoria Island</option>
                                                                <option>Ikoyi</option>
                                                            </select>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </form>
                                        <a class="btn btn-contact-us mt-5" href="#">Search Now</a>
                                    </div>
                                    <div class="row">
                                        <div class="col-sm-6">
                                            <div class="card">
                                                <div class="card-header">
                                                    <strong>Recommended CV</strong>
                                                </div>
                                                <div class="list-group list-group-flush">
                                                    <a href="#" class="list-group-item list-group-item-action small">
                                                        Chibuzo Edwin [3 Years Experience]
                                        </a>
                                                    <a href="#" class="list-group-item list-group-item-action small">
                                                        Prof. John Struthers [25 Years Experience]
                                        </a>
                                                    <a href="#" class="list-group-item list-group-item-action small">
                                                        Funmi Oyatogun [10 Years Experience]
                                        </a>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="col-sm-6">
                                            <div class="card">
                                                <div class="card-header">
                                                    <strong>Recommended CV</strong>
                                                </div>
                                                <div class="list-group list-group-flush">
                                                    <Link to="#" class="list-group-item list-group-item-action small">
                                                        Chibuzo Edwin [3 Years Experience]
                                                    </Link>
                                                    <Link to="#" class="list-group-item list-group-item-action small">
                                                        Prof. John Struthers [25 Years Experience]
                                                    </Link>
                                                    <Link to="#" class="list-group-item list-group-item-action small">
                                                        Funmi Oyatogun [10 Years Experience]
                                                    </Link>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div role="tabpanel" id="interview-procedure" class="tab-pane fade">
                                    <div class="row pb-5">
                                        <div class="visa-form col-md-12">
                                            <h2>Interview Procedure</h2>
                                            <form id="msform">
                                                <ul id="progressbar">
                                                    <li class="active" id="account"><strong>Selection</strong></li>
                                                    <li id="personal"><strong>Interview</strong></li>
                                                    <li id="personal"><strong>Offer Letter</strong></li>
                                                    <li id="confirm"><strong>Finish</strong></li>
                                                </ul>
                                                <div class="progress">
                                                    <div class="progress-bar progress-bar-striped progress-bar-animated"
                                                        role="progressbar" aria-valuemin="0" aria-valuemax="100"></div>
                                                </div> <br />
                                                {/* <!-- fieldsets --> */}
                                                <fieldset>
                                                    <div class="form-card p-5">
                                                        <div class="row">
                                                            <div class="form-group col-md-6">
                                                                <label for="exampleInputEmail1">Surname</label>
                                                                <input type="text" class="form-control" id="exampleInputEmail1"
                                                                    aria-describedby="emailHelp" placeholder="Chibuzo" />
                                                            </div>
                                                            <div class="form-group col-md-6">
                                                                <label for="exampleInputPassword1">Other Names</label>
                                                                <input type="text" class="form-control" id="exampleInputPassword1"
                                                                    placeholder="Edwin" />
                                                            </div>
                                                        </div>
                                                        <div class="row">
                                                            <div class="form-group col-md-6">
                                                                <label for="exampleInputEmail1">Residential Address</label>
                                                                <input type="text" class="form-control" id="exampleInputEmail1"
                                                                    aria-describedby="emailHelp" placeholder="Lagos, Nigeria" />
                                                            </div>
                                                            <div class="form-group col-md-6">
                                                                <label for="exampleInputPassword1">Telephone Number</label>
                                                                <input type="text" class="form-control" id="exampleInputPassword1"
                                                                    placeholder="070-6857-6214" />
                                                            </div>
                                                        </div>
                                                        <input type="button" name="next" class="next action-button" value="Next" />
                                                    </div>

                                                </fieldset>
                                                <fieldset>
                                                    <div class="form-card">
                                                        <div class="row">
                                                            <div class="form-group col-md-6">
                                                                <label for="exampleInputEmail1">Office Address</label>
                                                                <input type="text" class="form-control" id="exampleInputEmail1"
                                                                    aria-describedby="emailHelp" placeholder="Yaba, Lagos" />
                                                            </div>
                                                            <div class="form-group col-md-6">
                                                                <label for="exampleInputPassword1">Telephone Number</label>
                                                                <input type="text" class="form-control" id="exampleInputPassword1"
                                                                    placeholder="0706-857-6214" />
                                                            </div>
                                                        </div>
                                                        <div class="row">
                                                            <div class="form-group col-md-6">
                                                                <label for="exampleInputPassword1">Height</label>
                                                                <input type="text" class="form-control" id="exampleInputPassword1"
                                                                    placeholder="5.5" />
                                                            </div>
                                                            <div class="form-group col-md-6">
                                                                <label for="exampleInputEmail1">Profession</label>
                                                                <input type="text" class="form-control" id="exampleInputEmail1"
                                                                    aria-describedby="emailHelp" placeholder="Student" />
                                                            </div>
                                                        </div>
                                                        <div class="row">
                                                            <div class="form-group col-md-6">
                                                                <label for="exampleInputPassword1">Paasport Number</label>
                                                                <input type="text" class="form-control" id="exampleInputPassword1"
                                                                    placeholder="1234567" />
                                                            </div>
                                                            <div class="form-group col-md-6">
                                                                <label for="exampleInputEmail1">Date of Issue</label>
                                                                <input type="text" class="form-control" id="exampleInputEmail1"
                                                                    aria-describedby="emailHelp" placeholder="09/06/2020" />
                                                            </div>
                                                        </div>
                                                        <div class="row">
                                                            <div class="form-group col-md-6">
                                                                <label for="exampleInputPassword1">Date of expiry</label>
                                                                <input type="text" class="form-control" id="exampleInputPassword1"
                                                                    placeholder="09/06/2017" />
                                                            </div>
                                                            <div class="form-group col-md-6">
                                                                <label for="exampleInputEmail1">Place of Issue</label>
                                                                <input type="text" class="form-control" id="exampleInputEmail1"
                                                                    aria-describedby="emailHelp" placeholder="Lagos" />
                                                            </div>
                                                        </div>
                                                        <div class="row">
                                                            <div class="form-group col-md-6">
                                                                <label for="exampleInputPassword1">Issuing Government</label>
                                                                <input type="text" class="form-control" id="exampleInputPassword1"
                                                                    placeholder="Nigeria" />
                                                            </div>
                                                            <div class="form-group col-md-6">
                                                                <label for="exampleInputEmail1">Duration of stay</label>
                                                                <input type="text" class="form-control" id="exampleInputEmail1"
                                                                    aria-describedby="emailHelp" placeholder="2 months" />
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <input type="button" name="next" class="next action-button" value="Next" />
                                                    <input type="button" name="previous" class="previous action-button-previous"
                                                        value="Previous" />
                                                </fieldset>
                                                <fieldset>
                                                    <div class="form-card">
                                                        <div class="row">
                                                            <div class="form-group col-md-6">
                                                                <label for="exampleInputPassword1">Proposed Travel Date</label>
                                                                <input type="text" class="form-control" id="exampleInputPassword1"
                                                                    placeholder="06 July 2020" />
                                                            </div>
                                                            <div class="form-group col-md-6">
                                                                <label for="exampleInputEmail1">Mode of Travel to Nigeria</label>
                                                                <input type="text" class="form-control" id="exampleInputEmail1"
                                                                    aria-describedby="emailHelp" placeholder="Air" />
                                                            </div>
                                                        </div>
                                                        <div class="row">
                                                            <div class="form-group col-md-6">
                                                                <label for="exampleInputPassword1">Money Available for your
                                                        Trip</label>
                                                                <input type="text" class="form-control" id="exampleInputPassword1"
                                                                    placeholder="50,000,000" />
                                                            </div>
                                                            <div class="form-group col-md-6">
                                                                <label for="exampleInputEmail1">Duration of stay</label>
                                                                <input type="text" class="form-control" id="exampleInputEmail1"
                                                                    aria-describedby="emailHelp" placeholder="" />
                                                            </div>
                                                        </div>
                                                        <div class="row">
                                                            <div class="form-group col-md-6">
                                                                <label for="exampleInputPassword1">Color of the Eye</label>
                                                                <input type="text" class="form-control" id="exampleInputPassword1"
                                                                    placeholder="Black" />
                                                            </div>
                                                            <div class="form-group col-md-6">
                                                                <label for="exampleInputEmail1">Color of the Hair</label>
                                                                <input type="text" class="form-control" id="exampleInputEmail1"
                                                                    aria-describedby="emailHelp" placeholder="Black" />
                                                            </div>
                                                        </div>
                                                        <div class="row">
                                                            <div class="form-group col-md-6">
                                                                <label for="exampleInputPassword1">Money Available for your
                                                        Trip</label>
                                                                <input type="text" class="form-control" id="exampleInputPassword1"
                                                                    placeholder="50,000,000" />
                                                            </div>
                                                            <div class="form-group col-md-6">
                                                                <label for="exampleInputEmail1">Duration of stay</label>
                                                                <input type="text" class="form-control" id="exampleInputEmail1"
                                                                    aria-describedby="emailHelp" placeholder="" />
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <input type="button" name="next" class="next action-button" value="Submit" />
                                                </fieldset>
                                            </form>
                                        </div>
                                    </div>
                                </div>
                                <div role="tabpanel" id="resource-download" class="tab-pane fade">
                                    <div class="row">
                                        <div class="col-md-12 col-sm-12">
                                            <div class="main-header">
                                                <div class="header-lined">
                                                    <h2>Resource Download</h2>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="jumbotron text-center">
                                        <h1 class="display-6">No Resource Found!</h1>
                                        <p class="lead">You currently do not have any resources to download on your account.</p>
                                    </div>
                                </div>

                            </div>
                        </div>
                    </div>
                </section>
            </div>
        )
    }
}

export default EmployerDashboard
