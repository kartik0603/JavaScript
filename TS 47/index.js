function getCharactersreverse() {
    let inputText = document.getElementById("inputText").value;
    let reversePositionChars = "";

    for (var i = inputText.length-1; i >=0 ; i--) {
     
        reversePositionChars += inputText[i] + "\n";
      
    }

    document.getElementById("output").innerText = reversePositionChars;
  }