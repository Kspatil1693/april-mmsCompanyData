require("./db/connection");
const express = require("express");
const app = express();
const port = process.env.PORT || 5001;
const path = require("path");
const AgentDetails = require("./Model/agentDetails");

const template_path=path.join(__dirname,'./template/Views')

app.set('view engine', 'hbs');
app.set('views',template_path);

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.get('/', (request, response) => {
    response.render('index');
});
app.post('/agentRegister', async (request, response) => { 
    try {
        const phoneNumber = request.body.PhoneNumber;
    if (phoneNumber === phoneNumber) {
        const agentData = new AgentDetails({
            firstName: request.body.firstName,
            middleName: request.body.middleName,
            lastName: request.body.lastName,
            phoneNumber: request.body.phoneNumber,
            whatsAppNumber: request.body.whatsAppNumber,
            email: request.body.email,
            password: request.body.password,
            buildingName: request.body.buildingName,
            streetName: request.body.streetName,
            pinCode: request.body.pinCOde,
            agentCode: request.body.code
        })
        console.log(agentData);
        const agentpostData = await agentData.save();
        response.send(agentpostData);
    } else { 
        response.send("Phone Number are not matching...")
    }
    } catch (error) {
        console.log(error);
        response.send(error);
    }
    
})


app.listen(port, () => {
    console.log(`Server running on port number ${port}`);
});







