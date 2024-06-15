import { AssignTaskSchema } from "../models/AssignTask.js";
import { DepartmentSchema } from "../models/Department.js";
import { ProjectSchema } from "../models/Project.js";
import { TaskSchema } from "../models/Task.js";

const validator = {};

validator.CreateProject = {
    ...(({name,statusId,departmentId}) => ({name,statusId,departmentId}))(ProjectSchema)
};

validator.CreateTask = {
    ...(({name,projectId}) => ({name,projectId}))(TaskSchema)
};

validator.CreateDepartment = {
    ...DepartmentSchema
};

validator.UpdateProject = {
    name: {
        type: "string"
    },
    statusId: {
        type: "number"
    }
}

validator.UpdateTask = {
    taskId: {
        type: "number",
        required: true  
    },
    name: {
        type: "string"
    },
    statusId: {
        type: "number"
    }
}


validator.UpdateEmployee = {
    employeeId: {
        type: "number",
        required: true
    },
    firstname: {
        type: "string",
    },
    lastname: {
        type: "string",
    },
    departmentId: {
        type: "number",
    },
    username: {
        type: "string",
    },
    password: {
        type: "string",
    },
    employeeId: {
        type: "number",
    }
}

validator.AssignTask = {
    ...AssignTaskSchema
}

export default validator;