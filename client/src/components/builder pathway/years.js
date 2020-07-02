import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import Footer from '../pages/footer'

export class Years extends Component {

    state = {
        bgColor: '#fff',
        color: '#788088',
        selectedOption: "option1"
    }

    handleOptionChange = (e) => {
        this.setState({
            selectedOption: e.target.value
        });
    }

    handleFormSubmit = formSubmitEvent => {
        formSubmitEvent.preventDefault();

        console.log("You have submitted:", this.state.selectedOption);
    };

    render() {
        return (
            <div className="">
                {/* <!-- body part here --> */}
                <section className="bk-icon">
                    <div className="container ">
                        <div className="row year-x1">
                            <div className="white-bk col-md-12">
                                <div className="three-text">
                                    <h2>How long have you been working?</h2>
                                    <p>We'll find the best templates for your experience level.</p>
                                </div>
                                <form onSubmit={this.handleFormSubmit}>

                                    <ul className="ul-number">
                                        <li className="form-check">
                                            <label>
                                                <input type="radio" name="react-tips" value="option1" checked={this.state.selectedOption === "option1"} onChange={this.handleOptionChange} className="form-check-input"
                                                /> 1  </label>
                                        </li>
                                        <li className="form-check">
                                            <label>
                                                <input type="radio" name="react-tips" value="option2" checked={this.state.selectedOption === "option2"} className="form-check-input" onChange={this.handleOptionChange}
                                                /> 3  </label>
                                        </li>
                                        <li className="form-check">
                                            <label>
                                                <input type="radio" name="react-tips" value="option3" checked={this.state.selectedOption === "option3"} className="form-check-input" onChange={this.handleOptionChange}
                                                /> 5 </label>
                                        </li>
                                        <li className="form-check">
                                            <label>
                                                <input type="radio" name="react-tips" value="option4" checked={this.state.selectedOption === "option4"} className="form-check-input" onChange={this.handleOptionChange}
                                                /> 7 </label>
                                        </li>
                                        <li className="form-check">
                                            <label>
                                                <input type="radio" name="react-tips" value="option5" checked={this.state.selectedOption === "option5"} className="form-check-input" onChange={this.handleOptionChange}
                                                /> 10 </label>
                                        </li>
                                    </ul>
                                    <div className="create pt-5">
                                        <Link to="/launch" className="btn-create mr-4"><i className="fa fa-backward"></i></Link>
                                        <Link type="submit" to="/template" className="btn-create"><i className="fa fa-forward"></i></Link>
                                    </div>
                                </form>
                                <br /><br />
                            </div>
                        </div>
                    </div>
                </section>
                <Footer />
                {/* <!-- body ends here --> */}
            </div>
        )
    }
}

export default Years



