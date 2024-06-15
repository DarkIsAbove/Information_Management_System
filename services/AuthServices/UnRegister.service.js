import User from "../../models/User.js";
import Employee from "../../models/Employee.js";

async function UnRegisterService(req,res) {
    const {
        employeeId
    } = req.body;

    const employee = await Employee.findOne({
        where: {
            id: employeeId
        }
    });

    if (!employee) return res.status(404).json({message: "employee with given employee id is not found."});

    const deleteUser = await User.delete({
        where: {
            employeeId
        }
    });

    const deleteEmployee = await Employee.delete({
        where: {
            id: employeeId
        }
    });

    console.log(deleteUser,deleteEmployee)
    
    res.status(200).json({message: "Employee Deleted."});
}

export default UnRegisterService;
