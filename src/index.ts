import mongoose from 'mongoose';
import express from 'express';
import bodyParser from "body-parser";

import User from "./models/User";

const app = express();

app.use(bodyParser.json());

mongoose.connect('mongodb://localhost:27017/mychat', {
  useNewUrlParser: true,
  useCreateIndex: true,
  useFindAndModify: false
});

//  
//user.save().then(() => console.log('meow'));

app.post('/create', function ( req: any, res: any) { 
 const postData = {
   email: req.body.email,
   fullname: req.body.fullname,
   password: req.body.password
 }
  res.send();
  const user = new User(postData);
  user.save().then((obj: any) => {
    res.json(obj);
  }) 
    .catch( (reason: any) => {
      res.json(reason);
  });
});

app.listen(3000, function () {
  console.log('Example app listening on port 3000!');
});
