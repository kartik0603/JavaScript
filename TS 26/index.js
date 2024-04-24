const GetValue =()=>{
    let num =document.getElementById("num").value;
    

    
    if (num % 2 == 0) {
        document.getElementById("result").innerHTML= (`${num} is Even`);
      } else {
        document.getElementById("result").innerHTML= (`${num} is Odd`);

      }
}