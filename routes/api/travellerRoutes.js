const router = require('express').Router();
const { Traveller, Trip, Location } = require('../../models');

// GET all travellers
router.get('/', async (req, res) => {
    try {
        const travellers = await Traveller.findAll()
        res.status(201).json(travellers)
    } catch (error) {
        res.status(500).json(error)
    }
});

// GET a single traveller
router.get('/:id', async (req, res) => {
    try {
        const oneTraveller = await Traveller.findByPk(req.params.id, {
            include: [{ model: Location, through: Trip }]
        })
        res.status(201).json(oneTraveller)
    } catch (error) {
        res.status(500).json(error)
    }
});

// CREATE a traveller
router.post('/', async (req, res) => {
    try {
        const newTraveller = await Traveller.create(req.body)
        res.status(201).json(newTraveller)
    } catch (error) {
        res.status(500).json(error)
    }
});

// DELETE a traveller
router.delete('/:id', async (req, res) => {
    try {
        const destroyedTraveller = await Traveller.destroy({
            where: {
                id: req.params.id
            }
        })
        res.json(201).json(destroyedTraveller)
    } catch (error) {
        res.status(500).json(error)
    }
});

module.exports = router;
