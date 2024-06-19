"use strict";

const categorySelect = document.querySelector("#categorySelect");

window.onload = function () {

    getCategory();

}


function getCategory() {
    console.log("getCategory was called");

    fetch("http://localhost:8083/api/categories")
        .then(response => response.json())
        .then(categories => {

            for (let category of categories) {

                let option = new Option(category);

                option.value = category.id;
                option.text = category.name;

                categorySelect.appendChild(option);
            }
        })
}

