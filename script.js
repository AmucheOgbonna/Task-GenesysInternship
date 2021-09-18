const list = document.body;
const task = document.getElementById("text");


//to check form
const form = document.getElementById("form");
form.addEventListener('submit', function (e) {
    e.preventDefault();
    onClicking();

});

//on form submission
const submit = document.getElementById("submit");
function onClicking() {
    var updatedTask = document.getElementsByTagName('tbody')[0];
    const uploadTask = document.getElementById("uploadTask");
    if (uploadTask.innerText === '') {
        var styles = ' table { visibility: visible;}';
        var stylesheet = document.createElement('style');
        stylesheet.type = "text/css";
        stylesheet.innerText = styles;
        document.head.appendChild(stylesheet);
        uploadTask.innerHTML = task.value;
    } else {
        var newRow = updatedTask.insertRow(updatedTask.length);
        newRow.innerHTML = `<tr id="data">
        <td scope="col" id="uploadTask">' ${task.value} </td>
        <td scope="col" id="delete"><i class="bi bi-x-circle"></i></td>        
        <td scope="col" id="check"><i class="bi bi-check-circle"></i></td>
        <td scope="col" d="edit"><i class="bi bi-pencil-square"></i></td>
        </tr>`;
        // newRow.innerHTML = task.value;
    }
}
//To edit
var editData = document.getElementById('edit');
editData.addEventListener('click', toEdit());
function toEdit() {
    var logg = editData.parentElement.nodeName;
    console.log(logg);
}
