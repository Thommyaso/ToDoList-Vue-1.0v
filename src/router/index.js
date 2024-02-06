import {createRouter, createWebHistory} from 'vue-router';
import ToDoList from '@/views/ToDoList.vue';

const routes = [
    {path: '/', name: 'ToDoList', component: ToDoList},
];

const router = createRouter({
    history: createWebHistory(),
    routes,
});

export default router;
