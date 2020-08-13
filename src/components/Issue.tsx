import React from 'react'

interface Props {
    issue:any
}

function Issue(props: Props) {
    const {issue} = props

    return (
        <div>
            <h2>{issue.title}</h2>
            <p>{issue.body}</p>
            <span>{issue.state}</span>
            <a href={issue.url} target="_blank" rel='noopener noreferrer' >View issue on github</a>
        </div>
    )
}

export default Issue
