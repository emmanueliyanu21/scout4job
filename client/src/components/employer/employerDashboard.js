import React, { Component } from 'react'
import Navbar from '../pages/Navbar-Employer'
import { Link } from 'react-router-dom'
import { connect } from "react-redux";
import PropTypes from "prop-types";
import axios from 'axios';
import { logoutUser } from "../../store/actions/employerauthActions";

class EmployerDashboard extends Component {

    state = {
        jobTitle: '',
        jobCompany: '',
        jobLocation: "",
        jobSpecialization: "",
        jobDate: "",
        jobDeadline: "",
        jobSalary: "",
        jobNumber: "",
        jobRequirement: "",
        jobResponsibility: "",
        jobDescription: "",
        errors: {}
    }

    handleChange = (e) => {
        this.setState({
            [e.target.id]: e.target.value
        });
    }

    handleSubmit = (e) => {
        e.preventDefault();

        axios({
            method: 'post',
            url: 'http://localhost:8000/api/jobs',
            data: {
                jobTitle: this.state.jobTitle,
                jobCompany: this.state.jobCompany,
                jobLocation: this.state.jobLocation,
                jobSpecialization: this.state.jobSpecialization,
                jobDate: this.state.jobDate,
                jobDeadline: this.state.jobDeadline,
                jobSalary: this.state.jobSalary,
                jobNumber: this.state.jobNumber,
                jobRequirement: this.state.jobRequirement,
                jobResponsibility: this.state.jobResponsibility,
                jobDescription: this.state.jobDescription
            }
        });

        
        this.setState({ jobTitle: '' })

    }

    onLogoutClick = e => {
        e.preventDefault();
        this.props.logoutUser();
    };

    render() {
        const { errors } = this.state;
        const { user } = this.props.auth;
        return (
            <div className="">
                <Navbar />
                <section className="bk-grey">
                    <div className="container">
                        <div className="row pad-dashboard">
                            <div className="col-md-3 col-sm-12">
                                <div className="card">
                                    <img src="../images/bk1.png" className="card-img-top" alt="..." />
                                    <div className="card-body">
                                        <h5 className="card-title"><b>Hello</b>&nbsp;{user.companyname.split(" ")[0]}</h5>
                                        <p className="card-text small">info@scout4job <br /> +234 905 040 7881</p>
                                    </div>
                                    <div className="list-group list-group-flush nav nav-tabs">
                                        <a role="tab" data-toggle="tab" href="#dashboard"
                                            className="nav-link list-group-item list-group-item-action active"><i
                                                className="fa fa-home"></i>&nbsp;&nbsp;Dashboard</a>
                                        <a role="tab" data-toggle="tab" href="#post-job"
                                            className="nav-link list-group-item list-group-item-action"><i
                                                className="fa fa-briefcase"></i> Post Job</a>
                                        <a role="tab" data-toggle="tab" href="#cv-search"
                                            className="nav-link list-group-item list-group-item-action"><i className="fa fa-bars"></i>
                                            &nbsp;&nbsp;CV Search</a>
                                        <a role="tab" data-toggle="tab" href="#interview-procedure"
                                            className="nav-link list-group-item list-group-item-action"><i className="fa fa-bookmark"></i>
                                            &nbsp;&nbsp;Interview Procedure</a>
                                        <a role="tab" data-toggle="tab" href="#resource-download"
                                            className="nav-link list-group-item list-group-item-action"><i className="fa fa-download"></i>
                                            &nbsp;Resource Download</a>
                                    </div>
                                    <div className="card-body">
                                        <a onClick={this.onLogoutClick} href="#" className="card-link"><i className="fa fa-sign-out"></i> Logout</a>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-9 col-sm-12 tab-content">
                                <div role="tabpanel" id="dashboard" className="tab-pane active">
                                    <div className="row">
                                        <div className="col-md-12 col-sm-12">
                                            <div className="main-header">
                                                <div className="header-lined">
                                                    <h2>My Dashboard</h2>
                                                    <div className="d-flex space-between align-center">
                                                        <ol className="breadcrumb">
                                                            <li className="breadcrumb-item"><Link to=""><i className="fa fa-home"></i>
                                                                Home</Link>
                                                            </li>
                                                            <li className="breadcrumb-item active">Applicant Area</li>
                                                        </ol>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="jumbotron text-center">
                                        <h1 className="display-6">No Application Found!</h1>
                                        <p className="lead">You currently do not have any application available on your account.</p>
                                        <hr className="my-4" />
                                        <p>Good thing is that you can easily create new application.</p>
                                        <Link className="btn btn-primary btn-sm" to="#">Apply Now</Link>
                                    </div>
                                    <div className="row">
                                        <div className="col-sm-6">
                                            <div className="card">
                                                <div className="card-header">
                                                    <strong>Job Application Posted</strong>
                                                </div>
                                                <div className="list-group list-group-flush">
                                                    <Link to="" className="list-group-item list-group-item-action small">
                                                        Full Stack Developer, Andela, Lagos Nigeria
                                                    </Link>
                                                    <Link to="" className="list-group-item list-group-item-action small">
                                                        Front-End Developer, Crowywise, Lagos Nigeria
                                                    </Link>
                                                    <Link to="" className="list-group-item list-group-item-action small">
                                                        Digital Marketer, Alopay, Lagos Nigeria
                                                    </Link>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-sm-6">
                                            <div className="card">
                                                <div className="card-header">
                                                    <strong>Recommended CV</strong>
                                                </div>
                                                <div className="list-group list-group-flush">
                                                    <Link to="#" className="list-group-item list-group-item-action small">
                                                        Chibuzo Edwin [3 Years Experience]
                                                    </Link>
                                                    <Link to="#" className="list-group-item list-group-item-action small">
                                                        Prof. John Struthers [25 Years Experience]
                                                    </Link>
                                                    <Link to="#" className="list-group-item list-group-item-action small">
                                                        Funmi Oyatogun [10 Years Experience]
                                                    </Link>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div role="tabpanel" id="post-job" className="tab-pane fade">
                                    <div className="row pb-5">
                                        <div className="visa-form col-md-12">
                                            <h2>Job Posting Application</h2>
                                            <form id="msform" noValidate onSubmit={this.handleSubmit}>
                                                <div className="form-card p-5 bk-white">
                                                    <div className="row">
                                                        <div className="form-group col-md-6">
                                                            <label htmlFor="exampleInputEmail1">Job Title</label>
                                                            <input type="text" className="form-control" id="jobTitle" required
                                                                onChange={this.handleChange} placeholder="Full Stack Developer" />
                                                            {/* <div style={{ fontSize: 12, color: "red" }}>
                                                                {this.state.fullNameError}
                                                            </div> */}
                                                        </div>
                                                        <div className="form-group col-md-6">
                                                            <label htmlFor="exampleInputPassword1">Company</label>
                                                            <input type="text" className="form-control" id="jobCompany"
                                                                required
                                                                onChange={this.handleChange} placeholder="Andela" />
                                                            {/* <div style={{ fontSize: 12, color: "red" }}>
                                                                {this.state.fullNameError}
                                                            </div> */}
                                                        </div>
                                                    </div>
                                                    <div className="row">
                                                        <div className="form-group col-md-6">
                                                            <label htmlFor="exampleFormControlSelect1">Location</label>
                                                            <input type="text" className="form-control" id="jobLocation"
                                                                required
                                                                onChange={this.handleChange} placeholder="Lagos, Nigeria" />
                                                            {/* <div style={{ fontSize: 12, color: "red" }}>
                                                                {this.state.fullNameError}
                                                            </div> */}
                                                        </div>
                                                        <div className="form-group col-md-6">
                                                            <label htmlFor="exampleFormControlSelect1">Specialization</label>
                                                            <input type="text" className="form-control" id="jobSpecialization"
                                                                required
                                                                onChange={this.handleChange} placeholder="Technology" />
                                                            {/* <div style={{ fontSize: 12, color: "red" }}>
                                                                {this.state.fullNameError}
                                                            </div> */}
                                                        </div>
                                                    </div>
                                                    <div className="row">
                                                        <div className="form-group col-md-6">
                                                            <label htmlFor="exampleInputEmail1">Date Posted</label>
                                                            <input type="text" className="form-control" id="jobDate"
                                                                required
                                                                onChange={this.handleChange} placeholder="08 July" />
                                                            {/* <div style={{ fontSize: 12, color: "red" }}>
                                                                {this.state.fullNameError}
                                                            </div> */}
                                                        </div>
                                                        <div className="form-group col-md-6">
                                                            <label htmlFor="exampleInputPassword1">Application Deadline</label>
                                                            <input type="text" className="form-control" id="jobDeadline"
                                                                required
                                                                onChange={this.handleChange} placeholder="Nigeria" />
                                                            {/* <div style={{ fontSize: 12, color: "red" }}>
                                                                {this.state.fullNameError}
                                                            </div> */}
                                                        </div>
                                                    </div>
                                                    <div className="row">
                                                        <div className="form-group col-md-6">
                                                            <label htmlFor="exampleInputEmail1">Salary</label>
                                                            <input type="text" className="form-control" id="jobSalary"
                                                                required
                                                                onChange={this.handleChange} placeholder="N300,000" />
                                                            {/* <div style={{ fontSize: 12, color: "red" }}>
                                                                {this.state.fullNameError}
                                                            </div> */}
                                                        </div>

                                                        <div className="form-group col-md-6">
                                                            <label htmlFor="exampleInputPassword1">Telephone Number</label>
                                                            <input type="text" className="form-control" id="jobNumber"
                                                                required
                                                                onChange={this.handleChange} placeholder="070-6857-6214" />
                                                            {/* <div style={{ fontSize: 12, color: "red" }}>
                                                                {this.state.fullNameError}
                                                            </div> */}
                                                        </div>
                                                    </div>
                                                    <div className="row">
                                                        <div className="form-group col-md-6">
                                                            <label htmlFor="exampleInputEmail1">Job Requirements</label>
                                                            <textarea type="text" className="form-control" id="jobRequirement"
                                                                required
                                                                onChange={this.handleChange} rows="2" placeholder="" ></textarea>
                                                            {/* <div style={{ fontSize: 12, color: "red" }}>
                                                                {this.state.fullNameError}
                                                            </div> */}
                                                        </div>

                                                        <div className="form-group col-md-6">
                                                            <label htmlFor="exampleInputPassword1">Job Responsibility</label>
                                                            <textarea type="text" className="form-control" id="jobResponsibility"
                                                                required
                                                                onChange={this.handleChange} rows="2" placeholder="" ></textarea>
                                                            {/* <div style={{ fontSize: 12, color: "red" }}>
                                                                {this.state.fullNameError}
                                                            </div> */}
                                                        </div>
                                                    </div>
                                                    <div className="row">
                                                        <div className="form-group col-md-12">
                                                            <label htmlFor="exampleInputEmail1">Job Description</label>
                                                            <textarea type="text" className="form-control" id="jobDescription"
                                                                required
                                                                onChange={this.handleChange} rows="3" placeholder="" ></textarea>
                                                            {/* <div style={{ fontSize: 12, color: "red" }}>
                                                                {this.state.fullNameError}
                                                            </div> */}
                                                        </div>
                                                    </div>

                                                    <button type="submit" className="next action-button">Submit</button>

                                                </div>
                                            </form>
                                        </div>
                                    </div>
                                </div>
                                <div role="tabpanel" id="cv-search" className="tab-pane fade">
                                    <div className="row">
                                        <div className="col-md-12 col-sm-12">
                                            <div className="main-header">
                                                <div className="header-lined">
                                                    <h2>CV Search</h2>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="jumbotron text-center">
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
                                        <Link className="btn btn-contact-us mt-5" to="#">Search Now</Link>
                                    </div>
                                    <div className="row">
                                        <div className="col-sm-6">
                                            <div className="card">
                                                <div className="card-header">
                                                    <strong>Recommended CV</strong>
                                                </div>
                                                <div className="list-group list-group-flush">
                                                    <Link to="" className="list-group-item list-group-item-action small">
                                                        Chibuzo Edwin [3 Years Experience]
                                                    </Link>
                                                    <Link to="" className="list-group-item list-group-item-action small">
                                                        Prof. John Struthers [25 Years Experience]
                                                    </Link>
                                                    <Link to="" className="list-group-item list-group-item-action small">
                                                        Funmi Oyatogun [10 Years Experience]
                                                    </Link>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-sm-6">
                                            <div className="card">
                                                <div className="card-header">
                                                    <strong>Recommended CV</strong>
                                                </div>
                                                <div className="list-group list-group-flush">
                                                    <Link to="#" className="list-group-item list-group-item-action small">
                                                        Chibuzo Edwin [3 Years Experience]
                                                    </Link>
                                                    <Link to="#" className="list-group-item list-group-item-action small">
                                                        Prof. John Struthers [25 Years Experience]
                                                    </Link>
                                                    <Link to="#" className="list-group-item list-group-item-action small">
                                                        Funmi Oyatogun [10 Years Experience]
                                                    </Link>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div role="tabpanel" id="interview-procedure" className="tab-pane fade">
                                    <div className="row pb-5">
                                        <div className="visa-form col-md-12">
                                            <h2>Interview Procedure</h2>
                                            <form id="msform">
                                                <ul id="progressbar">
                                                    <li className="active" id="account"><strong>Selection</strong></li>
                                                    <li id="personal"><strong>Interview</strong></li>
                                                    <li id="personal"><strong>Offer Letter</strong></li>
                                                    <li id="confirm"><strong>Finish</strong></li>
                                                </ul>
                                                <div className="progress">
                                                    <div className="progress-bar progress-bar-striped progress-bar-animated"
                                                        role="progressbar" aria-valuemin="0" aria-valuemax="100"></div>
                                                </div> <br />
                                                {/* <!-- fieldsets --> */}
                                                <fieldset>
                                                    <div className="form-card p-5">
                                                        <div className="row">
                                                            <div className="form-group col-md-6">
                                                                <label htmlFor="exampleInputEmail1">Surname</label>
                                                                <input type="text" className="form-control" id="exampleInputEmail1"
                                                                    aria-describedby="emailHelp" placeholder="Chibuzo" />
                                                            </div>
                                                            <div className="form-group col-md-6">
                                                                <label htmlFor="exampleInputPassword1">Other Names</label>
                                                                <input type="text" className="form-control" id="exampleInputPassword1"
                                                                    placeholder="Edwin" />
                                                            </div>
                                                        </div>
                                                        <div className="row">
                                                            <div className="form-group col-md-6">
                                                                <label htmlFor="exampleInputEmail1">Residential Address</label>
                                                                <input type="text" className="form-control" id="exampleInputEmail1"
                                                                    aria-describedby="emailHelp" placeholder="Lagos, Nigeria" />
                                                            </div>
                                                            <div className="form-group col-md-6">
                                                                <label htmlFor="exampleInputPassword1">Telephone Number</label>
                                                                <input type="text" className="form-control" id="exampleInputPassword1"
                                                                    placeholder="070-6857-6214" />
                                                            </div>
                                                        </div>
                                                        <input type="button" name="next" className="next action-button" value="Next" />
                                                    </div>

                                                </fieldset>
                                                <fieldset>
                                                    <div className="form-card">
                                                        <div className="row">
                                                            <div className="form-group col-md-6">
                                                                <label htmlFor="exampleInputEmail1">Office Address</label>
                                                                <input type="text" className="form-control" id="exampleInputEmail1"
                                                                    aria-describedby="emailHelp" placeholder="Yaba, Lagos" />
                                                            </div>
                                                            <div className="form-group col-md-6">
                                                                <label htmlFor="exampleInputPassword1">Telephone Number</label>
                                                                <input type="text" className="form-control" id="exampleInputPassword1"
                                                                    placeholder="0706-857-6214" />
                                                            </div>
                                                        </div>
                                                        <div className="row">
                                                            <div className="form-group col-md-6">
                                                                <label htmlFor="exampleInputPassword1">Height</label>
                                                                <input type="text" className="form-control" id="exampleInputPassword1"
                                                                    placeholder="5.5" />
                                                            </div>
                                                            <div className="form-group col-md-6">
                                                                <label htmlFor="exampleInputEmail1">Profession</label>
                                                                <input type="text" className="form-control" id="exampleInputEmail1"
                                                                    aria-describedby="emailHelp" placeholder="Student" />
                                                            </div>
                                                        </div>
                                                        <div className="row">
                                                            <div className="form-group col-md-6">
                                                                <label htmlFor="exampleInputPassword1">Paasport Number</label>
                                                                <input type="text" className="form-control" id="exampleInputPassword1"
                                                                    placeholder="1234567" />
                                                            </div>
                                                            <div className="form-group col-md-6">
                                                                <label htmlFor="exampleInputEmail1">Date of Issue</label>
                                                                <input type="text" className="form-control" id="exampleInputEmail1"
                                                                    aria-describedby="emailHelp" placeholder="09/06/2020" />
                                                            </div>
                                                        </div>
                                                        <div className="row">
                                                            <div className="form-group col-md-6">
                                                                <label htmlFor="exampleInputPassword1">Date of expiry</label>
                                                                <input type="text" className="form-control" id="exampleInputPassword1"
                                                                    placeholder="09/06/2017" />
                                                            </div>
                                                            <div className="form-group col-md-6">
                                                                <label htmlFor="exampleInputEmail1">Place of Issue</label>
                                                                <input type="text" className="form-control" id="exampleInputEmail1"
                                                                    aria-describedby="emailHelp" placeholder="Lagos" />
                                                            </div>
                                                        </div>
                                                        <div className="row">
                                                            <div className="form-group col-md-6">
                                                                <label htmlFor="exampleInputPassword1">Issuing Government</label>
                                                                <input type="text" className="form-control" id="exampleInputPassword1"
                                                                    placeholder="Nigeria" />
                                                            </div>
                                                            <div className="form-group col-md-6">
                                                                <label htmlFor="exampleInputEmail1">Duration of stay</label>
                                                                <input type="text" className="form-control" id="exampleInputEmail1"
                                                                    aria-describedby="emailHelp" placeholder="2 months" />
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <input type="button" name="next" className="next action-button" value="Next" />
                                                    <input type="button" name="previous" className="previous action-button-previous"
                                                        value="Previous" />
                                                </fieldset>
                                                <fieldset>
                                                    <div className="form-card">
                                                        <div className="row">
                                                            <div className="form-group col-md-6">
                                                                <label htmlFor="exampleInputPassword1">Proposed Travel Date</label>
                                                                <input type="text" className="form-control" id="exampleInputPassword1"
                                                                    placeholder="06 July 2020" />
                                                            </div>
                                                            <div className="form-group col-md-6">
                                                                <label htmlFor="exampleInputEmail1">Mode of Travel to Nigeria</label>
                                                                <input type="text" className="form-control" id="exampleInputEmail1"
                                                                    aria-describedby="emailHelp" placeholder="Air" />
                                                            </div>
                                                        </div>
                                                        <div className="row">
                                                            <div className="form-group col-md-6">
                                                                <label htmlFor="exampleInputPassword1">Money Available for your
                                                        Trip</label>
                                                                <input type="text" className="form-control" id="exampleInputPassword1"
                                                                    placeholder="50,000,000" />
                                                            </div>
                                                            <div className="form-group col-md-6">
                                                                <label htmlFor="exampleInputEmail1">Duration of stay</label>
                                                                <input type="text" className="form-control" id="exampleInputEmail1"
                                                                    aria-describedby="emailHelp" placeholder="" />
                                                            </div>
                                                        </div>
                                                        <div className="row">
                                                            <div className="form-group col-md-6">
                                                                <label htmlFor="exampleInputPassword1">Color of the Eye</label>
                                                                <input type="text" className="form-control" id="exampleInputPassword1"
                                                                    placeholder="Black" />
                                                            </div>
                                                            <div className="form-group col-md-6">
                                                                <label htmlFor="exampleInputEmail1">Color of the Hair</label>
                                                                <input type="text" className="form-control" id="exampleInputEmail1"
                                                                    aria-describedby="emailHelp" placeholder="Black" />
                                                            </div>
                                                        </div>
                                                        <div className="row">
                                                            <div className="form-group col-md-6">
                                                                <label htmlFor="exampleInputPassword1">Money Available for your
                                                        Trip</label>
                                                                <input type="text" className="form-control" id="exampleInputPassword1"
                                                                    placeholder="50,000,000" />
                                                            </div>
                                                            <div className="form-group col-md-6">
                                                                <label htmlFor="exampleInputEmail1">Duration of stay</label>
                                                                <input type="text" className="form-control" id="exampleInputEmail1"
                                                                    aria-describedby="emailHelp" placeholder="" />
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <input type="button" name="next" className="next action-button" value="Submit" />
                                                </fieldset>
                                            </form>
                                        </div>
                                    </div>
                                </div>
                                <div role="tabpanel" id="resource-download" className="tab-pane fade">
                                    <div className="row">
                                        <div className="col-md-12 col-sm-12">
                                            <div className="main-header">
                                                <div className="header-lined">
                                                    <h2>Resource Download</h2>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="jumbotron text-center">
                                        <h1 className="display-6">No Resource Found!</h1>
                                        <p className="lead">You currently do not have any resources to download on your account.</p>
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

EmployerDashboard.propTypes = {
    logoutUser: PropTypes.func.isRequired,
    auth: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
    auth: state.auth,
});

export default connect(
    mapStateToProps,
    { logoutUser }
)(EmployerDashboard);
