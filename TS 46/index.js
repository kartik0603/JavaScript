function getCharactersAtOddPosition() {
    let inputText = document.getElementById("inputText").value;
    let oddPositionChars = "";

    for (var i = 0; i < inputText.length; i++) {
      if (i % 2 !== 0) { // Check if index is odd
        oddPositionChars += inputText[i] + "\n";
      }
    }

    document.getElementById("output").innerText = oddPositionChars;
  }