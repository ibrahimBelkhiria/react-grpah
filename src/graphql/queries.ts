import { gql } from '@apollo/client';


export const GET_REACT_REPOSITORY_ISSUES = gql`
query { 
  repository(owner:"facebook", name:"react") {
    issues(last:20, states:CLOSED) {
      edges {
        node {
          title
          url
          id
        }
      }
    }
  }
}
`

export const SEARCH_QUERY = gql`
query($query:String!) { 
    search(type:ISSUE,query:$query,first:10){
      __typename
      issueCount
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
          comments(first:5){
            totalCount
            nodes{
              author{
                 login
                  avatarUrl
                  url
              }
              body
            }
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
      }
      createdAt
      comments(first:5){
        totalCount
        nodes{
            url
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