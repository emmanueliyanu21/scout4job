import React, { Component } from 'react'
import { Link, withRouter } from 'react-router-dom'
import { connect } from 'react-redux'
import PropTypes from "prop-types";
import { registerUser } from "../../../store/actions/authActions";
// import Footer from '../../pages/footer'

class CreatePost extends Component {
    state = {
        title: '',
        amount: '',
        location: "",
        status: "",
        category: "",
        stack: "",
        experience: "",
        content: "",
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

        const newPost = {
            title: this.state.title,
            amount: this.state.amount,
            location: this.state.location,
            status: this.state.status,
            category: this.state.category,
            stack: this.state.stack,
            experience: this.state.experience,
            content: this.state.content,
        };

        console.log(newPost);
        // console.log(this.state);
        // this.props.createProject(this.state)

        this.props.registerUser(newPost, this.props.history);
    }

    handleChange
    render() {
        return (
            <div className="container">
                <div className="row">
                    <div className="col-md-12">
                        <h1>Create Posts</h1>

                        {/* {{!-- {{#each errors}} */}
                        <div className="alert alert-danger">
                            {/* {{ message }} */}
                        </div>
                        {/* {{/ each}} --}} */}

                        <form onSubmit={this.handleSubmit}>
                            <div class="form-group">
                                <label for="title">Title</label>
                                <input type="text" onChange={this.handleChange} class="form-control" id="title" placeholder="Enter Title" />
                            </div>
                            <div class="form-group">
                                <label for="title">Amount</label>
                                <select id="amount" class="form-control" onChange={this.handleChange}>
                                    <option value="&#8358;100,000 - &#8358;150,000">&#8358;100,000 - &#8358;150,000</option>
                                    <option value="&#8358;150,000 - &#8358;200,000">&#8358;150,000 - &#8358;200,000</option>
                                    <option value="&#8358;200,000 - &#8358;250,000">&#8358;200,000 - &#8358;250,000</option>
                                    <option value="&#8358;250,000 - &#8358;350,000">&#8358;250,000 - &#8358;350,000</option>
                                    <option value="&#8358;350,000 - &#8358;700,000">&#8358;350,000 - &#8358;700,000</option>
                                </select>
                            </div>
                            <div class="form-group">
                                <label for="title">Location</label>
                                <select id="location" class="form-control" onChange={this.handleChange}>
                                    <option value="Lagos, Nigeria">Lagos, Nigeria</option>
                                    <option value="Ibadan, Nigeria">Ibadan, Nigeria</option>
                                    <option value="Port Harcourt, Nigeria">Port Harcourt, Nigeria</option>
                                    <option value="Abuja, Nigeria">Abuja, Nigeria</option>
                                </select>
                            </div>
                            <div class="form-group">
                                <label for="title">Status</label>
                                <select id="status" class="form-control" onChange={this.handleChange}>
                                    <option value="public">Public</option>
                                    <option value="private">Private</option>
                                    <option value="draft">Draft</option>
                                </select>
                            </div>
                            <div class="form-group">
                                <label for="title">Category</label>
                                <select id="category" class="form-control" onChange={this.handleChange}>
                                    {/* {{#each categories}} */}
                                    {/* <option value="{{id}}">{{ name }}</option> */}
                                    {/* {{/ each}} */}
                                </select>
                            </div>
                            <div class="form-group">
                                <label for="allowComments">Allow Comment</label>
                                <input type="checkbox" class="form-control" id="allowComments" onChange={this.handleChange} />
                            </div>
                            <div class="row">
                                <div class="col-md-6">
                                    <div class="form-group">
                                        <label for="title">Stack</label>
                                        <input type="text" onChange={this.handleChange} class="form-control" id="stack" placeholder="Enter Stack" />
                                    </div>
                                </div>
                                <div class="col-md-6">
                                    <div class="form-group">
                                        <label for="title">Experience</label>
                                        <select id="experience" class="form-control" onChange={this.handleChange}>
                                            <option value="Senior">Senior</option>
                                            <option value="Intermediate">Intermediate</option>
                                            <option value="Draft">Junior</option>
                                        </select>
                                    </div>
                                </div>
                            </div>
                            <div class="form-group">
                                <label for="body">Body</label>
                                <textarea cols="30" onChange={this.handleChange} rows="10" class="form-control" id="content" placeholder="Body"></textarea>
                            </div>
                            <button class="btn btn-primary btn-post-submit" type="submit">Submit</button>
                        </form>
                        {/* <Footer /> */}
                    </div>
                </div>
            </div>
        )
    }
}

CreatePost.propTypes = {
    registerUser: PropTypes.func.isRequired,
    auth: PropTypes.object.isRequired,
    errors: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
    auth: state.auth,
    errors: state.errors
});

export default connect(mapStateToProps, { registerUser })(withRouter(CreatePost));

