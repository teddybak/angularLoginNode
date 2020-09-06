import { Response, Request, query } from "express";
import pool from "./../database";

class UsersController {
  public async index(req: Request, res: Response) {
    await pool.then((r) => {
      let result = r.query("select * from users", function (
        error: Error,
        rows: any
      ) {
        res.send(rows);
      });
    });
  }

  public async getUserById(req: Request, res: Response) {
    await pool.then((r) => {
      let result = r.query(
        "select * from users where id = " + req.params.id,
        function (error: Error, rows: any) {
          res.send(rows);
        }
      );
    });
  }

  public async store(req: Request, res: Response) {
    await pool.then((r) => {
      var sql = `INSERT INTO users SET 
      username = '${req.body.username}', 
      firstName = '${req.body.firstName}', 
      lastName = '${req.body.lastName}',
      email = '${req.body.email}',
      password = '${req.body.password}',
      role = '${req.body.role}'        
      `;
      let result = r.query(sql, function (error: Error, rows: any) {
        console.log(query);
        res.json({ message: "user created" });
      });
    });
  }

  public async update(req: Request, res: Response) {
    await pool.then((r) => {
      var sqlUpdate = `UPDATE  users  SET 
      username = '${req.body.username}', 
      firstName = '${req.body.description}', 
      lastName = '${req.body.lastName}',
      email = '${req.body.email}',
      password = '${req.body.password}'      
      WHERE id = '${req.params.id}'`;
      console.log(sqlUpdate);

      let result = r.query(sqlUpdate, function (error: Error, rows: any) {
        res.json({ message: "user actualizado" });
      });
    });
  }

  public async delete(req: Request, res: Response) {
    await pool.then((r) => {
      var sqlDelete = `DELETE FROM users WHERE id = '${req.params.id}'`;
      console.log(sqlDelete);
      let result = r.query(sqlDelete, function (error: Error, rows: any) {
        res.json({ message: "users borrado" });
      });
    });
  }
}

export const usersController = new UsersController();
export default usersController;
