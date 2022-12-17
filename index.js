var express = require('express')
var app = express()
var mongoose = require('mongoose')
var userRouter = require('./Controllers/user.controllers')

app.use(express.json())

mongoose.connect("mongodb://127.0.0.1:27017/prabu",
    {
        useNewUrlParser: true,
        useUnifiedTopology: true,
    },
    (err) => {
        if (err) {
            console.log("Mongodb connection error :" + err);
        } else {
            console.log("Mongodb connection successfully");
        }
    });

app.use('/user', userRouter)

app.listen(5000, () => {
    console.log('Server start successfully');
})