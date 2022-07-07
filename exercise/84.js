function amirTxtSplit(txtID) {
  var line = txtID.html(); // get the sentence
  var parts = line.split(" ");
  var word = "";
  var letterSpans = "";
  var wordSpans = "";
  var i = "";
  var j = "";
  for (i = 0; i < parts.length; i++) {
    // how many words
    letterSpans = "";
    word = parts[i];

    for (j = 0; j < word.length; j++) {
      // how many letters in each words
      letterSpans += '<span class="tsLetters">' + word[j] + "</span>"; // creat a span for each letter
    }
    wordSpans += '<span class="tsWords">' + letterSpans + " </span>";
  }

  txtID.html(wordSpans); // render the sentence
}
var x = document.getElementById("preLoaderTxt");
amirTxtSplit(x);
