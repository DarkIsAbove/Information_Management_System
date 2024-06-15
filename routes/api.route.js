import { Router } from "express";
import apiController from "../controllers/api.controller.js";
import apiValidator from "../validators/api.validator.js";
import validate from "../middleware/validate.js";
import isAuthenticated from "../middleware/isAuthenticated.js";4
import authorize from "../middleware/authorize.js";

const route = Router();

route.get(
    "/status",
    isAuthenticated,
    authorize(["EMPLOYEE","ADMIN"]),
    apiController.GetStatus
);

route.get(
    "/my_info",
    isAuthenticated,
    authorize(["EMPLOYEE","ADMIN"]),
    apiController.GetMyInfo
);

route.get(
    "/tasks/:taskId?",
    isAuthenticated,
    authorize(["ADMIN","EMPLOYEE"]),
    apiController.GetTasks
);

route.get(
    "/projects/:projectId?",
    isAuthenticated,
    authorize(["ADMIN","EMPLOYEE"]),
    apiController.GetProjects
);


route.get(
    "/departments",
    isAuthenticated,
    authorize(["ADMIN"]),
    apiController.GetDepartments
);

route.get(
    "/employees",
    isAuthenticated,
    authorize(["ADMIN"]),
    apiController.GetEmployees
);

route.post(
    "/project/create",
    isAuthenticated,
    authorize("ADMIN"),
    validate(apiValidator.CreateProject),
    apiController.CreateProject);

route.post(
    "/task/create",
    isAuthenticated,
    authorize("ADMIN"),
    validate(apiValidator.CreateTask),
    apiController.CreateTask);    

route.post(
    "/department/create",
    isAuthenticated,
    authorize("ADMIN"),
    validate(apiValidator.CreateDepartment),
    apiController.CreateDepartment); 

route.post(
    "/task/assign",
    isAuthenticated,
    authorize("ADMIN"),
    validate(apiValidator.AssignTask),
    apiController.AssignTask);

route.post(
    "/task/update",
    isAuthenticated,
    authorize(["EMPLOYEE","ADMIN"]),
    validate(apiValidator.UpdateTask),
    apiController.UpdateTask);

route.post(
    "/employee/update",
    isAuthenticated,
    authorize(["ADMIN"]),
    validate(apiValidator.UpdateEmployee),
    apiController.UpdateEmployee);

route.patch(
    "/project/update/:id",
    isAuthenticated,
    authorize("ADMIN"),
    validate(apiValidator.UpdateProject),
    apiController.UpdateProject);


export default route;