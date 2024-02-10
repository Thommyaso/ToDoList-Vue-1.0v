import ToDoAlert from './ToDoAlert.vue';
import '../../assets/styles/base/_index.scss';

export default {
    title: 'Example/ToDoAlert',
    component: ToDoAlert,
    tags: ['autodocs'],
    argTypes: {
        message: {control: {type: null}},
        type: 'error',
        persistent: {control: {type: null}},
    },
};

export const ErrorMessage = {
    args: {
        message: {
            title: 'Task storage server offline!',
            text: 'Run: \' node server.js \' in the project\'s root directory.',
        },
        type: 'error',
        persistent: true,
    },
};

export const InfoMessage = {
    args: {
        message: {title: 'Task Added'},
        type: 'info',
        persistent: true,
    },
};

export const ValidationError = {
    args: {
        message: {title: 'Invalid task'},
        type: 'error',
        persistent: true,
    },
};
