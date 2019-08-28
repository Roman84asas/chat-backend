import mongoose from 'mongoose';
import express from 'express';
import bodyParser from "body-parser";

import User from "./models/User";

const app = express();

app.use(bodyParser.json());

mongoose.connect('mongodb://localhost:27017/mychat', {
  useNewUrlParser: true,
  useCreateIndex: true,
});

app.post('/create', function ( req: express.Request, res: express.Response) { 

 const postData = {
   email: req.body.email,
   fullname: req.body.fullname,
   password: req.body.password
 }  
 
  const user = new User(postData);

  user
  .save()
  .then((obj: any) => {
    res.json(obj);
  }) 
  .catch(reason => {
      res.json(reason);
  });
});

app.listen(3030, function () {
  console.log('Example app listening on port 3030!');
});
