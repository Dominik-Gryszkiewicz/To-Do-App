const addTaskBtn = document.querySelector(".add-task-btn");
const clearBtn = document.querySelector(".clear-btn");
const taskInput = document.querySelector("#task-input");
const dateInput = document.querySelector(".datepicker");
const tasksList = [];
const tasksListContent = document.querySelector(".tasks-list-content")
const taskDescription = document.querySelector(".task-description");
//adding tasks to list and form validation:
addTaskBtn.addEventListener("click", e => {
  e.preventDefault();
  if (taskInput.value.length > 2 && dateInput.value.length > 0 && taskInput.value.length < 33) {
    tasksList.push(taskInput.value);
    tasksList.push(dateInput.value);
    taskInput.value = "";
    dateInput.value = "";
    tasksListContent.textContent = "";
    for (let i = 0; i < tasksList.length; i += 2) {
      const task = document.createElement("li")
      const taskParagraph = document.createElement("p")
      taskParagraph.textContent = `${tasksList[i]}, ${tasksList[i+1]} `;
      task.appendChild(taskParagraph);
      const isTaskDone = document.createElement("label");
      const inputCheckbox = document.createElement("input");
      inputCheckbox.type = "checkbox";
      inputCheckbox.className = "filled-in";
      const checkboxDescription = document.createElement("span");
      checkboxDescription.textContent = " "
      isTaskDone.appendChild(inputCheckbox);
      isTaskDone.appendChild(checkboxDescription);
      tasksListContent.appendChild(task);
      task.appendChild(isTaskDone);
    }
    // taskDescription.style.visibility = "visible";
    taskDescription.classList.remove("active");
  } else if ((taskInput.value.length < 3 || taskInput.value.length > 33) && dateInput.value.length > 0) {
    alert("Task description have to has between 3 and 33 characters!")
  } else if (dateInput.value.length === 0 && taskInput.value.length > 0) {
    alert("Set Deadline!");
  } else {
    alert("Write Task description and set Deadline!");
  }
});
//add class active to input when focused:
taskInput.addEventListener("focus", () => {
  taskDescription.classList.add("active");
  taskDescription.style.visibility = "visible";
});

//default tasks list content:
if (tasksList.length === 0) {
  tasksListContent.textContent = "Your tasks list is empty";
  tasksListContent.style.textAlign = "center";
}

//clear tasks list:
clearBtn.addEventListener("click", e => {
  e.preventDefault();
  tasksList.length = 0;
  tasksListContent.textContent = "Your tasks list is empty";
  tasksListContent.style.textAlign = "center";
});

//datepicker config:
const options = {
  autoClose: true,
  format: "dd mm yyyy"
}
//datepicker listener:
document.addEventListener('DOMContentLoaded', function () {
  var elems = document.querySelectorAll('.datepicker');
  var instances = M.Datepicker.init(elems, options);
});