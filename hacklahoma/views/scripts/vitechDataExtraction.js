function search() {
//Search Participants and retrieve the Participant name, date of birth and gender
//SELECT pi.name, pi.DOB, pi.sex FROM v_participant pi WHERE pi.state = 'Alaska'
    url = "https://v3v10.vitechinc.com/solr/v_participant/select?indent=on&wt=json" + "&q=state:Alaska" + "&rows=100" + "&fl=name,DOB,sex";	
    fetch(url)
  		.then(res => res.json())
  		.then(body => alert(body.response.numFound))
  		.catch(alert)
}
