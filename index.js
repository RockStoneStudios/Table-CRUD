const express = require('express');
const app = express();
const config = require('./Config/config');
const path = require('path');
const mongoose = require('mongoose');




app.set('view engine','ejs');
app.set('views',path.join(__dirname,'Views'));

app.use(express.urlencoded({extended: false}));

app.use(express.json());
//Routes

app.use(require('./Routers/router'));

mongoose.connect('mongodb://localhost/Usuarios',{
    useNewUrlParser : true,
    useUnifiedTopology : true
}).then(db => console.log('DB Conected')).catch(err => console.log(err));


app.listen(config.PORT , ()=>{
    console.log('Starting..... Port '+config.PORT);
});







