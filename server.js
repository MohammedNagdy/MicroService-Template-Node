express = require('express');
bodyParser = require('body-parser');
register = require('./apis/register.js');
const connector = require("./db/connector");
investor = require("./db/models/register-model")

 
app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

PORT = process.env.port || 4000;

// connect to database mongoDB
connector();


// apis and the their routings
// make sure to '/' before every api route
register("/register")


app.listen(PORT, () => {
    console.log(`Listening on port: ${PORT}`)
})