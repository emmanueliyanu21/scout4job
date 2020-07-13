import React, { Component } from 'react'
import { Link, withRouter } from 'react-router-dom'
import { connect } from 'react-redux';
import Footer from './footer'
import PropTypes from "prop-types";
import { registerUser } from "../../store/actions/authActions";
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

        console.log(newUser);
        // console.log(this.state);
        // this.props.createProject(this.state)

        this.props.registerUser(newUser, this.props.history);
    }


    render() {
        const { errors } = this.state;
        return (
            <div>
                {/* < !--Form starts here-- > */}
                <section class="bk-grey bk-sign-up">
                    <div className="overlay">
                        <div class="container">
                            <div class="row">
                                <div class="col-md-12 login-form">
                                    <form noValidate onSubmit={this.handleSubmit} action="PO">
                                        <div class="main-text">
                                            <h2><i class="fa fa-user"></i> Sign Up</h2>
                                        </div>
                                        {/* <div class="signup-cat row">
                                        <div class="col-md-6">
                                            <button class="btn btn-candidate">Candidate</button>
                                        </div>
                                        <div class="col-md-6">
                                            <button class="btn btn-candidate">Employee</button>
                                        </div>
                                    </div> */}
                                        <div class="form-group">
                                            <label htmlFor="exampleInputEmail1">Username</label>
                                            <input type="text" class="form-control" id="name" required
                                                onChange={this.handleChange} error={errors.name} placeholder="Username"
                                            // className={classnames("", {
                                            //     invalid: errors.name
                                            // })}
                                            />
                                            <span className="red-text">{errors.name}</span>
                                        </div>
                                        <div class="form-group">
                                            <label htmlFor="exampleInputEmail1">Email address</label>
                                            <input type="email" class="form-control" id="email" required
                                                onChange={this.handleChange} error={errors.email} placeholder="Enter email"
                                            // className={classnames("", {
                                            //     invalid: errors.email
                                            // })}
                                            />
                                            <span className="red-text">{errors.email}</span>
                                        </div>
                                        <div class="form-group">
                                            <label htmlFor="exampleInputPassword1">Password</label>
                                            <input type="password" class="form-control" id="password" required
                                                onChange={this.handleChange} error={errors.password} placeholder="Password"
                                            // className={classnames("", {
                                            //     invalid: errors.password
                                            // })}
                                            />
                                            <span className="red-text">{errors.password}</span>
                                        </div>
                                        <div class="row">
                                            <div class="form-group form-check check-login col-md-6">
                                                <input type="checkbox" class="form-check-input" id="exampleCheck1" />
                                                <label class="form-check-label" for="exampleCheck1">Remember me</label>
                                            </div>
                                            <div class="col-md-6 text-right login-txt">
                                                <Link to="">
                                                    Forget Password
                                </Link>

                                            </div>
                                        </div>
                                        <div class="login">
                                            <button type="submit" class="btn btn-login btn-block">Sign Up</button>
                                        </div>
                                        <div class="connect">
                                            <h2>Or connect with</h2>
                                        </div>
                                        {/* <div class="row fg-buttons">
                                            <div class="col-md-6">
                                                <Link to="" class="btn btn-facebook"><i class="fa fa-facebook"></i> Facebook</Link>
                                            </div>
                                            <div class="col-md-6">
                                                <Link to="" class="btn btn-google"><i class="fa fa-google"></i>Google</Link>
                                            </div>
                                        </div> */}
                                        <div class="connect">
                                            <h2><Link to="/login"> You already have an account? Sign In</Link></h2>
                                        </div>
                                    </form>
                                </div>
                                {/* <div class="col-md-5 login-img">
                                <img src="../images/vector1.svg" class="img-responsive" alt="" />
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



