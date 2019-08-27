import mongoose from 'mongoose';
import express from 'express';

import User from "./models/User";

const app = express();

mongoose.connect('mongo', {useNewUrlParser: true});

const user = new User({ email: "hello@mail.ru", fullname: "Test schema" });  
  user.save().then(() => console.log('meow'));

app.get('/', function ( _: any, res: any) { 
  res.send('Hello World!');
  
});

app.listen(3030, function () {
  console.log('Example app listening on port 3000!');
});
