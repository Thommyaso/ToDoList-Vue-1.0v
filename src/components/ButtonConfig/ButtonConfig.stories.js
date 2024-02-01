import ButtonConfig from './ButtonConfig.vue';
import '../../assets/styles/base/_index.scss';

export default {
    title: 'Example/Button',
    component: ButtonConfig,
    tags: ['autodocs'],
    argTypes: {
        btnClass: {
            control: {type: null},
        },
        isDisabled: {
            control: 'boolean',
        },
    },
};

export const Delete = {
    args: {
        btnClass: 'btn--delete',
        isDisabled: false,
    },
};

export const Add = {
    args: {
        btnClass: 'btn--add',
        isDisabled: false,
    },
};

