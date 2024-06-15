import Employee from "../../models/Employee.js";
import User from "../../models/User.js";
import bcrypt from "bcrypt";

async function UpdateEmployeeService(req,res) {
    const {
        employeeId,
        firstname,
        lastname,
        username,
        password,
        departmentId
    } = req.body;

    const employee = await Employee.findOne({
        where: {
            id: employeeId
        }
    });

    if (!employee) return res.status(404).json({message: "employee with given employee id is not found."});

    const targetEmployeeData = {};
    const targetUserData = {};

    if (firstname) targetEmployeeData.firstname = firstname;
    if (lastname) targetEmployeeData.lastname = lastname;
    if (departmentId) targetEmployeeData.departmentId = departmentId;

    if (username) {
        const user = await User.findOne({
            where: {
                username
            }
        });

        if (user) return res.status(400).json({message: "username is already taken."});

        targetUserData.username = username;
    }

    if (password) {
        const salt = await bcrypt.genSalt(15);
        const hashedPassword = await bcrypt.hash(password,salt);
        targetUserData.password = hashedPassword;
    }

    if (Object.keys(targetEmployeeData).length > 0  ) {
        targetEmployeeData.updatedAt = new Date();
        await Employee.update({
            data: targetEmployeeData,
            where: {
                id: employeeId
            }
        });
    }

    if (Object.keys(targetUserData).length > 0) {
        targetUserData.updatedAt = new Date();
        await User.update({
            data: targetUserData,
            where: {
                employeeId
            }
        });
    }

    return res.status(200).json({message: "employee successfully updated!"});
}

export default UpdateEmployeeService;
