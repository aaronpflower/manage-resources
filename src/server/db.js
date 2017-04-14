const mongoose = require('mongoose')
mongoose.connect(process.env.MONGODB_URI)

const Resource = mongoose.model('Resource', {
    type : {type: String, default: ''},
    title : {type: String, default: ''},
    resource : {type: String, default: ''}
});

module.exports.Resource = Resource;