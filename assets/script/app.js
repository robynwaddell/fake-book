'use strict';
// imports
import { User, Subscriber} from "./class.js"

// variables
const postBtn = document.querySelector("#post-btn");
const text = document.querySelector("textarea");
const file = document.querySelector("#get-file");
const subscriber = new Subscriber(2312, "Jane Doe", "janedoe101", 'jdoe@email.com', 3, 14 );

// functions
    // function to check if the text area or file input is empty
function validate() {
    if (text.length > 0 | file.files.length !== 0) {
        return valid;
    } else {
        text.style = "#cursor-blink";
    }
}
 
    // Function to create a post
function createPost() {

    // Create a new post element
    const postElement = document.createElement("div");
    postElement.className = "post";
    postElement.style = "height: 400px; width: 650px; backgound-color: #fff;"
    postElement.innerHTML = `<p>${text}</p>`;
    postElement.innerHTML = `<p>${file}</p>`;

    // Display the post in the output area
    const postOutput = document.getElementById("post-container");
    postOutput.appendChild(postElement);

    document.getElementById("textarea").value = "";
    document.getElementById("get-file").value = "";

}

postBtn.addEventListener("click", createPost());



    // function to display modal
    document.addEventListener("DOMContentLoaded", function () {
        const openModalBtn = document.getElementById("open-modal-btn");
        const modal = document.getElementById("modal");
        const closeModalBtn = document.getElementById("close-modal-btn");
    
        // Open modal
        openModalBtn.addEventListener("click", function () {
            modal.style.display = "flex";
        });
    
        // Close modal
        closeModalBtn.addEventListener("click", function () {
            modal.style.display = "none";
        });
    
        // Close modal if overlay is clicked
        window.addEventListener("click", function (event) {
            if (event.target === modal) {
                modal.style.display = "none";
            }
        });
    });


// Function to fill modal with subscriber information
function fillModalWithSubscriber(subscriber) {
    const modalTitle = document.querySelector("#modal h2");
    const modalContent = document.querySelector("#modal p");

    // Update modal title and content with subscriber information
    modalTitle.textContent = `Subscriber: ${subscriber.name}`;
    modalContent.innerHTML = `
        <strong>User ID:</strong> ${subscriber.id}<br>
        <strong>User Name:</strong> ${subscriber.userName}<br>
        <strong>Email:</strong> ${subscriber.email}<br>
        <strong>Pages:</strong> ${subscriber.pages}<br>
        <strong>Groups:</strong> ${subscriber.groups}<br>
        <strong>Can Monetize:</strong> ${subscriber.canMonetize ? 'Yes' : 'No'}
    `;

    // Display the modal
    document.getElementById("modal").style.display = "flex";
}

fillModalWithSubscriber(subscriber);
    

