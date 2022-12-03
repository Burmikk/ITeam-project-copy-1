(() => {
    const refs = {
      openModalBtn: document.querySelector("[data-a-modal-open]"),
      closeModalBtn: document.querySelector("[data-a-modal-close]"),
      modal: document.querySelector("[data-a-modal]"),
    };
  
    refs.openModalBtn.addEventListener("click", toggleModal);
    refs.closeModalBtn.addEventListener("click", toggleModal);
  
    function toggleModal() {
      refs.modal.classList.toggle("is-hidden");
    }
  })();