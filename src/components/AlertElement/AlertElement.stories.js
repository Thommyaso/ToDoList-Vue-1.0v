import AlertElement from './AlertElement.vue';
import '../../assets/styles/base/_index.scss';

export default {
    title: 'Example/AlertElement',
    component: AlertElement,
    tags: ['autodocs'],
    argTypes: {
        message: {control: 'text'},
        type: 'error',
    },
};

export const ErrorMessage = {
    args: {
        message: 'Network error',
        type: 'error',
    },
};

export const InfoMessage = {
    args: {
        message: 'Task Added',
        type: 'info',
    },
};
