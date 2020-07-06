import React, { Component } from 'react'
import { Link } from 'react-router-dom'

const initialState = {
    jobTitle: '',
    jobTitleError: '',
}

class JobTitle extends Component {

    state = initialState;

    handleChange = (e) => {
        this.setState({
            [e.target.id]: e.target.value
        });
    }

    handleValidation() {
        let jobTitleError = "";

        if (!this.state.jobTitle) {
            jobTitleError = "Job title cannot be blank";
        }

        if (jobTitleError) {
            this.setState({ jobTitleError });
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
                {/* <!-- body part here --> */}
                <section className="bk-dotted">
                    <div className="container">
                        <div className="row step-x1 pt-5 pb-5">
                            <div className="col-md-12 db-page pt-5">
                                <h2>What’s you current or last job title?</h2>
                                <p>if you have a job that is more relevant to the job you want, use that instead</p>
                                <div className="option-x1 pt-5 mb-5">
                                    <form onSubmit={this.handleSubmit}>
                                        <div className="form-group">
                                            <label htmlFor="exampleInputEmail1">Job Title</label>
                                            <input type="text" className="form-control" id="jobTitle"
                                                aria-describedby="emailHelp" placeholder="Senior software developer" onChange={this.handleChange} />
                                            <div style={{ fontSize: 12, color: "red" }}>
                                                {this.state.jobTitleError}
                                            </div>

                                        </div>
                                        <div className="form-txt">
                                            <button type="submit" className="btn btn-submit">submit</button>
                                        </div>
                                    </form>
                                </div>
                                <div className="create">
                                    <Link to="/experience" className="btn btn-create mr-4"><i className="fa fa-backward"></i></Link>
                                    <Link to="/out-of-job" className="btn btn-create"><i className="fa fa-forward"></i></Link>
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

export default JobTitle


