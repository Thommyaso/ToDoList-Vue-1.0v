import Loader from './Loader.vue';
import '../../assets/styles/base/_index.scss';

export default {
    title: 'Example/Alert',
    component: Loader,
    tags: ['autodocs'],
    argTypes: {
        classes: {control: {type: null}},
        message: {control: 'text'},
    },
};

export const ErrorMessage = {
    args: {
        message: 'Network error',
        classes: ['alert--visible', 'alert--error'],
    },
};

export const InfoMessage = {
    args: {
        message: 'Loading...',
        classes: ['alert--visible', 'alert--info'],
    },
};
