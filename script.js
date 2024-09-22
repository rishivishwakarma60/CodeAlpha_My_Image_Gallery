



let currentIndex = 0;
const images = document.querySelectorAll('.gallery-item img'); 
const modal = document.getElementById('modal');
const modalImage = document.getElementById('modal-image');


function openModal(index) {
  currentIndex = index;
  modalImage.src = images[currentIndex].src; 
  modal.style.display = 'flex';
}


function closeModal() {
  modal.style.display = 'none'; 
}


function navigate(direction) {
  currentIndex = (currentIndex + direction + images.length) % images.length;
  modalImage.src = images[currentIndex].src; 
}


window.onclick = function (event) {
  if (event.target === modal) {
    closeModal();
  }
};


window.onkeydown = function (event) {
  if (event.key === 'Escape') {
    closeModal();
  }
};
