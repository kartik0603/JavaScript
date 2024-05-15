
      let users = [];

      const handleData = (e) => {
        e.preventDefault();

        let employeeData = {
          name: document.getElementById("name").value,
          position: document.getElementById("position").value,
          email: document.getElementById("email").value,
          department: document.getElementById("department").value,
          contact: document.getElementById("contact").value,
          experience: document.getElementById("experience").value,
        };

        users.push(employeeData);
        uiMaker();
      };

      document.getElementById("data").addEventListener("submit", handleData);
      document.getElementById("deleteAll").addEventListener("click", () => {
        users = [];
        document.getElementById("tbody").innerHTML = "";
      });

      const uiMaker = () => {
        document.getElementById("tbody").innerHTML = "";
        users.forEach((ele, i) => {
          let tr = document.createElement("tr");

          let td1 = document.createElement("td");
          td1.innerHTML = ele.name;
          tr.appendChild(td1);

          let td2 = document.createElement("td");
          td2.innerHTML = ele.position;
          tr.appendChild(td2);

          let td3 = document.createElement("td");
          td3.innerHTML = ele.email;
          tr.appendChild(td3);

          let td4 = document.createElement("td");
          td4.innerHTML = ele.department;
          tr.appendChild(td4);

          let td5 = document.createElement("td");
          td5.innerHTML = ele.contact;
          tr.appendChild(td5);

          let td6 = document.createElement("td");
          td6.innerHTML = ele.experience;
          tr.appendChild(td6);

          let td7 = document.createElement("td");
          let deleteButton = document.createElement("button");
          deleteButton.className = "btn btn-danger";
          deleteButton.innerText = `Delete ${ele.name}`;
          deleteButton.addEventListener("click", () => handleDelete(i));
          td7.appendChild(deleteButton);
          tr.appendChild(td7);

          document.getElementById("tbody").appendChild(tr);
        });
      };

      const handleDelete = (index) => {
        users.splice(index, 1);
        uiMaker();
      };
