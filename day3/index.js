class Task {
  constructor(task) {
    this.id = Math.random().toString(16).slice(2);
    this.task = task;
    this.completed = "לא";
  }
}

function addTask() {
  let task = document.getElementById("taskInput").value;
  let tasks = JSON.parse(localStorage.getItem("tasks"));
  let newTask = new Task(task);
  if (!tasks) {
    localStorage.setItem("tasks", JSON.stringify([newTask]));
  } else {
    tasks.push(newTask);
    localStorage.setItem("tasks", JSON.stringify(tasks));
  }
  console.log("משימה נוספה בהצלחה");
}

document.getElementById("AddTaskForm").addEventListener("submit", addTask);

function completeTask(id) {
  let tasks = JSON.parse(localStorage.getItem("tasks"));
  let task = tasks.find((task) => task.id === id);
  if (task.completed === "לא") {
    task.completed = "כן";
  } else {
    task.completed = "לא";
  }
  localStorage.setItem("tasks", JSON.stringify(tasks));
  renderTasks();
}

function deleteTask(id) {
  let tasks = JSON.parse(localStorage.getItem("tasks"));
  let index = tasks.findIndex((task) => task.id === id);
  tasks.splice(index, 1);
  localStorage.setItem("tasks", JSON.stringify(tasks));
  renderTasks();
}

function editTask(id) {
  let tasks = JSON.parse(localStorage.getItem("tasks"));
  let task = tasks.find((task) => task.id === id);
  let input = document.getElementById("editInput");
  task.task = input.value;
  localStorage.setItem("tasks", JSON.stringify(tasks));
}

function openEditPopup(id) {
  idForEditTask = id;
  let popup = document.getElementById("editPopup");
  if (popup.style.display !== "block") {
    popup.style.display = "block";
  }
}

function closeEditPopup() {
  let popup = document.getElementById("editPopup");
  document.getElementById("editInput").value = "";
  popup.style.display = "none";
  renderTasks();
}

let idForEditTask = "";
document
  .getElementById("editform")
  .addEventListener("submit", function (event) {
    event.preventDefault();
    editTask(idForEditTask);
    closeEditPopup();
  });

function renderTasks() {
  let tasks = JSON.parse(localStorage.getItem("tasks"));
  if (!tasks) return;
  fillTable(tasks);
}

function filterTasks() {
  let tasks = JSON.parse(localStorage.getItem("tasks"));
  if (!tasks) return;
  let completedTaskes = tasks.filter((task) => task.completed === "כן");
  fillTable(completedTaskes);
}

document.getElementById("filterResults").addEventListener("click", filterTasks);

function fillTable(tasks) {
  let tbody = document.getElementById("table-body");
  tbody.innerHTML = "";
  tasks.forEach((element) => {
    let row = tbody.insertRow();
    let cell1 = row.insertCell(0);
    let cell2 = row.insertCell(1);
    let cell3 = row.insertCell(2);
    let cell4 = row.insertCell(3);
    let length = element.id.length;
    cell1.textContent = element.id.slice(length - 3, length) + "*".repeat(length - 3);
    cell2.textContent = element.task;
    cell3.textContent = element.completed;
    let textOnCompletedBotton = element.completed === "לא"? "הושלם" : "לא הושלמה"; 
    cell4.innerHTML = `<button class="btn-completed btn" onclick="completeTask('${element.id}')">${textOnCompletedBotton}</button>
        <button class="btn-delete btn" onclick="deleteTask('${element.id}')">מחק</button>
        <button class="btn-edit btn" onclick="openEditPopup('${element.id}')">ערוך</button>`;
  });
}

renderTasks();
