import ButtonConfig from './ButtonConfig.vue';

export default {
    title: 'Example/Button',
    component: ButtonConfig,
    tags: ['autodocs'],
    argTypes: {
        text: {
            control: 'text',
        },
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

