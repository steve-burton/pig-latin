var pigLatin = function(sentence) {
  return false;
};

$(document).ready(function() {
  $("form#translate").submit(function(event) {
    event.preventDefault();
    var sentence = $("input#sentence").val();
    var result = pigLatin(sentence);
    $("#result").text(result);
  });
});
