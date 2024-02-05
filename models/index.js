const Traveller = require('./Traveller');
const Location = require('./Location');
const Trip = require('./Trip');

// Define relationships
Traveller.belongsToMany(Location, {
    through: {model: Trip, unique: false},
    foreignKey: 'traveller_id'
});

Location.belongsToMany(Traveller, {
    through: {model: Trip, unique: false},
    foreignKey: 'location_id'
});
module.exports = { Traveller, Location, Trip };
