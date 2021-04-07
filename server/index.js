var express=require('express')
var app=express()
var mysql=require('mysql')
var bodyParser=require('body-parser')
var cors=require('cors')
const { response } = require('express')
app.use(cors())
app.use(express.json())
app.use(bodyParser.urlencoded({extension:true}))
const db=mysql.createPool({
    host:'localhost',
    user:'root',
    password:'Itsmeshrey1@',
    database:'banktransfer'
})

app.get('/api/transaction',(req,res)=>{
    const sqlselect="SELECT * FROM transaction";
    db.query(sqlselect,(err,result)=>{
        res.send(result)
    })
})
var a=null
var a1=[5800,3200,3000,5000,1200,4000,3000,5000,2000,4000]
const sqlSelect1="SELECT * FROM customer_details";
db.query(sqlSelect1,(err,result)=>{
    if (err) throw err
    a=result
})



app.put('/api/update',(req,res)=>{
    const accountno=req.body.id
    const amount=req.body.amount
    const account1=req.body.id1
    const amount1=req.body.amount1
    sqlUpdate1="UPDATE customer_details SET AccountBalance = ? where AccountNumber = ?";
    db.query(sqlUpdate1,[amount,accountno],(err,response)=>{
        
    })
    var amount2=amount1+a[account1-1]['AccountBalance']
    
    db.query(sqlUpdate1,[amount2,account1],(err,response)=>{
        a[accountno-1]['AccountBalance']=amount
        a[account1-1]['AccountBalance']=amount1+a[account1-1]['AccountBalance']
        console.log(a)
    })
    

    })
var b=['abhinav@email.com','ajay@email.com','chetna@email.com','gopal@email.com','rahul@email.com','sonam@email.com','akshay@email.com','shrey@email.com','laxman@email.com','ram@email.com']
app.post('/api/update1',(req,res)=>{
    const sid=req.body.id
    const rid=req.body.rid
    const amount=req.body.amount
    const datetime=new Date();
    var si=b[sid-1]
    var ri=b[rid-1]
    const sqlUpdate2="INSERT INTO transaction (fromemail,toemail,date,transactionamount)Values(?,?,?,?)"
    db.query(sqlUpdate2,[si,ri,datetime,amount],(err,result)=>{
        
    })
})
app.get('/api/get',(req,res)=>{
    const sqlSelect="SELECT * FROM customer_details";
    db.query(sqlSelect,(err,result)=>{
        res.send(result)
    })
})
app.get('/',(req,res)=>{
    res.send('Hello World')
})

app.listen(3001,()=>{
    console.log("Server Listening To Port 3001")
})