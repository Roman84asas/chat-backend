import express from "express";
import { UserModel } from "../models";
import { createJWToken } from "../utils";
import bcrypt from 'bcrypt';
import {validationResult} from "express-validator";

class UserController {
    //create user, hash-password,
    create = (req: express.Request, res: express.Response) => {
        const postData = {
            email: req.body.email,
            fullname: req.body.fullname,
            password: req.body.password
        };
        const user = new UserModel(postData);
        user
            .save()
            .then((obj: any) => {
                res.json(obj);
            })
            .catch(reason => {
                res.json(reason);
            });
    };

    //login user, sync hash & create token
    login = (req: express.Request, res: express.Response) => {
        const postData = {
            email: req.body.email,
            password: req.body.password,
        };

        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return res.status(422).json({ errors: errors.array() });
        }

        UserModel.findOne({ email: postData.email }, (err, user: any) => {
            if (err) {
                return res.status(404).json({
                    message: "User not found"
                });
            }

            if (bcrypt.compareSync(postData.password, user.password)) {
                const token = createJWToken(user);
                res.json({
                    status: "success",
                    token
                });
            } else {
                res.json({
                    status: "error",
                    message: "Incorrect password or email"
                });
            }
        });
    };

    //show user
    show = (req: express.Request, res: express.Response) => {
        const id: string = req.params.id;
        UserModel.findById(id, (err, user) => {
            if (err) {
                return res.status(404).json({
                    message: "User not found"
                });
            }
            res.json(user);
        });
    };

    //get user
    getMe = (req: any, res: express.Response) => {
        const id: string = req.user._id;
        UserModel.findById(id, (err, user: any) => {
            if (err || !user) {
                return res.status(404).json({
                    message: "User not found"
                });
            }
            res.json(user);
        });
    };

    //delete user
    delete = (req: express.Request, res: express.Response) => {
        const id: string = req.params.id;
        UserModel.findOneAndRemove({ _id: id })
            .then(user => {
                if (user) {
                    res.json({
                        message: `User ${user.fullname} deleted`
                    });
                }
            })
            .catch(() => {
                res.json({
                    message: `User not found`
                });
            });
    };
}

export default UserController;
