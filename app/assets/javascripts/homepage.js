var request = new XMLHttpRequest();
request.open("GET", "https://us.api.battle.net/wow/realm/status?locale=en_US&apikey=pmqd9mhcmpek2zfdfnu975ht2rbxuwa7", false);
request.send();

var json = JSON.parse(request.responseText)

var realm_names = json.realms.map(function(val, i) {
  return val['name']
});
$(document).ready(function(){
  $('input.autocomplete').autocomplete({
    source: function(request, response) {
      var results = $.ui.autocomplete.filter(realm_names, request.term)
      response(results.slice(0, 5))
    }
  });
});
