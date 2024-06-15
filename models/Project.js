import Model from "./model.js";

class ProjectModel extends Model {
    constructor(schema) {
        super("project",schema);
    }
}

const ProjectSchema = {
    id: {
        type: "number"
    },
    name: {
        type: "string",
        required: true
    },
    statusId: {
        type: "number"
    },
    departmentId: {
        type: "number",
        required: true
    },
    createdAt: {
        type: "string"
    },
    updatedAt: {
        type: "string"
    },
};

const Project = new ProjectModel(ProjectSchema);

export default Project;
export {Project,ProjectSchema};