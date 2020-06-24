import React, { Component } from 'react'

export class index extends Component {
    render() {
        return (
            <div>
                <h2>All posts</h2>

                {/* {{> home / form - msgs}} */}

                <table class="table table-bordered">

                    <thead>
                        <tr>
                            <th>Id</th>
                            <th>File</th>
                            <th>Title</th>
                            <th>Amount</th>
                            <th>Location</th>
                            <th>Status</th>
                            <th>Stack</th>
                            <th>Experience</th>
                            <th>Category</th>
                            <th>Allow Comment</th>
                            <th>Date</th>
                        </tr>
                    </thead>
                    <tbody>
                        {/* {{#each posts}} */}
                        <tr>
                            {/* <td>{{ id }}</td> */}
                            {/* <td><img height="50" src="/uploads/{{file}}" alt="" /></td> */}
                            {/* <td>{{ title }}</td> */}
                            {/* <td>{{ amount }}</td> */}
                            {/* <td>{{ location }}</td> */}
                            {/* <td>{{ status }}</td> */}
                            {/* <td>{{ stack }}</td> */}
                            {/* <td>{{ experience }}</td> */}
                            {/* <td>{{ category }}</td> */}
                            {/* <td>{{ allowComments }}</td> */}
                            {/* <td><a href="/admin/posts/edit/{{id}}" class="btn btn-success">Edit</a></td> */}
                            <td>
                                <form action="/admin/posts/{{id}}?_method=DELETE" method="post">
                                    <button type="submit" class="btn btn-danger">DELETE</button>
                                </form>
                            </td>
                            {/* <td>{{ date }}</td> */}
                        </tr>
                        {/* {{/ each}} */}
                    </tbody>
                </table>
            </div>
        )
    }
}

export default index
