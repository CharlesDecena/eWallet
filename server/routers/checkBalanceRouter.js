const express = require('express');
const router = express.Router(); //eslint-disable-line
const simpleJsonStore = require('simple-json-store');
const store = new simpleJsonStore('./accounts.json',{
    accounts:[]
});

router.get('/',(req,res) => {
    res.render('checkBalance.pug',{});
});

module.exports = router;