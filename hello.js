
let express = require('express');
let app = express();
const hostname = 'localhost';
const port = 3000;

app.all('/secret', function(req, res, next) {
 res.json('Accessing the secret section ...');
  next(); // pass control to the next handler
});

app.get('/', (req, res)=>{
  res.json('hello world');	

});





app.listen(port, function(){
	console.log(`server started at ${port}`);
})