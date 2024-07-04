// customScript.js
document.addEventListener("DOMContentLoaded", function() {
    let department = prompt("Which department would you like to chat with: Service or Support?");
    if (department) {
        alert("You selected: " + department);
        // You can add more logic here to handle the user's choice
    }
});
