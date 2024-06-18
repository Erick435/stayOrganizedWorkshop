"use strict";

window.onload = function () {
    const usersDataCards = document.querySelector("#usersDataCards");
};

function loadUserCardData(users) {
    for (const user of users) {
        buildUserCard(user);
    }
}

function buildUserCard(user) {
    const cardContainer = document.querySelector("#usersDataCards");
    let card = document.createElement("div");
    card.classList.add("col-md-4");

    let cardBody = document.createElement("div");
    cardBody.classList.add("card", "mb-3");

    let cardBodyContent = document.createElement("div");
    cardBodyContent.classList.add("card-body");

    let cardTitle = document.createElement("h5");
    cardTitle.classList.add("card-title");
    cardTitle.innerText = user.title;

    let cardUserId = document.createElement("h6");
    cardUserId.classList.add("card-subtitle", "mb-2", "text-muted");
    cardUserId.innerText = `ID: ${user.id}`;

    let cardCompleted = document.createElement("p");
    cardCompleted.classList.add("card-text");
    cardCompleted.innerText = `Completed: ${user.completed}`;

    cardBodyContent.appendChild(cardTitle);
    cardBodyContent.appendChild(cardUserId);
    cardBodyContent.appendChild(cardCompleted);
    cardBody.appendChild(cardBodyContent);
    card.appendChild(cardBody);

    cardContainer.appendChild(card);
}

function fetchAndDisplayUserData() {
    fetch("https://jsonplaceholder.typicode.com/todos")
        .then((response) => response.json())
        .then((users) => {
            loadUserCardData(users);
        });
}

fetchAndDisplayUserData();