import axios from 'axios';

function get_a_list() {
        // return axios.get('/json/index.json');

    return axios.get('/json/nav.json');
}
function getNewBook() {
        // return axios.get('/json/newArivals.json');

    return axios.get('/json/allData.json');
}
// function getNews() {
//     return axios.get('/json/news.json');
// }

export default {
    get_a_list,getNewBook
    // getNews
}