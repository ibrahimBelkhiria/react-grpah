import React from 'react'
import { Link } from 'react-router-dom'

interface Props {
    issue:any
}

function Issue(props: Props) {
    const {issue} = props

    return (
        <div className="card">
            <div className="card-body">
            <h4 className="card-title">{issue.title}</h4><span className={issue.state==="OPEN"?"badge badge-success":"badge badge-danger"}>{issue.state}</span>
             <div className="card-footer"> 
             <Link to={`/issue/${issue.number}`} className="show-details">View Details</Link>   
             <a href={issue.url} target="_blank" rel='noopener noreferrer' >View Issue on github</a>
             </div>  
            </div>
        </div>
    )
}

export default Issue
