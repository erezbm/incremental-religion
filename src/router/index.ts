import Vue from 'vue';
import VueRouter, { RouteConfig } from 'vue-router';
import Home from '@/views/Home.vue';
import Settings from '@/views/Settings.vue';
import Achievements from '@/views/Achievements.vue';

Vue.use(VueRouter);

const routes: Array<RouteConfig> = [
  {
    path: '/',
    component: Home,
  },
  {
    path: '/settings',
    component: Settings,
  },
  {
    path: '/achievements',
    component: Achievements,
  },
];

const router = new VueRouter({
  routes,
});

export default router;
