import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import Footer from '../pages/footer'

const initialState = {
    firstName: '',
    middleName: '',
    lastName: '',
    age: '',
    address: '',
    state: '',
    email: '',
    phoneNumber: '',
    firstNameError: "",
    middleNameError: "",
    lastNameError: "",
    ageError: "",
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
        let middleNameError = "";
        let ageError = "";
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

        if (!this.state.middleName) {
            middleNameError = "Middle name cannot be blank";
        }

        if (!this.state.address) {
            addressError = "Address cannot be blank";
        }

        if (!this.state.age) {
            ageError = "Age has to be inputed";
        }

        if (!this.state.state) {
            stateError = "Age has to be inputed";
        }

        if (!this.state.email.includes("@")) {
            emailError = "invalid email";
        }

        if (!this.state.phoneNumber) {
            phoneNumberError = "Phone Number must be inputed";
        }


        if (emailError || firstNameError || lastNameError || middleNameError || ageError || addressError || stateError || phoneNumberError) {
            this.setState({ emailError, firstNameError, lastNameError, middleNameError, ageError, addressError, stateError, phoneNumberError });
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
                <section className="bk-grey">
                    <div className="container">
                        <div className="row">
                            <div className="col-md-8">
                                <ul className="ul-headers">
                                    <li className="ul-h1">
                                        <i className="fa fa-edit"></i>
                                        <span>1</span>
                                    </li>
                                    <li className="ul-h1">
                                        <i className="fa fa-suitcase"></i>
                                        <span>2</span>
                                    </li>
                                    <li className="ul-h1">
                                        <i className="fa fa-suitcase x1"></i>
                                        <span>3</span>
                                    </li>
                                    <li className="ul-h1">
                                        <i className="fa fa-suitcase x2"></i>
                                        <span>4</span>
                                    </li>
                                    <li className="ul-h1">
                                        <i className="fa fa-suitcase"></i>
                                        <span>5</span>
                                    </li>
                                </ul>
                            </div>
                            <div className="col-md-4 txt-header">
                                <Link to="" className="btn btn-headers">Headers</Link>
                            </div>
                        </div>
                    </div>
                </section>
                {/* <!-- Form starts here --> */}
                <section className="bk-grey">
                    <div className="container">
                        <div className="row">
                            <div className="col-md-8 head-form">
                                <form onSubmit={this.handleSubmit}>
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
                                            <label htmlFor="exampleInputEmail1">Middle Name</label>
                                            <input type="text" className="form-control" id="middleName"
                                                placeholder="Middle Name" onChange={this.handleChange} />
                                            <div style={{ fontSize: 12, color: "red" }}>
                                                {this.state.middleNameError}
                                            </div>
                                        </div>
                                    </div>
                                    <div className="row">
                                        <div className="form-group col-md-6">
                                            <label htmlFor="exampleInputEmail1">Last Name</label>
                                            <input type="text" className="form-control" id="lastName"
                                                placeholder="Last Name" onChange={this.handleChange} />
                                            <div style={{ fontSize: 12, color: "red" }}>
                                                {this.state.lastNameError}
                                            </div>
                                        </div>

                                        <div className="form-group col-md-6">
                                            <label htmlFor="exampleInputEmail1">Age</label>
                                            <input type="text" className="form-control" id="age"
                                                aria-describedby="emailHelp" placeholder="Age" onChange={this.handleChange} />
                                            <div style={{ fontSize: 12, color: "red" }}>
                                                {this.state.ageError}
                                            </div>
                                        </div>
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
                                            <label htmlFor="exampleInputEmail1">Email Address</label>
                                            <input type="text" className="form-control" id="email"
                                                placeholder="Email Address" onChange={this.handleChange} />
                                            <div style={{ fontSize: 12, color: "red" }}>
                                                {this.state.emailError}
                                            </div>
                                        </div>
                                        <div className="form-group col-md-6">
                                            <label htmlFor="exampleInputEmail1">Phone Number</label>
                                            <input type="text" className="form-control" id="phoneNumber"
                                                placeholder="Phone Number" onChange={this.handleChange} />
                                            <div style={{ fontSize: 12, color: "red" }}>
                                                {this.state.phoneNumberError}
                                            </div>
                                        </div>
                                    </div>
                                    <div className="row">
                                        <div className="col-md-12 form-txt">
                                            <button type="submit" className="btn btn-submit">submit</button>
                                            <h2> <i className="fa fa-plus"></i> What’s the best way for employers to contact you?</h2>
                                            <h2> <i className="fa fa-plus"></i> We suggest including an email and phone number</h2>
                                        </div>
                                    </div>

                                    <div className="header-buttons">
                                        <Link to="/start" className="btn btn-back">
                                            <i className="fa fa-angle-left"></i> Back</Link>
                                        <Link to="/work-experience" className="btn btn-next">Next<i className="fa fa-angle-right"></i></Link>
                                    </div>
                                </form>
                            </div>
                            <div className="col-md-4 form-img">
                                <img src="../images/cv.jpg" alt="" className="img-responsive" />
                                <div className="preview">
                                    <Link to="" className="btn btn-preview"><i className="fa fa-eye"></i> Preview</Link>
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


