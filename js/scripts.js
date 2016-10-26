var sentenceSplit = sentence.split("");
var vowels = ["a", "e", "i", "o", "u"]


sentenceSplit.forEach(vowels(sentenceSplit[0]))

for(var index = 0; index < index[1]; index += 1) {
  var pigLatin = function(sentence) {
  if(sentence === "a" || sentence === "e" || sentence === "i" || sentence === "o" || sentence === "u") {
    return sentence.concat("ay");
    }
  }
};


$(document).ready(function() {
  $("form#translate").submit(function(event) {
    event.preventDefault();
    var sentence = $("input#sentence").val();
    var result = pigLatin(sentence);
    $("#result").text(result);
  });
});
