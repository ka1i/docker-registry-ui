import type { RouteRecordRaw } from 'vue-router';

import { LayoutView } from '/@/constant/index'
import HomeView from '/@/views/Home.vue'

export const RootRoute: RouteRecordRaw = {
    path: '/',
    name: 'Root',
    component: LayoutView,
    children: [
        {
            path: "/",
            name: "Home",
            component: HomeView,
        },
    ]
}

export const routes: RouteRecordRaw[] = [RootRoute]
