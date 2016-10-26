var pigLatin = function(sentence) {
  if (sentence === "a" || sentence === "i") {
    return sentence.concat("ay");
  };
};

$(document).ready(function() {
  $("form#translate").submit(function(event) {
    event.preventDefault();
    var sentence = $("input#sentence").val();
    var result = pigLatin(sentence);
    $("#result").text(result);
  });
});
