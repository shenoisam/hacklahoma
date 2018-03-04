var mongodbFuncs = require(__dirname+'/mongodbFuncs.js');

var getD = function(request,response){

console.log(mongodbFuncs.getData()[0])
  //dataArray = request.resultArray;
  var arr  = mongodbFuncs.getData();
  response.render('VitechGetData.ejs', { data: arr})

}
 var home = function(request,response,next){

  console.log("------PAGETURNERS INDEX----------")
  response.render('index.ejs')
}

module.exports = {getD,home}
