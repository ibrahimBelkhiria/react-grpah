import React from 'react';


function IssueDetails(props: any) {
    const {issue} = props

    return (
    <div>
        <div className="card">
            <div className="card-body">
            <h4 className="card-title">{issue.title}</h4><span className={issue.state==="OPEN"?"badge badge-success":"badge badge-danger"}>{issue.state}</span>
            <div className="card-footer">   
            <a href={issue.url} target="_blank" rel='noopener noreferrer' >View Issue on github</a>
            </div>  
            </div>
        </div>
        <div className="list-group">
            
        </div>
            <div className="comment">
            {issue.comments.nodes.map((comment:any) => (

                <div className="list-group-item list-group-item-action">
                <div className="d-flex w-100 justify-content-between">
                <h5 className="mb-1">List group item heading</h5>
                <small>Commented By <strong> {comment.author.login}</strong></small>
                </div>
            <p className="mb-1">{comment.body}</p>
                <small>Donec id elit non mi porta.</small>
                </div>

            ))}
            </div>
    </div>
    )
}

export default IssueDetails
