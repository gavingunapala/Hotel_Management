import './App.css';
import React from "react";
import {BrowserRouter as Router, Route} from "react-router-dom"
import CustomerRegistration from "./Customer/CustomerRegistration";


function App() {
  return (


      <div>
        <Router>
          <div className="App" />
          <Route path="/" component={CustomerRegistration}/>
      </Router>
</div>
);
}


export default App;






