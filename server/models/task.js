const mongoose = require('mongoose')

mongoose.connect('mongodb://localhost/task_api',{ useNewUrlParser: true })

const TaskSchema =  new mongoose.Schema({
    title: { type: String },
    description: { type: String },
    completed: { type: Boolean, default: false }},
    { timestamps: true })

module.exports = mongoose.model('Tasks',TaskSchema)
const Task = mongoose.model('Tasks')
