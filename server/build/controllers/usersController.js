"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.usersController = void 0;
const express_1 = require("express");
const database_1 = __importDefault(require("./../database"));
class UsersController {
    index(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            yield database_1.default.then((r) => {
                let result = r.query("select * from users", function (error, rows) {
                    res.send(rows);
                });
            });
        });
    }
    getUserById(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            yield database_1.default.then((r) => {
                let result = r.query("select * from users where id = " + req.params.id, function (error, rows) {
                    res.send(rows);
                });
            });
        });
    }
    store(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            yield database_1.default.then((r) => {
                var sql = `INSERT INTO users SET 
      username = '${req.body.username}', 
      firstName = '${req.body.firstName}', 
      lastName = '${req.body.lastName}',
      email = '${req.body.email}',
      password = '${req.body.password}',
      role = '${req.body.role}'        
      `;
                let result = r.query(sql, function (error, rows) {
                    console.log(express_1.query);
                    res.json({ message: "user created" });
                });
            });
        });
    }
    update(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            yield database_1.default.then((r) => {
                var sqlUpdate = `UPDATE  users  SET 
      username = '${req.body.username}', 
      firstName = '${req.body.description}', 
      lastName = '${req.body.lastName}',
      email = '${req.body.email}',
      password = '${req.body.password}'      
      WHERE id = '${req.params.id}'`;
                console.log(sqlUpdate);
                let result = r.query(sqlUpdate, function (error, rows) {
                    res.json({ message: "user actualizado" });
                });
            });
        });
    }
    delete(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            yield database_1.default.then((r) => {
                var sqlDelete = `DELETE FROM users WHERE id = '${req.params.id}'`;
                console.log(sqlDelete);
                let result = r.query(sqlDelete, function (error, rows) {
                    res.json({ message: "users borrado" });
                });
            });
        });
    }
}
exports.usersController = new UsersController();
exports.default = exports.usersController;
