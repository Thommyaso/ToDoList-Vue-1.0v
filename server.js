import express from 'express';
import pkg from 'body-parser';
import exampleTasks from './src/exampleTasks.js';

const {json} = pkg;
import {v4} from 'uuid';
const app = express();
let tasks = [...exampleTasks];

app.use((__req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE');
    res.header('Access-Control-Allow-Headers', 'Content-Type');
    next();
});

app.use(json());

app.get('/task', function (__req, res) {
    setTimeout(() => {
        res.json(tasks);
    }, 1500);
});

app.post('/task', function (req, res) {
    const {task} = req.body;
    const createdTask = {
        task,
        id: v4(),
    };
    tasks.push(createdTask);
    setTimeout(() => {
        res.status(200).json({
            createdTask,
        });
    }, 1500);
});

app.delete('/task/:id', function (req, res) {
    const id = req.params.id;
    tasks = tasks.filter((obj) => obj.id !== id);
    setTimeout(() => {
        res.status(200).json({
            tasks,
            status: 'ok',
        });
    }, 1500);
});

app.listen(3000);
