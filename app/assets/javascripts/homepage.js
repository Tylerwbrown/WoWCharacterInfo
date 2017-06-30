var realmStatusURL = "https://us.api.battle.net/wow/realm/status?locale=en_US&apikey=pmqd9mhcmpek2zfdfnu975ht2rbxuwa7"

$(function(){
  $("input.autocomplete").autocomplete({
    source: function(request, response) {
      $.ajax({
        url: realmStatusURL,
        type: "get",
        dataType: "json",
        async: true,
        cache: true,
        success: function(data) {
          var realmNames = data.realms.map(function(value, index) { return value['name'] })

          var results = $.ui.autocomplete.filter(realmNames, request.term)
          response(results.slice(0, 5))
        }
      })
    }
  });

  $("#search-for-character").click(function() {
    var realm = $("input#realm-name").val()
    var characterName = $("input#character-name").val()

    var characterRequestURL = "https://us.api.battle.net/wow/character/" + realm + "/" + character_name + "?locale=en_US&apikey=pmqd9mhcmpek2zfdfnu975ht2rbxuwa7"
  });
});
