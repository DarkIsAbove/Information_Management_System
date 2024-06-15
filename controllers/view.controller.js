import { __dirname } from "../metadata.js";

import ViewDashboardService from "../services/ApiServices/ViewDashboard.service.js";

const controller = {};

controller.ViewLogin = (req,res) => {
    if (req.user) return ViewDashboardService(req,res); 

    res.sendFile(__dirname + "/public/index.html");
};

controller.ViewDashboard =  (req, res) => {
    if (req.error || !req.user) return res.redirect("/");

    ViewDashboardService(req,res);
};

export default controller;