var getD = function(request,response){
  response.render('vitechGetData.ejs')

}
 var home = function(request,response,next){
  response.render('index.ejs')
  next();
}

module.exports = {getD,home}
