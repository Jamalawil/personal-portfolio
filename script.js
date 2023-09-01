// script.js

// Function to show an alert
function showAlert(message) {
    alert(message);
}

// Function to modify content of an element by ID
function modifyContent(elementId, newContent) {
    const element = document.getElementById(elementId);

    if (element) {
        element.innerHTML = newContent;
    } else {
        console.error(`Element with ID ${elementId} not found!`);
    }
}

// Example usage:
// Call the showAlert function with a custom message
// showAlert('Hello from script.js!');

// Call the modifyContent function to change content of an element with a specific ID
// modifyContent('demoElement', 'This is the new content!');
