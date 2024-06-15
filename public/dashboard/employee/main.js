let global = {};

async function getUserTasks() {
    const info = await fetch("/api/tasks");
    const data = await info.json();

    global.tasksData = data;
}

async function getUserProjects() {
    const info = await fetch("/api/projects");
    const data = await info.json();

    global.projectsData = data;
}

async function getUserInfo() {
    const info = await fetch("/api/my_info");
    const data = await info.json();
    
    global.userInfo = data;
}

function displayUserInfo() {
    const usernameHTML = document.querySelector("#user-name");
    const userDepartmentHTML = document.querySelector("#user-department");
    const userIdHTML = document.querySelector("#user-id");

    const userInfo = global.userInfo;   

    usernameHTML.textContent=`${userInfo.firstname} ${userInfo.lastname}`;
    userDepartmentHTML.textContent=userInfo.name;

    userIdHTML.textContent=userInfo.userId;
}

function displayProjects() {    
    const container = document.querySelector("#projects-container");
    let projectHTMLs = ``;
  
    for (let i = 0;i < global.projectsData.length;i++) {
        const {name,id} = global.projectsData[i];
        const tasks = global.tasksData.filter(task => task.projectId == id);
        
        let tasksHTML = ``;
        let statusHTML = ``;
        for (let j = 0;j < tasks.length;j++) {
            let {name,statusId} = tasks[j];
            tasksHTML += `
                <span class="text-lg" id="task-number">${j + 1}. <span id="task-description">${name}</span></span>
            `;

            statusHTML += `
                <span class="text-lg" id="task-number">${j + 1}. <span id="status-description">${global.STATUS[statusId]}</span></span>
            `;
        }

        projectHTMLs += `
                <div class="project-container">
                    <h1 class="text-xl font-semibold py-3 px-2 bg-rose-400 text-black rounded-md">${name}</h1>

                    <div class="grid grid-flow-row mt-10 lg:grid-cols-2 md:grid-cols-2 grid-cols-1 gap-10">
                        <div class="shadow-lg p-6 rounded-lg bg-yellow-400">
                            <h1 class="text-xl font-semibold mb-4">Task</h1>
                            <div class="task-card-container flex flex-col">
                                ${tasksHTML}
                            </div>
                        </div>

                        <div class="shadow-lg p-6 rounded-lg bg-yellow-400">
                            <h1 class="text-xl font-semibold mb-4">Status</h1>
                            <div class="status-card-container flex flex-col">
                                ${statusHTML}
                            </div>
                        </div>
                    </div>
                </div>
            `;
    }

    container.innerHTML = projectHTMLs;
}

document.addEventListener('DOMContentLoaded', async () => {
    await getUserInfo();
    await getUserTasks();
    await getUserProjects();
    await getStatus();

    console.log(global.status);
    displayUserInfo();
    displayProjects();
});