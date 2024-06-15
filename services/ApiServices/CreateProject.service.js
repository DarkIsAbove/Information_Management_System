import Department from "../../models/Department.js";
import Project from "../../models/Project.js";

async function CreateProjectService(req,res) {
    const {name,statusId,departmentId} = req.body;

    const data = {name,departmentId};

    const department = await Department.findOne({
        where: {
            id: departmentId
        }
    });

    if (!department) return res.status(404).json({message: "department with given department id is not found."});

    if (statusId) data.statusId = statusId;

    await Project.create(data);

    return res.status(201).json({message: "Project successfully created!"});
}

export default CreateProjectService;
