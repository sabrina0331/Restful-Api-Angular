const Task = require('../models/task')

module.exports = {
    allTasks: function(req,res){
        Task.find({},function(err,tasks){
            if(err){
                res.json(err)
            }else{
                res.json(tasks)
            }
        })
    },
    addNewTask: function(req,res){
        var newTask = new Task(req.body)
        newTask.save(function(err,tasks){
            if(err){
                res.json(err)
            }else{
                console.log(newTask)
                res.json(tasks)
            }
        })
    },
    findOneTask: function(req,res){
        Task.find({_id: req.params.id },function(err,task){
            if(err){
                res.json(err)
            }else{
                res.json(task)
            }
        })
    },
    updateOneTask: function(req,res){
        Task.updateOne({_id: req.params.id },req.body ,function(err,task){
            if(err){
                res.json(err)
            }else{
                res.json(task)
            }
        })
    },
    destroyOneTask: function(req,res){
        Task.deleteOne({ _id: req.params.id },function(err,task){
            if(err){
                res.json(err)
            }else{
                res.json(task)
            }
        })
    }
}