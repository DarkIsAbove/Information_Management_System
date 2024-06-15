import { EmployeeSchema } from "../models/Employee.js";
import { UserSchema } from "../models/User.js";

const validator = {};

validator.Register = {
    ...EmployeeSchema,
    ...(({username,password}) => ({username,password}))(UserSchema)
};

validator.UnRegister = {
    employeeId: {
        type: "number",
        required: true
    }
};

validator.Login = {
    username: {
        type: "string",
        required: true
    },
    password: {
        type: "string",
        required: true
    },
}

export default validator;