const PersonController = require('../controllers/pet.controller');
module.exports = function(app){
    app.get('/api', PersonController.index); 
    app.post('/api/pets', PersonController.createPet);
    app.get('/api/pets/find', PersonController.getAll);
    app.get('/api/pets/find/:id', PersonController.getOne);
    app.put('/api/pets/update/:id', PersonController.updateOne);
    app.delete('/api/pets/delete/:id', PersonController.deleteOne);
}