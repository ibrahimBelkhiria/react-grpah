import React from 'react'
import { useQuery } from '@apollo/client'
import { GET_REPO_INFO } from '../graphql/queries'
import Spinner from './Spinner';


function RepoInfo() {

    const {loading,data,error} = useQuery(GET_REPO_INFO);
    if (loading) return ( <Spinner/>);
    if(error) return (<p>error</p>)
    console.log(data);
    return (
        <ul className="list-group list-style">
        <li className="list-group-item d-flex justify-content-between align-items-center">
           Total Stars
          <span className="badge badge-primary badge-pill">{data.repository.stargazers.totalCount}</span>
        </li>
        <li className="list-group-item d-flex justify-content-between align-items-center">
            Total Forks
             <span className="badge badge-primary badge-pill">{data.repository.forkCount}</span>
        </li>
        <li className="list-group-item d-flex justify-content-between align-items-center">
            Pull requests 
    <span className="badge badge-primary badge-pill">{data.repository.pullRequests.totalCount}</span>
        </li>
      </ul>
        
    )
}

export default RepoInfo
