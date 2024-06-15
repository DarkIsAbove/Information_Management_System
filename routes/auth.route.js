import { Router } from "express";
import authController from "../controllers/auth.controller.js";
import authValidator from "../validators/auth.validator.js";
import validate from "../middleware/validate.js";
import isAuthenticated from "../middleware/isAuthenticated.js";
import authorize from "../middleware/authorize.js";

const route = Router();

/**
 * Register an employee account.
 * @Allowed Admin.
 * 
 * POST /api/auth/register
 * 
 * @returns {object} 200 - succesfully created an account for employee.
 * @returns {object} 400 - username is already taken.
 */
route.post(
    "/register",
    isAuthenticated,
    authorize("ADMIN"),
    validate(authValidator.Register),
    authController.Register
);

/**
 * UnRegister / Delete an employee account.
 * @Allowed Admin.
 * 
 * POST /api/auth/unregister
 * 
 * @returns {object} 200 - succesfully deleted an account for employee.
 * @returns {object} 404 - employee with that id is not found.
 */
route.post(
    "/unregister",
    isAuthenticated,
    authorize("ADMIN"),
    validate(authValidator.UnRegister),
    authController.UnRegister
);

/**
 * Login an employee account.
 * POST /api/auth/login
 * 
 * @cookies 200 -set cookie for accessToken and refreshToken
 * @returns {object} 200 - access token and refresh token for authorization.
 * @returns {object} 401 - username or password is invalid.
 */
route.post(
    "/login",
    validate(authValidator.Login),
    authController.Login
);

/**
 * Login an employee account.
 * GET /api/auth/logout
 * 
 * @cookies 200 - clear cookie for accessToken and refreshToken
 * @returns {object} 200 - access token and refresh token cleared.
 */
route.get(
    "/logout",
    authController.Logout
);

export default route;