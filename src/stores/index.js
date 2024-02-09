import {createStore} from 'vuex';
import config from '@/service/config';
import TaskModule from './modules/TaskModule';
import MockTaskModule from './modules/MockTaskModule';
import AlertModule from './modules/AlertModule';

export default createStore({
    modules: {
        TaskModule: config.setMockService ? MockTaskModule : TaskModule,
        AlertModule,
    },
});
