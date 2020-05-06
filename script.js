const toggle = document.getElementById("toggle");
const close = document.getElementById("close");
const open = document.getElementById("open");
const modal = document.getElementById("modal");

// Toggle Navigation

toggle.addEventListener("click", function () {
  document.body.classList.toggle("show-nav");
  return toggle;
});

// Show modal

open.addEventListener("click", function () {
  modal.classList.add("show-modal");
});

close.addEventListener("click", function () {
  modal.classList.remove("show-modal");
});

window.addEventListener("click", function (event) {
  if (event.target == modal) {
    modal.classList.remove("show-modal");
  } else {
    return false;
  }
});
