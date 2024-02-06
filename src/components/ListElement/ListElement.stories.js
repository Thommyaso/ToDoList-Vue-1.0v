import ListElement from './ListElement.vue';
import '../../assets/styles/base/_index.scss';

export default {
    title: 'Example/ListEl',
    component: ListElement,
    tags: ['autodocs'],
    argTypes: {
        task: {
            control: 'text',
        },
    },
};

export const ListElement = {
    args: {
        task: 'Practice coding for 5h',
    },
};

