import AssignTask from "../../models/AssignTask.js";
import Task from "../../models/Task.js";

async function GetTasksService(req,res) {
    const {employeeId,role} = req.user;

    let tasks;
    if (role === "EMPLOYEE") {
        tasks = await AssignTask.findMany({
            where: {
                employeeId
            },
            include: {
                task: true
            }
        }); 
    } else {
        const { taskId } = req.params;

        const options = {};

        if (taskId) {
            options.where = {
                id: taskId
            };
        }

        tasks = await Task.findMany(options);
    }

    return res.status(200).json(tasks);
}

export default GetTasksService;
