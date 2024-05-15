
      let users = [];

      const handleData = (e) => {
        e.preventDefault();

        let employeeData = {
          name: document.getElementById("name").value,
          jobRole: document.getElementById("jobRole").value,
          department: document.getElementById("department").value,
          salary: parseFloat(document.getElementById("salary").value),
          experience: document.getElementById("experience").value,
          contactEmail: document.getElementById("contactEmail").value,
          roleType: document.getElementById("roleType").value,
        };

        users.push(employeeData);
        uiMaker();
        document.getElementById("data").reset();
      };

      const updateStats = () => {
        let totalEmployees = users.length;
        let totalSalary = users.reduce((sum, user) => sum + user.salary, 0);

        document.getElementById("totalEmployees").innerText = totalEmployees;
        document.getElementById("totalSalary").innerText = totalSalary.toFixed(2);
      };

      document.getElementById("data").addEventListener("submit", handleData);
      document.getElementById("deleteAll").addEventListener("click", () => {
        users = [];
        document.getElementById("tbody").innerHTML = "";
        updateStats();
      });

      const uiMaker = () => {
        document.getElementById("tbody").innerHTML = "";
        users.forEach((ele, i) => {
          let tr = document.createElement("tr");

          let td1 = document.createElement("td");
          td1.innerHTML = ele.name;
          tr.appendChild(td1);

          let td2 = document.createElement("td");
          td2.innerHTML = ele.jobRole;
          tr.appendChild(td2);

          let td3 = document.createElement("td");
          td3.innerHTML = ele.department;
          tr.appendChild(td3);

          let td4 = document.createElement("td");
          td4.innerHTML = ele.salary;
          tr.appendChild(td4);

          let td5 = document.createElement("td");
          td5.innerHTML = ele.experience;
          tr.appendChild(td5);

          let td6 = document.createElement("td");
          td6.innerHTML = ele.contactEmail;
          tr.appendChild(td6);

          let td7 = document.createElement("td");
          td7.innerHTML = ele.roleType;
          tr.appendChild(td7);

          let td8 = document.createElement("td");
          let deleteButton = document.createElement("button");
          deleteButton.className = "btn btn-danger";
          deleteButton.innerText = `Delete ${ele.name}`;
          deleteButton.addEventListener("click", () => handleDelete(i));
          td8.appendChild(deleteButton);
          tr.appendChild(td8);

          document.getElementById("tbody").appendChild(tr);
        });
        updateStats();
      };

      const handleDelete = (index) => {
        users.splice(index, 1);
        uiMaker();
      };
  