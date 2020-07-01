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
                                    <ul className="ul-number ul-num1">
                                        <Link><li name="year" value="option1" checked={this.state.selectedOption === "option1"} onChange={this.handleOptionChange} className="yr-x1">0</li></Link>
                                        <Link><li name="year" value="option2" checked={this.state.selectedOption === "option2"} onChange={this.handleOptionChange} style={{ backgroundColor: this.state.bgColor, color: this.state.color }} className="yr-x2">3</li></Link>
                                        <Link><li name="year" value="option3" checked={this.state.selectedOption === "option3"} onChange={this.handleOptionChange} className="yr-x3">5</li></Link>
                                        <Link><li name="year" value="option4" checked={this.state.selectedOption === "option4"} onChange={this.handleOptionChange} className="yr-x4">10</li></Link>
                                        <Link><li name="year" value="option5" checked={this.state.selectedOption === "option5"} onChange={this.handleOptionChange} className="yr-x5">10+</li></Link>
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



