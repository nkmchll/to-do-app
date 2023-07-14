import replaceContent from "./replaceContent";
import { createTask } from "./createTask";
import { render } from "./createTask";

function inbox(){
   
    replaceContent();
    
    const contentTitle = document.querySelector('.content-title');
    const contentTitleText = document.createElement('div');
    contentTitleText.textContent = 'Inbox';
    contentTitle.appendChild(contentTitleText);

    const addContent = document.querySelector('.add-content');
    const addTask = document.createElement('div');
    addTask.classList.add('addTask');
    addTask.textContent = "+ Add Task";
    addContent.appendChild(addTask);

    addTask.addEventListener('click', function(){
        let newTaskForm = document.querySelector('.form');
        newTaskForm.style.display = "block"
        let cancelButton = document.querySelector('.cancel-btn');
        cancelButton.addEventListener('click', function(){
            newTaskForm.style.display = "none";
        })

    })

    const formContainer = document.querySelector('.form-container');
    const form = document.createElement('div');
    form.innerHTML = 
        `<form class="form" style="display: none;">
            <div class="form-element">
                <label for="task">Task:</label>
                <input type="text" id="task" required >
            </div>
            <div class="form-element">
                <label for="date">Due Date:</label>
                <input type="date" id="date" required>
            </div>
            <div class="form-element">
                <label for="priority">Priority:</label >
                <select id="priority" required>
                    <option value="Low">Low</option>
                    <option value="Medium">Medium</option>
                    <option value="High">High</option>
                    </select>
            </div>
            <div class="form-element">
                <input type="submit" id="submit" class="submit-btn" value="Submit">
            </div>
            <div class="form-element">
                <button type="button" class="cancel-btn">Cancel</button>
            </div>
        </form>`;
        
    formContainer.appendChild(form)

    createTask();
    render();
}

export default inbox