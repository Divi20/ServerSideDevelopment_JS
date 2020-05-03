const mongoose = require('mongoose');
const Schema = mongoose.Schema;
require('mongoose-currency').loadType(mongoose);

var leaderSchema = new Schema({
    name: {
        type: String,
        required: true,
        unique: true
    },
    
image: {
    type: String,
    required: true
},

designation: {
    type: String,
    default: ''
},
abbr: {
    type: String,
    default: ''
},

featured: {
    type: Boolean,
    default:false      
},
description: {
    type: String,
    required: true
}

},
 {
    timestamps: true
});

var leaders = mongoose.model('Leader', leaderSchema);

module.exports = leaders;