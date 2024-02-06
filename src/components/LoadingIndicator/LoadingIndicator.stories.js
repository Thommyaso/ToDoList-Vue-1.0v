import LoadingIndicator from './LoadingIndicator.vue';
import '../../assets/styles/base/_index.scss';

export default {
    title: 'Example/LoadingIndicator',
    component: LoadingIndicator,
    tags: ['autodocs'],
    argTypes: {
        visible: {
            control: 'boolean',
        },
    },
};

export const InitLoadingIndicator = {
    args: {
        visible: true,
    },
};

