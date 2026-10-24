const taskInput = document.getElementById("taskInput");
const addBtn = document.getElementById("addBtn");
const taskList = document.getElementById("taskList");
const tasks = [];

function renderTasks() {
  taskList.innerHTML = "";

  tasks.forEach(function (task, index) {
    const li = document.createElement("li");

    const span = document.createElement("span");

    span.textContent = task.text;
    if (task.done) {
      span.style.textDecoration = "line-through";
    }
    span.addEventListener("click", function () {
      task.done = !task.done;
      renderTasks();
    });

    const deleteBtn = document.createElement("button");
    deleteBtn.textContent = "Delete";
    deleteBtn.addEventListener("click", function () {
      tasks.splice(index, 1);
      renderTasks();
    });

    li.appendChild(span);
    li.appendChild(deleteBtn);
    taskList.appendChild(li);
  });
}
addBtn.addEventListener("click", function () {
  const text = taskInput.value.trim();
  if (text === "") {
    return;
  }

  tasks.push({ text: text, done: false });
  taskInput.value = "";
  renderTasks();
});
