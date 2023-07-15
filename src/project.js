import replaceContent from "./replaceContent";
import { createProject }from "./createProject";
import { render } from "./createProject";

function project(){

    replaceContent();

    const projectTitle = document.querySelector('.content-title');
    const projectTitleText = document.createElement('div');
    projectTitleText.textContent = 'Projects';
    projectTitle.appendChild(projectTitleText)

    const addContent = document.querySelector('.add-content');
    const addTask = document.createElement('div');
    addTask.classList.add('addTask');
    addTask.textContent = "+ Add a Project";
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
                <label for="project">Project Name:</label>
                <input type="text" id="project" required >
            </div>
            <div class="form-element">
                <input type="submit" id="submit" class="submit-btn" value="Submit">
                <button type="button" class="cancel-btn">Cancel</button>
            </div>
        </form>`;
        
    formContainer.appendChild(form)

    createProject();
    render();

}

export default project