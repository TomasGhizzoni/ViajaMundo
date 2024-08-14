//agrandar imagen o cerrarla
function openModal(imageElement) {
    const modal = document.getElementById("modal");
    const modalImage = document.getElementById("modal-image");

    modal.style.display = "block";
    modalImage.src = imageElement.querySelector("img").src;
}

function closeModal() {
    document.getElementById("modal").style.display = "none";
}