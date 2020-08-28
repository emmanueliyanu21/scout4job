import React, { Component } from 'react'
import Navbar from '../pages/Navbar-Employer'
import Footer from '../pages/footer-employer'
import { Link } from 'react-router-dom'

const initialState = {
    jobTitle: '',
    jobLocation: '',
    jobTitleError: '',
    jobLocationError: '',

    query: "",
    data: [],
    filteredData: []

}

class CVSearch extends Component {

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

    // handleChange = (e) => {
    //     this.setState({
    //         [e.target.id]: e.target.value
    //     });
    // }

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
                <section className="dk-bk-grey">
                    <div className="container">
                        <div className="row">
                            <div className="col-md-12">
                                <div class="txt3 pt-5 pb-5">
                                    <h4>CV Search</h4>
                                    <h3>Finding Quality Talent is Hard;<br />
                                        We've Made it Easier
                                </h3>
                                    <p>Get the right candidates you want; you only need to search</p>
                                    <Link to="/employer-signup" className="btn btn-contact-us btn-get-started">Get Started</Link>
                                </div>
                            </div>
                        </div>
                        <div className="row pt-2 pb-5">
                            <div className="col-md-4 cv-search-procedure">
                                <h2> <i className="fa fa-search pr-2"></i> Easy Search</h2>
                                <p>Search qualified candidates based on your specific requirements.</p>
                            </div>
                            <div className="col-md-4 cv-search-procedure">
                                <h2> <i className="fa fa-book pr-2"></i> Preview Option</h2>
                                <p>Preview / Save candidates' profiles/resumes that meet your criteria.</p>
                            </div>
                            <div className="col-md-4 cv-search-procedure">
                                <h2> <i className="fa fa-download pr-2"></i> Quick Download</h2>
                                <p>Contact and or Download your shortlisted. All done in few minutes.</p>
                            </div>
                        </div>
                    </div>
                </section>
                {/*  */}
                {/* <section>
                    <div className="container">
                        <div className="row">
                            <div className="col-md-12 pt-5">
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
                                        <div className="col-md-2 job-x3">
                                            <div className="">
                                                <Link type="submit" to=""><i className="fa fa-search"></i><span>Search</span> </Link>
                                            </div>
                                        </div>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </section> */}
                {/*  */}
                <Footer />
            </div>
        )
    }
}

export default CVSearch
