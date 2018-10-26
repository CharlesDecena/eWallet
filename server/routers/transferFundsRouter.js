const express = require('express');
const router = express.Router(); //eslint-disable-line
const mysql = require('mysql');

var FromRecentBalance;
var ToRecentBalance;
var FromNewBalance;
var ToNewBalance;
var fromAccountNo;
var toAccountNo;

var mysqlConnection = mysql.createConnection({
    host     : 'localhost',
    user     : 'root',
    password : '',
    database : 'ewallet'
  });
  
  mysqlConnection.connect((err) => {      
  });



router.get('/',(req,res) => {
    res.render('transferfunds.pug',{});
});

router.post('/',(req,res)=>{
    fromAccountNo = req.body.fromAccountNo;
    AmountInput = req.body.amount;
    toAccountNo = req.body.toAccountNo;
    mysqlConnection.query(`SELECT AccountBalance FROM tbl_accounts Where AccountNumber = '${fromAccountNo}' OR AccountNumber = '${toAccountNo}'`,(err,rows,field)=>{
      if(!err){
      FromRecentBalance = rows[0].AccountBalance;
      ToRecentBalance = rows[1].AccountBalance;
      FromNewBalance = FromRecentBalance - AmountInput;
      ToNewBalance = parseInt(ToRecentBalance) + parseInt(AmountInput);
      }
    });
    mysqlConnection.query(`UPDATE tbl_accounts set AccountBalance = '${FromNewBalance}' where AccountNumber = '${fromAccountNo}'`,(err,rows,field)=>{
        if(!err){
            console.log("Successfully Transfer");
        }
    });
    mysqlConnection.query(`UPDATE tbl_accounts set AccountBalance = '${ToNewBalance}' where AccountNumber = '${toAccountNo}'`,(err,rows,field)=>{
        if(!err){
            console.log("Successfully Transfer");
        }
    });
});

module.exports = router;