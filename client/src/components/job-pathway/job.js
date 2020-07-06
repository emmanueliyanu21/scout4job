import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import Footer from '../pages/footer'

const initialState = {
    jobTitle: '',
    jobLocation: '',
    jobTitleError: '',
    jobLocationError: ''
}

class Job extends Component {

    state = initialState;

    handleChange = (e) => {
        this.setState({
            [e.target.id]: e.target.value
        });
    }

    handleValidation() {
        let jobTitleError = "";
        let jobLocationError = "";

        if (!this.state.jobTitle) {
            jobTitleError = "Job title cannot be blank";
        }

        if (!this.state.jobLocationError) {
            jobLocationError = "Job location cannot be blank";
        }

        if (jobTitleError || jobLocationError) {
            this.setState({ jobTitleError, jobLocationError });
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
                {/* <!-- body starts here --> */}
                <section className="bk-image">
                    <div className="container">
                        <div className="row pace-down">
                            <div className="col-md-12 job-res">
                                <h2>Try Our No-Fuss Resume Builder</h2>
                                <p>It's Free-to-Use and Proven to
                        Get You Hired 33% Faster</p>
                            </div>
                        </div>
                        <form onSubmit={this.handleSubmit}>
                            <div className="row job-form">
                                <div className="col-md-5 job-x1">
                                    <div className="">
                                        <div className="form-group">
                                            <input type="text" className="form-control form-1" id="jobTitle"
                                                onChange={this.handleChange} placeholder="Job Title" />
                                            <div style={{ fontSize: 12, color: "red" }}>
                                                {this.state.jobTitleError}
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-md-5 job-x2">
                                    <div className="">
                                        <div className="form-group">
                                            <select onChange={this.handleChange} className="form-control space-select pt-2 pb-2">
                                                <option>Lagos</option>
                                                <option>Lagos Mainland</option>
                                                <option>Lekki</option>
                                                <option>Victoria Island</option>
                                                <option>Ikoyi</option>
                                            </select>
                                            <div style={{ fontSize: 12, color: "red" }}>
                                                {this.state.jobLocationError}
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-md-2 job-x3">
                                    <div className="">
                                        <Link type="submit" to=""><i className="fa fa-search"></i><span>Search</span> </Link>
                                    </div>
                                </div>
                            </div>
                        </form>
                        <div className="icon-d">
                            <div className="row">
                                <div className="col-md-12 icon-down mb-5 mt-2">
                                    <i className="fa fa-angle-down"></i>
                                </div>
                            </div>

                        </div>
                    </div>
                </section>

                {/* <!-- body ends here --> */}

                {/* <!-- section four starts here --> */}
                <section>
                    <div className="container">
                        <div className="row">
                            <div className="col-md-12">
                                <div className="sec-header">
                                    <h2><span><i className="fa fa-briefcase"></i>Recent Available Jobs</span> </h2>
                                </div>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-md-4 j-x">
                                <Link to="/job-details">
                                    <div className="sc4-x1">
                                        <img src="../images/digital-marketing.png" className="img-responsive" alt="" />
                                        <div className="inner-content">
                                            <ul className="ul-sc4">
                                                <li>Status:<span className="status">Ongoing</span></li>
                                                <li className="pull-right"><i className="fa fa-clock-o"></i><span>Jan 12, 2020</span></li>
                                            </ul>
                                            <h2>Digital Marketing Agency</h2>
                                            <p>Tech Cabals: Old Online Trends That Have...</p>
                                            <ul className="ul-sc4-x1">
                                                <li><i className="fa fa-map-marker"></i> Lagos</li>
                                                <li className="pull-right">Read more <i className="fa fa-forward"></i></li>
                                            </ul>
                                        </div>
                                    </div>
                                </Link>
                            </div>

                            <div className="col-md-4 j-x">
                                <Link to="/job-details">
                                    <div className="sc4-x1">
                                        <img src="../images/web-design.png" className="img-responsive" alt="" />
                                        <div className="inner-content">
                                            <ul className="ul-sc4">
                                                <li>Status:<span className="status">Ongoing</span></li>
                                                <li className="pull-right"><i className="fa fa-clock-o"></i><span>Jan 12, 2020</span></li>
                                            </ul>
                                            <h2>Software Engineer</h2>
                                            <p>Andela: Old Online Trends That Have...</p>
                                            <ul className="ul-sc4-x1">
                                                <li><i className="fa fa-map-marker"></i> Lagos</li>
                                                <li className="pull-right">Read more <i className="fa fa-forward"></i></li>
                                            </ul>
                                        </div>
                                    </div>
                                </Link>
                            </div>
                            <div className="col-md-4 j-x">
                                <Link to="/job-details">
                                    <div className="sc4-x1">
                                        <img src="../images/plumbering.png" className="img-responsive" alt="" />
                                        <div className="inner-content">
                                            <ul className="ul-sc4">
                                                <li>Status:<span className="status">Ongoing</span></li>
                                                <li className="pull-right"><i className="fa fa-clock-o"></i><span>Jan 12, 2020</span></li>
                                            </ul>
                                            <h2>Plumber Agency</h2>
                                            <p>Digit Plum: we want to make sure every...</p>
                                            <ul className="ul-sc4-x1">
                                                <li><i className="fa fa-map-marker"></i> Lagos</li>
                                                <li className="pull-right">Read more <i className="fa fa-forward"></i></li>
                                            </ul>
                                        </div>
                                    </div>
                                </Link>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-md-12">
                                <ul className="inner-arrow">
                                    <li><i className="fa fa-long-arrow-left"></i></li>
                                    <li><i className="fa fa-long-arrow-right"></i></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </section>
                {/* // <!-- section four ends here --> */}

                <Footer />

                {/* <!-- block 5 ends here --> */}
            </div>
        )
    }
}

export default Job

