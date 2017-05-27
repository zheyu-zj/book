import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex);

import bookList from './modules/bookList';

export  default new Vuex.Store({
    modules: {bookList}
})