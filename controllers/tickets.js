const Ticket = require('../models/ticket');
const Flight = require('../models/flight');

module.exports = {
    new: newTicket,
    create,
    delete: deleteTicket,
}

function newTicket(req, res) {
    // Ticket.find({}).sort('seat')
    // .exec(function(err, tickets) {
    // res.render('tickets/new', {
    //     flight: 'Add Ticket',
    //     tickets
    // });
    // });
    res.render('tickets/new', {title: 'New Ticket', flightId: req.params.id });
}

function create(req, res) {
    req.body.flight = req.params.id;
    Ticket.create(req.body, function(err, ticket) {
        res.redirect(`/flights/${req.params.id}`);
    });
}

function deleteTicket(req, res) {
    Ticket.findByIdAndRemove(req.params.id, function(err, ticket) {
        res.redirect(`/flights/${ticket.flight}`)
    });
}