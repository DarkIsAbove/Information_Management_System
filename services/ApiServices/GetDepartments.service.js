import Department from "../../models/Department.js";

async function getDepartmentsService(req,res) {
    const data = await Department.findMany({});

    return res.status(200).json(data);
}

export default getDepartmentsService;
