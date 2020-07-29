import React, { Component } from 'react'
import { Link } from 'react-router-dom'

const initialState = {
    fullName: '',
    address: '',
    state: '',
    email: '',
    phoneNumber: '',
    fullNameError: "",
    addressError: "",
    stateError: "",
    emailError: "",
    phoneNumberError: ""
};

class Specific extends Component {

    state = initialState;

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

    render() {
        return (
            <div className="">
                {/* <!-- body part here --> */}
                <section className="bk-dotted pr-5 pl-4">
                    <div className="container-fluid">
                        <div className="row step-x1 pt-5 pb-5">
                            {/* <div className="col-md-6 db-page pt-5"> */}
                            <div className="col-md-6 head-form">
                                <form onSubmit={this.handleSubmit} noValidate>
                                    {/* personal details start here */}
                                    <div className="section-caption">
                                        <h2 className="personal-Details">
                                            <i className="fa fa-edit"></i>
                                            Personal Details</h2>
                                    </div>
                                    <div className="row">
                                        <div className="form-group col-md-6">
                                            <label htmlFor="exampleInputEmail1">Full Name</label>
                                            <input type="text" className="form-control" id="fullName"
                                                placeholder="" onChange={this.handleChange} />
                                            <div style={{ fontSize: 12, color: "red" }}>
                                                {this.state.fullNameError}
                                            </div>
                                        </div>
                                        <div className="form-group col-md-6">
                                            <label htmlFor="exampleInputEmail1">Job Title</label>
                                            <input type="text" className="form-control" id="jobTitle"
                                                placeholder="" onChange={this.handleChange} />
                                            <div style={{ fontSize: 12, color: "red" }}>
                                                {this.state.jobTitleError}
                                            </div>
                                        </div>
                                    </div>
                                    <div className="row">
                                    </div>
                                    <div className="row">
                                        <div className="form-group col-md-6">
                                            <label htmlFor="exampleInputEmail1">Address</label>
                                            <input type="text" className="form-control" id="address"
                                                placeholder="" onChange={this.handleChange} />
                                            <div style={{ fontSize: 12, color: "red" }}>
                                                {this.state.addressError}
                                            </div>
                                        </div>
                                        <div className="form-group col-md-6">
                                            <label htmlFor="exampleInputEmail1">State</label>
                                            <input type="text" className="form-control" id="state"
                                                placeholder="" onChange={this.handleChange} />
                                            <div style={{ fontSize: 12, color: "red" }}>
                                                {this.state.stateError}
                                            </div>
                                        </div>
                                    </div>
                                    <div className="row">
                                        <div className="form-group col-md-6">
                                            <label htmlFor="exampleInputEmail1">Phone Number</label>
                                            <input type="text" className="form-control" id="phoneNumber"
                                                placeholder="" onChange={this.handleChange} />
                                            <div style={{ fontSize: 12, color: "red" }}>
                                                {this.state.phoneNumberError}
                                            </div>
                                        </div>
                                        <div className="form-group col-md-6">
                                            <label htmlFor="exampleInputEmail1">Email Address</label>
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
                                            <label htmlFor="exampleInputEmail1">Company Name</label>
                                            <input type="text" className="form-control" id="phoneNumber"
                                                placeholder="" onChange={this.handleChange} />
                                            <div style={{ fontSize: 12, color: "red" }}>
                                                {this.state.phoneNumberError}
                                            </div>
                                        </div>
                                        <div className="form-group col-md-6">
                                            <label htmlFor="exampleInputEmail1">Hiring Manager name</label>
                                            <input type="text" className="form-control" id="email"
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
                                            <label htmlFor="exampleInputEmail1">3–4 paragraphs explaining why you're the perfect candidate for a specific job</label>
                                            <textarea class="form-control" id="summary" onChange={this.handleChange} placeholder="e.g. Passionate about software development for 8+ years and a track 
record of...." rows="3"></textarea>
                                            <div style={{ fontSize: 12, color: "red" }}>
                                                {this.state.summaryError}
                                            </div>
                                        </div>
                                    </div>
                                    {/* Letter details ends here */}
                                </form>
                            </div>
                            <div className="col-md-6 form-img">

                            </div>
                        </div>

                    </div>
                </section>

                {/* <!-- body ends here --> */}
            </div>
        )
    }
}

export default Specific


