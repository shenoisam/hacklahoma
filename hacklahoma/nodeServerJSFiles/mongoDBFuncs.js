var fs = require('fs');
var MongoClient = require('mongodb').MongoClient;
var uri = "mongodb+srv://mario:Gibson123@cluster0-dwmeo.mongodb.net/vitech_app";

//Get Data from the MongoDB Database instance
var getData = function()
{

}
var herro = function(getData)
{
  console.log("Getting data ....")
  var resultArray = [];
  //Connect to MongoDB
  MongoClient.connect(uri, function(err, client) {
   if(err)throw err;
   var dbo = client.db("vitech_app")

   //Get the participants Coll
   var cursor = dbo.collection("participant").find({
     'state': "Alaska"
   })

   cursor.forEach(function(doc, err)
   {
      resultArray.push(doc);
   },
   function leggo (){


     console.log("Finished getting data...Closing File stream to f")
     console.log('-------Middle Function ---------')
     console.log(resultArray[0])

     client.close();
     setTimeout('alert("finishingMiddleFunction");', 300);
   });
  });
  console.log('----BEFORE RETURN FUNCTION-----')
  console.log(resultArray[0])
  return resultArray;
}

module.exports = {getData}
