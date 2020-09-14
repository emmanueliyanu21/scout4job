import React, { Component } from 'react'
import { Link, withRouter } from 'react-router-dom'
import { connect } from 'react-redux';
import Footer from './footer'
import PropTypes from "prop-types";
import { registerUser } from "../../store/actions/authActions";
import Navbar from './Navbar';
// import classnames from "classnames";

export class Register extends Component {
    state = {
        email: '',
        password: '',
        name: "",
        password2: "",
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
            this.props.history.push("/dashboard");
        }
    }

    handleChange = (e) => {
        this.setState({
            [e.target.id]: e.target.value
        })
    }

    handleSubmit = (e) => {
        e.preventDefault();

        const newUser = {
            name: this.state.name,
            email: this.state.email,
            password: this.state.password,
            password2: this.state.password2
        };

        this.props.registerUser(newUser, this.props.history);
    }


    render() {
        const { errors } = this.state;
        return (
            <div className="">
                <Navbar />
                {/* < !--Form starts here-- > */}
                <section className="bk-grey bk-sign-up">
                    <div className="overlay">
                        <div className="container">
                            <div className="row">
                                <div className="col-md-12 login-form">
                                    <form noValidate onSubmit={this.handleSubmit} action="PO">
                                        <div className="main-text">
                                            <h2><i className="fa fa-user"></i> Sign Up</h2>
                                        </div>
                                        <div className="form-group">
                                            <label htmlFor="exampleInputEmail1">Username</label>
                                            <input type="text" className="form-control" id="name" required
                                                onChange={this.handleChange} error={errors.name} placeholder="Username" />
                                            <span className="red-text">{errors.name}</span>
                                        </div>
                                        <div className="form-group">
                                            <label htmlFor="exampleInputEmail1">Email address</label>
                                            <input type="email" className="form-control" id="email" required
                                                onChange={this.handleChange} error={errors.email} placeholder="Enter email"

                                            />
                                            <span className="red-text">{errors.email}</span>
                                        </div>
                                        <div className="form-group">
                                            <label htmlFor="exampleInputPassword1">Password</label>
                                            <input type="password" className="form-control" id="password" required
                                                onChange={this.handleChange} error={errors.password} placeholder="Password" />
                                            <span className="red-text">{errors.password}</span>
                                        </div>
                                        <div className="login text-center">
                                            <button type="submit" className="btn btn-contact-us">Sign Up</button>
                                        </div>
                                        <div className="connect">
                                            <h2><Link to="/login"> You already have an account? Sign In</Link></h2>
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                <Footer />
                {/* <!-- Form ends here --> */}
            </div>
        )
    }
}

Register.propTypes = {
    registerUser: PropTypes.func.isRequired,
    auth: PropTypes.object.isRequired,
    errors: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
    auth: state.auth,
    errors: state.errors
});

export default connect(mapStateToProps, { registerUser })(withRouter(Register));



