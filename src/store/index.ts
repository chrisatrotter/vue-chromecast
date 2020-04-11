import Vue from 'vue';
import Vuex from 'vuex';
import dashboard from './modules/dashboard';
import mainLayout from './modules/mainLayout';

Vue.use(Vuex);

export default new Vuex.Store({
  strict: process.env.DEV === 'true'
});
