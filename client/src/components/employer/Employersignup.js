import React, { Component } from 'react'
import Navbar from '../pages/Navbar-Employer'
import { Link, withRouter } from 'react-router-dom'
import { connect } from 'react-redux';
import PropTypes from "prop-types";
import { registerUser } from "../../store/actions/employerauthActions";

export class Employersignup extends Component {

    state = {
        companyname: '',
        country: '',
        phonenumber: "",
        address: "",
        email: "",
        password: "",
        errors: {}
    }

    componentWillReceiveProps(nextProps) {
        if (nextProps.errors) {
            this.setState({
                errors: nextProps.errors
            });
        }
    }

    componentDidMount() {
        // If logged in and user navigates to Register page, should redirect them to dashboard
        if (this.props.auth.isAuthenticated) {
            this.props.history.push("/employer-dashboard");
        }
    }

    handleChange = (e) => {
        this.setState({
            [e.target.id]: e.target.value
        })
    }

    handleSubmit = (e) => {
        e.preventDefault();

        const newEmployerUser = {
            companyname: this.state.companyname,
            country: this.state.country,
            phonenumber: this.state.phonenumber,
            address: this.state.address,
            email: this.state.email,
            password: this.state.password,
        };

        console.log(newEmployerUser);
        this.props.registerUser(newEmployerUser, this.props.history);
        
    }


    render() {
        const { errors } = this.state;
        return (
            <div className="">
                <Navbar />
                <section className="bk-grey">
                    <div className="container-fluid">
                        <div className="row">
                            <div className="col-md-6">
                                <div className="employer-leftside">
                                </div>
                            </div>
                            <div className="col-md-6">
                                <div className="cta-section-rightside">
                                    <div className="form-container">
                                        <div className="form-box">
                                            <div className="header">
                                                <h4>Welcome To Scout4Job</h4>
                                                <p className="text-muted">Setup your account to have access to a great pool of talent.</p>
                                            </div>
                                            <form noValidate onSubmit={this.handleSubmit}>
                                                <div className="row">
                                                    <div className="form-group col-md-6">
                                                        <label htmlFor="company">Company name</label>
                                                        <input type="text" id="companyname" required
                                                            onChange={this.handleChange} error={errors.companyname} placeholder="e.g cocacola, IBM" className="form-control" />
                                                        <span className="red-text">{errors.companyname}</span>
                                                    </div>
                                                    <div className="form-group col-md-6">
                                                        <label htmlFor="country">Country</label>
                                                        <input type="text" id="country" required
                                                            onChange={this.handleChange} error={errors.country} placeholder="Nigeria" className="form-control" />
                                                        <span className="red-text">{errors.country}</span>
                                                    </div>
                                                </div>
                                                <div className="row">
                                                    <div className="form-group col-md-6">
                                                        <label htmlFor="tel">Phone Number</label>
                                                        <input type="text" id="phonenumber" required
                                                            onChange={this.handleChange} error={errors.phonenumber} placeholder="Telephone" className="form-control" />
                                                        <span className="red-text">{errors.phonenumber}</span>
                                                    </div>
                                                    <div className="form-group col-md-6">
                                                        <label htmlFor="tel">Address</label>
                                                        <input type="text" id="address" required
                                                            onChange={this.handleChange} error={errors.address} placeholder="Yaba, Lagos" className="form-control" />
                                                        <span className="red-text">{errors.address}</span>
                                                    </div>
                                                </div>
                                                <div className="row">
                                                    <div className="form-group col-md-6">
                                                        <label htmlFor="country">Email</label>
                                                        <input type="text" id="email" required
                                                            onChange={this.handleChange} error={errors.email} placeholder="email" className="form-control" />
                                                        <span className="red-text">{errors.email}</span>
                                                    </div>
                                                    <div className="form-group col-md-6">
                                                        <label htmlFor="country">Password</label>
                                                        <input type="text" id="password" required
                                                            onChange={this.handleChange} error={errors.password} placeholder="" className="form-control" />
                                                        <span className="red-text">{errors.password}</span>
                                                    </div>
                                                </div>
                                                <div className="form-group text-center">
                                                    <button className="btn btn-contact-us mt-4 text-center" type="submit"
                                                        style={{ backgroundColor: "#00AEFF" }}>Sign up</button>
                                                </div>
                                            </form>
                                        </div>
                                        <div className="text-center mt-4 acct">You already have an account with us?&nbsp;&nbsp;
                                        <Link to="/employer-login">Log in</Link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        )
    }
}

Employersignup.propTypes = {
    registerUser: PropTypes.func.isRequired,
    auth: PropTypes.object.isRequired,
    errors: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
    auth: state.auth,
    errors: state.errors
});

export default connect(mapStateToProps, { registerUser })(withRouter(Employersignup));

