import Model from "./model.js";

class EmployeeModel extends Model {
    constructor(schema) {
        super("employee",schema);
    }
}

const EmployeeSchema = {
    firstname: {
        type: "string",
        required: true
    },
    lastname: {
        type: "string",
        required: true
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

const Employee = new EmployeeModel(EmployeeSchema);


export default Employee;
export {Employee,EmployeeSchema};