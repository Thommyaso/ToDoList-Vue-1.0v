import express from 'express';
import pkg from 'body-parser';
const {json} = pkg;
import {v4} from 'uuid';
const app = express();
let tasks = [
    {
        id: '34ec12bd-d5a1-4b55-a66f-228ba2b4e0c4',
        task: 'go do this',
    },
    {
        id: '71b22a8c-82ee-484a-89a5-72242d9905f5',
        task: 'go do that',
    },
    {
        id: '87a28615-49e0-4789-8835-332b4d021ffa',
        task: 'uauauiua',
    },
];

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
