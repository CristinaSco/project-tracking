var acc = document.getElementsByClassName("toggle");
var i;

for (i = 0; i < acc.length; i++) {
  acc[i].addEventListener("click", function() {
    this.classList.toggle("active");
    var panelToggle = this.nextElementSibling;
    if (panelToggle.style.display === "block") {
      panelToggle.style.display = "none";
      changeImage("images/icon-hamburger.svg")
    } else {
      panelToggle.style.display = "block";
      changeImage("images/icon-close.svg");
    }
  });
};

function changeImage(img) {
    document.getElementById("hamburger").src = img;
};
