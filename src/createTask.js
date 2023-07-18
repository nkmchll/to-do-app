// store tasks in array
let taskList = [];

// factory function to create task object
const createTaskObj = (task, dueDate, priority, projectID) => {
  return { task, dueDate, priority, projectID };
};

// function for adding task from the user input to the array
function addTask(projectID) {
  let task = document.querySelector("#task").value;
  let dueDate = document.querySelector("#date").value;
  let priority = document.querySelector("#priority").value;
  const newTask = createTaskObj(task, dueDate, priority, projectID);

  taskList.push(newTask);
}

// add task to array when submit button is clicked
function createTask(projectID) {
  let submitButton = document.querySelector("#submit");
  submitButton.addEventListener("click", function (event) {
    event.preventDefault();
    let taskInput = document.querySelector("#task");
    if (taskInput.value.trim() === "") {
      // if task is empty, don't allow submission
      return;
    }
    addTask(projectID);
    render(projectID);
    reset();
    removeForm();
  });
}

// function to display task on screen
function render(projectID) {
  let taskContainer = document.querySelector(".task-container");
  taskContainer.innerHTML = "";
  const taskTitle = document.createElement("div");
  taskTitle.classList.add("content-title");
  taskTitle.textContent = "Tasks";
  taskContainer.appendChild(taskTitle);

  for (let i = 0; i < taskList.length; i++) {
    let task = taskList[i];
    if (task.projectID === projectID) {
      let taskElement = document.createElement("div");
      taskElement.classList.add("taskList");
      taskElement.innerHTML = `<div class='task-content'>
          <div class='task-detail'>
              <input type="checkbox" id="task${i}" class="task">
              <label for="task${i}">${task.task} | ${task.dueDate} | ${task.priority}</label>
          </div>
          <div class='task-buttons'>
              <button class='remove-btn'>Remove</button>
          </div>
      </div>`;

      let removeButton = taskElement.querySelector(".remove-btn");
      removeButton.addEventListener("click", function () {
        removeTask(i);
      });

      taskContainer.appendChild(taskElement);
    }
  }

  displayMessage(projectID);
}

// function to remove task when remove button is clicked
function removeTask(index) {
  taskList.splice(index, 1);
  render();
}

// function to display a message when there's no task
function displayMessage(projectID) {
  const taskContainer = document.querySelector(".task-container");
  const message1 = document.createElement("div");
  message1.textContent = "Yay, we have no tasks!";
  const message2 = document.createElement("div");
  message2.textContent = "Yay, we finished our tasks!";

  if (taskList.length === 0) {
    taskContainer.appendChild(message1);
  } else if (document.querySelectorAll(".task:checked").length === 0) {
    const checkboxes = document.querySelectorAll(".task");
    checkboxes.forEach((checkbox) => {
      checkbox.addEventListener("change", () => {
        taskContainer.appendChild(message2);
      });
    });
  }
}

// function to reset input boxes
function reset() {
  let taskInput = document.querySelector("#task");
  let dueDateInput = document.querySelector("#date");
  let priorityInput = document.querySelector("#priority");

  taskInput.value = "";
  dueDateInput.value = "";
}

// function to remove form display
function removeForm() {
  let newTaskForm = document.querySelector(".form");
  newTaskForm.style.display = "none";
}

export { createTask, render };
