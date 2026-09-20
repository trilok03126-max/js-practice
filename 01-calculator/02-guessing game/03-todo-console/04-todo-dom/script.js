const taskInput = document.getElementById("task-input");
const addBtn = document.getElementById("add-btn");
const taskList = document.getElementById("task-list");

addBtn.addEventListener("click",function(){

  const taskTest = taskInput.value;

  if (taskTest === "")
    return;

  const newLi = document.createElement("li");

  newLi.textContent = taskTest;

  taskList.appendChild(newLi);

  taskInput.value = "";

});