import express from "express";
import { UserModel } from "../models";

export default (
  _: express.Request,
  __: express.Response,
  next: express.NextFunction
) => {
  UserModel.findOneAndUpdate(
    { _id: "5d681beebc3bc915307b95c1" },
    {
      fullname: "qwe",
      last_seen: new Date()
    },
    { new: true },
    () => {}
  );
  next();
};
