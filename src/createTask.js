     // store tasks in array
    let taskList = [];

    // factory function to create task object
    const createTaskObj = (task, dueDate, priority) => {
        return {task,dueDate,priority}
    };

    // function for adding task from the user input to the array
    function addTask(){
        let task = document.querySelector('#task').value;
        let dueDate = document.querySelector('#date').value;
        let priority = document.querySelector('#priority').value;
        const newTask = createTaskObj(task, dueDate, priority);
        
        taskList.push(newTask);
    }

    // add task to array when submit button is clicked
    function createTask(){
        let submitButton = document.querySelector('#submit');
        submitButton.addEventListener('click', function(event){
        event.preventDefault();
        let taskInput = document.querySelector('#task');
        if (taskInput.value.trim() === '') {
            // if task is empty, dont allow submission
            return;
        }
        addTask();
        render();
        reset();
        removeForm();
        })
    }

    
     
    // function to display task on screen
    function render(){
        let taskContainer = document.querySelector('.task-container');
        taskContainer.innerHTML = "";
        const taskTitle = document.createElement('div');
        taskTitle.classList.add('content-title')
        taskTitle.textContent = 'Tasks';
        taskContainer.appendChild(taskTitle);

        for (let i = 0; i < taskList.length; i++){
            let task = taskList[i];
            let taskElement = document.createElement('div');
            taskElement.classList.add('taskList')
            taskElement.innerHTML =
                `<div class='task-content'>
                    <div class='task-detail'>
                        <input type="checkbox" id="task${i}" class="task">
                        <label for="task${i}">${task.task} | ${task.dueDate} | ${task.priority}</label>
                    </div>
                    <div class='task-buttons'>
                        <button class='remove-btn'>Remove</button>
                    </div>
                </div>`;

        let removeButton = taskElement.querySelector('.remove-btn');
        removeButton.addEventListener('click', function () {
            removeTask(i);
        });

        taskContainer.appendChild(taskElement);

        }
        console.log(task.task);
        displayMessage();
    }

    // function to remove task when remove button is clicked
    function removeTask(index) {
        taskList.splice(index, 1);
        render();
    }

    // function to display a message when there's no task
    function displayMessage(){
        if (taskList.length === 0){
            console.log("hello");
            const taskContainer = document.querySelector('.task-container');
            const message = document.createElement('div');
            message.textContent = "Yay, we have no tasks!";
            taskContainer.appendChild(message);
        }

    }

    

    // function to reset input boxes
    function reset(){
        let taskInput = document.querySelector('#task');
        let dueDateInput = document.querySelector('#date');
        let priorityInput = document.querySelector('#priority');
        
        taskInput.value = '';
        dueDateInput.value = ''; 
    }

    // function to remove form display
    function removeForm (){
        let newTaskForm = document.querySelector('.form');
        newTaskForm.style.display = 'none';
    }

   

    export { createTask, render };