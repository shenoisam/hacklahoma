var getD = function(request,response){
  response.render('vitechGetData.ejs')

}
 var gohome = function(request,response){
  response.render('index.ejs')
}

 var gomap = function(request,response){
  response.render('map.ejs')
}

 var gochart = function(request,response){
  response.render('chart.ejs')
}

module.exports = {getD,gohome,gomap,gochart}
