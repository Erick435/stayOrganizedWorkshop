"use strict";

window.onload = function () {
  const usersDataTable = document.querySelector("#usersDataTable");
};

function loadUserTableData(users) {
  for (const user of users) {
    buildTableRow(user);
  }
}

function buildTableRow(user) {
  let row = usersDataTable.insertRow();
  let cell1 = row.insertCell();
  cell1.innerText = user.id;

  let cell2 = row.insertCell();
  cell2.innerText = user.title;

  let cell3 = row.insertCell();
  cell3.innerText = user.completed;
}

function fetchAndDisplayUserData() {
  fetch("https://jsonplaceholder.typicode.com/todos")
    .then((response) => response.json())
    .then((users) => {
      loadUserTableData(users);
    });
}
fetchAndDisplayUserData();
