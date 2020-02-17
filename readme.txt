//connection to mongo

//https://expressjs.com/en/guide/database-integration.html
//https://docs.mongodb.com/manual/mongo/

https://developer.mozilla.org/en-US/docs/Learn/Server-side/Express_Nodejs/Introduction

https://github.com/expressjs/express/wiki#template-engines


https://expressjs.com/en/starter/hello-world.html

https://mongoosejs.com/docs/guide.html


kodad@DESKTOP-HVGBUFF MINGW64 /
$ mongo
MongoDB shell version v4.2.1
connecting to: mongodb://127.0.0.1:27017/?compressors=disabled&gssapiServiceName=mongodb
Implicit session: session { "id" : UUID("d6d46546-a6ba-48b5-bb53-2ace131e43d2") }
MongoDB server version: 4.2.1
show dbs
action         0.000GB
admin          0.000GB
config         0.000GB
local          0.000GB
mylib          0.000GB
myproject      0.000GB
onedb          0.000GB
server         0.000GB
shopping       0.000GB
test           0.000GB
testmyproject  0.000GB
use onedb
switched to db onedb
show collections
authors
stories
db.authors.find()
{ "_id" : ObjectId("5e47b4cf8bed7727489c37af"), "stories" : [ ], "name" : "Bob", "__v" : 0 }
db.stories.find()
{ "_id" : ObjectId("5e47b4cf8bed7727489c37b0"), "title" : "Gachibowli story", "author" : ObjectId("5e47b4cf8bed7727489c37af"), "__v" : 0 }




var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/users', usersRouter);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
