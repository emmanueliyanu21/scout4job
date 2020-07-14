import React from 'react'
import data from '../../data'

function Jobscreen(props) {
    console.log(props.match.params.id)
    const job = data.jobs.find(x => x._id === props.match.params.id)
    return (
        <div>
            <h2>{job.name}</h2>
        </div>
    )
}

export default Jobscreen
