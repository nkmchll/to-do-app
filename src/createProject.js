import displayProjectDetails from "./newProjectTab";
import { v4 as uuidv4 } from 'uuid';

// store projects in array
let projectList = [];

// factory function to create project object
const createProjectObj = (projectName) => {
    return {projectName, projectId: uuidv4(),};
};

 // function for adding project from the user input to the array
function addProject(){
    let project = document.querySelector('#project').value;
    const newProject = createProjectObj(project);

    projectList.push(newProject);
    console.log(projectList);
    render();
    reset();
    createProjectTab();
}

 // add project to array when submit button is clicked
function createProject(){
    let submitButton = document.querySelector('#submit');
    submitButton.addEventListener('click', function(event){
        event.preventDefault();
        let projectInput = document.querySelector('#project');
        if (projectInput.value.trim() === '') {
            return;
        }
        addProject(); 
    })
}

// function to display project on screen
function render(){
    let projectContainer = document.querySelector('.project-container');
    projectContainer.innerHTML = "";

    for (let i = 0; i < projectList.length; i++){
        let project = projectList[i];
        let projectElement = document.createElement('div');
        projectElement.classList.add('projectList')
        projectElement.innerHTML =
            `<div class='project-content'>
                <div class='project-detail'>
                    <div>${project.projectName}</div>
                </div>
                <div class='task-buttons'>
                    <button class='remove-btn'>Remove</button>
                    <button class='view-btn'>View Project</button>
                </div>
            </div>`;
        
        let removeButton = projectElement.querySelector('.remove-btn');
        removeButton.addEventListener('click', function () {
            removeProject(i);
        });

        let viewProjectButton = projectElement.querySelector('.view-btn');
        viewProjectButton.addEventListener('click', function () {
            displayProjectDetails(project);

        });

        projectContainer.appendChild(projectElement);
    }
    displayMessage();
}

// function to create a project tab
function createProjectTab(){
    let projectsNav = document.querySelector('.blank-project-tab');
    let projectTab = document.createElement('div');
    projectTab.classList.add('projectTabs')
    let projectTitle = document.createElement('div');
  
    projectsNav.appendChild(projectTab);
    for (let i = 0; i < projectList.length; i++){
        let project = projectList[i];
        let projectNameClass = project.projectName.replace(/\s/g, "");
        projectTitle.setAttribute('class',`${projectNameClass}` )
        projectTitle.setAttribute('id', project.projectId);
        projectTitle.textContent = `+  ${project.projectName}`;
        projectTab.appendChild(projectTitle);

        let viewProjectTab = document.querySelector(`.${projectNameClass}`);
        viewProjectTab.addEventListener('click', function () {
             displayProjectDetails(project);

        });
    }
}

// function to remove project when remove button is clicked
function removeProject(index) {
    projectList.splice(index, 1);
    removeProjectTab(index);
    render();
}

 // function to remove project tab when remove button is clicked
function removeProjectTab(index) {
    let projectTabs = document.querySelectorAll('.projectTabs');
    if (projectTabs.length > index) {
        projectTabs[index].remove();
    }
}

// function to reset input boxes
function reset(){
    let projectInput = document.querySelector('#project');
    projectInput.value = '';
}

// function to display a message when there's no task
function displayMessage(){
    const projectContainer = document.querySelector('.project-container');
    const message = document.createElement('div');
    message.classList.add('project-message')
    message.textContent = "No projects to display!";

    if (projectList.length === 0){
        projectContainer.appendChild(message);
    }
}

export { createProject, render}