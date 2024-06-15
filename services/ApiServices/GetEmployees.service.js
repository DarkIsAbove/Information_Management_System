import Employee from "../../models/Employee.js";

async function GetEmployeesService(req,res) {
    const data = await Employee.findMany({
        include: {
            department: true
        }
    });

    return res.status(200).json(data);
}

export default GetEmployeesService;
