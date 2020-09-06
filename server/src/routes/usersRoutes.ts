import { usersController } from "./../controllers/usersController";
import { Router } from "express";
class UsersRoutes {
  public router: Router = Router();

  constructor() {
    this.config();
  }

  config() {
    this.router.get("/", usersController.index);
    this.router.get("/:id", usersController.getUserById);
    this.router.post("/", usersController.store);
    this.router.put("/:id", usersController.update);
    this.router.delete("/:id", usersController.delete);
  }
}

const usersRoutes = new UsersRoutes();
export default usersRoutes.router;
