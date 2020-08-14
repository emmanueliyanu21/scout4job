import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import { createCover } from '../../store/actions/coverActions'
import axios from 'axios';

class Specific extends Component {

    state = {
        fullName: '',
        jobTitle: '',
        address: '',
        state: '',
        email: '',
        phoneNumber: '',
        managerName: '',
        companyName: '',
        summary: '',
        fullNameError: "",
        jobTitleError: "",
        addressError: "",
        stateError: "",
        emailError: "",
        phoneNumberError: "",
        summaryError: ""
    };

    handleChange = (e) => {
        this.setState({
            [e.target.id]: e.target.value
        });
    }

    handleValidation() {
        let fullNameError = "";
        let emailError = "";
        let addressError = "";
        let stateError = "";
        let phoneNumberError = "";

        if (!this.state.fullName) {
            fullNameError = "Full name cannot be blank";
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

        if (emailError || fullNameError || addressError || stateError || phoneNumberError) {
            this.setState({ emailError, fullNameError, addressError, stateError, phoneNumberError });
            return false;
        }

        return true;

    }

    // handleSubmit = (e) => {
    //     e.preventDefault()

    //     const isValid = this.handleValidation();
    //     if (isValid) {
    //         // console.log(this.state);
    //         this.props.createCover(this.state)
    //         // clear form
    //         this.setState(initialState);
    //     }
    // }

    handleSubmit = (e) => {
        e.preventDefault()

        axios({
            method: 'post',
            url: 'http://localhost:8000/api/covers',
            data: {
                fullName: this.state.fullName,
                address: this.state.address,
                state: this.state.state,
                phoneNumber: this.state.phoneNumber,
                email: this.state.email,
                summary: this.state.summary,
                managerName: this.state.managerName,
                companyName: this.state.companyName,
            }
        });
        this.setState({ firstName: '' })

    }


    render() {
        return (
            <div className="">
                {/* <!-- body part here --> */}
                <section className="bk-dotted pr-5 pl-4">
                    <div className="grid-container">
                        <div className="row step-x1  pb-5">
                            {/* <div className="col-md-6 db-page pt-5"> */}
                            <div className="col-md-6 page-scrollable head-form">
                                <form onSubmit={this.handleSubmit} noValidate>
                                    {/* personal details start here */}
                                    <div className="section-caption">
                                        <h2 className="personal-Details">
                                            <i className="fa fa-edit"></i>
                                            Personal Details</h2>
                                    </div>
                                    <div className="row">
                                        <div className="form-group col-md-6">
                                            <label htmlFor="fullName">Full Name</label>
                                            <input type="text" className="form-control" id="fullName"
                                                placeholder="" onChange={this.handleChange} />
                                            <div style={{ fontSize: 12, color: "red" }}>
                                                {this.state.fullNameError}
                                            </div>
                                        </div>
                                        <div className="form-group col-md-6">
                                            <label htmlFor="jobTitle">Job Title</label>
                                            <input type="text" className="form-control" id="jobTitle"
                                                placeholder="" onChange={this.handleChange} />
                                            <div style={{ fontSize: 12, color: "red" }}>
                                                {this.state.jobTitleError}
                                            </div>
                                        </div>
                                    </div>
                                    <div className="row">
                                        <div className="form-group col-md-6">
                                            <label htmlFor="address">Address</label>
                                            <input type="text" className="form-control" id="address"
                                                placeholder="" onChange={this.handleChange} />
                                            <div style={{ fontSize: 12, color: "red" }}>
                                                {this.state.addressError}
                                            </div>
                                        </div>
                                        <div className="form-group col-md-6">
                                            <label htmlFor="state">State</label>
                                            <input type="text" className="form-control" id="state"
                                                placeholder="" onChange={this.handleChange} />
                                            <div style={{ fontSize: 12, color: "red" }}>
                                                {this.state.stateError}
                                            </div>
                                        </div>
                                    </div>
                                    <div className="row">
                                        <div className="form-group col-md-6">
                                            <label htmlFor="phoneNumber">Phone Number</label>
                                            <input type="text" className="form-control" id="phoneNumber"
                                                placeholder="" onChange={this.handleChange} />
                                            <div style={{ fontSize: 12, color: "red" }}>
                                                {this.state.phoneNumberError}
                                            </div>
                                        </div>
                                        <div className="form-group col-md-6">
                                            <label htmlFor="email">Email Address</label>
                                            <input type="text" className="form-control" id="email"
                                                placeholder="" onChange={this.handleChange} />
                                            <div style={{ fontSize: 12, color: "red" }}>
                                                {this.state.emailError}
                                            </div>
                                        </div>
                                    </div>
                                    {/* personal details ends here */}
                                    {/* Employer details starts here */}
                                    <div className="section-caption pt-4">
                                        <h2 className="personal-Details yellow-header">
                                            <i className="fa fa-user"></i>
                                            Employer Details</h2>
                                    </div>
                                    <div className="row">
                                        <div className="form-group col-md-6">
                                            <label htmlFor="phoneNumber">Company Name</label>
                                            <input type="text" className="form-control" id="companyName"
                                                placeholder="" onChange={this.handleChange} />
                                            <div style={{ fontSize: 12, color: "red" }}>
                                                {this.state.companyNameError}
                                            </div>
                                        </div>
                                        <div className="form-group col-md-6">
                                            <label htmlFor="email">Hiring Manager name</label>
                                            <input type="text" className="form-control" id="managerName"
                                                placeholder="" onChange={this.handleChange} />
                                            <div style={{ fontSize: 12, color: "red" }}>
                                                {this.state.emailError}
                                            </div>
                                        </div>
                                    </div>
                                    {/* Employer details ends here */}
                                    {/* Letter Details starts here */}
                                    <div className="section-caption pt-4">
                                        <h2 className="personal-Details green-header">
                                            <i className="fa fa-book"></i>
                                            Letter Details</h2>
                                    </div>
                                    <div className="row">
                                        <div className="form-group col-md-12">
                                            <label htmlFor="summary">3–4 paragraphs explaining why you're the perfect candidate for a specific job</label>
                                            <textarea className="form-control" id="summary" onChange={this.handleChange} placeholder="e.g. Passionate about software development for 8+ years and a track 
record of...." rows="3"></textarea>
                                            <div style={{ fontSize: 12, color: "red" }}>
                                                {this.state.summaryError}
                                            </div>
                                        </div>
                                    </div>
                                    {/* Letter details ends here */}

                                    <div className="header-buttons">
                                        <button type="submit" className="btn btn-next">Submit<i className="fa fa-angle-right"></i></button>
                                    </div>
                                    
                                </form>
                            </div>
                            <div className="col-md-6 sidebar-fixed">
                                {/* <div className="resume-options">
                                    <button className="btn btn-primary btn-download">Download PDF</button>
                                    <button className="btn btn-primary btn-dot">...</button>
                                    <Link to="/template" className="select-template pull-right">Select a template</Link>
                                </div> */}
                                <div className="form-img cover-letter">
                                    <div className="personal-details text-center">
                                        <h2>{this.state.fullName}</h2>
                                        <p>{this.state.jobTitle}</p>
                                        <p>{this.state.address} {this.state.state}</p>
                                    </div>
                                    <div className="phone-Email-section pt-3">
                                            <span className="text-left">{this.state.phoneNumber} </span>
                                            <span className="pull-right">{this.state.email}</span>
                                       
                                    </div>
                                    <div className="pt-3">
                                        <h2>{this.state.managerName}</h2>
                                        <p>{this.state.companyName}</p>
                                    </div>
                                    <div className="cover-body pt-5">
                                        <p>{this.state.summary}</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* <!-- body ends here --> */}
            </div>
        )
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        createCover: (cover) => dispatch(createCover(cover))
    }
}

export default connect(null, mapDispatchToProps)(Specific)


