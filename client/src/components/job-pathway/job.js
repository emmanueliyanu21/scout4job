import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import Footer from '../pages/footer'
import data from '../../data'
import Navbar from '../pages/Navbar'

const initialState = {
    jobTitle: '',
    jobLocation: '',
    jobTitleError: '',
    jobLocationError: '',

    query: "",
    data: [],
    filteredData: []

}

class Job extends Component {

    state = initialState;

    handleInputChange = e => {
        const query = e.target.value;

        this.setState(prevState => {
            const filteredData = prevState.data.filter(element => {
                return element.name.toLowerCase().includes(query.toLowerCase());
            });

            return {
                query,
                filteredData
            };

        });
    };

    getData = () => {
        fetch(`http://localhost:8000/data`)
            .then(response => response.json())
            .then(data => {
                const { query } = this.state;
                const filteredData = data.filter(element => {
                    return element.name.toLowerCase().includes(query.toLowerCase());
                });

                this.setState({
                    data,
                    filteredData
                });

            });
    };

    componentWillMount() {
        this.getData();
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
                <Navbar />
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
                        <form onSubmit={this.handleSubmit} className="space-icon-d">
                            <div className="row job-form">
                                <div className="col-md-5 job-x1">
                                    <div className="">
                                        <div className="form-group">
                                            <input type="text" className="form-control form-1" value={this.state.query} id="jobTitle"
                                                onChange={this.handleInputChange} placeholder="Job Title" />
                                            <div style={{ fontSize: 12, color: "red" }}>
                                                {this.state.jobTitleError}
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-md-5 job-x2">
                                    <div className="">
                                        <div className="form-group">
                                            <select className="form-control space-select pt-2 pb-2">
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
                                    <i className="fa fa-angle-double-down"></i>
                                </div>
                            </div>

                        </div>
                    </div>
                </section>

                {/* <!-- body ends here --> */}

                {/* <!-- section four starts here --> */}
                <section>
                    <div className="container">
                        <div className="row pt-3">
                            <div className="col-md-12">
                                <div className="sec-header">
                                    <h2><span><i className="fa fa-briefcase"></i>Recent Available Jobs</span> </h2>
                                </div>
                            </div>
                        </div>

                        <div className="row pb-5 pt-3">

                            {
                                data.jobs.map(job =>
                                    <div className="col-md-4 j-x">
                                        <Link to={"/job/" + job._id}>
                                            {/* "/job/" + job._id  */}
                                            <div className="sc4-x1" key={job.id}>
                                                <img src={job.image} className="img-responsive" alt="" />
                                                <div className="inner-content">
                                                    <ul className="ul-sc4">
                                                        <li>Status:<span className="status">{job.status}</span></li>
                                                        <li className="pull-right"><i className="fa fa-clock-o"></i><span>Jan 12, 2020</span></li>
                                                    </ul>
                                                    <h2>{job.name}</h2>
                                                    <p>{job.caption}</p>
                                                    <ul className="ul-sc4-x1">
                                                        <li><i className="fa fa-map-marker"></i> {job.location}</li>
                                                        <li className="pull-right">Read more <i className="fa fa-forward"></i></li>
                                                    </ul>
                                                </div>
                                            </div>
                                        </Link>
                                    </div>
                                )
                            }

                        </div>

                        {/* <div className="row">
                            <div className="col-md-12">
                                <ul className="inner-arrow">
                                    <li><i className="fa fa-long-arrow-left"></i></li>
                                    <li><i className="fa fa-long-arrow-right"></i></li>
                                </ul>
                            </div>
                        </div> */}

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

