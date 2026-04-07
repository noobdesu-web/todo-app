// 保存データ読み込み
let tasks = JSON.parse(localStorage.getItem("tasks"));

if (tasks === null) {
  tasks = [];
}

// 最初に表示
tasks.forEach(function(task) {
  createTaskElement(task);
});

function addTask() {
  let input = document.getElementById("taskInput");
  let task = input.value;

  if (task === "") return;

  tasks.push(task);
  localStorage.setItem("tasks", JSON.stringify(tasks));

  createTaskElement(task);

  input.value = "";
}

function createTaskElement(task) {
  let li = document.createElement("li");
  li.innerText = task;

  let deleteBtn = document.createElement("button");
  deleteBtn.innerText = "削除";

  deleteBtn.onclick = function () {
    li.remove();

    tasks = tasks.filter(t => t !== task);
    localStorage.setItem("tasks", JSON.stringify(tasks));
  };

  li.appendChild(deleteBtn);

  document.getElementById("taskList").appendChild(li);
}
document.getElementById("taskInput").addEventListener("keypress", function(e) {
  if (e.key === "Enter") {
    addTask();
  }
});
