const modal = document.getElementById("myModal");
const modalContent = document.querySelector(".modal-content");
const openBtn = document.getElementById("openModal");

openBtn.addEventListener("click", async () => {
  const response = await fetch("cadastroModal.html");
  const html = await response.text();
  modalContent.innerHTML = html;
  modal.style.display = "block";

  const closeBtn = document.getElementById("closeModal");
  if (closeBtn) {
    closeBtn.onclick = () => {
      modal.style.display = "none";
    };
  }
});

window.onclick = (event) => {
  if (event.target == modal) {
    modal.style.display = "none";
  }
};