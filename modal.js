let modal = document.getElementById('myModal');

let openModal = document.getElementById('myButton');

let closeModal = document.getElementById('close');

let content = document.getElementById('modalContent');

openModal.onclick = function() {
    modal.style.display = "block";
}

closeModal.onclick = function() {
    modal.style.display = "none";
}

window.onclick = function(event) {
    if (event.target == modal) {
      modal.style.display = "none";
    }
}
