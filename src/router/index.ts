import Vue from 'vue';
import VueRouter, { RouteConfig } from 'vue-router';
import Home from '../components/Home.vue';
import Settings from '../components/Settings.vue';
import Achievements from '../components/Achievements.vue';

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
