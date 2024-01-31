import MessageConfig from './MessageConfig.vue';
import '../../assets/styles/base/_index.scss';

export default {
    title: 'Example/Alert',
    component: MessageConfig,
    tags: ['autodocs'],
    argTypes: {
    },
};

export const ErrorMessage = {
    args: {
        message: 'Network error',
        classes: 'alert--visible',
    },
};
