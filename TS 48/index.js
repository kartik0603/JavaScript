function getCharacters() {
    let inputText = document.getElementById("inputText").value;
    let getstring = "";

    for (var i = 0; i <inputText.length ; i++) {
     
        getstring += inputText[i] + "\n";
      
    }

    document.getElementById("output").innerText = getstring;
  }