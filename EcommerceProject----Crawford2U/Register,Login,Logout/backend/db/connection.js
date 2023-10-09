const mongoose = require("mongoose");

mongoose.connect("mongodb://127.0.0.1:27017/Crawford2UData")
    .then(() => { 
        console.log("Connection Successfully");
    })
    .catch((error) => { 
        console.log("No connection here...");
        console.log(error);
    })