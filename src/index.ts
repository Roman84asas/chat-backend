import mongoose from 'mongoose';
import express from 'express';
import bodyParser from "body-parser";

import { UserMoldel } from "./models";
import { UserController } from "./controllers";

const app = express();

app.use(bodyParser.json());

const User = new UserController();

mongoose.connect('mongodb://localhost:27017/mychat', {
  useNewUrlParser: true,
  useCreateIndex: true,
});


app.get("/user/:id", User.show);
app.delete("/user/:id", User.delete);
app.post("/user/registration", User.create);
//app.post("/user/login", User.login);


app.listen(3030, function () {
  console.log('Example app listening on port 3030!');
});
