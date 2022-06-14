const Instruments = require('../models/Instruments')

exports.registerNewInstruments = async (req, res) => {
    try {
        const { title, description, value, image } = req.body

        if (!title) {
            return res.status(400).send({ error: 'Invalid instruments name' })
        }
        if (!description) {
            return res
                .status(400)
                .send({ error: 'Invalid instruments description' })
        }
        if (!value) {
            return res.status(400).send({ error: 'Invalid instruments value' })
        }
        if (!image) {
            return res.status(400).send({ error: 'Invalid instruments url' })
        }

        if (await Instruments.findOne({ title })) {
            return res.status(400).send({ error: 'Already exists' })
        }
        const instruments = await Instruments.create(req.body)

        return res.send({ instruments })
    } catch (err) {
        return res.status(400).send({ error: 'Failed on registration' })
    }
}
exports.editInstrumentsRegister = async (req, res) => {
    try {
        const instrumentsID = req.params.id
        const { title, description, address, rentOrBuy, value, image } =
            req.body

        const instrumentsDetails = {
            title,
            description,
            value,
            image
        }
        if (!instrumentsID) {
            return res.status(422).send({ error: 'Property not found' })
        }

        const updateInstruments = await Instruments.findByIdAndUpdate(
            {
                _id: instrumentsID
            },
            instrumentsDetails,
            { new: true }
        )

        updateInstruments.save(instrumentsID)
        return res.status(200).send({
            updateInstruments,
            message: 'Instruments details updated successfuly'
        })
    } catch (err) {
        console.log(err)
        return res.status(400).send({ error: 'Failed to update details' })
    }
}

exports.listAllInstruments = async (req, res) => {
    try {
        const instruments = await Instruments.find()
        return res.status(200).send(instruments)
    } catch (err) {
        return res.status(400).send({ error: 'Failed listing all' })
    }
}

exports.listOneInstrumentById = async (req, res) => {
    try {
        const instrument = await Instruments.findOne()
        return res.status(200).send(instrument)
    } catch (err) {
        return res.status(400).send({ error: 'Failed listing by id' })
    }
}

exports.deleInstrumentById = async (req, res) => {
    try {
        const instrumentId = req.params.id
        const instrument = Instruments.findById({ _id: instrumentId })

        if (!instrument) {
            return res.status(400).send({ error: 'Failed on delete by id' })
        }
        await Instruments.findOneAndDelete({ _id: instrumentId })
        return res.status(200).send({ message: 'Removed successfuly' })
    } catch (err) {
        console.log(err)
        return res.status(400).send({ error: 'Failed deleting by id' })
    }
}
