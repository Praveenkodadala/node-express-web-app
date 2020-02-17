


// let express = require('express');
// let wiki = require ('./wiki.js');
// let app = express();
// let  port = 3000;
// let logger = require('morgan');

// app.use(logger('dev'));

// // let bodyParser = require('body-parser');

// let mongoose = require('mongoose');



// //connecting to db using odm/orm mongoose

// let mongodb = "mongodb://localhost:27017/onedb" 
// mongoose.connect(mongodb, (req, res)=>{
//   console.log('connected to db')
// });

// let db=mongoose.connection;
// //Bind connection to error event (to get notification of connection errors)
// db.on('error', console.error.bind(console, 'MongoDB connection error:'));





// let Schema = mongoose.Schema;

// var authorSchema = Schema({
//   name    : String,
//   stories : [{ type: Schema.Types.ObjectId, ref: 'Story' }]
// });

// var storySchema = Schema({
//   author : { type: Schema.Types.ObjectId, ref: 'Author' },
//   title    : String
// });

// var Story  = mongoose.model('Story', storySchema);
// var Author = mongoose.model('Author', authorSchema);



// Story.save();
// Author.save();

// Story.find();
// Author.find();


// var bob = new Author({ name: 'Bob' });

// bob.save(function (err) {
//   if (err) return handleError(err);
//   console.log('bob saved');

//   //Bob now exists, so lets create a story
//   var story = new Story({
//     title: "Gachibowli story",
//     author: bob._id    // assign the _id from the our author Bob. This ID is created by default!
//   });

//   story.save(function (err) {
//     if (err) return handleError(err);
//     console.log('story saved');
//     // Bob now has his story
//   });
// });







// let MongoClient = require('mongodb').MongoClient;


//connection to mongo

//https://expressjs.com/en/guide/database-integration.html
//https://docs.mongodb.com/manual/mongo/

// const url = "mongodb://localhost:27017/onedb"

// MongoClient.connect(url, (err, client)=>{
// if(err) throw err;
// console.log("Database created!");

// let  db = client.db('onedb');
//   //  db.collection('soal').find().toArray(function(err, result){
//   //    if(err) throw err;
//   //    console.log(result);
//   //    client.close();
//   //  });


// })





// app.set('template', path.join(__dirname, './template'));
// app.set('view engine', 'pug');

// app.get('/', function (req, res) {
//   res.render('index', { title: 'sample app', message: 'Hello there!, this is from template engine' })
// })




// app.use('/wiki',  wiki);

// app.all('/secret', function(req, res, next) {
//  res.json('Accessing the secret section ...');
//   next(); // pass control to the next handler
// }),

// app.get('/', (req, res)=>{
//   res.json('async api');
//   setTimeout(() => {
//     console.log('1st');
//   }, 3000);
//   console.log('2nd');
// }),




//Handling errors;
// app.use( function(err, req, res, next) {
//   console.error(err.stack);
//   res.status(500).send('Something broke!');
// });




// app.listen(port, function(){
// 	console.log(`server started at ${port}`)
// });





//express - locallibrary  web application

let express = require('express');
let app = express();
let  port = 3000;
let logger = require('morgan');
app.use(logger('dev'));


//setup mongoose connection 
let mongoose  = require('mongoose');
let Schema = mongoose.Schema;

let url = "mongodb://localhost:27017/onedb" 
mongoose.connect(url, (req, res)=>{
  console.log('connected to db');
})
let  db = mongoose.connection;
db.on('error', console.error.bind(console, 'MongoDB connection error:'));

