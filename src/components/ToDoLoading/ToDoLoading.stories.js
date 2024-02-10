import ToDoLoading from './ToDoLoading.vue';
import '../../assets/styles/base/_index.scss';

export default {
    title: 'Example/ToDoLoading',
    component: ToDoLoading,
    tags: ['autodocs'],
    argTypes: {
        visible: {
            control: 'boolean',
        },
    },
};

export const InitToDoLoading = {
    args: {
        visible: true,
    },
};

