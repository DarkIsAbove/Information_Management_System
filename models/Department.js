import Model from "./model.js";

class DepartmentModel extends Model {
    constructor(schema) {
        super("department",schema);
    }
}

const DepartmentSchema = {
    name: {
        type: "string",
        required: true
    },
    createdAt: {
        type: "string"
    },
    updatedAt: {
        type: "string"
    },
};

const Department = new DepartmentModel(DepartmentSchema);


export default Department;
export {Department,DepartmentSchema};