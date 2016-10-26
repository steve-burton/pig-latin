//var makeArray = function(sentence) {
  var sentenceSplit = sentence.split("");

console.log(sentenceSplit);
  //return sentenceSplit;

  var finalSentence = sentenceSplit.join();
//};

var vowels = ["a", "e", "i", "o", "u"]

var consonants = ["b", "c", "d", "f", "g", "h", "j", "k", "l", "m", "n", "p", "q", "r", "s", "t", "v", "w", "x", "y", "z"];


//for(var index = 0; index < index[1]; index += 1) {

//}

    var pigLatin = function(sentence) {
    if(sentence === "a" || sentence === "e" || sentence === "i" || sentence === "o" || sentence === "u") {
      return sentence.concat("ay");
      }
      else {
        return sentence.concat("ay");
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
