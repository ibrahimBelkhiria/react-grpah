import React from 'react';


function IssueDetails(props: any) {
    const {issue} = props;
    console.log(issue)
    return (
    <div>
        <div className="card card-style">
            <div className="card-body">
            <h4 className="card-title">{issue.title}</h4><span className={issue.state==="OPEN"?"badge badge-success":"badge badge-danger"}>{issue.state}</span>
            <div className="card-footer">   
            <a href={issue.url} target="_blank" rel='noopener noreferrer' >View Issue on github</a>
            <div>Created By<a href={issue.author.url} target="_blank" rel='noopener noreferrer' >{issue.author.login}</a></div>

            </div>  
            </div>
        </div>
        {issue.comments.nodes.length!==0 ?
           <div className="box">
            { issue.comments.nodes.map((comment:any) => (
                <div  key={comment.id} className="comment">
                <div  className="list-group-item list-group-item-action comment-style">
                <div className="d-flex w-100 justify-content-between">
                <small>Commented By <strong> <a href={comment.author.url} target="_blank" rel='noopener noreferrer' >{comment.author.login}</a></strong></small>
                </div>
                <p className="mb-1">{comment.body}</p>
                <small><a href={comment.url} target="_blank" rel='noopener noreferrer' >View Comment on github</a></small>
                </div>
                </div>
                ))}
            </div>: <h3 className="text-center no-coment">No Comments Yet</h3>
        
        }
    
            
    </div>
    )
}

export default IssueDetails
