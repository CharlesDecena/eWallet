const express = require('express');
const router = express.Router(); //eslint-disable-line
const mysql = require('mysql');

var recentBalance;
var newBalance;
var DateNow = Date(Date.now());

var mysqlConnection = mysql.createConnection({
    host     : 'localhost',
    user     : 'root',
    password : '',
    database : 'ewallet'
  });
  
mysqlConnection.connect((err) => {      
  });

router.get('/',(req,res) => {
    res.render('deposit.pug',{});
});

router.post('/',(req,res)=>{
    accountNo = req.body.accountNo;
    amount = req.body.amount;
    mysqlConnection.query(`SELECT AccountBalance FROM tbl_accounts Where AccountNumber = '${accountNo}'`,(err,rows,field)=>{
      if(!err){
      recentBalance = rows[0].AccountBalance;
      newBalance = parseInt(recentBalance) + parseInt(amount);
      
      mysqlConnection.query(`UPDATE tbl_accounts set AccountBalance = '${newBalance}' where AccountNumber = '${accountNo}'`,(err,rows,field)=>{
        if(!err){
            console.log("Successfully Deposit");
            mysqlConnection.query(`Insert into tbl_transaction(AccountNo,Type,Amount,Date) values ('${accountNo}','Deposit','${amount}','${DateNow}')`,(err,rows,field)=>{
                if(!err){
                    console.log("Succesfully Record Transaction");
                }
            });
        }
        });

    
    }
    
    });
    

});

module.exports = router;