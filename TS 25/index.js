const GetValue =()=>{
    let num =document.getElementById("num").value;
    

    // document.getElementById("result").innerHTML= Number(num1)* Number(num2)* Number(num3)* Number(num4)* Number(num5);
    if (num % 3 == 0) {
        document.getElementById("result").innerHTML= ("Yes");
      } else {
        document.getElementById("result").innerHTML= ("No");

      }
}