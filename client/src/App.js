import './App.css';
import Nav from './nav.js'
import Customer from './customer.js'
import transaction from './transaction.js'
import {BrowserRouter as Router,Route,Link }from "react-router-dom";
function App() {
  return (
    <Router>
      <Nav/>
      <Route path="/" exact component={Home}/>
      <Route path="/customer" exact component={Customer}/>
      <Route path="/transaction" exact component={transaction}/>
    </Router>
  );
}

const Home=()=>(
  <div className="App">
      <div id="div1">
        <p id="p1">Spark Foundation Bank</p>
    </div>
    <div className="row">
        <div className="column">
            <button className="b1" type="button"><Link to='/customer'><a href="customer.html">View Customer Details</a></Link></button>
        </div>
        <div className="column">
            <button className="b1" type="button"><Link to='/transaction'><a href="transaction.html">View Existing Transactions</a></Link></button>
        </div>
    </div>
    <div id="div2">
        <p id="p2">Contact Us</p>
        <p className="p3">Email1 : spark1@email.com</p>
        <p className="p3">Email2 : sparkbank@email.com</p>  
        <p className="p3"> Contact 1: 9876543210</p>
        <p className="p3"> Contact 1: 9876543210</p>
  

  </div>
  
    </div>
)
export default App;
