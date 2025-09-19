const modal = document.getElementById("myModal");
const modalContent = document.querySelector(".modal-content");
const openBtn = document.getElementById("openModal");
const tableBody = document.querySelector("tbody");

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

  const registroForm = document.getElementById("registroForm");
  if (registroForm) {
    registroForm.addEventListener("submit", (e) => {
      e.preventDefault();

      const data = document.getElementById("data").value;
      const descricao = document.getElementById("descricao").value;

      const newRow = document.createElement("tr");
      newRow.innerHTML = `
        <td>${data}</td>
        <td>${descricao}</td>
      `;
      tableBody.appendChild(newRow);

      modal.style.display = "none";
    });
  }
});

window.onclick = (event) => {
  if (event.target == modal) {
    modal.style.display = "none";
  }
};