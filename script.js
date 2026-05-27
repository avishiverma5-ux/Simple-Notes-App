let notes = [];

function addNote(){

    let input = document.getElementById("noteInput");

    let noteText = input.value;

    if(noteText == ""){
        alert("Write something first");
        return;
    }

    notes.push(noteText);

    displayNotes();

    input.value = "";
}

function displayNotes(){

    let container = document.getElementById("notesContainer");

    container.innerHTML = "";

    for(let i = 0; i < notes.length; i++){

        container.innerHTML += `
            <div class="note">
                ${notes[i]}
            </div>
        `;
    }
}