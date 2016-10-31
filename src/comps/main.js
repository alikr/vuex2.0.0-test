import Vue from 'vue';
import Vuex from 'vuex';
import App from './components/app.vue';
import store from './store.js';
Vue.use(Vuex);

new Vue({
    el: '#app',
    store,
    render: (h)=>h(App)
});