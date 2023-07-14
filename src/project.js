import replaceContent from "./replaceContent";

function project(){

    replaceContent();

    const projectTitle = document.querySelector('.content-title');
    const projectTitleText = document.createElement('div');
    projectTitleText.textContent = 'Projects';
    projectTitle.appendChild(projectTitleText)

}

export default project