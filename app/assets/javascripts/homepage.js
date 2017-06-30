const readyState = {
  UNITIALIZED: 0,
  LOADING: 1,
  LOADED: 2,
  INTERACTIVE: 3,
  COMPLETED: 4
}

function handleRequest(url, callback) {
  var request = new XMLHttpRequest();
  request.onreadystatechange = function() {
    if (request.readyState === XMLHttpRequest.DONE && request.status === 200) {
      callback(request.responseText)
    }
  };

  request.open("GET", url, true);
  request.send();
}

function realmStatusRequestResponse(responseJSON) {
  var realmNames = JSON.parse(responseJSON).realms.map(function(value, index) {
    return value['name']
  });

  $(document).ready(function(){
    $('input.autocomplete').autocomplete({
      source: function(request, response) {
        var results = $.ui.autocomplete.filter(realmNames, request.term)
        response(results.slice(0, 5))
      }
    });
  });

}

function characterRequestResponse(responseJSON) {
  alert(responseJSON['level'])
}
var realmStatusURL = "https://us.api.battle.net/wow/realm/status?locale=en_US&apikey=pmqd9mhcmpek2zfdfnu975ht2rbxuwa7"
handleRequest(realmStatusURL, realmStatusRequestResponse)

$(function(){
  $("#search-for-character").click(function() {
    var realm = $("input#realm-name").val()
    var characterName = $("input#character-name").val()

    var characterRequestURL = "https://us.api.battle.net/wow/character/" + realm + "/" + character_name + "?locale=en_US&apikey=pmqd9mhcmpek2zfdfnu975ht2rbxuwa7"
    handleRequest(characterRequestURL, characterRequestResponse)
  });
});
