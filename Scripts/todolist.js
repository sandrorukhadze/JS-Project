export function addTask() {
  const taskInput = document.getElementById("taskInput");
  const taskList = document.getElementById("taskList");
  const taskText = taskInput.value.trim();

  if (taskText === "") {
    alert("Please enter a task.");
    return;
  }
  const li = document.createElement("li");
  li.textContent = taskText;
  taskList.appendChild(li);

  taskInput.value = "";
}