var mongoose = require('mongoose');
var Schema = mongoose.Schema;


const destinationSchema = new Schema({
    airport: {
        type: String,
        enum: ['AUS', 'DFW', 'DEN', 'LAX', 'SAN']
    },
    arrival: {
        type: Date,
    }
}, {
    timestamps: true
});

const flightSchema = new Schema({
    airline: {
        type: String,
        enum: ['American', 'Southwest', 'United']
    },
    airport: {
        type: String,
        enum: ['AUS', 'DFW', 'DEN', 'LAX', 'SAN'],
        default: 'DEN'
    },
    flightNo: {
        type: Number,
        min: 10,
        max: 9999
    },
    departs: {
        type: Date,
        default: function() {
            const aYearFromNow = new Date();
            aYearFromNow.setFullYear(aYearFromNow.getFullYear() + 1);
            return aYearFromNow;
        },
    },
    destinations: [destinationSchema]
}, {
    timestamps: true
});

module.exports = mongoose.model('Flight', flightSchema);
