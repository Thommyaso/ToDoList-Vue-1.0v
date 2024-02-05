import Alert from './Alert.vue';
import '../../assets/styles/base/_index.scss';

export default {
    title: 'Example/Alert',
    component: Alert,
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
