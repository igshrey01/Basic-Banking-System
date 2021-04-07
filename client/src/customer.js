import React,{useEffect,useState} from "react";
import './customer.css';
import Axios from 'axios';


const transferMoney=(id,amount1)=>{
    var rid=parseInt(prompt("Enter account number of bank account to whom amount needs to be transferred : "))
    var amount=parseInt(prompt("Enter Amount To Be Transferred : "))
    
    if(amount<=0 || amount>amount1 || id===rid)
    {
        alert("...Check Details...")
        amount=parseInt(prompt("Enter Amount To Be Transferred : "))
    }
    else{
        Axios.put("http://localhost:3001/api/update",{
            id:id,
            amount:amount1-amount,
            id1:rid,
            amount1:amount
        })
        Axios.post("http://localhost:3001/api/update1",{
            id:id,
            rid:rid,
            amount:amount
        })
    }
    window.location.reload(false);
    

}
function Customer(){
    const [bank,setBank] = useState([])
    
    useEffect(()=>{

        Axios.get("http://localhost:3001/api/get").then((response)=>{    
        setBank(response.data)
        })
    })
    return(
    <div className="customer">
        <div class="row1">
            <div className="column4">
                <p classname="def">
                    Account Number
                </p>
            </div>
            <div className="column4">
                <p classname="def">
                    Name    
                </p>
            </div>
            <div className="column4">
                <p classname="def">
                    Email
                </p>
            </div>
            <div className="column4">
                <p classname="def">
                    Phone Number
                </p>
            </div>
            <div className="column4">
                <p classname="def">
                    Account Balance
                </p>
            </div>
        </div>
        {bank.map((val)=>{
            return <div className="bank1">
            <div className="row1">
            <div className="column3">
                <p>
                    {val.AccountNumber}
                </p>    
            </div>
            <div className="column3">
                <p>
                    {val.Name}
                </p>    
            </div>
            <div className="column3">
                <p>
                    {val.Email}
                </p>    
            </div>
            <div className="column3">
                <p>
                    {val.PhoneNo}
                </p>    
            </div>
            <div className="column3">
                <p>
                    {val.AccountBalance}
                </p>

                <button onClick={()=>transferMoney(val.AccountNumber,val.AccountBalance)}>Transfer Money</button>   
            </div>
        </div>
            </div>
        })}    
    </div>
    );
}
export default Customer;