import React, { Component } from 'react'
import { Link } from 'react-router-dom'

const initialState = {
    jobTitle: '',
    Employee: '',
    city: '',
    state: '',
    date: '',
    endDate: '',
    jobTitleError: "",
    EmployeeError: "",
    cityError: "",
    stateError: "",
    dateError: "",
    endDateError: "",
};

class WorkExperience extends Component {

    state = initialState;

    handleChange = (e) => {
        this.setState({
            [e.target.id]: e.target.value
        });
    }

    handleValidation() {
        let jobTitleError = "";
        let EmployeeError = "";
        let cityError = "";
        let stateError = "";
        let dateError = "";
        let endDateError = "";

        if (!this.state.jobTitle) {
            jobTitleError = "What is your first Job";
        }

        if (!this.state.Employee) {
            EmployeeError = "Employee cannot be blank";
        }

        if (!this.state.city) {
            cityError = "City cannot be blank";
        }

        if (!this.state.state) {
            stateError = "State cannot be blank";
        }

        if (!this.state.date) {
            dateError = "Date has to be inputed";
        }

        if (!this.state.endDate) {
            endDateError = "End Date has to be inputed";
        }

        if (jobTitleError || EmployeeError || cityError || stateError || dateError || endDateError) {
            this.setState({ jobTitleError, EmployeeError, cityError, stateError, dateError, endDateError });
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
                                        <i className="fa fa-suitcase x0"></i>
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
                                <Link to="" className="btn btn-headers">Work Experince</Link>
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
                                            <label htmlFor="exampleInputEmail1">Job Title</label>
                                            <input type="text" className="form-control" id="jobTitle"
                                                aria-describedby="emailHelp" placeholder="Job Title" />
                                            <div style={{ fontSize: 12, color: "red" }}>
                                                {this.state.jobTitleError}
                                            </div>
                                        </div>
                                        <div className="form-group col-md-6">
                                            <label htmlFor="exampleInputEmail1">Employer</label>
                                            <input type="text" className="form-control" id="Employee"
                                                aria-describedby="emailHelp" placeholder="Employer" />
                                            <div style={{ fontSize: 12, color: "red" }}>
                                                {this.state.EmployeeError}
                                            </div>
                                        </div>
                                    </div>
                                    <div className="row">
                                        <div className="form-group col-md-6">
                                            <label htmlFor="exampleInputEmail1">City</label>
                                            <input type="text" className="form-control" id="city"
                                                aria-describedby="emailHelp" placeholder="City" />
                                            <div style={{ fontSize: 12, color: "red" }}>
                                                {this.state.cityError}
                                            </div>
                                        </div>
                                        <div className="form-group col-md-6">
                                            <label htmlFor="exampleInputEmail1">State</label>
                                            <input type="text" className="form-control" id="state"
                                                aria-describedby="emailHelp" placeholder="State" />
                                            <div style={{ fontSize: 12, color: "red" }}>
                                                {this.state.stateError}
                                            </div>
                                        </div>
                                    </div>
                                    <div className="row">
                                        <div className="form-group col-md-6">
                                            <label htmlFor="exampleInputEmail1">Start Date</label>
                                            <input type="text" className="form-control" id="date"
                                                aria-describedby="emailHelp" placeholder="Start Date" />
                                            <div style={{ fontSize: 12, color: "red" }}>
                                                {this.state.dateError}
                                            </div>
                                        </div>
                                        <div className="form-group col-md-6">
                                            <label htmlFor="exampleInputEmail1">End Date</label>
                                            <input type="text" className="form-control" id="endDate"
                                                aria-describedby="emailHelp" placeholder="End Date" />
                                            <div style={{ fontSize: 12, color: "red" }}>
                                                {this.state.endDateError}
                                            </div>
                                        </div>
                                    </div>



                                    <div className="row">
                                        <div className="col-md-12 form-txt">
                                            <button type="submit" className="btn btn-submit">submit</button>
                                            <h2> <i className="fa fa-plus"></i> Tell us about your work experience</h2>
                                            <h2> <i className="fa fa-plus"></i> Start with your most recent job and work backward</h2>
                                        </div>
                                    </div>
                                </form>
                                <div className="header-buttons">
                                    <Link to="/header" className="btn btn-back">
                                        <i className="fa fa-angle-left"></i> Back</Link>
                                    <Link to="/work-experience-extra" className="btn btn-next">Next<i
                                        className="fa fa-angle-right"></i></Link>
                                </div>
                            </div>
                            <div className="col-md-4 form-img">
                                <img src="../images/cv.jpg" alt="" className="img-responsive" />
                                <div className="preview">
                                    <Link to="#" className="btn btn-preview"><i className="fa fa-eye"></i> Preview</Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>


                {/* <!-- Form ends here --> */}
            </div>
        )
    }
}

export default WorkExperience




