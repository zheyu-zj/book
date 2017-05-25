import axios from 'axios';
import store from '../Store/store';

const apiDomain = 'http://exchange.dev/api/';

const getMarketInfoUrl = apiDomain + 'exchangeInfo';

const getMarketsStructureUrl = apiDomain + 'markets';

const getMarketsInfoUrl = apiDomain + 'marketsInfo';

const getmarketTrustsUrl = apiDomain + 'marketTrusts';

const getmarketOrdersUrl = apiDomain + 'marketOrders';

const getmarketKlineUrl = apiDomain + 'marketKline';


// 获取当前币种的交易行情
function bookList({market, coin}) {
    // return axios.post(getMarketInfoUrl, {market, coin});
    return axios.get('/json/index.json');
}


function getMarketsStructure() {
    // 判断是否过期
    if (Date.now() > store.state.exchange.marketsStructure.updated_at) {
        return axios.post(getMarketsStructureUrl).then(response => {
            store.commit({
                type: 'setMarketsStructure',
                structure: response.data
            });
            return response.data;
        })
    } else {
        return Promise.resolve(store.state.exchange.marketsStructure.structure);
    }
}

function getMarketsInfo() {
    return axios.post(getMarketsInfoUrl);
}

function getMarketKline({market, coin, type}) {
    return axios.post(getmarketKlineUrl, {market, coin, type});
}

function getMarketTrusts({market, coin, type}) {
    return axios.post(getmarketTrustsUrl, {market, coin, type});
}

function getmarketOrders({market, coin}) {
    return axios.post(getmarketOrdersUrl, {market, coin});
}


export default {
    bookList, getMarketsInfo, getMarketTrusts, getmarketOrders, getMarketsStructure, getMarketKline
};
