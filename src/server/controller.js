const resource = require('./db').Resource;

const findResource = (req, res) => {
     resource.find((err, resources) => {
        if (err) {
            res.send(err)
        }
        res.json(resources);
    })
}
const controller = {
    getResources: (req, res) => {
        return findResource(req, res)
    },
    createResource: (req, res) => {
        resource.create({
            type : req.body.type,
            title: req.body.title,
            resource: req.body.resource
        }, function(err, resource) {
            if (err) {
                return res.send(err);
            }
            return findResource(req, res)
        });
    },
    deleteResource: (req, res) => {
        resource.remove({
            _id : req.params.id
        }, (err, resource) => {
            if (err) {
                return res.send(err);
            }
            return findResource(req, res)
        })
    },
    editResource: (req, res) => {
        resource.update({
            type : req.body.type,
            title: req.body.title,
            resource: req.body.resource
        }, function (err, resource) {
            if(err) {
                return res.send(err);
            }
            return findResource(req, res)
        })
    }

}

module.exports = controller