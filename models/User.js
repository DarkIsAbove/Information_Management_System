import Model from "./model.js";

class UserModel extends Model {
    constructor(schema) {
        super("user",schema);
    }
}

const UserSchema = {
    username: {
        type: "string",
        required: true
    },
    password: {
        type: "string",
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

const User = new UserModel(UserSchema);


export default User;
export {User,UserSchema};