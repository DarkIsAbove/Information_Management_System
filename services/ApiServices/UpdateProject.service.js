import Project from "../../models/Project.js";
import Status from "../../models/Status.js";

async function UpdateProjectService(req,res) {
    const {name,statusId} = req.body;
    const {id} = req.params;

    const project = await Project.findOne({
        where: {
            id
        }
    });

    if (!project) return res.status(404).json({message: "project with given project id is not found."});

    const data = {
        updatedAt: new Date()
    };

    if (name) data.name = name;
    if (statusId) {
        const status = await Status.findOne({
            where: {
                id: statusId
            }
        });

        if (!status) return res.status(400).json({message: "invalid status id value."});
        data.statusId = statusId;
    }

    await Project.update({
        data,
        where: {
            id
        }
    });

    return res.status(200).json({message: "project successfully updated!"});
}

export default UpdateProjectService;
