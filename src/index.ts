import mongoose from 'mongoose';
import express from 'express';
import bodyParser from "body-parser";

import User from "./models/User";

const app = express();

app.use(bodyParser.json());

mongoose.connect('mongodb://localhost:27017/mychat', {useNewUrlParser: true});

//const user = new User({ email: "hello@mail.ru", fullname: "Test schema" });  
//user.save().then(() => console.log('meow'));

app.post('/create', function ( req: any, res: any) { 
  console.log(req.body);
  res.send();
  
});

app.listen(3000, function () {
  console.log('Example app listening on port 3000!');
});
