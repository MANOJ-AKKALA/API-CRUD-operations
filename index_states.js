const express = require("express");
const mongoose = require('mongoose');

const State = require('./States')

const app = express();
app.use(express.json())

const link = "mongodb+srv://apple:apple@cluster0.mf9l5l6.mongodb.net/?retryWrites=true&w=majority";


mongoose.connect(link).then(
    () => console.log('Now You are Connected to Database.......!!!!')).catch(
        err => console.log(err));

/* app.post('/addstates', async (request, response) => {
    const { name, capital } = request.body;
    try {
        const newData = new State({ name, capital })
        await newData.save();
        return response.json(await State.find())
    }
    catch (err) {
        console.log(err.message)
    }

}) */

app.get('/allstate', async (request, response) => {

    try {
        const allData = await State.find();
        return response.json(allData);
    }
    catch (err) {
        console.log(err.message)
    }

})

app.listen(8008, () => console.log("Doing Good......"))