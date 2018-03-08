var fetch = require('node-fetch')
var search = function (request, response, next) {
//Search Participants and retrieve the Participant name, date of birth and gender
//SELECT pi.name, pi.DOB, pi.sex FROM v_participant pi WHERE pi.state = 'Alaska'
    url = "https://v3v10.vitechinc.com/solr/v_us_participant/select?indent=on&q=*:*&wt=json" ;
    fetch(url)
  		.then(res => res.json())
  		.then(body => console.log(body.response.numFound))
  		.catch(console.log)

    next();
}

module.exports = {search};
