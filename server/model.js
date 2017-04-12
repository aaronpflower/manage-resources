const mongoose = require('mongoose')

const Resource = mongoose.model('Resource', {
    type : {type: String, default: ''},
    title : {type: String, default: ''},
    resource : {type: String, default: ''}
});

module.exports = Resource