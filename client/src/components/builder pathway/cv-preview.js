import React from 'react'
import { Link } from 'react-router-dom'

const CVPreview = () => {
    return (
        <div className="">
            <i class="fas fa-h2    ">CV preview appear here</i>
            <Link to="/finalize">Back</Link>
            <Link to="/dashboard">Next</Link>
        </div>
    )
}

export default CVPreview
