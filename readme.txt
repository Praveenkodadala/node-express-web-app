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









https://express-validator.github.io/docs/check-api.html



kodad@DESKTOP-HVGBUFF MINGW64 ~/OneDrive/Desktop/test/node (master)
$ node hello.js
express-validator: requires to express-validator/check are deprecated.You should just use require("express-validator") instead.
express-validator: requires to express-validator/filter are deprecated.You should just use require("express-validator") instead.
express-validator: sanitize(), sanitizeBody() and other sanitization-only middlewares have been deprecated.
Please use check(), body() and others instead, which must offer the same API, and more.
(node:6180) DeprecationWarning: current URL string parser is deprecated, and will be removed in a future version. To use the new parser, pass option { useNewUrlParser: true } to MongoClient.co
nnect.
(node:6180) DeprecationWarning: current Server Discovery and Monitoring engine is deprecated, and will be removed in a future version. To use the new Server Discover and Monitoring engine, pas
s option { useUnifiedTopology: true } to the MongoClient constructor.
server at 3000
connected to db
GET /catalog/author/create 304 2083.527 ms - -
GET /catalog/author/create 304 2083.527 ms - -
GET /stylesheets/style.css 404 13.336 ms - 160
GET /stylesheets/style.css 404 13.336 ms - 160
GET /stylesheets/style.css 404 0.765 ms - 160
GET /stylesheets/style.css 404 0.765 ms - 160
POST /catalog/author/create 302 155.579 ms - 124
POST /catalog/author/create 302 155.579 ms - 124
GET /catalog/author/5e4aa8ea404da618249a16a6 200 334.208 ms - 1494
GET /catalog/author/5e4aa8ea404da618249a16a6 200 334.208 ms - 1494
GET /stylesheets/style.css 404 1.584 ms - 160
GET /stylesheets/style.css 404 1.584 ms - 160
GET /stylesheets/style.css 404 0.852 ms - 160
GET /stylesheets/style.css 404 0.852 ms - 160

kodad@DESKTOP-HVGBUFF MINGW64 ~/OneDrive/Desktop/test/node (master)
$ mongo
MongoDB shell version v4.2.1
connecting to: mongodb://127.0.0.1:27017/?compressors=disabled&gssapiServiceName=mongodb
Implicit session: session { "id" : UUID("861c2019-209f-4c4b-a1c7-29da1e8fe3e0") }
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
db.authors.find();
{ "_id" : ObjectId("5e47b4cf8bed7727489c37af"), "stories" : [ ], "name" : "Bob", "__v" : 0 }
{ "_id" : ObjectId("5e4aa73690de74010c559e64"), "first_name" : "blabla", "date_of_birth" : ISODate("1994-12-10T00:00:00Z"), "__v" : 0 }
{ "_id" : ObjectId("5e4aa8ea404da618249a16a6"), "first_name" : "hellolasjdflajdf", "date_of_birth" : ISODate("1994-10-19T00:00:00Z"), "__v" : 0 }
