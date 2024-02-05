const router = require('express').Router();
const { Trip } = require('../../models');

// CREATE a trip
router.post('/', async (req, res) => {
try{
    const newTrip = await Trip.create(req.body)
    res.status(201).json(newTrip)
} catch (err) {
    res.status(500).json(err)
}

});

// DELETE a trip
router.delete('/:id', async (req, res) => {
    try {
        const destroyedTrip = await Trip.destroy({
            where: {
                id: req.params.id
            }
        })
        res.json(201).json(destroyedTrip)
    } catch (error) {
        res.status(500).json(error)
    }
});

module.exports = router;
