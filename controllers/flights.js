const Flight = require('../models/flight');
const ticket = require('../models/ticket');

module.exports = {
    index,
    show,
    new: newFlight,
    create
};

function index(req, res) {
    Flight.find({}, function(err, flights) {
        res.render('flights/index', {title: 'All Flights', flights });
    });
}

function show(req, res) {
    Flight.findById(req.params.id, function(err, flight) {
        ticket.find({flight: flight._id}, function(err, tickets) {});
        res.render('flights/show', {title: 'Flight Detail', flight });
    });
}

function newFlight(req, res) {
    res.render('flights/new', {title: 'Add Flight'});
}

function create(req, res) {
    const flight = new Flight(req.body);
    flight.save(function(err) {
        if(err) console.log(err);
        res.redirect('/flights')
    });
}
