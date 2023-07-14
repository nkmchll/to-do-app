

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
        console.log(taskList)
        
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
                `<input type = "checkbox" id = task class = task>
                <label for = task> ${task.task} | ${task.dueDate} | ${task.priority}</label>`;
            taskContainer.appendChild(taskElement);
        }
        console.log(task.task);
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