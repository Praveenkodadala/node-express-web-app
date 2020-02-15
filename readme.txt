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

