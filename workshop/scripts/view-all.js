"use strict";

const usersDataTable = document.querySelector("#usersDataTable");
const eachCard = document.querySelector("#eachCard");

window.onload = function () {

    fetchAndDisplayUserData();

};

// function loadUserTableData(users) {
//     for (const user of users) {
//         buildTableRow(user);
//     }
// }

// function buildTableRow(user) {
//     let row = usersDataTable.insertRow();
//     let cell1 = row.insertCell();
//     cell1.innerText = user.id;

//     let cell2 = row.insertCell();
//     cell2.innerText = user.title;

//     let cell3 = row.insertCell();
//     cell3.innerText = user.completed;
// }

function fetchAndDisplayUserData() {
    fetch("https://jsonplaceholder.typicode.com/todos")
        .then((response) => response.json())
        .then((users) => {

            for (let user of users) {
                let cardContainer = document.createElement("div");
                cardContainer.classList.add("card")
                cardContainer.classList.add("my-4")
                cardContainer.classList.add("mx-4")
                cardContainer.classList.add("col-md-6")
                cardContainer.style.width = "22rem";
                eachCard.appendChild(cardContainer)

                let cardBodyContainer = document.createElement("div");
                cardBodyContainer.classList.add("card-body");
                cardContainer.appendChild(cardBodyContainer);

                let cardTitle = document.createElement("h5");
                cardTitle.classList.add("card-title");
                cardTitle.innerText = user.title;

                cardBodyContainer.appendChild(cardTitle);

                let paragraphText = document.createElement("p");
                paragraphText.classList.add("card-text");
                paragraphText.innerText = "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Obcaecati magnam vero quidem laboriosam atque ab explicabo quasi odit veritatis rem."

                cardBodyContainer.appendChild(paragraphText);
        }
        });
}

// fetchAndDisplayUserData();