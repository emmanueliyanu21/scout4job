import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import Footer from '../pages/footer'
import Navbar from '../pages/Navbar'

export class LetterTemplates extends Component {
    render() {
        return (
            <div className="">
                <Navbar />
                <section className="bk-grey">
                    <div className="container">
                        <div className="row pt-5 pb-5">
                            <div className="col-md-4 letter-template">
                                <Link to="/template-1">
                                    <img src="../images/letter-template/letter-1.png" />
                                </Link>
                            </div>
                            <div className="col-md-4 letter-template">
                                <Link to="/specific">
                                    <img src="../images/letter-template/letter-2.png" />
                                </Link>
                            </div>
                            <div className="col-md-4 letter-template">
                                <Link to="/template-3">
                                    <img src="../images/letter-template/letter-3.png" />
                                </Link>
                            </div>
                        </div>
                    </div>
                </section>

                <Footer />
            </div>

        )
    }
}

export default LetterTemplates
