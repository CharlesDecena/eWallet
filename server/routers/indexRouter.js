const express = require('express');
const router = express.Router(); //eslint-disable-line
const mysql = express('mysql');


router.get('/',(req,res) => {
    res.render('index.pug',{});
});

module.exports = router;