import LiEl from './LiEl.vue';

export default {
    title: 'Example/ListEl',
    component: LiEl,
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

