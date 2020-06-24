import React from 'react';
import Footer from './footer'

function About() {
    return (
        <div className=" ">
            <div className="container abt">
                <h2>About us</h2>
            </div>
            <div className="abt-cont">
                <div className="container">
                    <div className="row pt-4 pb-5">
                        <p>CV Builder takes the hassle out of resume writing. You can choose from several templates and follow easy prompts to create the perfect job-ready resume effortlessly.</p>
                    </div>
                </div>
            </div>
            <div className="container">
                <div className="row">
                    <div className="col-md-5 cont-abt">
                        <h2 className="pt-5">Our Address</h2>
                        <p>No 3, Bola Onasanya Crescent, Ogudu, Lagos</p>
                        <h2>Via Phone</h2>
                        <p>+2348-0944-44912</p>
                        <h2>Via Email</h2>
                        <p> info@cv-builder.com.ng</p>
                        <p className="pt-4">Looking for online support?</p>
                        <p className="pb-5">Talk to us now using our online chat</p>
                    </div>
                    <div className="col-md-7 part">
                        <h2 class="pb-1">Want to be part of our sales representative</h2>
                        <form class="pt-3 s-p">
                            <div class="form-group">
                                <input type="email" class="form-control x1" id="exampleInputEmail1"
                                    aria-describedby="emailHelp" placeholder="First Name" />
                            </div>
                            <div class="form-group">
                                <input type="email" class="form-control x1" id="exampleInputEmail1"
                                    aria-describedby="emailHelp" placeholder="Last Name" />
                            </div>
                            <div class="form-group">
                                <input type="email" class="form-control x1" id="exampleInputEmail1"
                                    aria-describedby="emailHelp" placeholder="Email Address" />
                            </div>
                            <div class="form-group">
                                <textarea class="form-control x2" id="exampleFormControlTextarea1" placeholder="Message" rows="3"></textarea>
                            </div>
                            <button type="submit" class="btn btn-abt mb-4 mb-3">Submit</button>
                        </form>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    );
}

export default About
