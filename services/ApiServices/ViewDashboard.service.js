import { __dirname } from "../../metadata.js";

function ViewDashboardService(req,res) {
    const {role} = req.user;

    if (role === "ADMIN") return res.sendFile(__dirname + "/public/dashboard/admin/index.html");
    res.sendFile(__dirname + "/public/dashboard/employee/index.html");
}

export default ViewDashboardService;