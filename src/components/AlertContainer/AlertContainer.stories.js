import AlertContainer from './AlertContainer.vue';
import '../../assets/styles/base/_index.scss';

export default {
    title: 'Example/AlertContainer',
    component: AlertContainer,
    tags: ['autodocs'],
    argTypes: {
        alerts: {control: {type: null}},
        processRemove: {control: {type: null}},
    },
};

export const AlertContainer01 = {
    args: {
        alerts: [
            {
                type: 'error',
                message: 'Network error',
            },
            {
                type: 'error',
                message: 'Invalid task',
            },
            {
                type: 'info',
                message: 'Task Added',
            },
        ],
        processRemove() {
            return;
        },
    },
};
