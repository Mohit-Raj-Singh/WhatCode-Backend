const mongoose = require("mongoose");

const CitySchema = mongoose.Schema({
    city: { type: String, required: true },
    area: { type: Number, required: true },
    rate: { type: Number, required: true },
});

const CityModel = mongoose.model("city", CitySchema);

module.exports = { CityModel };