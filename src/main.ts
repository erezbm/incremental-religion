import Vue from 'vue';
import App from './App.vue';
import router from './router';
import vuetify from './plugins/vuetify';
import settings from './stores/settings';
import gameLoop from './gameLoop';

Vue.config.productionTip = false;

new Vue({
  router,
  vuetify,
  render: (h) => h(App),
}).$mount('#app');

gameLoop.startOrRestart(settings.state.updatesPerSecond);
