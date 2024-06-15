import Department from "../../models/Department.js";

async function CreateDepartmentService(req,res) {
    const {name} = req.body;

    await Department.create({name});

    return res.status(201).json({message: "Department successfully created!"});
}

export default CreateDepartmentService;
