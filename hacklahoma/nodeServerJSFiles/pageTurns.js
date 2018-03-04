var mongodbFuncs = require(__dirname+'/mongodbFuncs.js');

var getD = function(request,response){
  var arr = mongodbFuncs.getData()
  console.log(arr)
  //dataArray = request.resultArray;

  response.render('VitechGetData.ejs',{data: arr})

}
 var home = function(request,response,next){

  console.log("--------------------------")
  response.render('index.ejs')
}

module.exports = {getD,home}
