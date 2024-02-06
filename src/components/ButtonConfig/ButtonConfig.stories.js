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

export const Loading = {
    args: {
        btnClass: 'btn--loading',
    },
};

