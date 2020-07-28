import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import Footer from '../pages/footer'

const initialState = {
    firstName: '',
    lastName: '',
    age: '',
    address: '',
    state: '',
    email: '',
    phoneNumber: '',
    firstNameError: "",
    lastNameError: "",
    addressError: "",
    stateError: "",
    emailError: "",
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

        if (emailError || firstNameError || lastNameError || addressError || stateError || phoneNumberError) {
            this.setState({ emailError, firstNameError, lastNameError, addressError, stateError, phoneNumberError });
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
                    <div className="container">
                        <div className="row">
                            <div className="col-md-8 head-form">
                                <form onSubmit={this.handleSubmit} noValidate>
                                    {/* personal details start here */}
                                    <div className="section-caption">
                                        <h2 className="personal-Details">
                                            <i className="fa fa-edit"></i>
                                            Personal Details</h2>
                                    </div>
                                    <div className="row">
                                        <div className="form-group col-md-6">
                                            <label htmlFor="exampleInputEmail1">First Name</label>
                                            <input type="text" className="form-control" id="firstName"
                                                placeholder="First Name" onChange={this.handleChange} />
                                            <div style={{ fontSize: 12, color: "red" }}>
                                                {this.state.firstNameError}
                                            </div>
                                        </div>
                                        <div className="form-group col-md-6">
                                            <label htmlFor="exampleInputEmail1">Last Name</label>
                                            <input type="text" className="form-control" id="lastName"
                                                placeholder="Last Name" onChange={this.handleChange} />
                                            <div style={{ fontSize: 12, color: "red" }}>
                                                {this.state.lastNameError}
                                            </div>
                                        </div>
                                    </div>
                                    <div className="row">
                                    </div>
                                    <div className="row">
                                        <div className="form-group col-md-6">
                                            <label htmlFor="exampleInputEmail1">Address</label>
                                            <input type="text" className="form-control" id="address"
                                                placeholder="Home Address" onChange={this.handleChange} />
                                            <div style={{ fontSize: 12, color: "red" }}>
                                                {this.state.addressError}
                                            </div>
                                        </div>
                                        <div className="form-group col-md-6">
                                            <label htmlFor="exampleInputEmail1">State</label>
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
                                    <div className="section-caption pt-4">
                                        <h2 className="personal-Details yellow-header">
                                            <i className="fa fa-user"></i>
                                            Professional Summary</h2>
                                    </div>
                                    <div className="row">
                                        <div className="form-group col-md-12">
                                            <label htmlFor="exampleInputEmail1">Include 2-3 clear sentences about your overall experience</label>
                                            <textarea class="form-control" id="exampleFormControlTextarea1" placeholder="e.g. Passionate about software development for 8+ years and a track 
record of...." rows="3"></textarea>
                                            <div style={{ fontSize: 12, color: "red" }}>
                                                {this.state.addressError}
                                            </div>
                                        </div>
                                    </div>
                                    <div className="section-caption pt-4">
                                        <h2 className="personal-Details green-header">
                                            <i className="fa fa-briefcase"></i>
                                            Employment History</h2>
                                    </div>
                                    <div className="row">
                                        <div className="form-group col-md-6">
                                            <label htmlFor="exampleInputEmail1">Job Title</label>
                                            <input type="text" className="form-control" id="firstName"
                                                placeholder="Job Title" onChange={this.handleChange} />
                                            <div style={{ fontSize: 12, color: "red" }}>
                                                {this.state.firstNameError}
                                            </div>
                                        </div>
                                        <div className="form-group col-md-6">
                                            <label htmlFor="exampleInputEmail1">Employer</label>
                                            <input type="text" className="form-control" id="lastName"
                                                placeholder="Company Name" onChange={this.handleChange} />
                                            <div style={{ fontSize: 12, color: "red" }}>
                                                {this.state.lastNameError}
                                            </div>
                                        </div>
                                    </div>
                                    <div className="row">
                                        <div className="form-group col-md-6 ">
                                            <div className="row">
                                                <div className="form-group col-md-6">
                                                <label htmlFor="exampleInputEmail1">Start Date</label>
                                                <input type="text" className="form-control" id="firstName"
                                                    placeholder="02 July" onChange={this.handleChange} />
                                                <div style={{ fontSize: 12, color: "red" }}>
                                                    {this.state.firstNameError}
                                                </div>
                                            </div>
                                                <div className="form-group col-md-6">
                                                <label htmlFor="exampleInputEmail1">End Date</label>
                                                <input type="text" className="form-control" id="firstName"
                                                    placeholder="02 July" onChange={this.handleChange} />
                                                <div style={{ fontSize: 12, color: "red" }}>
                                                    {this.state.firstNameError}
                                                </div>
                                            </div>
                                            </div>
                                            </div>
                                        <div className="form-group col-md-6">
                                            <label htmlFor="exampleInputEmail1">City</label>
                                            <input type="text" className="form-control" id="lastName"
                                                placeholder="City, Country" onChange={this.handleChange} />
                                            <div style={{ fontSize: 12, color: "red" }}>
                                                {this.state.lastNameError}
                                            </div>
                                        </div>
                                    </div>
                                    <div className="row">
                                        <div className="form-group col-md-12">
                                            <label htmlFor="exampleInputEmail1">Description</label>
                                            <textarea class="form-control" id="exampleFormControlTextarea1" placeholder="e.g. Passionate about software development for 8+ years and a track 
record of...." rows="3"></textarea>
                                            <div style={{ fontSize: 12, color: "red" }}>
                                                {this.state.addressError}
                                            </div>
                                        </div>
                                    </div>
                                    <div className="section-caption pt-4">
                                        <h2 className="personal-Details">
                                            <i className="fa fa-book"></i>
                                            Education History</h2>
                                    </div>
                                    <div className="row">
                                        <div className="form-group col-md-6">
                                            <label htmlFor="exampleInputEmail1">School Name</label>
                                            <input type="text" className="form-control" id="firstName"
                                                placeholder="Name" onChange={this.handleChange} />
                                            <div style={{ fontSize: 12, color: "red" }}>
                                                {this.state.firstNameError}
                                            </div>
                                        </div>
                                        <div className="form-group col-md-6">
                                            <label htmlFor="exampleInputEmail1">Degree</label>
                                            <input type="text" className="form-control" id="lastName"
                                                placeholder="Msc" onChange={this.handleChange} />
                                            <div style={{ fontSize: 12, color: "red" }}>
                                                {this.state.lastNameError}
                                            </div>
                                        </div>
                                    </div>
                                    <div className="row">
                                        <div className="form-group col-md-6 ">
                                            <div className="row">
                                                <div className="form-group col-md-6">
                                                <label htmlFor="exampleInputEmail1">Start Date</label>
                                                <input type="text" className="form-control" id="firstName"
                                                    placeholder="02 July" onChange={this.handleChange} />
                                                <div style={{ fontSize: 12, color: "red" }}>
                                                    {this.state.firstNameError}
                                                </div>
                                            </div>
                                                <div className="form-group col-md-6">
                                                <label htmlFor="exampleInputEmail1">End Date</label>
                                                <input type="text" className="form-control" id="firstName"
                                                    placeholder="02 July" onChange={this.handleChange} />
                                                <div style={{ fontSize: 12, color: "red" }}>
                                                    {this.state.firstNameError}
                                                </div>
                                            </div>
                                            </div>
                                            </div>
                                        <div className="form-group col-md-6">
                                            <label htmlFor="exampleInputEmail1">City</label>
                                            <input type="text" className="form-control" id="lastName"
                                                placeholder="City, Country" onChange={this.handleChange} />
                                            <div style={{ fontSize: 12, color: "red" }}>
                                                {this.state.lastNameError}
                                            </div>
                                        </div>
                                    </div>
                                    <div className="row">
                                        <div className="form-group col-md-12">
                                            <label htmlFor="exampleInputEmail1">Description</label>
                                            <textarea class="form-control" id="exampleFormControlTextarea1" placeholder="e.g. Passionate about software development for 8+ years and a track 
record of...." rows="3"></textarea>
                                            <div style={{ fontSize: 12, color: "red" }}>
                                                {this.state.addressError}
                                            </div>
                                        </div>
                                    </div>
                                    <div className="section-caption pt-4">
                                        <h2 className="personal-Details yellow-header">
                                            <i className="fa fa-globe"></i>
                                            Website &amp; Social Links</h2>
                                    </div>
                                    <div className="row">
                                        <div className="form-group col-md-6">
                                            <label htmlFor="exampleInputEmail1">Name</label>
                                            <input type="text" className="form-control" id="firstName"
                                                placeholder="" onChange={this.handleChange} />
                                            <div style={{ fontSize: 12, color: "red" }}>
                                                {this.state.firstNameError}
                                            </div>
                                        </div>
                                        <div className="form-group col-md-6">
                                            <label htmlFor="exampleInputEmail1">Link</label>
                                            <input type="text" className="form-control" id="lastName"
                                                placeholder="" onChange={this.handleChange} />
                                            <div style={{ fontSize: 12, color: "red" }}>
                                                {this.state.lastNameError}
                                            </div>
                                        </div>
                                    </div>

                                    <div className="header-buttons">
                                        <Link to="/work-experience" type="submit" className="btn btn-next">Submit<i className="fa fa-angle-right"></i></Link>
                                    </div>
                                </form>

                            </div>
                            <div className="col-md-4 form-img">
                                <div className="personal-details text-center">
                                    <h2>{this.state.firstName} {this.state.lastName}</h2>
                                    <p>{this.state.address} {this.state.state}</p>
                                    <p>{this.state.phoneNumber} | {this.state.email}</p>
                                </div>
                                <div className="preview">
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                {/* <!-- Form ends here-- > */}
                <Footer />
            </div >
        )
    }
}

export default Header


