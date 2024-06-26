
    let users = [];

    const handleData = (e) => {
      e.preventDefault(); 

      let data = {
        name: document.getElementById("name").value,
        email: document.getElementById("email").value,
        number: document.getElementById("number").value,
        salary: document.getElementById("salary").value,
      };

      users.push(data);
      uiMaker(); 
    };

    document.getElementById("data").addEventListener("submit", handleData);

    const uiMaker = () => {
      document.getElementById("tbody").innerHTML = "";

      users.map((ele) => { 
        let tr = document.createElement('tr');

        let td1 = document.createElement('td');
        td1.innerHTML = ele.name;
        let td2 = document.createElement('td');
        td2.innerHTML = ele.email;

        let td3 = document.createElement('td');
        td3.innerHTML = ele.number;

        let td4 = document.createElement('td');
        td4.innerHTML = ele.salary;

        tr.append(td1, td2, td3, td4);
        document.getElementById("tbody").append(tr);
      });
    };
  