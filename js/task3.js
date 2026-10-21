const box = document.getElementById("box");
const colorBtn = document.getElementById("colorBtn");
const sizeBtn = document.getElementById("sizeBtn");

colorBtn.addEventListener("click", function () {
  box.style.backgroundColor = "lightblue";
});
sizeBtn.addEventListener("click", function () {
  box.style.fontSize = "30px";
});
