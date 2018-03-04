var getD = function(request,response){
  response.render('vitechGetData.ejs')

}
 var home = function(request,response){
  response.render('index.ejs')

}

module.exports = {getD,home}
