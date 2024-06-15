import Model from "./model.js";

class StatusModel extends Model {
    constructor(schema) {
        super("status",schema);
    }

    // remove methods.
    async update(){}
    async create(){}
}

const Status = new StatusModel({});

export default Status;