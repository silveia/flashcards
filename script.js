// Select elements from the DOM
const button = document.getElementById('btn');
const heading = document.getElementById('heading');

// Add a click event listener
button.addEventListener('click', function() {
    heading.textContent = "You clicked the button!";
    heading.style.color = "#e74c3c";
});