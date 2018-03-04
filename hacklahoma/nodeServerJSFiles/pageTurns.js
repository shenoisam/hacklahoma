var dataArray;
var getD = function(request,response){
  response.render('VitechGetData.ejs', {data: dataArray})

}
 var gohome = function(request,response){
  response.render('index.ejs')
  dataArray = request.resultArray;
}

 var gomap = function(request,response){
  response.render('map.ejs')
}

 var gochart = function(request,response){
  response.render('chart.ejs')
}

module.exports = {getD,gohome,gomap,gochart}
