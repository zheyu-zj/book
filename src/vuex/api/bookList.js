import axios from 'axios';

function get_a_list() {
    return axios.get('/json/index.json');
}
function getNewBook() {
    return axios.get('/json/newArivals.json');
}
function getNews() {
    return axios.get('/json/news.json');
}

export default {
    get_a_list,getNewBook,getNews
}