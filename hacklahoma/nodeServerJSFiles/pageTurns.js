var mongodbFuncs = require(__dirname+'/mongodbFuncs.js');

var getD = function(request,response){

console.log(mongodbFuncs.getData()[0])
  //dataArray = request.resultArray;
  var arr  = mongodbFuncs.getData();
  response.render('VitechGetData.ejs', { data: arr})

}

 var gohome = function(request,response){
  response.render('index.ejs')
}

 var gomap = function(request,response){
  response.render('map.ejs')
}

 var gochart = function(request,response){
  response.render('charts.ejs')
}

module.exports = {getD,gohome,gomap,gochart}
