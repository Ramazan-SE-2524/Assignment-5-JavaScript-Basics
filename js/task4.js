const lsit = document.getElementById("list");
const addBtn = document.getElementById("addBtn");
const removeBtn = document.getElementById("removeBtn");

addBtn.addEventListener("click", function () {
  const newItem = document.createElement("li");
  newItem.textContent = "Item" + (lsit.children.length + 1);
  lsit.appendChild(newItem);
});

removeBtn.addEventListener("click", function () {
  const lastItem = lsit.lastElementChild;
  if (lastItem) {
    lsit.removeChild(lastItem);
  }
});
