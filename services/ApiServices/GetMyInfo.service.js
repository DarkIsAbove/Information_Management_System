import Employee from "../../models/Employee.js";

async function GetMyInfoService(req,res) {
    const {userId,employeeId} = req.user;
    
    const info = await Employee.findOne({
        where: {
            id: employeeId
        },
        include: {
            department: true
        }
    });

    info.userId = userId;   

    return res.status(200).json(info);
}

export default GetMyInfoService;
