import React, { Component } from 'react'
import { Link } from 'react-router-dom'

const initialState = {
    position: '',
    company: '',
    positionError: "",
    companyError: "",
};

class JobApply extends Component {

    state = initialState;

    handleChange = (e) => {
        this.setState({
            [e.target.id]: e.target.value
        });
    }

    handleValidation() {
        let positionError = "";
        let companyError = "";

        if (!this.state.position) {
            positionError = "First name cannot be blank";
        }

        if (!this.state.company) {
            companyError = "Last name cannot be blank";
        }

        if (positionError || companyError) {
            this.setState({ positionError, companyError });
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
                                <h2>What job are you applying for?</h2>
                                {/* <!-- <p>It’s okay if you dont have. We will give you a letter to customize later</p> --> */}
                                <div className="option-x1 pt-5 mb-5">
                                    <form onSubmit={this.handleSubmit}>
                                        <div className="form-group">
                                            <label htmlFor="exampleInputEmail1">Desired position</label>
                                            <input type="text" className="form-control" id="position"
                                                placeholder="Desired position" onChange={this.handleChange} />
                                            <div style={{ fontSize: 12, color: "red" }}>
                                                {this.state.positionError}
                                            </div>
                                        </div>
                                        <div className="form-group">
                                            <label htmlFor="exampleInputEmail1">Desired company</label>
                                            <input type="text" className="form-control" id="company"
                                                placeholder="Name of desired company" onChange={this.handleChange} />
                                            <div style={{ fontSize: 12, color: "red" }}>
                                                {this.state.companyError}
                                            </div>
                                        </div>
                                        <div className="form-txt">
                                            <button type="submit" className="btn btn-submit">submit</button>
                                        </div>
                                    </form>
                                </div>
                                <div className="create">
                                    <Link to="/specific" className="btn btn-create mr-3"><i className="fa fa-backward"></i></Link>
                                    <Link to="/skill-details" className="btn btn-create"><i className="fa fa-forward"></i></Link>
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

export default JobApply


