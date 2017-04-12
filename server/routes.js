const ResourceController = require('./controller')

module.exports = (app) => {
    app.get('/api/resources', (ResourceController.getResources));
    app.post('/api/resources/add', ResourceController.createResource);
    app.delete('/api/resources/:id', ResourceController.deleteResource);
}