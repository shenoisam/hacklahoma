var dataArray;
var getD = function(request,response){
  response.render('VitechGetData.ejs', {data: dataArray})

}
 var home = function(request,response,next){
  response.render('index.ejs')
  dataArray = request.resultArray;
}

module.exports = {getD,home}
