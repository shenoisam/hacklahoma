var MongoClient = require('mongodb').MongoClient;
var uri = "mongodb+srv://mario:Gibson123@cluster0-dwmeo.mongodb.net/vitech_app";

var getData = function(response, request, next)
{
  MongoClient.connect(uri, function(err, client) {
   if(err){
     throw err;
   }
   var dbo = client.db("vitech_app")
   dbo.collection("participant").find({latitude: 1, lognitude: 1, state: 1}).toArray(function(err, result) {
    if (err) throw err;
    client.close();

    result[1] = "hello?"
    var mark = (result.length);
    console.log(mark)
    request = result;
    next();
   });
  });
}


module.exports = {getData}
