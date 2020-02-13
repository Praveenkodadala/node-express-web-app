
let express = require('express');
let app = express();
const hostname = 'localhost';
const port = 3000;
let wiki = require ('./wiki.js');



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



app.listen(port, function(){
	console.log(`server started at ${port}`);
})