"use strict";

const usersDataTable = document.querySelector("#usersDataTable");
const eachCard = document.querySelector("#eachCard");
const userSelect = document.querySelector("#userSelect");

window.onload = function () {

    getAllUsers();

    displaySelectedUser();

    userSelect.onchange = displaySelectedUser;

};

function getAllUsers() {

    console.log("getAllUsers() called");
    fetch("http://localhost:8083/api/users")
        .then(response => response.json())
        .then(users => {
            for (let user of users) {
                let option = new Option(user.name, user.id)
                option.classList.add("text-center")
                userSelect.appendChild(option);
            }
        })

}

async function displaySelectedUser() {

    eachCard.innerText = "";

    let selectedValue = userSelect.value;

    let response = await fetch("http://localhost:8083/api/todos");
    let users = await response.json();

    let userCard = users.find(user => user.id == selectedValue);

    let createCard = async function (users) {

        // bootstrap card container
        let cardContainer = document.createElement("div");
        cardContainer.classList.add("card")
        cardContainer.classList.add("my-4")
        cardContainer.classList.add("mx-4")
        cardContainer.classList.add("col-md-6")
        cardContainer.style.width = "22rem";
        eachCard.appendChild(cardContainer)

        // bootstrap card body container for TEXT
        let cardBodyContainer = document.createElement("div");
        cardBodyContainer.classList.add("card-body");
        cardBodyContainer.id = "cardBodyContainer";
        cardContainer.appendChild(cardBodyContainer);

        // BS5 card TITLE (bolded)
        let cardTitle = document.createElement("h5");
        cardTitle.classList.add("card-title");
        cardTitle.innerText = users.category;
        cardBodyContainer.appendChild(cardTitle);

        // BS5 card Priority (subtitle)
        let priorityDiv = document.createElement("div");
        priorityDiv.classList.add("d-flex");
        priorityDiv.classList.add("align-items-center")

            // BS5 card Label (Priority: )
        let priorityLabel = document.createElement("h6");
        priorityLabel.classList.add("mb-2");
        priorityLabel.innerText = "Priority: ";
        priorityDiv.appendChild(priorityLabel);

            // BS5 card Priority Text (user.priority)
        let priorityText = document.createElement("h6");
        priorityText.classList.add("mx-3")
        if (users.priority == "Low") {
            priorityText.innerText = users.priority;
            priorityDiv.appendChild(priorityText);
        }
        else if (users.priority == "Medium") {
            priorityText.classList.add("text-primary");
            priorityText.classList.add("fs-5");
            priorityText.innerText = users.priority;
            priorityDiv.appendChild(priorityText);
        }
        else {
            priorityText.classList.add("text-danger");
            priorityText.classList.add("fs-3");
            priorityText.innerText = users.priority;
            priorityDiv.appendChild(priorityText);
        }

        cardBodyContainer.appendChild(priorityDiv);

        // BS5 card paragraph text (description)
        let paragraphText = document.createElement("p");
        paragraphText.classList.add("card-text");
        paragraphText.classList.add("mb-2");
        paragraphText.innerText = users.description;
        cardBodyContainer.appendChild(paragraphText);

        // BS5 card h6 text (deadline)
        let deadlineText = document.createElement("h6");
        deadlineText.classList.add("mb-2");
        deadlineText.innerText = "Deadline: " + users.deadline;
        cardBodyContainer.appendChild(deadlineText);

        // add the bootstrap icons here =================================================================


    }

    if (selectedValue == "all") {
        for (let user of users) {
            createCard(user);
        }
    }
    else {
        createCard(userCard);
    }

}