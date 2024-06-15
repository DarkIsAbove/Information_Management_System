import bcrypt from "bcrypt";
import User from "../../models/User.js";
import Employee from "../../models/Employee.js";

async function RegisterService(req,res) {
    const {
        firstname,
        lastname,
        username,
        password,
        departmentId
    } = req.body;

    const salt = await bcrypt.genSalt(15);
    const hashedPassword = await bcrypt.hash(password, salt);

    const similarNameUser = await User.findOne({
        where: {
            username
        }
    });

    if (similarNameUser != null) return res.status(400).json({message: "username is already taken."});
    
    const employeeId = await Employee.create({
        firstname,
        lastname,
        departmentId
    });

    console.log(employeeId);

    await User.create({
        username,
        password: hashedPassword,
        employeeId
    });

    res.status(200).json({message: "Account Created."});
}

export default RegisterService;
