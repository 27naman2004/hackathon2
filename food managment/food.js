// food.js

function submitQuestion() {
    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const subject = document.getElementById("subjectSelect").value;
    const question = document.getElementById("question").value;

    if (name.trim() === "" || email.trim() === "" || subject === "" || question.trim() === "") {
        alert("Please fill in all the required fields.");
        return;
    }

    // You can construct a query string with the form data and append it to the URL
    const queryString = `?name=${encodeURIComponent(name)}&email=${encodeURIComponent(email)}&subject=${encodeURIComponent(subject)}&question=${encodeURIComponent(question)}`;

    // Set the new URL with the query string
    window.location.href = "response.html" + queryString;
}
