const list = document.body;
const task = document.getElementById("text");
const submit = document.getElementById("submit");



submit.addEventListener("click", onClicking);

/* function onClicking() {

    // first validate that a task is entered...
    if (task) {

    }
} */


//to check form
const form = document.getElementById("form");
form.addEventListener('submit', function (e) {
    e.preventDefault();
    const value = form.querySelector("input[type='text']").value;
    console.log(value);
});