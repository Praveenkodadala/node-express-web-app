
let wiki = require ('./wiki.js');
let express = require('express');
let app = express();
let  port = 3000;
let logger = require('morgan');

app.use(logger('dev'));

let MongoClient = require('mongodb').MongoClient;


//connection to mongo

//https://expressjs.com/en/guide/database-integration.html
//https://docs.mongodb.com/manual/mongo/



const url = "mongodb://localhost:27017/animals"

MongoClient.connect(url, (err, client)=>{
if(err) throw err;
console.log("Database created!");

let  db = client.db('onedb');
  //  db.collection('soal').find().toArray(function(err, result){
  //    if(err) throw err;
  //    console.log(result);
  //    client.close();
  //  });


})




app.use('/wiki',  wiki);

app.all('/secret', function(req, res, next) {
 res.json('Accessing the secret section ...');
  next(); // pass control to the next handler
}),

app.get('/', (req, res)=>{
  res.json('async api');
  setTimeout(() => {
    console.log('1st');
  }, 3000);
  console.log('2nd');
}),



// app.use( function(err, req, res, next) {
//   console.error(err.stack);
//   res.status(500).send('Something broke!');
// });




app.listen(port, function(){
	console.log(`server started at ${port}`);
})