const global = {};

async function getDepartments() {
    const request = await fetch("/api/departments");
    const data = await request.json();

    global.departmentsData = data;
}


async function getTasks() {
    const request = await fetch("/api/tasks");
    const data = await request.json();

    global.tasksData = data;
}

async function getEmployees() {
    const request = await fetch("/api/employees");
    const data = await request.json();

    global.employeesData = data;
    
    const employeesPerDepartment = {};

    for (let i = 0;i < data.length;i++) {
        const employee = data[i];
        const {name} = employee;

        if (employeesPerDepartment[name]) 
            employeesPerDepartment[name].push(employee);
        else 
            employeesPerDepartment[name] = [employee];
    }

    global.employeesPerDepartment = employeesPerDepartment;
}

async function getProjects() {
    const request = await fetch("/api/projects");
    const data = await request.json();

    global.projectsData = data;

    const projectsPerDepartment = {};

    for (let i = 0;i < data.length;i++) {
        const projects = data[i];
        const {name} = projects;

        if (projectsPerDepartment[name]) 
            projectsPerDepartment[name].push(projects);
        else 
            projectsPerDepartment[name] = [projects];
    }

    global.projectsPerDepartment = projectsPerDepartment;
}

async function createEmployee(event) {
    event.preventDefault();

    const form = event.target;

    const body = {};

    const data = new FormData(form);

    for (let [key,value] of (data.entries())) {
        body[key] = value;
    }

    body.departmentId = Number(body.departmentId);

    console.log(body); 
  
    const request = await fetch("/api/auth/register", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(body)
    });
    const response = await request.json();
    console.log(response);

    alert(response.message);
    if (request.status === 200) {
        location.reload();
    }
}

async function deleteEmployee() {
    const form = document.querySelector("#delete-employee-form");

    const employeeId = Number(form.employeeId.value);

    const deleteEmployee = await fetch("/api/auth/unregister", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({employeeId})
    });

    const response = await deleteEmployee.json();

    console.log(response);

    alert(response.message);
    if (deleteEmployee.status === 200) {
        location.reload();
    }
}

async function updateEmployee(event) {
    event.preventDefault();

    const form = event.target;

    const employeeId = Number(form.employeeId.value);

    const data = new FormData(form);

    data.delete("employeeId");

    const body = {employeeId};

    for (let [key,value] of (data.entries())) {
        if (value != "") 
            body[key] = value;
    }

    if (body.departmentId) {
        body.departmentId = Number(body.departmentId);
    }
    console.log(body);
    const request = await fetch("/api/employee/update", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(body)
    });

    const response = await request.json();
    console.log(response);

    alert(response.message);
    if (request.status === 200) {
        location.reload();
    }
}

function displayEmployeesData() {
    const employeeCountHTML = document.querySelector("#employee-count");
    
    employeeCountHTML.textContent = global.employeesData.length;
}

async function createProject(event) {
    event.preventDefault();

    const form = event.target;

    const data = new FormData(form);

    const body = {};

    for (let [key,value] of data.entries()) {
        body[key] = value;
    }

    body.departmentId = Number(body.departmentId);
    body.statusId = Number(body.statusId);

    const request = await fetch("/api/project/create",{
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(body)
    });     

    const response = await request.json();

    console.log(request,response);
    alert(response.message);
    if (request.status == 200) {
        form.reset();
    } 
}

function displayProjectsData() {
    // headers data
    const projectCountHTML = document.querySelector("#project-count");
    const incomingProjectCountHTML = document.querySelector("#incoming-proj-count");

    projectCountHTML.textContent = global.projectsData.length;
    incomingProjectCountHTML.textContent = global.projectsData.filter(project => global.STATUS["Upcoming"] == project.project_statusId).length;

    // manage project
    const projectsOverviewHTML = document.querySelector("#projects-overview");
    let overviewProjectHTMls = ``;

    for (let i = 0;i < global.projectsData.length;i++) {
        const project = global.projectsData[i];

        const {name,project_id,project_name,project_statusId} = project;
        overviewProjectHTMls += `
            <tr>
                <td class="px-6 py-4 whitespace-nowrap">${project_id}</td>
                <td class="px-6 py-4 whitespace-nowrap">${project_name}</td>
                <td class="px-6 py-4 whitespace-nowrap">${global.STATUS[project_statusId]}</td>
                <td class="px-6 py-4 whitespace-nowrap">${name}</td>
            </tr>
        `
    }

    projectsOverviewHTML.innerHTML = overviewProjectHTMls;

    const projectSelectHTMLs = document.querySelectorAll(".select-projectId");

    global.projectsData.forEach(project => {
        for (let i = 0;i < projectSelectHTMLs.length;i++) {
            const projectSelectHTML = projectSelectHTMLs[i];
            projectSelectHTML.innerHTML += `<option value="${project.project_id}">${project.project_name}</option>`;
        }
    });
}

function displayDepartmentsData() {
    const departmentSelectHTMLs = document.querySelectorAll(".select-departmentId");

    global.departmentsData.forEach(department => {
        for (let i = 0;i < departmentSelectHTMLs.length;i++) {
            const departmentSelectHTML = departmentSelectHTMLs[i];
            departmentSelectHTML.innerHTML += `<option value="${department.id}">${department.name}</option>`;
        }
    });
}

function displayStatusData() {
    const statusSelectHTML = document.querySelector("#status");

    const statusIds = Object.keys(global.STATUS).filter(status => !Number.isNaN(Number(status)));
    
    statusIds.forEach(statusId => {
        statusSelectHTML.innerHTML += ` <option value="${statusId}">${global.STATUS[statusId]}</option>`;
    });
}

function displayProjectTasks(projectId) {
    const taskSelectHTMLs = document.querySelectorAll(".select-taskId");

    const tasks = global.tasksData.filter(task => task.projectId === projectId);

    console.log(tasks);
    let taskOptionHTMLs = `<option value="" disabled selected>Select Task</option>`;

    for (let i = 0;i < tasks.length;i++) {
        const task = tasks[i];
        taskOptionHTMLs += ` <option value="${task.id}">${task.name}</option>`;
    }
    
    for (let i = 0;i < taskSelectHTMLs.length;i++) {
        taskSelectHTMLs[i].innerHTML = taskOptionHTMLs;
    }
}

async function assignTask(event) {
    event.preventDefault();

    const form = event.target;
    const data = new FormData(form);
    
    const body = {};

    for (let [key,value] of data.entries()) {
        body[key] = Number(value);
    }

    const assign = await fetch("/api/task/assign", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(body)
    });

    const response = await assign.json();

    alert(response.message);

    if (assign.status == 200) {
        form.reset();
    }
}

document.addEventListener('DOMContentLoaded', async () => {
    await getEmployees();
    await getProjects();
    await getStatus();
    await getDepartments();
    await getTasks();
    
    displayEmployeesData();
    displayProjectsData();
    displayDepartmentsData();
    displayStatusData();

    init();
});