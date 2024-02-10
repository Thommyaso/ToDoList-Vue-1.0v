import ToDoList from './ToDoList.vue';
import '../../assets/styles/base/_index.scss';

export default {
    title: 'Example/ToDoList',
    component: ToDoList,
    tags: ['autodocs'],
    argTypes: {
        task: {
            control: 'text',
        },
    },
};

export const ToDoList01 = {
    args: {
        task: 'Practice coding for 5h',
    },
};

