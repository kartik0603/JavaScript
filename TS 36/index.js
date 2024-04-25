const GetValue =()=>{
    let num =document.getElementById("num").value;
    let result=""
    

   for(let i=0; i<=num;i++)
   {
    result+= ("Red and White") + "<br>";
   }
   document.getElementById("result").innerHTML= result;

}

 