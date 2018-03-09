var fs = require('fs');
var MongoClient = require('mongodb').MongoClient;
var uri = "mongodb+srv://mario:Gibson123@cluster0-dwmeo.mongodb.net/vitech_app";

var resultArray = [];
//Get Data from the MongoDB Database instance
var getData = function(getData)
{
  console.log("Getting data ....")

  //Connect to MongoDB
  MongoClient.connect(uri, otherFunction);

  console.log('----BEFORE RETURN FUNCTION-----')
  console.log(resultArray.length)
  return resultArray;
}

module.exports = {getData}

var addtoArray =  function(doc, err)
{
   resultArray.push(doc);
}

var otherFunction = function(err, client)
{
 if(err)throw err;
 var dbo = client.db("vitech_app")

 //Get the participants Coll
 var cursor = dbo.collection("participant").find({'state': "Alaska"})
 cursor.forEach(addtoArray,function leggo (){client.close()});
 console.log(resultArray[0]);
}
