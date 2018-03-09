
var arr = require(__dirname+'/databaseArrayModule.js');


 var gohome = function(request,response){
  console.log(arr.length);
  response.render('index.ejs', { data: arr})
}

 var gomap = function(request,response){
   console.log(arr.length);
  response.render('map.ejs',{ data: arr})
}

 var gochart = function(request,response){
  console.log(arr.length);
  response.render('chart.ejs',{ data: arr})
}

module.exports = {gohome,gomap,gochart}
