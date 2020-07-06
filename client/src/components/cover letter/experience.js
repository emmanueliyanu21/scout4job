import React, { Component } from 'react'
import { Link } from 'react-router-dom'

class Experince extends Component {

    state = {
        selectedOption: "option1"
    }

    handleOptionChange = (e) => {
        this.setState({
            selectedOption: e.target.value
        });
    }

    handleFormSubmit = e => {
        e.preventDefault();

        console.log("You have submitted:", this.state.selectedOption);
    };
    render() {
        return (
            <div className="">
                {/* <!-- body part here --> */}
                <section className="bk-dotted">
                    <div className="container">
                        <div className="row step-x1 pt-5 pb-5">
                            <div className="col-md-12 db-page pt-5">
                                <h2>How many years of experience do you have?</h2>
                                <p>We'll find the best templates for your experience level.</p>

                                <form onSubmit={this.handleFormSubmit}>

                                    <ul className="ul-number">
                                        <li className="form-check">
                                            <label><input type="radio" name="react-tips" value="option1" checked={this.state.selectedOption === "option1"} onChange={this.handleOptionChange} className="form-check-input"
                                            /> 1  </label>
                                        </li>
                                        <li className="form-check">
                                            <label><input type="radio" name="react-tips" value="option2" checked={this.state.selectedOption === "option2"} onChange={this.handleOptionChange} className="form-check-input"
                                            /> 2  </label>
                                        </li>
                                        <li className="form-check">
                                            <label><input type="radio" name="react-tips" value="option3" checked={this.state.selectedOption === "option3"} onChange={this.handleOptionChange} className="form-check-input"
                                            /> 3  </label>
                                        </li>
                                        <li className="form-check">
                                            <label><input type="radio" name="react-tips" value="option4" checked={this.state.selectedOption === "option4"} onChange={this.handleOptionChange} className="form-check-input"
                                            /> 4  </label>
                                        </li>
                                        <li className="form-check">
                                            <label><input type="radio" name="react-tips" value="option5" checked={this.state.selectedOption === "option5"} onChange={this.handleOptionChange} className="form-check-input"
                                            /> 5  </label>
                                        </li>
                                        <li className="form-check">
                                            <label><input type="radio" name="react-tips" value="option6" checked={this.state.selectedOption === "option6"} onChange={this.handleOptionChange} className="form-check-input"
                                            /> 6  </label>
                                        </li>
                                        <li className="form-check">
                                            <label><input type="radio" name="react-tips" value="option7" checked={this.state.selectedOption === "option7"} onChange={this.handleOptionChange} className="form-check-input"
                                            /> 7  </label>
                                        </li>
                                        <li className="form-check">
                                            <label><input type="radio" name="react-tips" value="option8" checked={this.state.selectedOption === "option8"} onChange={this.handleOptionChange} className="form-check-input"
                                            /> 8  </label>
                                        </li>
                                        <li className="form-check">
                                            <label>
                                                <input type="radio" name="react-tips" value="option9" checked={this.state.selectedOption === "option9"} className="form-check-input" onChange={this.handleOptionChange}
                                                /> 9  </label>
                                        </li>
                                        <li className="form-check">
                                            <label>
                                                <input type="radio" name="react-tips" value="option10" checked={this.state.selectedOption === "option10"} className="form-check-input" onChange={this.handleOptionChange}
                                                /> 10 </label>
                                        </li>
                                    </ul>

                                </form>

                                <div className="create">
                                    <Link to="/strength" className="btn btn-create mr-4"><i className="fa fa-backward"></i></Link>
                                    <Link to="/job-title" className="btn btn-create"><i className="fa fa-forward"></i></Link>
                                </div>

                            </div>
                        </div>
                    </div>
                </section>

                {/* <!-- body ends here-- > */}
            </div >
        )
    }
}

export default Experince



