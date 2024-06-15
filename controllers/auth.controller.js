import asyncHandler from "./asyncHandler.js";
import RegisterService from "../services/AuthServices/Register.service.js";
import LoginService from "../services/AuthServices/Login.service.js";
import LogoutService from "../services/AuthServices/Logout.service.js";
import UnRegisterService from "../services/AuthServices/UnRegister.service.js";

const controller = {};

controller.Register = asyncHandler(async (req,res) => {
    await RegisterService(req,res);
});

controller.UnRegister = asyncHandler(async (req,res) => {
    await UnRegisterService(req,res);
});

controller.Login = asyncHandler(async (req,res) => {
    await LoginService(req,res);
});

controller.Logout = asyncHandler(async (req,res) => {
    await LogoutService(req,res);
});

export default controller;