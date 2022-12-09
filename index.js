
const express = require("express");
const mongoose = require('mongoose');

const StudentDetails = require('./student')


const app = express();
app.use(express.json())

const link = "mongodb+srv://apple:apple@cluster0.mf9l5l6.mongodb.net/?retryWrites=true&w=majority";


mongoose.connect(link).then(
    () => console.log('Now You are Connected to Database.......!!!!')).catch(
        err => console.log(err));


app.get("/getallstudentdetails", async (request, response) => {
    try {
        const allData = await StudentDetails.find();
        return response.json(allData);
    }
    catch (err) {
        console.log(err.message)
    }

});

app.get("/getallstudentdetails/:id", async (request, response) => {
    try {
        const SingleData = await StudentDetails.findById(request.params.id)
        return response.json(SingleData)
    }
    catch (err) {
        console.log(err.message)
    }
})

app.post('/addstudents', async (request, response) => {
    const { name, city } = request.body;
    try {
        const newData = new StudentDetails({ name, city })
        await newData.save();
        return response.json(await StudentDetails.find())
    }
    catch (err) {
        console.log(err.message)
    }

})

 app.put('/updatestudent/:id', async (request, response) => {

    try {
        const insertData = await StudentDetails.findOneAndUpdate(
            {_id: request.params.id},
            {
                "name":request.body.name,
                "city":request.body.city
            });
            response.send(insertData)
    }
    catch (err) {
        console.log(err.message)
    }

}) 


app.delete('/deletestudent/:id', async (request, response) => {
    try {
        await StudentDetails.findByIdAndDelete(request.params.id)
        return response.json(await StudentDetails.find())
    }
    catch (err) {
        console.log(err.message)
    }
})




app.listen(8008, () => console.log("Doing Good......"))

 
