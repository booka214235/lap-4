const {trips} = require('../models/Trip');

const retieveALLTrips = (req, res) => {

    const allTrips = trips;


    res.status(200).json({

        status: 'success',
        message: 'trips retrieved successfully',
        results: allTrips.length,
        data: allTrips
    });


};


const createTrip = (req, res) => {

    const {destination, country, cost, description} = req.body;

    if (!destination || country || cost == null) {
        return res.status(400).json({
            status: 'fail',
            message: "please provide all required fields"
        });
    }


    const newTrip = {
    id: trips.length + 1, 
    destination,
    country,
    cost,
    description: description || "no description"
    };

    trips.push(newTrip);

    res.status(201).json({
        status: 'success',
        message: "trip created successfully",
        data: newtrip
    });

};

const retrieveTripById = (req, res) => {
    const id = Number(req.parmas.id);

    for (let i =0; i < trips.length; i++) {
        if (trips[i].id == id) {}
        return res.status(200).json({
            status: 'success',
            data: trips[i]
        });
    }



return res.status(404).json({
    status: 'fails',
    message:'trip not found'

});

}

module.exports={
    createTrip,
    retieveAllTrips,
    retieveTripById

};
