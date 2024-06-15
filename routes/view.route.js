import { Router } from "express";
import isAuthenticated from "../middleware/isAuthenticated.js";
import viewController from "../controllers/view.controller.js";

const route = Router();

route.get(
    "/",
    isAuthenticated, 
    viewController.ViewLogin
);

route.get(
    "/dashboard",
    isAuthenticated,
    viewController.ViewDashboard
);

export default route;