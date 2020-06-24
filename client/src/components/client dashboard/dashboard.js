import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { logoutUser } from "../../store/actions/authActions";

class Dashboard extends Component {
  onLogoutClick = e => {
    e.preventDefault();
    this.props.logoutUser();
  };

  render() {
    const { user } = this.props.auth;
    return (
      <div style={{ height: "75vh" }} className="container valign-wrapper">
        <div className="row">
          <div className="col s12 center-align">
            {/* <button className="btn pull-left">  Profile </button> */}
            <button onClick={this.onLogoutClick} className="btn pull-right">  Logout </button>
          </div>
        </div>
        <div className="container">
          <div className="bk-dark-purple-dashboard">
            <div className="row pad-dashboard">
              <div className="col-md-2 dash-board-image ul-dash-board-image">
                <img src="./images/dashboard-image.jpg" />
              </div>
              <div className="col-md-6 profile-details">
                <h4>
                  <b>Hey dear </b> {user.name.split(" ")[0]}
                </h4>
                <p>UI/UX Designer</p>
              </div>
              <div className="col-md-4 dash-board-image">
                <ul className="ul-profile-list">
                  <li><i className="fa fa-phone"></i>&nbsp;  Phone: 0706-857-6214</li>
                  <li><i className="fa fa-envelope"></i> Email: emmanueliyanu2012@gmail.com</li>
                  <li><i className="fa fa-map-marker"></i>&nbsp;  Location: Lagos Nigeria</li>
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


          </div>

          <div className="tab-content mt-4">
            <div role="tabpanel" id="my-profile" class="tab-pane active">
              <div class="row">
                <div class="col-md-12 col-sm-12">
                  <div class="card">
                    <div class="card-header">
                      <strong>My Profile</strong>
                    </div>
                    <div class="list-group list-group-flush">
                      <a href="#" class="list-group-item list-group-item-action small">
                        Name: Oladejo Emmanuel Segun
                                        </a>
                      <a href="#" class="list-group-item list-group-item-action small">
                        ID Number: 238301469
                                        </a>
                      <a href="#" class="list-group-item list-group-item-action small">
                        Address: No 36, Fetuga Str, Lady-Lak, Lagos
                                        </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/*  */}
            <div role="tabpanel" id="job-search" class="tab-pane fade">
              <div class="row">
                <div class="col-md-12 col-sm-12">
                  <div class="card">
                    <div class="card-header">
                      <strong>Available Jobs</strong>
                    </div>
                    <div class="list-group list-group-flush">
                      <a href="" class="list-group-item list-group-item-action small">
                        Andela Senior Front End Developer Apply
                                        </a>
                      <a href="#" class="list-group-item list-group-item-action small">
                        Andela Senior Front End Developer Apply
                                        </a>
                      <a href="#" class="list-group-item list-group-item-action small">
                        Andela Senior Front End Developer Apply
                                        </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/*  */}
            <div role="tabpanel" id="cover-letter" class="tab-pane fade">
              <div class="row">
                <div class="col-md-12 col-sm-12">
                  <div class="card">
                    <div class="card-header">
                      <strong>Cover Letter</strong>
                    </div>
                    <div class="list-group list-group-flush">
                      <a href="#" class="list-group-item list-group-item-action small">
                        Name: Oladejo Emmanuel Segun
                                        </a>
                      <a href="#" class="list-group-item list-group-item-action small">
                        ID Number: 238301469
                                        </a>
                      <a href="#" class="list-group-item list-group-item-action small">
                        Address: No 36, Fetuga Str, Lady-Lak, Lagos
                                        </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/*  */}
            <div role="tabpanel" id="curriculum-vitae" class="tab-pane fade">
              <div class="row">
                <div class="col-md-12 col-sm-12">
                  <div class="card">
                    <div class="card-header">
                      <strong>Curriculum Vitae</strong>
                    </div>
                    <div class="list-group list-group-flush">
                      <a href="#" class="list-group-item list-group-item-action small">
                        Name: Oladejo Emmanuel Segun
                                        </a>
                      <a href="#" class="list-group-item list-group-item-action small">
                        ID Number: 238301469
                                        </a>
                      <a href="#" class="list-group-item list-group-item-action small">
                        Address: No 36, Fetuga Str, Lady-Lak, Lagos
                                        </a>
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
  auth: state.auth
});
export default connect(
  mapStateToProps,
  { logoutUser }
)(Dashboard);