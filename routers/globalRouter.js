import express from "express";
import routes from "../routes";
import { home, search } from "../controllers/videoController";
import { join, login, logout } from "../controllers/userController";

const globalRouter = express.Router();

globalRouter.get(routes.home, home); // videoController.js
globalRouter.get(routes.search, search); // videoController.js
globalRouter.get(routes.join, join); // userController.js
globalRouter.get(routes.login, login); // userController.js
globalRouter.get(routes.logout, logout); // userController.js


export default globalRouter;