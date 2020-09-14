import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import Navbar from '../pages/Navbar-Employer'
import Footer from '../pages/footer-employer'
import { connect } from 'react-redux'
import PropTypes from "prop-types";
import { loginUser } from "../../store/actions/employerauthActions";

export class Employersignin extends Component {

    state = {
        email: '',
        password: '',
        errors: {}
    }

    componentWillReceiveProps(nextProps) {
        if (nextProps.auth.isAuthenticated) {
            this.props.history.push("/employer-dashboard"); // push user to dashboard when they login
        }
        if (nextProps.errors) {
            this.setState({
                errors: nextProps.errors
            });
        }
    }
    componentDidMount() {
        // If logged in and user navigates to Login page, should redirect them to dashboard
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
        const userData = {
            email: this.state.email,
            password: this.state.password
        };
        console.log(userData)
        this.props.loginUser(userData);
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
                                <div className="cta-section-leftside">
                                </div>
                            </div>
                            <div className="col-md-6">
                                <div className="cta-section-rightside ">
                                    <div className="form-container">
                                        <div className="form-box">
                                            <div className="header">
                                                <h4>Welcome Back</h4>
                                                <p className="text-muted">Get the right talent for that job now.</p>
                                            </div>
                                            <form noValidate onSubmit={this.handleSubmit}>
                                                <div className="form-group pt-2">
                                                    <label htmlFor="exampleInputEmail1">Email address</label>
                                                    <input type="email" className="form-control form-control-lg"
                                                        aria-describedby="emailHelp" id="email" required onChange={this.handleChange} placeholder="Enter email" />
                                                    <span className="red-text">
                                                        {errors.email}
                                                    </span>
                                                </div>
                                                <div className="form-group pt-2">
                                                    <label>Password</label>
                                                    <input type="text" placeholder="at least 8 characters"
                                                        id="password" onChange={this.handleChange} error={errors.password} required className="form-control form-control-lg" />
                                                    <span className="red-text"> {errors.password} {errors.passwordincorrect}</span>
                                                </div>
                                                <div className="form-group text-center">
                                                    <button className="btn btn-contact-us mt-4 text-center" type="submit"
                                                        style={{ backgroundColor: "#00AEFF" }}>Log in</button>
                                                </div>
                                            </form>
                                        </div>
                                        <div className="text-center mt-4 acct">Don't have an account with us?&nbsp;&nbsp;
                                        <Link to="/employer-signup">Sign up</Link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                <Footer />
            </div>
        )
    }
}

Employersignin.propTypes = {
    loginUser: PropTypes.func.isRequired,
    auth: PropTypes.object.isRequired,
    errors: PropTypes.object.isRequired
};
const mapStateToProps = state => ({
    auth: state.auth,
    errors: state.errors
});

export default connect(
    mapStateToProps,
    { loginUser })
    (Employersignin);

