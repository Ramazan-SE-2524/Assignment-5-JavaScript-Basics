const box = document.getElementById("box");

box.addEventListener("mouseover", function () {
  box.style.backgroundColor = "orange";
});

box.addEventListener("mouseout", function () {
  box.style.backgroundColor = "";
});
