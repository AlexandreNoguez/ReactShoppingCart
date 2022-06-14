const mongoose = require('../database')

const InstrumentsSchema = new mongoose.Schema(
    {
        title: {
            type: String,
            require: true
        },
        description: {
            type: String,
            require: true
        },
        value: {
            type: Number,
            require: true
        },
        image: {
            type: String,
            require: true
        }
    },
    { timestamps: true }
)

const Instruments = mongoose.model('Instruments', InstrumentsSchema)

module.exports = Instruments
