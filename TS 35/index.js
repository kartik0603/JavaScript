const GetValue = () => {
    let min = parseInt(document.getElementById("min").value);
    let max = parseInt(document.getElementById("max").value);
    let result = "";

    for (let i = min; i < max; i++) {
        result += i + "<br>";
    }

    document.getElementById("result").innerHTML = result;
};