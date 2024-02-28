const mongoose = require('mongoose');
require("dotenv").config();


mongoose.connect(process.env.DB_URL,{
    dbName:"apply",
});

// use `await mongoose.connect('mongodb://user:password@127.0.0.1:27017/test');` if your database has auth enabled
const db=mongoose.connection;
db.on('error',console.error.bind(console,'error connecting to db'));

db.once('open',function(){
    console.log('successfully connected to db');
});
