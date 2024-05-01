function convertToUppercase() {
    var inputText = document.getElementById("inputText").value;
    var uppercaseText = inputText.toUpperCase();
    document.getElementById("output").innerText = uppercaseText;
  }