import {createStore} from 'vuex';
import TaskModule from './Modules/TaskModule';
import AlertModule from './Modules/AlertModule';

export default createStore({
    modules: {
        TaskModule,
        AlertModule,
    },
});
