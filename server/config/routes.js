var controller  = require('../controllers/controller')

module.exports = function(app){
    app.get('/tasks',controller.allTasks),
    app.post('/addNew',controller.addNewTask),
    app.get('/task/:id',controller.findOneTask),
    app.put('/update/:id',controller.updateOneTask),
    app.delete('/task/destroy/:id',controller.destroyOneTask)

}