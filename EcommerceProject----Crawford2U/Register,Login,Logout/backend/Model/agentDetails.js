const mongoose = require("mongoose");

const agentSchemas = new mongoose.Schema({

    firstName: {
        type: String,
        
    },
    middleName: {
        type: String,
        
    },
    lastName: {
        type: String,
        
    },
    phoneNumber: {
        type: String,

    },
    whatsAppNumber: {
        type: String,
    },
    adharCard: {
        type: String
    },
    panCard: {
        type: String
    },
    email: {
        type: String
    },
    pinCode: {
        type: String
    },
    buildingName: {
        type: String
    },
    streetName:
    {
        type: String
    },
    code: {
        type: String
    },
    password: {
        type:String
    }
});

const agentDetails = new mongoose.model("AgentDetails", agentSchemas);
module.exports = agentDetails;
