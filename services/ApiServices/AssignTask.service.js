import Employee from "../../models/Employee.js";
import Task from "../../models/Task.js";
import AssignTask from "../../models/AssignTask.js";

async function AssignTaskService(req,res) {
    const {taskId,employeeId} = req.body;

    const task = await Task.findOne({
        where: {
            id: taskId
        }
    });

    if (!task) return res.status(404).json({message: "task with given task id is not found."});

    const employee = await Employee.findOne({
        where: {
            id: employeeId
        }
    });

    if (!employee) return res.status(404).json({message: "employee with given employee id is not found."});

    await AssignTask.upsert({
        where: {
            taskId
        },
        update: {
            employeeId
        },
        create: {
            employeeId,
            taskId
        }
    });

    return res.status(200).json({message: "employee has been assign to the task."});
}

export default AssignTaskService;
