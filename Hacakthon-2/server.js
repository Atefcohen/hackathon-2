const express = require("express");
const app = express();
const fs = require("fs");
const db = require("./db.js")

app.use('/',express.static(__dirname+'/public'));

app.use(express.json())
app.use(
    express.urlencoded({
        extended: true
    })
)



app.listen(8000, function () {
    console.log("Listening on port 8000!");
});
 
app.get("/getrandom", async function(req,res){
    //res.json()
    const Videos = await db.queryLauncher()
    res.json(Videos)
 
} )

