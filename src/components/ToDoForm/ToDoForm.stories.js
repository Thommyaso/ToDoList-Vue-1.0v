import ToDoForm from './ToDoForm.vue';
import '../../assets/styles/base/_index.scss';

export default {
    title: 'Example/ToDoForm',
    component: ToDoForm,
    tags: ['autodocs'],
    argTypes: {
        onTask: {control: {type: null}},
    },
};

export const ToDoForm01 = {
    args: {
    },
};
