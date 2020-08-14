import React from 'react'
import { useQuery } from '@apollo/client';
import { GET_ISSUE_BY_NUMBER } from '../graphql/queries';
import IssueDetails from '../components/IssueDetails';


function SingleIssuePage(props:any) {
    const id = props.match.params.id ;
    console.log(typeof id)
    const {loading,data,error} = useQuery(GET_ISSUE_BY_NUMBER,
        {variables:{number:parseInt(id)
    }})

    if(loading) return <p>Loading data...</p>
    if( error) return <p>{error}</p>

    console.log(data);
    return (
        <div className="container">
            <IssueDetails issue={data.repository.issue}></IssueDetails>
        </div>
    )
}

export default SingleIssuePage
