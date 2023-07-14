
// function to replace content when switching tabs

function replaceContent(){
    const contentTitle = document.querySelector('.content-title');
    contentTitle.replaceChildren();
    const addContent = document.querySelector('.add-content')
    addContent.replaceChildren();
    const formContainer = document.querySelector('.form-container')
    formContainer.replaceChildren();
    const taskContainer = document.querySelector('.task-container')
    taskContainer.replaceChildren();
}

export default replaceContent