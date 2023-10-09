const mongoose = require("mongoose");
require('dotenv').config();
mongoose.connect("mongodb://127.0.0.1:27017/AgentDetails")
    .then(() => { 
        console.log("Connection is successfully..");
    })
    .catch(() => { 
        console.log("No Connection here..")
    })
/*const DB=process.env.MONGOURL;

mongoose.connect(DB, {
    useNewUrlParser: true,
    useCreateIndex: true,
    useUnifiedTopology: true,
    useFindAndModify:false
})
    .then(() => { 
        console.log("Connection is successfully..");
    })
    .catch(() => { 
        console.log("No Connection here..")
    })*/