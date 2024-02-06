import ListElement from './ListElement.vue';
import '../../assets/styles/base/_index.scss';

export default {
    title: 'Example/ListElement',
    component: ListElement,
    tags: ['autodocs'],
    argTypes: {
        task: {
            control: 'text',
        },
    },
};

export const ListElement01 = {
    args: {
        task: 'Practice coding for 5h',
    },
};

