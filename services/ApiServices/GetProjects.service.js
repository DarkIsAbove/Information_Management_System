import AssignTask from "../../models/AssignTask.js";
import Project from "../../models/Project.js";

async function GetProjectsService(req,res) {
    const {employeeId,role} = req.user;
    const { projectId } = req.params;

    let projects = [];
    if (role === "EMPLOYEE") {
        let tasks = await AssignTask.findMany({
            where: {
                employeeId
            },
            include: {
                task: true
            }
        }); 

        let projectIds = new Set(tasks.map(task => task.projectId));
        
        if (projectIds.size > 0) {
            let tasksProject = await Project.findMany({
                where: {
                    id: {
                        $in: Array.from(projectIds)
                    }
                }
            });

            projects = tasksProject
        }
    } else {
        projects = await Project.findMany({
            include: {
                department: true
            }
        });
    }

    if (projectId) {
        projects = projects.filter(project => project.id == projectId);
    }

    return res.status(200).json(projects);
}

export default GetProjectsService;
