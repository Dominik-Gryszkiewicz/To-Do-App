<<<<<<< HEAD
const addTaskBtn = document.querySelector(".add-task-btn");
const clearBtn = document.querySelector(".clear-btn");
const taskInput = document.querySelector("#task-input");
const dateInput = document.querySelector(".datepicker");
const tasksList = [];
const tasksListContent = document.querySelector(".tasks-list-content")
const taskDescription = document.querySelector(".task-description");
//adding tasks to list and form validation:
let counter = 0

addTaskBtn.addEventListener("click", e => {
  e.preventDefault();
  if (taskInput.value.length > 2 && dateInput.value.length > 0 && taskInput.value.length < 33) {
    tasksList.push(taskInput.value);
    tasksList.push(dateInput.value);
    taskInput.value = "";
    dateInput.value = "";
    if (counter === 0) {
      tasksListContent.textContent = "";
    }

    // for (let i = 0; i < tasksList.length; i += 2) {
    const task = document.createElement("li")
    const taskParagraph = document.createElement("p")
    taskParagraph.textContent = `${tasksList[counter]}, ${tasksList[counter + 1]} `;
    counter += 2;
    task.appendChild(taskParagraph);
    const isTaskDone = document.createElement("label");
    const inputCheckbox = document.createElement("input");
    inputCheckbox.type = "checkbox";
    inputCheckbox.className = "filled-in";
    //add line throught if checked:
    inputCheckbox.addEventListener("click", () => {
      if (inputCheckbox.checked) {
        taskParagraph.style.textDecorationLine = "line-through";
      } else {
        taskParagraph.style.textDecorationLine = "none";
      }
    });
    const checkboxDescription = document.createElement("span");
    checkboxDescription.textContent = " "
    isTaskDone.appendChild(inputCheckbox);
    isTaskDone.appendChild(checkboxDescription);
    tasksListContent.appendChild(task);
    task.appendChild(isTaskDone);
    // }
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
  counter = 0;
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
=======
const addTaskBtn = document.querySelector(".add-task-btn");
const clearBtn = document.querySelector(".clear-btn");
const taskInput = document.querySelector("#task-input");
const dateInput = document.querySelector(".datepicker");
const tasksList = [];
const tasksListContent = document.querySelector(".tasks-list-content")
const taskDescription = document.querySelector(".task-description");
//adding tasks to list and form validation:
let counter = 0

addTaskBtn.addEventListener("click", e => {
  e.preventDefault();
  if (taskInput.value.length > 2 && dateInput.value.length > 0 && taskInput.value.length < 33) {
    tasksList.push(taskInput.value);
    tasksList.push(dateInput.value);
    taskInput.value = "";
    dateInput.value = "";
    if (counter === 0) {
      tasksListContent.textContent = "";
    }

    // for (let i = 0; i < tasksList.length; i += 2) {
    const task = document.createElement("li")
    const taskParagraph = document.createElement("p")
    taskParagraph.textContent = `${tasksList[counter]}, ${tasksList[counter + 1]} `;
    counter += 2;
    task.appendChild(taskParagraph);
    const isTaskDone = document.createElement("label");
    const inputCheckbox = document.createElement("input");
    inputCheckbox.type = "checkbox";
    inputCheckbox.className = "filled-in";
    //add line throught if checked:
    inputCheckbox.addEventListener("click", () => {
      if (inputCheckbox.checked) {
        taskParagraph.style.textDecorationLine = "line-through";
      } else {
        taskParagraph.style.textDecorationLine = "none";
      }
    });
    const checkboxDescription = document.createElement("span");
    checkboxDescription.textContent = " "
    isTaskDone.appendChild(inputCheckbox);
    isTaskDone.appendChild(checkboxDescription);
    tasksListContent.appendChild(task);
    task.appendChild(isTaskDone);
    // }
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
  counter = 0;
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
>>>>>>> 268c60ffa0976a3def639a03629a73ff767425b0
});