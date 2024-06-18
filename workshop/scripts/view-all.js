"use strict";

const usersDataTable = document.querySelector("#usersDataTable");
const eachCard = document.querySelector("#eachCard");
const userSelect = document.querySelector("#userSelect");

window.onload = function () {

    getAllUsers();
    
    fetchAndDisplayUserData();

};

function getAllUsers() {

    console.log("getallusers() called");
    fetch("http://localhost:8083/api/users")
        .then(response => response.json())
        .then(users => {
            for (let user of users) {
                let option = new Option(user.name, user.id)

                userSelect.appendChild(option);
            }
        })
    
}

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

