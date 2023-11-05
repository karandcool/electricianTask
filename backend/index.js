// const { config } = require("dotenv");
const express = require("express");
require('./database')
const app = express();
var parser = require('body-parser');
const cors = require( 'cors' ),
    // Allow Origins according to your need.
    corsOptions = {
        'origin': '*'
    };
    

app.use( cors( corsOptions ) );
app.use(parser.urlencoded({ extended: true }))
app.use(parser.json())
const port = 5000
app.set('view engine', 'ejs');

app.use(express.json())

app.listen(port, function(err){
    if (err) console.log("Error in server setup")
    console.log("Server listening on Port", port);
});
const electricianRoutes = require("./routes/electrianRoute")
const siteRoutes = require("./routes/sitesRoute")


app.use("/api/electrician", electricianRoutes )
app.use("/api/site", siteRoutes )



module.exports = app;
