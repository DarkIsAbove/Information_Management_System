import Status from "../../models/Status.js";

async function GetStatusService(req,res) {
    const status = await Status.findMany({});

    return res.status(200).json(status);
}

export default GetStatusService;
