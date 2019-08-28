import express from "express";
import { User } from "../models";
import { IUser } from "../models/User";

class UserController {
    show(req: express.Request, res: express.Response) {

      const id: string = req.params.id;

      User.findById(id, (err, user) => {
        if (err) {
          return res.status(404).json({
            message: "User not found"
          });
        }
        res.json(user);
      });
    }
}

export default UserController;