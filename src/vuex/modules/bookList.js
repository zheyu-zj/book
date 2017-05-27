import {bookList} from '../api/index';

const state = {
    downloadTheBibliography : {},
    newBookShelves:[],
    news:{}
};

const mutations = {
    set_a_list(state, {info}){
        state.downloadTheBibliography = info;
        let storage = window.localStorage;
        storage.setItem('downloadTheBibliography',JSON.stringify(info))
    },
    setNewBook(state, {info}){
        state.newBookShelves = info;
        let storage = window.localStorage;
        storage.setItem('newBookShelves',JSON.stringify(info))
    },
    setNews(state, {info}){
        state.news = info;
        // let storage = window.localStorage;
        // storage.setItem('news',JSON.stringify(info))
    },
};
const actions = {
    get_a_list({commit}){
        bookList.get_a_list().then(response => {
            commit({
                type: 'set_a_list',
                info: response.data
            })
        })
    },
    getNewBook({commit}){
        bookList.getNewBook().then(response => {
            commit({
                type: 'setNewBook',
                info: response.data
            })
        })
    },
    getNews({commit}){
        bookList.getNews().then(response => {
            commit({
                type: 'setNews',
                info: response.data
            })
        })
    },

};


export default {
    state, mutations, actions
}

// const getters = {
//
// };