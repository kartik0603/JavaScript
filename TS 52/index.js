
let users = [];

const handleData = (e) => {
  e.preventDefault(); 

  let data = {
    name: document.getElementById("name").value,
    position: document.getElementById("position").value,
    email: document.getElementById("email").value,
    department: document.getElementById("department").value,
    contact: document.getElementById("contact").value,
    experience: document.getElementById("experience").value,
  };

  users.push(data);
  uiMaker();

  
  document.getElementById("data").reset();
};

const uiMaker = () => {
  const tbody = document.getElementById("tbody");
  tbody.innerHTML = ""; 
  users.forEach((user, index) => {
    const row = `
      <tr>
        <td>${user.name}</td>
        <td>${user.position}</td>
        <td>${user.email}</td>
        <td>${user.department}</td>
        <td>${user.contact}</td>

        <td>${user.experience}</td>
        <td><button class="btn btn-danger" onclick="deleteRow(${index})">Delete</button></td>
      </tr>
    `;
    tbody.innerHTML += row;
  });
};

const deleteRow = (index) => {
  users.splice(index, 1); 
  uiMaker(); 
};

const deleteAll = () => {
  users = []; 
  uiMaker(); 
};

document.getElementById("data").addEventListener("submit", handleData);
