import { gql } from '@apollo/client';

export const GET_REPO_INFO = gql`
query { 
  repository(name:"react",owner:"facebook"){
    id
    __typename
    pullRequests{
      totalCount
    }
  stargazers{
    totalCount
  }
  forkCount
}
}`


export const SEARCH_QUERY = gql`
query($query:String!,$after:String) { 
    search(type:ISSUE,query:$query,first:10,after:$after){
      __typename
      issueCount
      pageInfo{
        endCursor
      }
      nodes{
        ... on Issue{
          id
          title
          number
          body
          url
          state
          author{
            login
            avatarUrl
              url
          }
          
        }
        __typename
      }
      
    }
  }
`
export const GET_ISSUE_BY_NUMBER = gql`
query($number:Int!) { 
  repository(name:"react",owner:"facebook"){
    createdAt
    issue(number:$number){
      title
      body
      state
      url
      author{
        avatarUrl
        login
        url
      }
      createdAt
      comments(first:5){
        totalCount
        nodes{
            url
            id
            body
            createdAt
          	author{
              login
              avatarUrl
              url
            }
        }
      }
      
    }
  }
}
`