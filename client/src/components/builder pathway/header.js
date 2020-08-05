import React, { Component } from 'react'
import { Link } from 'react-router-dom'
// import Footer from '../pages/footer'
import { connect } from 'react-redux'
import { createVitae } from '../../store/actions/vitaeActions'

const initialState = {
    firstName: '',
    lastName: '',
    address: '',
    state: '',
    email: '',
    summary: '',
    jobTitle: '',
    employer: '',
    city: '',
    startDate1: '',
    endDate1: '',
    phoneNumber: '',
    employmentSummary: '',
    schoolName: '',
    degreeName: '',
    startDate2: '',
    endDate2: '',
    educationDescription: '',
    websiteName: '',
    linkName: '',
    firstNameError: "",
    lastNameError: "",
    addressError: "",
    stateError: "",
    emailError: "",
    summaryError: "",
    jobTitleError: "",
    employerError: '',
    cityError: '',
    startDate1Error: '',
    endDate1Error: '',
    employmentSummary: '',
    schoolNameError: '',
    degreeNameError: '',
    startDate2Error: '',
    endDate2Error: '',
    educationDescriptionError: '',
    websiteNameError: '',
    linkNameError: ''
};

class Header extends Component {

    state = initialState;

    handleChange = (e) => {
        this.setState({
            [e.target.id]: e.target.value
        });
    }

    handleValidation() {
        let firstNameError = "";
        let lastNameError = "";
        let emailError = "";
        let addressError = "";
        let stateError = "";
        let phoneNumberError = "";
        let summaryError = "";
        let jobTitleError = "";
        let employerError = "";
        let cityError = "";
        let startDate1Error = "";
        let endDate1Error = "";
        let employmentSummaryError = "";
        let schoolNameError = "";
        let degreeNameError = "";
        let startDate2Error = "";
        let endDate2Error = "";
        let educationDescriptionError = "";
        let websiteNameError = "";
        let linkNameError = "";
        // let passwordError = "";

        if (!this.state.firstName) {
            firstNameError = "First name cannot be blank";
        }

        if (!this.state.lastName) {
            lastNameError = "Last name cannot be blank";
        }

        if (!this.state.address) {
            addressError = "Address cannot be blank";
        }

        if (!this.state.email.includes("@")) {
            emailError = "invalid email";
        }

        if (!this.state.phoneNumber) {
            phoneNumberError = "Phone Number must be inputed";
        }

        if (!this.state.summary) {
            summaryError = "Professional Summary must be included";
        }

        if (!this.state.jobTitle) {
            jobTitleError = "Job Title must be included";
        }

        if (!this.state.employer) {
            employerError = "Employer Name must be included";
        }

        if (!this.state.city) {
            cityError = "City Name must be included";
        }

        if (!this.state.startDate1) {
            startDate1Error = "City Name must be included";
        }

        if (!this.state.endDate1) {
            endDate1Error = "City Name must be included";
        }

        if (!this.state.employmentSummary) {
            employmentSummaryError = "Employement Summary must be included";
        }

        if (!this.state.schoolName) {
            schoolNameError = "Employement Summary must be included";
        }

        if (!this.state.degreeName) {
            degreeNameError = "Degree Name must be included";
        }

        if (!this.state.startDate2) {
            startDate2Error = "Start Date must be included";
        }

        if (!this.state.endDate2) {
            endDate2Error = "End Date must be included";
        }

        if (!this.state.educationDescription) {
            educationDescriptionError = "Description must be included";
        }

        if (!this.state.websiteName) {
            websiteNameError = "Description must be included";
        }

        if (!this.state.linkName) {
            linkNameError = "Description must be included";
        }

        if (emailError || firstNameError || lastNameError || addressError || stateError || phoneNumberError || summaryError || jobTitleError || employerError || cityError || startDate1Error || endDate1Error || employmentSummaryError || schoolNameError || degreeNameError || startDate2Error || endDate2Error || educationDescriptionError || websiteNameError || linkNameError ) {
            this.setState({ emailError, firstNameError, lastNameError, addressError, stateError, phoneNumberError, summaryError, jobTitleError, employerError, cityError, startDate1Error, endDate1Error, employmentSummaryError, schoolNameError, degreeNameError, startDate2Error, endDate2Error, educationDescriptionError, websiteNameError, linkNameError });
            return false;
        }

        return true;
    }

    handleSubmit = (e) => {
        e.preventDefault()

        const isValid = this.handleValidation();
        if (isValid) {
            console.log(this.state);
            // clear form
            this.setState(initialState);
        }
    }
    render() {
        return (
            <div className="">

                {/* <!-- Form starts here --> */}
                <section className="bk-grey">
                    <div className="container-fluid">
                        <div className="row step-x1">
                            <div className="col-md-6 col-sm-12 page-scrollable head-form">
                                <form onSubmit={this.handleSubmit} noValidate>
                                    {/* personal details start here */}
                                    <div className="section-caption">
                                        <h2 className="personal-Details">
                                            <i className="fa fa-edit"></i>
                                            Personal Details</h2>
                                    </div>
                                    <div className="row">
                                        <div className="form-group col-md-6">
                                            <label htmlFor="firstName">First Name</label>
                                            <input type="text" className="form-control" id="firstName"
                                                placeholder="First Name" onChange={this.handleChange} />
                                            <div style={{ fontSize: 12, color: "red" }}>
                                                {this.state.firstNameError}
                                            </div>
                                        </div>
                                        <div className="form-group col-md-6">
                                            <label htmlFor="lastName">Last Name</label>
                                            <input type="text" className="form-control" id="lastName"
                                                placeholder="Last Name" onChange={this.handleChange} />
                                            <div style={{ fontSize: 12, color: "red" }}>
                                                {this.state.lastNameError}
                                            </div>
                                        </div>
                                    </div>
                                    <div className="row">
                                        <div className="form-group col-md-6">
                                            <label htmlFor="address">Address</label>
                                            <input type="text" className="form-control" id="address"
                                                placeholder="Home Address" onChange={this.handleChange} />
                                            <div style={{ fontSize: 12, color: "red" }}>
                                                {this.state.addressError}
                                            </div>
                                        </div>
                                        <div className="form-group col-md-6">
                                            <label htmlFor="state">State</label>
                                            <input type="text" className="form-control" id="state"
                                                placeholder="City, State" onChange={this.handleChange} />
                                            <div style={{ fontSize: 12, color: "red" }}>
                                                {this.state.stateError}
                                            </div>
                                        </div>
                                    </div>
                                    <div className="row">
                                        <div className="form-group col-md-6">
                                            <label htmlFor="exampleInputEmail1">Phone Number</label>
                                            <input type="text" className="form-control" id="phoneNumber"
                                                placeholder="Phone Number" onChange={this.handleChange} />
                                            <div style={{ fontSize: 12, color: "red" }}>
                                                {this.state.phoneNumberError}
                                            </div>
                                        </div>
                                        <div className="form-group col-md-6">
                                            <label htmlFor="exampleInputEmail1">Email Address</label>
                                            <input type="text" className="form-control" id="email"
                                                placeholder="Email Address" onChange={this.handleChange} />
                                            <div style={{ fontSize: 12, color: "red" }}>
                                                {this.state.emailError}
                                            </div>
                                        </div>
                                    </div>
                                    {/* personal details ends here */}
                                    {/* professional summary */}
                                    <div className="section-caption pt-4">
                                        <h2 className="personal-Details yellow-header">
                                            <i className="fa fa-user"></i>
                                            Professional Summary</h2>
                                    </div>
                                    <div className="row">
                                        <div className="form-group col-md-12">
                                            <label htmlFor="exampleInputEmail1">Include 2-3 clear sentences about your overall experience</label>
                                            <textarea class="form-control" id="summary" onChange={this.handleChange} placeholder="e.g. Passionate about software development for 8+ years and a track 
record of...." rows="3"></textarea>
                                            <div style={{ fontSize: 12, color: "red" }}>
                                                {this.state.summaryError}
                                            </div>
                                        </div>
                                    </div>
                                    {/* professional summary */}
                                    {/* professional summary ends */}
                                    {/* employment history start */}
                                    <div className="section-caption pt-4">
                                        <h2 className="personal-Details green-header">
                                            <i className="fa fa-briefcase"></i>
                                            Employment History</h2>
                                    </div>
                                    <div className="row">
                                        <div className="form-group col-md-6">
                                            <label htmlFor="jobTitle">Job Title</label>
                                            <input type="text" className="form-control" id="jobTitle"
                                                placeholder="Job Title" onChange={this.handleChange} />
                                            <div style={{ fontSize: 12, color: "red" }}>
                                                {this.state.jobTitleError}
                                            </div>
                                        </div>
                                        <div className="form-group col-md-6">
                                            <label htmlFor="employer">Employer</label>
                                            <input type="text" className="form-control" id="employer"
                                                placeholder="Company Name" onChange={this.handleChange} />
                                            <div style={{ fontSize: 12, color: "red" }}>
                                                {this.state.employerError}
                                            </div>
                                        </div>
                                    </div>
                                    <div className="row">
                                        <div className="form-group col-md-6 ">
                                            <div className="row">
                                                <div className="form-group col-md-6">
                                                    <label htmlFor="startDate1">Start Date</label>
                                                <input type="text" className="form-control" id="startDate1"
                                                    placeholder="02 July" onChange={this.handleChange} />
                                                <div style={{ fontSize: 12, color: "red" }}>
                                                    {this.state.startDate1Error}
                                                </div>
                                            </div>
                                                <div className="form-group col-md-6">
                                                    <label htmlFor="endDate1">End Date</label>
                                                <input type="text" className="form-control" id="endDate1"
                                                    placeholder="02 July" onChange={this.handleChange} />
                                                <div style={{ fontSize: 12, color: "red" }}>
                                                        {this.state.endDate1Error}
                                                </div>
                                            </div>
                                            </div>
                                            </div>
                                        <div className="form-group col-md-6">
                                            <label htmlFor="exampleInputEmail1">City</label>
                                            <input type="text" className="form-control" id="city"
                                                placeholder="City, Country" onChange={this.handleChange} />
                                            <div style={{ fontSize: 12, color: "red" }}>
                                                {this.state.cityError}
                                            </div>
                                        </div>
                                    </div>
                                    <div className="row">
                                        <div className="form-group col-md-12">
                                            <label htmlFor="exampleInputEmail1">Description</label>
                                            <textarea class="form-control" onChange={this.handleChange}  id="employmentSummary" placeholder="e.g. Passionate about software development for 8+ years and a track 
record of...." rows="3"></textarea>
                                            <div style={{ fontSize: 12, color: "red" }}>
                                                {this.state.employmentSummaryError}
                                            </div>
                                        </div>
                                    </div>
                                    {/* employment history ends */}
                                    {/* education history starts */}
                                    <div className="section-caption pt-4">
                                        <h2 className="personal-Details">
                                            <i className="fa fa-book"></i>
                                            Education History</h2>
                                    </div>
                                    <div className="row">
                                        <div className="form-group col-md-6">
                                            <label htmlFor="schoolName">School Name</label>
                                            <input type="text" className="form-control" id="schoolName"
                                                placeholder="Name" onChange={this.handleChange} />
                                            <div style={{ fontSize: 12, color: "red" }}>
                                                {this.state.schoolNameError}
                                            </div>
                                        </div>
                                        <div className="form-group col-md-6">
                                            <label htmlFor="degreeName">Degree</label>
                                            <input type="text" className="form-control" id="degreeName"
                                                placeholder="Msc" onChange={this.handleChange} />
                                            <div style={{ fontSize: 12, color: "red" }}>
                                                {this.state.degreeNameError}
                                            </div>
                                        </div>
                                    </div>
                                    <div className="row">
                                        <div className="form-group col-md-6 ">
                                                <div className="row">
                                                    <div className="form-group col-md-6">
                                                    <label htmlFor="startDate2">Start Date</label>
                                                        <input type="text" className="form-control" id="startDate2"
                                                            placeholder="02 July" onChange={this.handleChange} />
                                                        <div style={{ fontSize: 12, color: "red" }}>
                                                            {this.state.startDate2Error}
                                                        </div>
                                                    </div>
                                                    <div className="form-group col-md-6">
                                                    <label htmlFor="endDate2">End Date</label>
                                                        <input type="text" className="form-control" id="endDate2"
                                                            placeholder="02 July" onChange={this.handleChange} />
                                                        <div style={{ fontSize: 12, color: "red" }}>
                                                                {this.state.endDate2Error}
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        <div className="form-group col-md-6">
                                            <label htmlFor="exampleInputEmail1">City</label>
                                            <input type="text" className="form-control" id="cityEdu"
                                                placeholder="City, Country" onChange={this.handleChange} />
                                            <div style={{ fontSize: 12, color: "red" }}>
                                                {this.state.cityEduError}
                                            </div>
                                        </div>
                                    </div>
                                    <div className="row">
                                        <div className="form-group col-md-12">
                                            <label htmlFor="educationDescription">Description</label>
                                            <textarea class="form-control" id="educationDescription" placeholder="e.g. Passionate about software development for 8+ years and a track 
record of...." rows="3"></textarea>
                                            <div style={{ fontSize: 12, color: "red" }}>
                                                {this.state.educationDescriptionError}
                                            </div>
                                        </div>
                                    </div>
                                    {/* education history ends */}
                                    {/* website links starts */}
                                    <div className="section-caption pt-4">
                                        <h2 className="personal-Details yellow-header">
                                            <i className="fa fa-globe"></i>
                                            Website &amp; Social Links</h2>
                                    </div>
                                    {/* website links ends */}
                                    <div className="row">
                                        <div className="form-group col-md-6">
                                            <label htmlFor="websiteName">Name</label>
                                            <input type="text" className="form-control" id="websiteName"
                                                placeholder="" onChange={this.handleChange} />
                                            <div style={{ fontSize: 12, color: "red" }}>
                                                {this.state.websiteNameError}
                                            </div>
                                        </div>
                                        <div className="form-group col-md-6">
                                            <label htmlFor="linkName">Link</label>
                                            <input type="text" className="form-control" id="linkName"
                                                placeholder="" onChange={this.handleChange} />
                                            <div style={{ fontSize: 12, color: "red" }}>
                                                {this.state.linkNameError}
                                            </div>
                                        </div>
                                    </div>

                                    <div className="header-buttons">
                                        <button type="submit" className="btn btn-next">Submit<i className="fa fa-angle-right"></i></button>
                                    </div>
                                </form>

                            </div>
                            <div className="col-md-6 col-sm-12 sidebar-fixed">
                                <div className="resume-options">
                                    <button className="btn btn-primary btn-download">Download PDF</button>
                                    <button className="btn btn-primary btn-dot">...</button>
                                    <Link to="/template" className="select-template pull-right">Select a template</Link>
                                </div>
                                <div className="form-img">
                                    {/* header starts here */}
                                    <div className="personal-details text-center">
                                        <h2>{this.state.firstName} {this.state.lastName}</h2>
                                        <p>{this.state.address} {this.state.state}</p>
                                        <p>{this.state.phoneNumber}  {this.state.email}</p>
                                    </div>
                                    {/* header ends here */}
                                    {/* professional summary starts here */}
                                    <div className="output-proffesional-summary pt-3">
                                        <p>{this.state.summary}</p>
                                    </div>
                                    {/* professional summary ends here */}
                                    {/* Employment summary starts here */}
                                    <div className="employment-history pt-3">
                                        <p>
                                            <span className="text-left"> {this.state.jobTitle} {this.state.employer} {this.state.city} </span>
                                            <span className="pull-right"> {this.state.startDate1} {this.state.endDate1} </span>
                                        </p>
                                        <ul>
                                            <li>{this.state.employmentSummary}</li>
                                        </ul>
                                    </div>
                                    {/* Employment summary ends here */}
                                    {/* Education summary starts here */}

                                    {/* Education summary ends here */}
                                    <div className="preview">
                                    </div>
                                </div>
                                
                            </div>
                        </div>
                    </div>
                </section>
                {/* <!-- Form ends here-- > */}
                {/* <Footer /> */}
            </div >
        )
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        createVitae: (vitae) => dispatch(createVitae(vitae))
    }
}

export default connect(null, mapDispatchToProps)(Header)


