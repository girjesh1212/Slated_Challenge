const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');


const app = express();

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());


// Path to routes
const Gender = require('./api/routes/gender');
const Date = require('./api/routes/date');

// //Use routes
app.use('/gender', Gender);
app.use('/date', Date);



const port = process.env.PORT || 3000;
app.listen(port, function () {
    console.log("Server running on port " + port);
});
