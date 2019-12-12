document.addEventListener("DOMContentLoaded", function(event) { 
  const modal = document.querySelector('.modal');
  const modalBtn = document.querySelectorAll('[data-toggle=modal]');
  const closeBtn = document.querySelector('.modal__close');
  const switchModal = () => {
    modal.classList.toggle('modal--visible');
  }
  modalBtn.forEach(element => {
    element.addEventListener('click', switchModal);
  });
  
  closeBtn.addEventListener('click', switchModal);
  
  // closeModal.addEventListener('click', switchModal)
  window.addEventListener('click', outsideClick);
  function outsideClick(e) {
    if (e.target == modal) {
      modal.style.display = 'none';
    }
  }
  

});