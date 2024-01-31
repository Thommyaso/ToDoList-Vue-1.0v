import TaskForm from './TaskForm.vue';
import '../../assets/styles/base/_index.scss';

export default {
    title: 'Example/TaskForm',
    component: TaskForm,
    tags: ['autodocs'],
    argTypes: {
        onTask: {control: {type: null}},
    },
};

export const TaskForm01 = {
    args: {
    },
};
