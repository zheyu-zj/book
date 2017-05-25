import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const state = {
    count: 0,
    book_list: {},
    book_type: {},
    news_type: {}
};

const mutations = {
    increment (state) {
        state.count++
    },
    decrement (state) {
        state.count--
    }
};

const actions = {
    increment: ({commit}) => commit('increment'),
    decrement: ({commit}) => commit('decrement'),
    incrementIfOdd ({commit, state}) {
        if ((state.count + 1) % 2 === 0) {
            commit('increment')
        }
    },
    incrementAsync ({commit}) {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                commit('increment');
                resolve()
            }, 0)
        })
    }
};

const getters = {
    evenOrOdd: state => state.count % 2 === 0 ? 'even' : 'odd',
    book_list: state => state.book_list,
    book_type: state => state.book_type,
    news_type: state => state.news_type
};

export default new Vuex.Store({
    state,
    getters,
    actions,
    mutations
})