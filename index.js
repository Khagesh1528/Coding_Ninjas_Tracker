const express = require('express');
const PORT = process.env.PORT || 8000;
const app = express();
const path = require('path')
// Connection To MongoDb
const db = require('./config/mongoose');
// Require the partial Express Layout
// const expressLayouts = require('express-ejs-layouts');

//  Use Express Ejs Layout
// app.use(expressLayouts);
// access the css file
app.use(express.static('assets'));
// app.use(express.urlencoded());



//  link css inside head 
// app.set('layout extractStyles', true);
// app.set('layout extractScripts', true);
// view engine setup
app.set('view engine','ejs');
app.set('views',path.join(__dirname,'views'));


app.use('/', require('./routes'));

app.listen(PORT,function(err){
    if (err) {
        console.log(`Error in running the server: ${err}`);
    }
    console.log(`Server is running on port: ${PORT}`);
});
