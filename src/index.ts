import mongoose from 'mongoose';
import express from 'express';
import bodyParser from "body-parser";

import { UserController,
         DialogController,
         MessageController } from "./controllers";

const app = express();

app.use(bodyParser.json());

const User = new UserController();
const Messages = new MessageController();
const Dialog = new DialogController();

mongoose.connect('mongodb://localhost:27017/mychat', {
  useNewUrlParser: true,
  useCreateIndex: true,
  useFindAndModify: false
});


app.get("/user/:id", User.show);
app.delete("/user/:id", User.delete);
app.post("/user/registration", User.create);
//app.post("/user/login", User.login);

app.get("/dialogs", Dialog.index);
app.delete("/dialogs/:id", Dialog.delete);
app.post("/dialogs", Dialog.create);

app.get("/messages", Messages.index);
app.post("/messages", Messages.create);
app.delete("/messages/:id", Messages.delete);

app.listen(3030, function () {
  console.log('Example app listening on port 3030!');
});
