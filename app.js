

let createError = require('http-errors');
let express = require('express');
let app = express();
let  port = 3000;
let logger = require('morgan');
app.use(logger('dev'));
let path = require("path");
let bodyparser = require('body-parser');




 var catalogRouter = require('./routes/catalog'); 


//setup mongoose connection 
let mongoose  = require('mongoose');
let Schema = mongoose.Schema;

let url = "mongodb://localhost:27017/onedb" 
mongoose.connect(url, (req, res)=>{
  console.log('connected to db');
})
let  db = mongoose.connection;
db.on('error', console.error.bind(console, 'MongoDB connection error:'));



// view engine setup
 app.set('views', path.join(__dirname, './views'));
app.set('view engine', 'pug');


app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(bodyparser.urlencoded({extended: true}));


// app.use(express.static(path.join(__dirname, 'public')));


// app.use('/', indexRouter);
// app.use('/users', usersRouter);
app.use('/', catalogRouter);



// app.use(function(req, res, next) {
//   next(createError(404));
// });



app.listen(port, function (){
  console.log(`server at ${port}`);
})