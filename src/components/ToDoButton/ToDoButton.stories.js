import ToDoButton from './ToDoButton.vue';
import '../../assets/styles/base/_index.scss';

export default {
    title: 'Example/ToDoButton',
    component: ToDoButton,
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

export const AlertDeleteError = {
    args: {
        btnClass: ['btn--alertDelete', 'btn--alertDelete-error'],
    },
};

export const AlertDeleteInfo = {
    args: {
        btnClass: ['btn--alertDelete', 'btn--alertDelete-info'],
    },
};

