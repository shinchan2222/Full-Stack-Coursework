let noteInput = document.getElementById("noteInput");
let addButton = document.getElementById("addButton");
let clearButton = document.getElementById("clearButton");
let notesContainer = document.getElementById("notesContainer");
addButton.addEventListener("click", function () {
    let note = noteInput.value.trim();
    if (note === "") {
        alert("Please write a note");
        return;
    }
    createNote(note);
    noteInput.value = "";
    noteInput.focus();
});
function createNote(note) {
    let noteDiv = document.createElement("div");
    noteDiv.classList.add("note");
    let noteText = document.createElement("div");
    noteText.classList.add("noteText");
    noteText.textContent = note;
    let editButton = document.createElement("button");
    editButton.textContent = "Edit";
    editButton.classList.add("editButton");
    let deleteButton = document.createElement("button");
    deleteButton.textContent = "Delete";
    deleteButton.classList.add("deleteButton");
    noteDiv.appendChild(noteText);
    noteDiv.appendChild(editButton);
    noteDiv.appendChild(deleteButton);
    notesContainer.appendChild(noteDiv);
    editButton.addEventListener("click", function () {
        let updatedNote = prompt("Edit your note:", noteText.textContent);
        if (updatedNote !== null && updatedNote.trim() !== "") {
            noteText.textContent = updatedNote.trim();
        }
    });
    deleteButton.addEventListener("click", function () {
        noteDiv.remove();
    });
}
clearButton.addEventListener("click", function () {
    notesContainer.innerHTML = "";
});