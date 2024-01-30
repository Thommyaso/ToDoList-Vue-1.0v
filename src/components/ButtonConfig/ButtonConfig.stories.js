import ButtonConfig from './ButtonConfig.vue';
import '../../assets/styles/base/_index.scss';

export default {
    title: 'Example/Button',
    component: ButtonConfig,
    tags: ['autodocs'],
    argTypes: {
        btnClass: {
            control: 'text',
        },
    },
};

export const Delete = {
    args: {
        btnClass: 'btn--delete',
    },
};

export const Add = {
    args: {
        btnClass: 'btn--add',
    },
};

