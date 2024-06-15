import asyncHandler from "./asyncHandler.js";
import CreateProjectService from "../services/ApiServices/CreateProject.service.js";
import CreateTaskService from "../services/ApiServices/CreateTask.service.js";
import CreateDepartmentService from "../services/ApiServices/CreateDepartment.service.js";
import UpdateProjectService from "../services/ApiServices/UpdateProject.service.js";
import AssignTaskService from "../services/ApiServices/AssignTask.service.js";
import UpdateTaskService from "../services/ApiServices/UpdateTask.service.js";
import GetMyInfoService from "../services/ApiServices/GetMyInfo.service.js";
import GetTasksService from "../services/ApiServices/GetTasks.service.js";
import GetProjectsService from "../services/ApiServices/GetProjects.service.js";
import GetStatusService from "../services/ApiServices/GetStatus.service.js";
import GetEmployeesService from "../services/ApiServices/GetEmployees.service.js";
import getDepartmentsService from "../services/ApiServices/GetDepartments.service.js";
import UpdateEmployeeService from "../services/ApiServices/UpdateEmployee.service.js";

const controller = {};

controller.GetStatus = asyncHandler(async (req,res) => {
    await GetStatusService(req,res);
});

controller.GetMyInfo = asyncHandler(async (req,res) => {
    await GetMyInfoService(req,res);
});

controller.GetTasks = asyncHandler(async (req,res) => {
    await GetTasksService(req,res);
});

controller.GetProjects = asyncHandler(async (req,res) => {
    await GetProjectsService(req,res);
});

controller.GetEmployees = asyncHandler(async (req,res) => {
    await GetEmployeesService(req,res);
});

controller.GetDepartments = asyncHandler(async (req,res) => {
    await getDepartmentsService(req,res);
});

controller.CreateProject = asyncHandler(async (req,res) => {
    await CreateProjectService(req,res);
});

controller.CreateTask = asyncHandler(async (req,res) => {
    await CreateTaskService(req,res);
});

controller.CreateDepartment = asyncHandler(async (req,res) => {
    await CreateDepartmentService(req,res);
});

controller.UpdateProject = asyncHandler(async (req,res) => {
    await UpdateProjectService(req,res);
});

controller.UpdateTask = asyncHandler(async (req,res) => {
    await UpdateTaskService(req,res);
});

controller.UpdateEmployee = asyncHandler(async (req,res) => {
    await UpdateEmployeeService(req,res);
});

controller.AssignTask = asyncHandler(async (req,res) => {
    await AssignTaskService(req,res);
});

export default controller;