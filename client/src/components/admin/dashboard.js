import React, { Component } from 'react'
import Adminsidenav from './admin-side-nav'
import Footer from './Adminfooter'
import { Link } from 'react-router-dom'
import PostIndex from './posts/index'
import CreatePost from './posts/create'

class Admindashboard extends Component {
    render() {
        return (
            <div className="row">
                <nav className="navbar navbar-expand-lg navbar-dark bg-dark fixed-top" id="mainNav">
                    <Link className="navbar-brand" to="/">Home Page</Link>
                    <button className="navbar-toggler navbar-toggler-right" type="button" data-toggle="collapse" data-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarResponsive">
                        <Adminsidenav />
                        <ul className="navbar-nav sidenav-toggler">
                            <li className="nav-item">
                                <Link className="nav-link text-center" id="sidenavToggler">
                                    <i className="fa fa-fw fa-angle-left"></i>
                                </Link>
                            </li>
                        </ul>
                        <ul className="navbar-nav ml-auto">
                            <li className="nav-item dropdown">
                                <Link className="nav-link dropdown-toggle mr-lg-2" id="messagesDropdown" to="#" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                    <i className="fa fa-fw fa-envelope"></i>
                                    <span className="d-lg-none">Messages
              <span class="badge badge-pill badge-primary">12 New</span>
                                    </span>
                                    <span className="indicator text-primary d-none d-lg-block">
                                        <i className="fa fa-fw fa-circle"></i>
                                    </span>
                                </Link>
                                <div className="dropdown-menu" aria-labelledby="messagesDropdown">
                                    <h6 className="dropdown-header">New Messages:</h6>
                                    <div className="dropdown-divider"></div>
                                    <Link className="dropdown-item" to="#">
                                        <strong>David Miller</strong>
                                        <span className="small float-right text-muted">11:21 AM</span>
                                        <div className="dropdown-message small">Hey there! This new version of SB Admin is pretty awesome! These messages clip off when they reach the end of the box so they don't overflow over to the sides!</div>
                                    </Link>
                                    <div className="dropdown-divider"></div>
                                    <Link className="dropdown-item" to="#">
                                        <strong>Jane Smith</strong>
                                        <span className="small float-right text-muted">11:21 AM</span>
                                        <div className="dropdown-message small">I was wondering if you could meet for an appointment at 3:00 instead of 4:00. Thanks!</div>
                                    </Link>
                                    <div className="dropdown-divider"></div>
                                    <Link className="dropdown-item" to="#">
                                        <strong>John Doe</strong>
                                        <span className="small float-right text-muted">11:21 AM</span>
                                        <div className="dropdown-message small">I've sent the final files over to you for review. When you're able to sign off of them let me know and we can discuss distribution.</div>
                                    </Link>
                                    <div className="dropdown-divider"></div>
                                    <Link className="dropdown-item small" to="/">View all messages</Link>
                                </div>
                            </li>
                            <li className="nav-item dropdown">
                                <Link className="nav-link dropdown-toggle mr-lg-2" id="alertsDropdown" to="#" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                    <i className="fa fa-fw fa-bell"></i>
                                    <span className="d-lg-none">Alerts
              <span class="badge badge-pill badge-warning">6 New</span>
                                    </span>
                                    <span className="indicator text-warning d-none d-lg-block">
                                        <i className="fa fa-fw fa-circle"></i>
                                    </span>
                                </Link>
                                <div className="dropdown-menu" aria-labelledby="alertsDropdown">
                                    <h6 className="dropdown-header">New Alerts:</h6>
                                    <div className="dropdown-divider"></div>
                                    <Link className="dropdown-item" to="#">
                                        <span class="text-success">
                                            <strong>
                                                <i className="fa fa-long-arrow-up fa-fw"></i>Status Update</strong>
                                        </span>
                                        <span className="small float-right text-muted">11:21 AM</span>
                                        <div className="dropdown-message small">This is an automated server response message. All systems are online.</div>
                                    </Link>
                                    <div className="dropdown-divider"></div>
                                    <Link className="dropdown-item" to="#">
                                        <span className="text-danger">
                                            <strong>
                                                <i className="fa fa-long-arrow-down fa-fw"></i>Status Update</strong>
                                        </span>
                                        <span className="small float-right text-muted">11:21 AM</span>
                                        <div className="dropdown-message small">This is an automated server response message. All systems are online.</div>
                                    </Link>
                                    <div className="dropdown-divider"></div>
                                    <Link class="dropdown-item" to="#">
                                        <span className="text-success">
                                            <strong>
                                                <i className="fa fa-long-arrow-up fa-fw"></i>Status Update</strong>
                                        </span>
                                        <span className="small float-right text-muted">11:21 AM</span>
                                        <div className="dropdown-message small">This is an automated server response message. All systems are online.</div>
                                    </Link>
                                    <div className="dropdown-divider"></div>
                                    <Link className="dropdown-item small" to="#">View all alerts</Link>
                                </div>
                            </li>
                            <li className="nav-item">
                                <form className="form-inline my-2 my-lg-0 mr-lg-2">
                                    <div className="input-group">
                                        <input className="form-control" type="text" placeholder="Search for..." />
                                        <span className="input-group-btn">
                                            <button className="btn btn-primary" type="button">
                                                <i className="fa fa-search"></i>
                                            </button>
                                        </span>
                                    </div>
                                </form>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" data-toggle="modal" data-target="#exampleModal">
                                    <i className="fa fa-user"></i>
                                    {/* {{#if user}}{{ user.firstName }}{{/if}} */}
                                    <i className="fa fa-fw fa-sign-out"></i>Logout</Link>
                            </li>
                        </ul>
                    </div>
                </nav>
                <div className="content-wrapper">
                    <div className="container-fluid">
                        <ol className="breadcrumb">
                            <li class="breadcrumb-item">
                                <Link to="index.html">Dashboard</Link>
                            </li>
                            <li className="breadcrumb-item active">Blank Page</li>
                        </ol>
                        <div className="row body-content">
                            <div className="col-md-12">
                                {/* <h1>{{ title }}</h1> */}
                                {/* {{{body}}} */}
                                {/* <PostIndex /> */}
                                <CreatePost />
                            </div>
                        </div>
                    </div>
                    <Footer />
                </div>
            </div>
        )
    }
}

export default Admindashboard
