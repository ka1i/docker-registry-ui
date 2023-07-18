import type { RouteRecordRaw } from 'vue-router';

import { renderIcon } from '/@/utils/index'
import { Home } from '@vicons/ionicons5';

const routes: Array<RouteRecordRaw> = [
    {
        path: '/',
        name: 'Console',
        meta: {
            orderNo: 1,
            title: "Console",
            icon: renderIcon(Home),
        },
        component: () => import('/@/views/Console.vue'),
    }
]

export default routes