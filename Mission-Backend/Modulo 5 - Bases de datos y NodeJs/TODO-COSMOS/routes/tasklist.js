const Task = require('../models/task');

//ESTE ES EL CONTROLADOR
class TaskList {

    /**
     * Manejar APIs y despliega y maneja los tasks
     * @param {Task} taskObjecto 
     */
    constructor(taskObjecto) {
        this.taskObjecto = taskObjecto;
    }

    async showTask(req, res) {
        const querySpec = {
            query: "SELECT * FROM root r WHERE r.completed=@completed",
            parameters: {
                name: "@complete",
                value: false
            }
        }

        const items = await this.taskObjecto.find(querySpec);
        res.render("index",{
            title: "Mi lista de pendientes",
            tasks: items
        });
    }
    
    async addTask(req, res) {
        const item = req.body;
        
        await this.taskObjecto.addItem(item);
        res.redirect('/');
    }

    async completeTask(req, res) {
        const completedTask = Object.keys(req.body);
        const tasks = [];

        completedTask.forEach(task => {
            tasks.push(this.taskObjecto.updateItem(task));
        });

        await Promise.all(tasks);

        res.redirect("/");

    }

}

module.exports = TaskList;