const GetValue = () => {
  let num = document.getElementById("num").value;
  let sum = 0;

  for (let i = 0; i <= num; i++) {
    if (num % 3 == 0) {
      sum += i;
      document.getElementById("result").innerHTML = sum;
    }
  }
}
