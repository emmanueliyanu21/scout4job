import React from 'react'
import { Link } from 'react-router-dom'

const Adminsidenav = () => {
    return (
        <div className="">
            <ul class="navbar-nav navbar-sidenav" id="exampleAccordion">
                <li class="nav-item" data-toggle="tooltip" data-placement="right" title="Dashboard">
                    <a class="nav-link" href="/admin">
                        <i class="fa fa-fw fa-dashboard"></i>
                        <span class="nav-link-text">Dashboard</span>
                    </a>
                </li>
                <li class="nav-item" data-toggle="tooltip" data-placement="right" title="Charts">
                    <a class="nav-link" href="charts.html">
                        <i class="fa fa-fw fa-area-chart"></i>
                        <span class="nav-link-text">Charts</span>
                    </a>
                </li>
                <li class="nav-item" data-toggle="tooltip" data-placement="right" title="Tables">
                    <a class="nav-link" href="tables.html">
                        <i class="fa fa-fw fa-table"></i>
                        <span class="nav-link-text">Tables</span>
                    </a>
                </li>
                <li class="nav-item" data-toggle="tooltip" data-placement="right" title="Components">
                    <a class="nav-link nav-link-collapse collapsed" data-toggle="collapse" href="#collapsePosts" data-parent="#exampleAccordion">
                        <i class="fa fa-fw fa-wrench"></i>
                        <span class="nav-link-text">Posts</span>
                    </a>
                    <ul class="sidenav-second-level collapse" id="collapsePosts">
                        <li>
                            <Link to="/post-index">All Posts</Link>
                        </li>
                        <li>
                            <Link to="/createpost">Create Post</Link>
                        </li>
                    </ul>
                </li>

                <li class="nav-item" data-toggle="tooltip" data-placement="right" title="Link">
                    <a class="nav-link" href="/admin/categories">
                        <i class="fa fa-fw fa-link"></i>
                        <span class="nav-link-text">Categories</span>
                    </a>
                </li>
                <li class="nav-item" data-toggle="tooltip" data-placement="right" title="Link">
                    <a class="nav-link" href="/admin/comments">
                        <i class="fa fa-fw fa-gear"></i>
                        <span class="nav-link-text">Comments</span>
                    </a>
                </li>

            </ul>
        </div>
    )
}

export default Adminsidenav
