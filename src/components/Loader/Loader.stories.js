import Loader from './Loader.vue';
import '../../assets/styles/base/_index.scss';

export default {
    title: 'Example/Loader',
    component: Loader,
    tags: ['autodocs'],
    argTypes: {
        visible: {
            control: 'boolean',
        },
    },
};

export const InitLoader = {
    args: {
        visible: true,
    },
};

