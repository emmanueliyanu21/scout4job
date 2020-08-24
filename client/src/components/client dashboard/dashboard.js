import React, { Component } from "react";
import PropTypes from "prop-types";
import { Link } from 'react-router-dom'
import { connect } from "react-redux";
import { logoutUser } from "../../store/actions/authActions";

class Dashboard extends Component {
  onLogoutClick = e => {
    e.preventDefault();
    this.props.logoutUser();
  };

  render() {
    console.log(this.props.covers);
    const covers = this.props.covers;
    const vitaes = this.props.vitaes;
    console.log(this.props.vitaes);
    const { user } = this.props.auth;
    return (
      <div style={{ height: "75vh" }} className="container valign-wrapper">
        <div className="row">
          <div className="col s12 center-align">
            {/* <button className="btn pull-left">  Profile </button> */}

          </div>
        </div>
        <div className="container">
          <div className="bk-dark-purple-dashboard">
            <div className="row pad-dashboard">
              <div className="col-md-2 dash-board-image ul-dash-board-image">
                <i className="fa fa-user-circle"></i>
                {/* <img src="./images/user.png" alt="" /> */}
              </div>
              <div className="col-md-6 profile-details">
                <h4>
                  <b>Hey dear </b> {user.name.split(" ")[0]}
                </h4>
                <p>{vitaes.jobTitle}</p>
              </div>
              <div className="col-md-4 dash-board-image">
                <ul className="ul-profile-list">
                  <li> Phone: {user.phoneNumber}</li>
                  <li> Email: {user.email} </li>
                  <li> Location: {vitaes.address}</li>
                </ul>
              </div>
            </div>
          </div>

          {/*  */}
          <div className="bk-dark-white pl-3 nav nav-tabs">
            {/* <button className="btn btn-general ">General</button> */}
            <button role="tab" data-toggle="tab" href="#my-profile" className="btn btn-general btn-gen">My Profile</button>
            <button role="tab" data-toggle="tab" href="#job-search" className="btn btn-general">Job </button>
            <button role="tab" data-toggle="tab" href="#cover-letter" className="btn btn-general ">Cover Letter</button>
            <button role="tab" data-toggle="tab" href="#curriculum-vitae" className="btn btn-general">Curriculum Vitae</button>
            <button onClick={this.onLogoutClick} className="btn pull-right">  Logout </button>

          </div>

          <div className="tab-content mt-4">
            <div role="tabpanel" id="my-profile" className="tab-pane active">
              <div className="row">
                <div className="col-md-12 col-sm-12">
                  <div className="card">
                    <div className="card-header">
                      <strong>My Profile</strong>
                    </div>
                    <div className="list-group list-group-flush">
                      <Link to="#" className="list-group-item list-group-item-action small">
                        Name:
                                        </Link>
                      <Link to="#" className="list-group-item list-group-item-action small">
                        ID Number:
                                        </Link>
                      <Link to="#" className="list-group-item list-group-item-action small">
                        Address:
                                        </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/*  */}
            <div role="tabpanel" id="job-search" className="tab-pane fade">
              <div className="row">
                <div className="col-md-12 col-sm-12">
                  <div className="card">
                    <div className="card-header">
                      <strong>Available Jobs</strong>
                    </div>
                    <div className="list-group list-group-flush">

                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/*  */}
            <div role="tabpanel" id="cover-letter" className="tab-pane fade">
              <div className="row">
                <div className="col-md-12 col-sm-12">
                  <div className="card">
                    <div className="card-header">
                      <strong>Cover Letter</strong>
                    </div>
                    <div className="list-group list-group-flush">
                      {/* {covers && covers.map(cover => {
                        return (
                          
                        )
                      })} */}
                      <h2 className="">{covers.fullName}</h2>
                      {/* <h2>{this.state.fullName}</h2> */}
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/*  */}
            <div role="tabpanel" id="curriculum-vitae" className="tab-pane fade">
              <div className="row">
                <div className="col-md-12 col-sm-12">
                  <div className="card">
                    <div className="card-header">
                      <strong>Curriculum Vitae</strong>
                    </div>
                    <div className="list-group list-group-flush white-page-cv">
                      <div className="output-details text-center">
                        {/* {vitaes && vitaes.map(vitae => {
                          return (
                            <div key={vitae.id}>
                              
                            </div>
                          )
                        })} */}
                        <h2 className="">{vitaes.firstName} {vitaes.lastName}</h2>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div >

    );
  }
}

Dashboard.propTypes = {
  logoutUser: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired
};
const mapStateToProps = state => ({
  auth: state.auth,
  vitaes: state.vitae.vitaes,
  covers: state.cover.covers,
});
export default connect(
  mapStateToProps,
  { logoutUser }
)(Dashboard);