"use strict";

const userSelect = document.querySelector("#userSelect");
const categorySelect = document.querySelector("#categorySelect");
const priority = document.querySelector("#priority");
const descriptionText = document.querySelector("#descriptionText");
const dateInput = document.querySelector("#dateInput");

const submitButton = document.querySelector("#submitButton");

window.onload = function () {

    getUsers();
    
    getCategory();

    submitButton.onclick = createTodo;

}

function getUsers() {

    fetch("http://localhost:8083/api/users")
        .then(response => response.json())
        .then(users => {
            for (let user of users){
                let option = new Option(user.name, user.id)
                option.classList.add("text-center");
                userSelect.appendChild(option);
            }
        })
}

function getCategory() {
    console.log("getCategory was called");

    fetch("http://localhost:8083/api/categories")
        .then(response => response.json())
        .then(categories => {

            for (let category of categories) {

                let option = new Option(category.name);
                option.value = category.name;
                option.classList.add("text-center");

                categorySelect.appendChild(option);
            }
        })
}


function createTodo() {

    console.log("createTodo() was called");
    
    let bodyData = {
        id: document.querySelector("#userSelect").value,
        category: document.querySelector("#categorySelect").value,
        priority: document.querySelector("#priority").value,
        description: document.querySelector("#descriptionText").value,
        deadline: document.querySelector("#dateInput").value
    }

    fetch("http://localhost:8083/api/todos/" + bodyData.id, {
        method: "POST",
        body: JSON.stringify(bodyData),
        headers: {
            "Content-Type": "application/json"
        }
    })
        .then(response => response.json())
        .then(todo => {
            // alert(`To-do card has been created successfully for ID: ${todo.id}`)
            
            console.log(document.querySelector("#dateInput").value);
        })
        .catch(error => {
            alert(`Error: ${error.message}`)
        })
    
}