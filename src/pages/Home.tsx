import React, { useState } from 'react';
import { useQuery } from '@apollo/client';
import {SEARCH_QUERY} from '../graphql/queries';
import '../App.css';
import Issue from '../components/Issue';

function Home() {
  
    const [keyword,setKeyword] = useState("");
    const [open,setOpen] = useState("");
    const [closed,setClosed] = useState("");

   const  handleChange = (input: string) => (e:React.ChangeEvent<HTMLInputElement>) => {
     if(input==="open" && closed ) setClosed(""); 
     if(input==="closed" && open ) setOpen(""); 
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

    const { loading, error, data ,refetch} = useQuery(SEARCH_QUERY,{variables:{query}});

  if (loading) return ( <div className="text-center">
                      <div className="spinner-border" role="status">
                        <span className="sr-only">Loading...</span>
                      </div>
                      </div>);
  if (error) return <p>error {console.log(error)}</p>;
  return (
    <div className="container">
      <form >
          <div className="form-row">
          <div className="form-group col-md-6">
            <label htmlFor="search">Search Issues by keyword</label>
            <input type="search" className="form-control" id="keyword" name="keyword" onChange={handleChange("keyword")}/>
          </div>
          </div>
          <div className="form-row">
          <legend className="col-form-label col-sm-2 pt-0">STATUS</legend>
          <div className="form-group col-md-6">
            <div className="form-check form-check-inline">
              <input className="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio1" onChange={handleChange("open")} value="open"/>
              <label className="form-check-label" htmlFor="inlineRadio1">OPEN</label>
            </div>
             <div className="form-check form-check-inline">
              <input className="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio2" onChange={handleChange("closed")} value="closed"/>
              <label className="form-check-label" htmlFor="inlineRadio2">CLOSED</label>
            </div>
          </div>
          </div>
    </form>
    <button onClick={()=>refetch({query:buildQuery()})} className="btn btn-primary"> Search</button>
    <div className="row">
    <div className="col-md-8">
     <div>Total issues : {data.search.issueCount}</div>
      { 
        data.search.nodes.map((issue:any)=> <Issue issue={issue} key={issue.number}></Issue>)
      }
      </div>
      <div className="col-md-4">
      <ul className="list-group">
        <li className="list-group-item d-flex justify-content-between align-items-center">
          Cras justo odio
          <span className="badge badge-primary badge-pill">14</span>
        </li>
        <li className="list-group-item d-flex justify-content-between align-items-center">
          Dapibus ac facilisis in
          <span className="badge badge-primary badge-pill">2</span>
        </li>
        <li className="list-group-item d-flex justify-content-between align-items-center">
          Morbi leo risus
          <span className="badge badge-primary badge-pill">1</span>
        </li>
      </ul>
      </div>
      </div>
    </div>
  )


}

export default Home;
