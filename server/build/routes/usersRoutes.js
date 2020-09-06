"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const usersController_1 = require("./../controllers/usersController");
const express_1 = require("express");
class UsersRoutes {
    constructor() {
        this.router = express_1.Router();
        this.config();
    }
    config() {
        this.router.get("/", usersController_1.usersController.index);
        this.router.get("/:id", usersController_1.usersController.getUserById);
        this.router.post("/", usersController_1.usersController.store);
        this.router.put("/:id", usersController_1.usersController.update);
        this.router.delete("/:id", usersController_1.usersController.delete);
    }
}
const usersRoutes = new UsersRoutes();
exports.default = usersRoutes.router;
