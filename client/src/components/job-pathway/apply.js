import React, { Component } from 'react'
import { Link } from 'react-router-dom'
// import data from '../../data'

const initialState = {
    title: '',
    coverLetter: '',
    attachProfile: '',
    curriculumVitae: '',
    titleError: "",
    coverLetterError: '',
    attachProfileError: '',
    curriculumVitaeError: ""
};

class Apply extends Component {

    state = initialState;

    handleChange = (e) => {
        this.setState({
            [e.target.id]: e.target.value
        });
    }

    handleValidation() {
        let titleError = "";
        let coverLetterError = "";
        let attachProfileError = "";
        let curriculumVitaeError = ""

        if (!this.state.title) {
            titleError = "Title cannot be blank";
        }

        if (!this.state.coverLetter) {
            coverLetterError = "Title cannot be blank";
        }

        if (!this.state.attachProfile) {
            attachProfileError = "Title cannot be blank";
        }

        if (!this.state.curriculumVitae) {
            curriculumVitaeError = "Curriculum vitae cannot be blank";
        }

        if (coverLetterError || titleError || attachProfileError || curriculumVitaeError) {
            this.setState({ coverLetterError, titleError, attachProfileError, curriculumVitaeError });
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

    render(props) {
        // console.log(props.match.params.id)
        // const job = 
        return (
            <div className="">
                {/* <!-- body starts here --> */}
                <section>
                    <div className="container">
                        <div className="row pt-5 pb-5">
                            <div className="col-md-8 db-page pt-2 db-more">
                                <h2>Application for for the post of a Digital Maf rketer</h2>
                                <form onSubmit={this.handleSubmit}>
                                    <div className="form-group">
                                        <label htmlFor="exampleInputEmail1">Subject / Title</label>
                                        <input type="text" className="form-control" id="title"
                                            onChange={this.handleChange} placeholder="Application for implementation coordinator" />
                                        <div style={{ fontSize: 12, color: "red" }}>
                                            {this.state.titleError}
                                        </div>
                                    </div>
                                    <div className="form-group">
                                        <label htmlFor="exampleInputEmail1">Cover Letter: (Letter to Convince the employer to hire
                                you!.</label>
                                        <ul className="ul-form">
                                            <li><Link to=""><i className="fa fa-hand-pointer-o"></i> Select crafted cover letter</Link></li>
                                            <li><Link to=""><i className="fa fa-edit"></i> Create a cover letter
                                    </Link></li>
                                        </ul>
                                        <textarea onChange={this.handleChange} className="form-control" id="coverLetter" rows="3"></textarea>
                                        <div style={{ fontSize: 12, color: "red" }}>
                                            {this.state.coverLetterError}
                                        </div>
                                    </div>
                                    <div className="form-group form-check">
                                        <input type="checkbox" className="form-check-input" id="attachProfile" onChange={this.handleChange} />
                                        <div style={{ fontSize: 12, color: "red" }}>
                                            {this.state.attachProfileError}
                                        </div>
                                        <label className="form-check-label" htmlFor="exampleCheck1">Attach my profile
                            <span><Link to=""><i
                                                className="fa fa-eye"></i> View profile</Link>
                                            </span></label>
                                    </div>
                                    <div className="form-group">
                                        <label htmlFor="exampleInputEmail1">Upload Resume: (attach your current CV. File size less than 3MB).</label>
                                        <ul className="ul-form">
                                            <li><Link to=""><i className="fa fa-hand-pointer-o"></i> Select crafted resume</Link></li>
                                            <li><Link to=""><i className="fa fa-edit"></i> Create a resume</Link></li>
                                        </ul>
                                        <textarea className="form-control" onChange={this.handleChange} id="curriculumVitae" rows="3"></textarea>
                                        <div style={{ fontSize: 12, color: "red" }}>
                                            {this.state.curriculumVitaeError}
                                        </div>
                                    </div>
                                    <div className="form-group">
                                        <label htmlFor="exampleInputEmail1">Upload Additional Document: (attach any additional doc if any or leave blank)</label>
                                        <input type="file" className="form-control-file" id="exampleFormControlFile1" />
                                    </div>
                                    <div className="questions">
                                        <div className="form-group">
                                            <label htmlFor="exampleFormControlSelect1">Do you have previous experience in research?</label>
                                            <select className="form-control" style={{ width: "20%" }} id="exampleFormControlSelect1">
                                                <option>Yes</option>
                                                <option>No</option>
                                            </select>
                                        </div>
                                        <div className="form-group">
                                            <label htmlFor="exampleFormControlSelect1">Do you have experience monitoring
                                    projects?</label>
                                            <select className="form-control" style={{ width: "20%" }} id="exampleFormControlSelect1">
                                                <option>Yes</option>
                                                <option>No</option>
                                            </select>
                                        </div>
                                    </div>
                                    <div className="row">
                                        <div className="col-md-12 text-center mb-4 mt-4">
                                            <Link type="submit" to="/dashboard" className="btn btn-apply">Submit application</Link>
                                        </div>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </section>

                {/* <!-- body wnds here --> */}
                {/* <!-- block 5 starts here --> */}
                <section className="dk-bk-grey n1-line">
                    <div className="container">
                        <div className="row">
                            <div className="col-md-12 short-mss">
                                <h2><span>Build your professional cv & cover letter and stand to get your dream job
                            <m-span className="sign-up">Sign up</m-span> </span> </h2>
                            </div>
                        </div>
                    </div>
                </section>
                <section className="dk-bk-grey ul-f1">
                    <div className="container">
                        <div className="row main-footer">
                            <div className="col-md-4">
                                <div className="ul-ft">
                                    <img src="../images/logo2-template.png" className="img-responsive" alt="" />
                                </div>
                                <ul className="ul-footer pt-3">
                                    <li><i className="fa fa-map-marker"></i>
                                        <p className="n-30">30, Commercial Road
                                Fracttion, United Kingdom</p>
                                    </li>
                                    <li><i className="fa fa-phone"></i>+2347-0685-6214</li>
                                    <li><i className="fa fa-envelope"></i> info@coveero.com</li>

                                </ul>
                                <ul className="ul-foot">
                                    <li className="active">Open Hours</li>
                                    <li>Mon - Sat: 8am - 5pm</li>
                                    <li>Sunday: Closed</li>
                                </ul>
                            </div>
                            <div className="col-md-4 row">
                                <div className="col-md-6">
                                    <div className="ul-ft">
                                        <h2>Links</h2>
                                    </div>
                                    <ul className="ul-footer">
                                        <li><i className="fa fa-angle-right"></i> Home</li>
                                        <li><i className="fa fa-angle-right"></i> Job Search</li>
                                        <li><i className="fa fa-angle-right"></i> Build Resume</li>
                                        <li><i className="fa fa-angle-right"></i> Cover Letter</li>
                                        <li><i className="fa fa-angle-right"></i> About us</li>
                                        <li><i className="fa fa-angle-right"></i> Testimonials</li>
                                        <li><i className="fa fa-angle-right"></i> News</li>
                                    </ul>
                                </div>
                                <div className="col-md-6">

                                    <ul className="ul-footer pt-4 mt-3">
                                        <li><i className="fa fa-angle-right"></i>Gallery</li>
                                        <li><i className="fa fa-angle-right"></i>Our Team</li>
                                        <li><i className="fa fa-angle-right"></i>Portfolio</li>
                                        <li><i className="fa fa-angle-right"></i>Cover Letter</li>
                                        <li><i className="fa fa-angle-right"></i>Contact Us</li>
                                        <li><i className="fa fa-angle-right"></i>FAQ</li>
                                        <li><i className="fa fa-angle-right"></i>Careers</li>
                                    </ul>
                                </div>
                            </div>
                            <div className="col-md-4 inner-d">
                                <div className="ul-ft">
                                    <h2>Newsletter</h2>
                                </div>
                                <ul className="ul-footer">
                                    <li>Send us a news letter to get update</li>
                                </ul>
                                <form>
                                    <div className="form-group news-let">
                                        <input type="email" className="form-control x1" style={{ color: "#fff" }} id="exampleInputEmail1"
                                            aria-describedby="emailHelp" placeholder="Your email address here" />
                                    </div>
                                    <Link to=""><i className="fa fa-arrow-circle-o-right"></i></Link>
                                </form>
                                <ul className="soc-media">
                                    <li><i className="fa fa-facebook x2"></i></li>
                                    <li><i className="fa fa-instagram x3"></i></li>
                                    <li><i className="fa fa-twitter x4"></i></li>
                                    <li><i className="fa fa-linkedin x5"></i></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </section>
                <section className="dk-bk-grey">
                    <div className="container">
                        <div className="row">
                            <div className="col-md-12 ft-copy">
                                <h2>2020 © All right reserved by <span>coovero.com</span></h2>
                            </div>
                        </div>
                    </div>
                </section>

                {/* <!-- block 5 ends here --> */}
            </div>
        )
    }
}

export default Apply


