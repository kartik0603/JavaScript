const Numbers = () => {
    let num = parseInt(document.getElementById("num").value);
    let k = parseInt(document.getElementById("k").value);
    let result = "";

    for (let i = 1; i <= num; i++) {
      if (i % k === 0) {
        result += i + "\n";
      }
    }
    document.getElementById("result").textContent = result;
  }