import Model from "./model.js";

class TaskModel extends Model {
    constructor(schema) {
        super("task",schema);
    }
}

const TaskSchema = {
    name: {
        type: "string",
        required: true
    },
    status: {
        type: "string"
    },
    projectId: {
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

const Task = new TaskModel(TaskSchema);

export default Task;
export {Task,TaskSchema};