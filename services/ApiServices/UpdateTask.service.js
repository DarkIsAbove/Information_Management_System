import AssignTask from "../../models/AssignTask.js";
import Status from "../../models/Status.js";
import Task from "../../models/Task.js";

async function UpdateTaskService(req,res) {
    const { taskId, name, statusId } = req.body;
    const { role, employeeId } = req.user;

    const task = await Task.findOne({
        where: {
            id: taskId
        }
    });

    if (!task) return res.status(404).json({message: "task with given task id is not found."});

    const data = {
        updatedAt: new Date()
    };

    if (name) {
        if (role != "ADMIN") return res.status(401).json({message: "you are not authorized to edit this field."});
        data.name = name;
    }

    if (statusId) {
        const status = await Status.findOne({
            where: {
                id: statusId
            }
        });

        if (!status) return res.status(400).json({message: "invalid status id value."});
        
        console.log(role);
        if (role !== "ADMIN") {
            if (!employeeId) {
                res.clearCookie("accessToken");
                res.clearCookie("refreshToken");
                return res.status(401).json({message: "you are are not authenticated"});
            }

            const assignedTask = await AssignTask.findOne({
                where: {
                    taskId
                }
            });
    
            if (assignedTask.employeeId !== employeeId) return res.status(401).json({message: "you are not assigned to this task!"});
        }

        data.statusId = statusId;
    }

    await Task.update({
        data,
        where: {
            id: taskId
        }
    });

    return res.status(200).json({message: "task successfully updated!"});
}

export default UpdateTaskService;
