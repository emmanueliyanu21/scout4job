import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import Footer from '../pages/footer'

export class Years extends Component {

    state = {
        bgColor: '#fff',
        color: '#788088'
    }

    handleClick = (e) => {
        e.preventDefault();
        console.log('this link was clicked')
        this.setState({
            bgColor: '#FBA51A',
            color: '#fff'
        })
    }
    render() {
        return (
            <div className="">
                {/* <!-- body part here --> */}
                <section class="bk-icon">
                    <div class="container ">
                        <div class="row year-x1">
                            <div class="white-bk col-md-12">
                                <div class="three-text">
                                    <h2>How long have you been working?</h2>
                                    <p>We'll find the best templates for your experience level.</p>
                                </div>
                                <ul class="ul-number ul-num1">
                                    <Link><li onClick={this.handleClick} style={{ backgroundColor: this.state.bgColor, color: this.state.color }} class="yr-x1">0</li></Link>
                                    <Link><li onClick={this.handleClick} style={{ backgroundColor: this.state.bgColor, color: this.state.color }} class="yr-x2">3</li></Link>
                                    <Link><li onClick={this.handleClick} class="yr-x3">5</li></Link>
                                    <Link><li onClick={this.handleClick} class="yr-x4">10</li></Link>
                                    <Link><li onClick={this.handleClick} class="yr-x5">10+</li></Link>
                                </ul>

                                <div class="create pt-5">
                                    <Link to="/launch" class="btn-create mr-4"><i class="fa fa-backward"></i></Link>
                                    <Link to="/template" class="btn-create"><i class="fa fa-forward"></i></Link>
                                </div>
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



