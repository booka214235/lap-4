const express = require('express');

const {
    createTrip,
    retrieveALLTrips,
    retrieveTripByID,
} = require('../controllets.tripController.js');

const tripRouter = express.Router();


tripRouter.post('/', createTrip)
tripRouter.get('/', retrieveALLTrips);
tripRouter.get('/', retrieveTripByID)

module.exports = tripRouter;