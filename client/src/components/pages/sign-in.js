import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import Footer from './footer'
import { connect } from 'react-redux'
import PropTypes from "prop-types";
import { loginUser } from "../../store/actions/authActions";
import Navbar from './Navbar';
// import classnames from "classnames";

export class Login extends Component {
    state = {
        email: '',
        password: '',
        errors: {}
    }

    componentWillReceiveProps(nextProps) {
        if (nextProps.auth.isAuthenticated) {
            this.props.history.push("/dashboard"); // push user to dashboard when they login
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

        const userData = {
            email: this.state.email,
            password: this.state.password
        };
        // console.log(userData);

        this.props.loginUser(userData);

        // console.log(this.state);
        // this.props.createProject(this.state)
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
                                    <form noValidate onSubmit={this.handleSubmit}>
                                        <div className="main-text">
                                            <h2><i className="fa fa-edit"></i>Login</h2>
                                        </div>
                                        <div className="form-group">
                                            <label htmlFor="exampleInputEmail1">Email address</label>
                                            <input type="email" className="form-control"
                                                aria-describedby="emailHelp" id="email" error={errors.email} required onChange={this.handleChange} placeholder="Enter email"
                                            // className={classnames("", {
                                            //     invalid: errors.email || errors.emailnotfound
                                            // })}
                                            />
                                            <span className="red-text">
                                                {errors.email}
                                                {errors.emailnotfound}
                                            </span>
                                        </div>
                                        <div className="form-group">
                                            <label htmlFor="exampleInputPassword1">Password</label>
                                            <input type="password" className="form-control"
                                                id="password" onChange={this.handleChange} error={errors.password} required placeholder="Password"
                                            // className={classnames("", {
                                            //     invalid: errors.password || errors.passwordincorrect
                                            // })}
                                            />
                                            <span className="red-text"> {errors.password} {errors.passwordincorrect}</span>
                                        </div>
                                        {/* <div className="row">
                                            <div className="form-group form-check check-login col-md-6">
                                                <input type="checkbox" className="form-check-input" id="exampleCheck1" />
                                                <label className="form-check-label" htmlFor="exampleCheck1">Remember me</label>
                                            </div>
                                            <div className="col-md-6 text-right login-txt">
                                                <Link to="">
                                                    Forget Password
                                </Link>

                                            </div>
                                        </div> */}
                                        <div className="login">
                                            <button type="submit" className="btn btn-login btn-block">Login in</button>
                                        </div>
                                        {/* <div className="connect">
                                            <h2>Or connect with</h2>
                                        </div> */}
                                        {/* <div className="row fg-buttons">
                                            <div className="col-md-6">
                                                <Link to="" className="btn btn-facebook"><i className="fa fa-facebook"></i> Facebook</Link>
                                            </div>
                                            <div className="col-md-6">
                                                <Link to="" className="btn btn-google"><i className="fa fa-google"></i>Google</Link>
                                            </div>
                                        </div> */}
                                        <div className="connect">
                                            <h2><Link to="/register"> Dont have an account? Register</Link></h2>
                                        </div>
                                    </form>
                                </div>
                                {/* <div className="col-md-5 login-img">
                                <img src="../images/vector1.svg" className="img-responsive" alt="" />
                            </div> */}
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

Login.propTypes = {
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
    { loginUser }
)(Login);




