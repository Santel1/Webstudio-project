(() => {
  const refs = {
    openModalBtn: document.querySelector("[data-modal-open-contacts]"),
    closeModalBtn: document.querySelector("[data-modal-close-contacts]"),
    modal: document.querySelector("[data-modal-contacts]"),
    link: document.querySelector(".js-link"),
  };

  refs.openModalBtn.addEventListener("click", toggleModal);
  refs.closeModalBtn.addEventListener("click", toggleModal);
  refs.link.addEventListener("click", (e) => {
    e.preventDefault();
  });

  function toggleModal() {
    refs.modal.classList.toggle("is-hidden");
  }
})();
