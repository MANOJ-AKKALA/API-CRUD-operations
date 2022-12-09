const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const statesSchema = new Schema({
    name: String,
    capital: String
})

const State = mongoose.model('State_Capital', statesSchema)

module.exports = State;