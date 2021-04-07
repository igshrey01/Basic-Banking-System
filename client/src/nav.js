import './nav.css';
import { HashLink as Link1 } from 'react-router-hash-link';
import {Link} from "react-router-dom";
function Nav(){
    return(
        <div>
            <div id="w1">
        
        <p id="welcome">Welcome to Spark Foundation Bank</p>
    </div>
    <div className ="topnav" id="12">
        <Link to='/'><a href="#div1">Home</a></Link>
		<Link to='/customer'><a href="customer.html">Customer Details</a></Link>
		<Link to='/transaction'><a href="transaction.html">Transaction History</a></Link>
		<Link1 to='/#div2'><p>Contact Us</p></Link1>
		
    </div>
        </div>
    
    );
}
export default Nav;