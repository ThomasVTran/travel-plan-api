const router = require('express').Router();
const { Location, Traveller, Trip } = require('../../models');

// GET all locations
router.get('/', async (req, res) => {
    try {
        const locations = await Location.findAll()
        res.status(201).json(locations)
    } catch (error) {
        res.status(500).json(error)
    }
});

// GET a single location
router.get('/:id', async (req, res) => {
    try {
        const oneLocation = await Location.findByPk(req.params.id, {
            include: [{ model: Traveller, through: Trip }]
        })
        res.status(201).json(oneLocation)
    } catch (error) {
        res.status(500).json(error)
    }
});

// CREATE a location
router.post('/', async (req, res) => {
    try {
        const newLocation = await Location.create(req.body)
        res.status(201).json(newLocation)
    } catch (error) {
        res.status(500).json(error)
    }
});

// DELETE a location
router.delete('/:id', async (req, res) => {
    try {
        const destroyedLocation = await Location.destroy({
            where: {
                id: req.params.id
            }
        })
        res.json(201).json(destroyedLocation)
    } catch (error) {
        res.status(500).json(error)
    }
});

module.exports = router;
