import React, { useState } from 'react';
import { useQuery } from '@apollo/client';
import {SEARCH_QUERY} from '../graphql/queries';
import '../App.css';
import Issue from '../components/Issue';
import Spinner from '../components/Spinner';
import RepoInfo from '../components/RepoInfo';

function Home(){
  
    const [keyword,setKeyword] = useState("");
    const [open,setOpen] = useState("");
    const [closed,setClosed] = useState("");

   const  handleChange = (input: string) => (e:React.ChangeEvent<HTMLInputElement>) => {
     if(input==="open" && closed ) setClosed(""); 
     if(input==="closed" && open ) setOpen(""); 
     if(input==="all") {setClosed("");setOpen("")};
     if(input==="open") setOpen(e.target.value);
     if(input==="closed") setClosed(e.target.value);
     if(input==="keyword") setKeyword(e.target.value);
      console.log(keyword,open,closed);
    };

    let query = `repo:facebook/react is:issue`;
    
    const buildQuery = () => {
      let OPEN= open?"is:open":"";
      let CLOSED = closed?"is:closed":"";
      let searchText = keyword;
      return `repo:facebook/react ${searchText} in:body,title is:issue ${OPEN} ${CLOSED}`;
    }

    const { loading, error, data ,refetch,fetchMore} = useQuery(SEARCH_QUERY,{variables:{query}});

  if (loading) return ( <Spinner/>);
  if (error) return <p>error {console.log(error)}</p>;
  return (
    <div className="container">
      <form onSubmit={(e)=>e.preventDefault()}>
          <div className="form-row">
          <div className="form-group col-md-6">
           <strong> <label htmlFor="search">Search by keyword in issues body or title</label></strong>
            <input type="search" className="form-control" placeholder="type keywords..." id="keyword" name="keyword" onChange={handleChange("keyword")}/>
          </div>
          </div>
          <div className="form-row">
          <legend className="col-form-label col-sm-2 pt-0"><strong>STATUS</strong></legend>
          <div className="form-group col-md-6">
            <div className="form-check form-check-inline">
              <input className="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio1" onChange={handleChange("open")} value="open"/>
              <label className="form-check-label" htmlFor="inlineRadio1">OPEN</label>
            </div>
             <div className="form-check form-check-inline">
              <input className="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio2" onChange={handleChange("closed")} value="closed"/>
              <label className="form-check-label" htmlFor="inlineRadio2">CLOSED</label>
            </div>
            <div className="form-check form-check-inline">
              <input className="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio3" onChange={handleChange("all")} value="closed"/>
              <label className="form-check-label" htmlFor="inlineRadio3">All(default)</label>
            </div>
          </div>
          </div>
    </form>
    <button onClick={()=>refetch({query:buildQuery()})} className="btn btn-primary"> Apply filters</button>
    <div className="row">
    <div className="col-md-8"  data-testid="result">
      <button type="button" className="btn btn-primary total">
          Results <span className="badge badge-light">{data.search.issueCount}</span>
      </button>
      { 
       data.search.nodes.map((issue:any)=> <Issue issue={issue} key={issue.number}></Issue>)
      }
      <button className="btn btn-primary load-more-btn"
        onClick={() => {
          const { endCursor } = data.search.pageInfo;

          fetchMore({
            variables: { after: endCursor },
            updateQuery: (prevResult:any, { fetchMoreResult }) => {
              console.log(prevResult);
              console.log(fetchMoreResult);
              fetchMoreResult.search.nodes = [
                ...prevResult.search.nodes,
                ...fetchMoreResult.search.nodes
              ];
              return fetchMoreResult;
            }
          });
        }}
      >
       Load more Issues
      </button>
      </div>

      <div className="col-md-4">
        {/* <RepoInfo/> */}
      </div>
      </div>
    </div>
  )


}

export default Home;
