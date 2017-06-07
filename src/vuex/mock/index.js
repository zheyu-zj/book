import Mock from 'mockjs';

import { nav } from './mock.nav';
import { allData } from './mock.allData';

function addToMock( list ){
    list.forEach( data => {
        Mock.mock( data.path, data.data)
    })
}
addToMock(nav);
addToMock(allData);

export default Mock