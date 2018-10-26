const express = require('express');
const morgan = require('morgan');
const path = require('path');
const app = express();
const mysql = require('mysql');
const bodyParser = require('body-parser');
const indexRouter = require('./server/routers/indexRouter');
const transferFundsRouter = require('./server/routers/transferFundsRouter');
const checkBalanceRouter = require('./server/routers/checkBalanceRouter');
const billsPaymentRouter = require('./server/routers/billsPaymentRouter');
const withdrawRouter = require('./server/routers/withdrawRouter');
const depositRouter = require('./server/routers/depositRouter');
const port = 3300;

var mysqlConnection = mysql.createConnection({
  host     : 'localhost',
  user     : 'root',
  password : '',
  database : 'ewallet'
});

mysqlConnection.connect((err) => {
  if(!err)
      console.log('Successfully Connected.');
  else
      console.log('Connection Failed');    
});

app.use(morgan('dev'));

app.use(bodyParser.urlencoded({extended:true}));
app.use(bodyParser.json());

app.use(express.static('public'));

// NOTE: The __dirname is important for setting up the directory of the views
app.set('views', path.join(__dirname, 'server/views'));
app.set('view engine', 'pug');

app.use('/',indexRouter);
app.use('/transferfunds',transferFundsRouter);
app.use('/checkBalance',checkBalanceRouter);
app.use('/billsPayment',billsPaymentRouter);
app.use('/withdraw',withdrawRouter);
app.use('/deposit',depositRouter);


app.listen(port, (err) => {
  if(err) { return console.error(err); }
  console.log(`Listening to ${port}...`);
});




