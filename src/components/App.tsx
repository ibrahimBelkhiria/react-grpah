import React from 'react';
import {BrowserRouter as Router ,Route, Switch,} from 'react-router-dom';
import Home from '../pages/Home';
import SingleIssuePage from '../pages/SingleIssuePage';
import Navbar from './Navbar';
import Footer from './Footer';


function App() {
  
   return(
     <Router>
       <Navbar/>
       <Switch>
       <Route exact path="/" component={Home}/>
       <Route exact path="/issue/:id" component={SingleIssuePage}/>
       </Switch>
       <Footer/>
     </Router>
   )

}

export default App;
