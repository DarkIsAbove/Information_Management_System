import Model from "./model.js";

class AssignTaskModel extends Model {
    constructor(schema) {
        super("assigned_task",schema);
    }
}

const AssignTaskSchema = {
    taskId: {
        type: "number",
        required: true
    },
    employeeId: {
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

const AssignTask = new AssignTaskModel(AssignTaskSchema);

export default AssignTask;
export {AssignTask,AssignTaskSchema};