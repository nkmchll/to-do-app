import inbox from "./inbox";
import project from "./project";
import './src/style.css';
inbox();

let tabSwitch = (function(){
    const inboxTab = document.querySelector('.inbox');
    inboxTab.addEventListener('click', inbox);

    const projectTab = document.querySelector('.projects');
    projectTab.addEventListener('click', project);
})();
