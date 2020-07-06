import React, { Component } from 'react'
import { Link } from 'react-router-dom'

const initialState = {
    schoolName: '',
    schoolLocation: '',
    degreeName: '',
    state: '',
    address: '',
    state: '',
    startDate: '',
    gradDate: '',
    schoolNameError: "",
    schoolLocationError: "",
    degreeNameError: "",
    stateError: "",
    addressError: "",
    startError: "",
    startDateError: "",
    gradDateError: ""
};

class Education extends Component {

    state = initialState;

    handleChange = (e) => {
        this.setState({
            [e.target.id]: e.target.value
        });
    }

    handleValidation() {
        let schoolNameError = "";
        let schoolLocationError = "";
        let degreeNameError = "";
        let stateError = "";
        let addressError = "";
        let startError = "";
        let startDateError = "";
        let gradDateError = "";

        if (!this.state.schoolName) {
            schoolNameError = "School name cannot be blank";
        }

        if (!this.state.schoolLocation) {
            schoolLocationError = "School Location cannot be blank";
        }

        if (!this.state.degreeName) {
            degreeNameError = "Degree name cannot be blank";
        }

        if (!this.state.state) {
            stateError = "State cannot be blank";
        }

        if (!this.state.address) {
            addressError = "Address has to be inputed";
        }

        if (!this.state.start) {
            startError = "State has to be inputed";
        }

        if (!this.state.startDate) {
            startDateError = "Start date must be inputed";
        }

        if (!this.state.gradDate) {
            gradDateError = "Graduation date must be inputed";
        }

        if (schoolNameError || schoolLocationError || degreeNameError || stateError || addressError || startError || startDateError || gradDateError) {
            this.setState({ schoolNameError, schoolLocationError, degreeNameError, stateError, addressError, startError, startDateError, gradDateError });
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
                <section className="bk-grey" >
                    <div className="container">
                        <div className="row">
                            <div className="col-md-8">
                                <ul className="ul-headers">
                                    <li className="ul-h1">
                                        <i className="fa fa-edit"></i>
                                        <span>1</span>
                                    </li>
                                    <li className="ul-h1">
                                        <i className="fa fa-suitcase x0"></i>
                                        <span>2</span>
                                    </li>
                                    <li className="ul-h1">
                                        <i className="fa fa-graduation-cap x1 x1-x"></i>
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
                                <Link to="" className="btn btn-headers">Education</Link>
                            </div>
                        </div>
                    </div>
                </section >
                {/* // <!-- Form starts here --> */}
                < section className="bk-grey" >
                    <div className="container">
                        <div className="row">
                            <div className="col-md-8 head-form">
                                <form onSubmit={this.handleSubmit}>
                                    <div className="row">
                                        <div className="form-group col-md-6">
                                            <label htmlFor="exampleInputEmail1">School Name</label>
                                            <input type="text" className="form-control" id="schoolName"
                                                placeholder="School Name" onChange={this.handleChange} />
                                            <div style={{ fontSize: 12, color: "red" }}>
                                                {this.state.schoolNameError}
                                            </div>
                                        </div>
                                        <div className="form-group col-md-6">
                                            <label htmlFor="exampleInputEmail1">School Location</label>
                                            <input type="text" className="form-control" id="schoolLocation"
                                                onChange={this.handleChange} placeholder="School Location" />
                                            <div style={{ fontSize: 12, color: "red" }}>
                                                {this.state.schoolLocationError}
                                            </div>
                                        </div>
                                    </div>
                                    <div className="row">
                                        <div className="form-group col-md-6">
                                            <label htmlFor="exampleInputEmail1">Degree</label>
                                            <input type="text" className="form-control" id="degreeName"
                                                onChange={this.handleChange} placeholder="Degree" />
                                            <div style={{ fontSize: 12, color: "red" }}>
                                                {this.state.degreeNameError}
                                            </div>
                                        </div>
                                        <div className="form-group col-md-6">
                                            <label htmlFor="exampleInputEmail1">State</label>
                                            <input type="text" className="form-control" id="state"
                                                onChange={this.handleChange} placeholder="State" />
                                            <div style={{ fontSize: 12, color: "red" }}>
                                                {this.state.stateError}
                                            </div>
                                        </div>
                                    </div>
                                    <div className="row">
                                        <div className="form-group col-md-6">
                                            <label htmlFor="exampleInputEmail1">Start Date</label>
                                            <input type="text" className="form-control" id="startDate"
                                                onChange={this.handleChange} placeholder="Start Date" />
                                            <div style={{ fontSize: 12, color: "red" }}>
                                                {this.state.startDateError}
                                            </div>
                                        </div>
                                        <div className="form-group col-md-6">
                                            <label htmlFor="exampleInputEmail1">Graduation Date</label>
                                            <input type="text" className="form-control" id="gradDate"
                                                onChange={this.handleChange} placeholder="Graduation Date" />
                                            <div style={{ fontSize: 12, color: "red" }}>
                                                {this.state.gradDateError}
                                            </div>
                                        </div>
                                    </div>
                                    <div className="row">
                                        <div className="col-md-12 form-txt">
                                            <button type="submit" className="btn btn-submit">submit</button>
                                            <h2> <i className="fa fa-plus"></i> Tell us about your education</h2>
                                            <h2> <i className="fa fa-plus"></i> Include every school, even if you're still there or
                                    didn't graduate</h2>
                                        </div>
                                    </div>

                                </form>
                                <div className="header-buttons">
                                    <Link to="/work-experience-detail" className="btn btn-back">
                                        <i className="fa fa-angle-left"></i> Back</Link>
                                    <Link to="/education-detail" className="btn btn-next">Next<i className="fa fa-angle-right"></i></Link>
                                </div>
                            </div>
                            <div className="col-md-4 form-img">
                                <img src="../images/cv.jpg" alt="" className="img-responsive" />
                                <div className="preview">
                                    <Link to="" className="btn btn-preview"><i className="fa fa-eye"></i> Preview</Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </section >


                {/* // <!-- Form ends here --> */}

            </div>
        )
    }
}

export default Education






