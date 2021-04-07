import React,{useEffect,useState} from "react";
import './transaction.css';
import Axios from 'axios';

function Transaction(){
    const [transaction,setTransaction] = useState([])
    useEffect(()=>{

        Axios.get("http://localhost:3001/api/transaction").then((response)=>{ 
        setTransaction(response.data)
        })
    })
    return(
        <div>
        <div className="row1">
        <div className="column2">
                <p>
                    Transaction Id
                </p>
            </div>    
            <div className="column2">
                <p>
                    Sender
                </p>
            </div>
            <div className="column2">
                <p>
                    Reciever
                </p>
            </div>
            <div className="column2">
                <p>
                    Date and Time Of Transaction
                </p>
            </div>
            
            
            <div className="column2">
                <p>
                    Transaction Amount
                </p>
            </div>
            
        </div>

        {transaction.map((val)=>{
            return <div className="bank1">
            <div className="row1">
            <div className="column1">
                <p>
                    {val.id}
                </p>    
            </div>
            <div className="column1">
                <p>
                    {val.fromemail}
                </p>    
            </div>
            <div className="column1">
                <p>
                    {val.toemail}
                </p>    
            </div>
            <div className="column1">
                <p>
                    {val.date}
                </p>    
            </div>
            
            <div className="column1">
                <p>
                    {val.transactionamount}
                </p>    
            </div>
        </div>
            </div>
        })}   
        </div>
    );

}
export default Transaction;