import Project from "../../models/Project.js";
import Task from "../../models/Task.js";

async function CreateTaskService(req,res) {
    const {name,status,projectId} = req.body;

    const data = {name,projectId};

    const project = await Project.findOne({
        where: {
            id: projectId
        }
    });

    if (!project) return res.status(404).json({message: "project with given project id is not found."});

    if (status) data.status = status;

    await Task.create(data);

    return res.status(201).json({message: "Task successfully created!"});
}

export default CreateTaskService;
