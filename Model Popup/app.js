//VARIABLES
const modal = document.querySelector(".modal"),
      btn = document.querySelector(".btn"),
      close = document.querySelector(".close");
      


btn.addEventListener("click",openModal);

modal.addEventListener("click",(e) => {
    const event = e.target.classList;
    if(event.contains("modal") || event.contains("close")){
        closeModal();
    }
})


// OPEN MODAL
function openModal(e) {
    e.preventDefault();
    modal.style.top = "0";
  }
  // CLOSE MODAL
  function closeModal() {
    modal.style.top = "-450px";
  }