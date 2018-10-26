const express = require('express');
const router = express.Router(); //eslint-disable-line
const mysql = require('mysql');

router.get('/',(req,res) => {
    res.render('billsPayment.pug',{});
});

module.exports = router;