import Mock from 'mockjs';
let Random = Mock.Random;


//    #############################################-------- mock.js数据 -----------############
//    生成规则 有 7 种格式：
//    'name|min-max': value
//    'name|count': value
//    'name|min-max.dmin-dmax': value
//    'name|min-max.dcount': value
//    'name|count.dmin-dmax': value
//    'name|count.dcount': value
//    'name|+step': value
//    let data = Mock.mock({
//        'list | 1-10':[{
//            'id | +1':1
//        }]
//    });
//    ###### 例子
// Mock.mock('/json/news.json', {
//     'data|1-10': [
//         {
//             'name|1-10': 'string',
//             'number1|1-100.1-10': 1,
//             'number2|123.1-10': 1,
//             'number3|123.3': 1,
//             'number4|123.10': 1.123,
//             'names|3': {
//                 'name|1': 'string',
//                 'number1|1-100.1-2': 0,
//                 'number2|123.1-10': 0,
//                 'number3|123.3': 0,
//                 'number4|1': true,
//                 'number5|123.10': 1.123,
//                 'number6|123.10': 1.123,
//                 'array|2': [1, 2, 3, 4, 5, 6, 7, 8, 9, 0],
//                 'fun': () => 1 + 2,
//                 'regexp': /\d/
//             }
//         }]
// });
export default {
    'nav': function () {
        Mock.mock('/json/nav.json', {
            'data|3': [
                {
                    'id|+1': 0,
                    'list|2-8': {
                        'universityLibraryWith': '大学馆配',
                        'socialScienceBooks': '社科书目',
                        'primaryAndSecondarySchools': '中小学',
                        'economyClass': '经济类',
                        'bibliography': '精装书目录',
                        'youngChildrenToBen': '低幼儿童给本',
                        'peasantBookstore': '农家书屋',
                        'computerBooks': '计算机类图书',
                        'literatureBook': '文学类图书',
                        'CompanyNews': '公司新闻',
                        'industryInformation': '行业资讯',
                    }
                }
            ]
        });
    },
    'allData': function () {
        Mock.mock('/json/allData.json', {
            'universityLibraryWith|1-15': [{
                'title': Random.ctitle(3, 7),
                'time': Random.date(),
                'price': Random.float(1, 298, 0, 2),
                'src': Random.dataImage(),
                'content': Random.cparagraph(),
                'down': 'javascript:',
                'productNumber': `${Random.string(3)}-${Random.date('yyyyMMdd')}-${Random.string('number', 6)}`,
                'type': Random.ctitle(7)
            }],
            'socialScienceBooks|1-15': [{
                'title': Random.ctitle(3, 7),
                'time': Random.date(),
                'price': Random.float(1, 298, 0, 2),
                'src': Random.dataImage(),
                'content': Random.cparagraph(),
                'down': 'javascript:',
                'productNumber': `${Random.string(3)}-${Random.date('yyyyMMdd')}-${Random.string('number', 6)}`,
                'type': Random.ctitle(7)
            }],
            'primaryAndSecondarySchools|1-15': [{
                'title': Random.ctitle(3, 7),
                'time': Random.date(),
                'price': Random.float(1, 298, 0, 2),
                'src': Random.dataImage(),
                'content': Random.cparagraph(),
                'down': 'javascript:',
                'productNumber': `${Random.string(3)}-${Random.date('yyyyMMdd')}-${Random.string('number', 6)}`,
                'type': Random.ctitle(7)
            }],
            'economyClass|1-15': [{
                'title': Random.ctitle(3, 7),
                'time': Random.date(),
                'price': Random.float(1, 298, 0, 2),
                'src': Random.dataImage(),
                'content': Random.cparagraph(),
                'down': 'javascript:',
                'productNumber': `${Random.string(3)}-${Random.date('yyyyMMdd')}-${Random.string('number', 6)}`,
                'type': Random.ctitle(7)
            }],
            'bibliography|1-15': [{
                'title': Random.ctitle(3, 7),
                'time': Random.date(),
                'price': Random.float(1, 298, 0, 2),
                'src': Random.dataImage(),
                'content': Random.cparagraph(),
                'down': 'javascript:',
                'productNumber': `${Random.string(3)}-${Random.date('yyyyMMdd')}-${Random.string('number', 6)}`,
                'type': Random.ctitle(7)
            }],
            'youngChildrenToBen|1-15': [{
                'title': Random.ctitle(3, 7),
                'time': Random.date(),
                'price': Random.float(1, 298, 0, 2),
                'src': Random.dataImage(),
                'content': Random.cparagraph(),
                'down': 'javascript:',
                'productNumber': `${Random.string(3)}-${Random.date('yyyyMMdd')}-${Random.string('number', 6)}`,
                'type': Random.ctitle(7)
            }],
            'peasantBookstore|1-15': [{
                'title': Random.ctitle(3, 7),
                'time': Random.date(),
                'price': Random.float(1, 298, 0, 2),
                'src': Random.dataImage(),
                'content': Random.cparagraph(),
                'down': 'javascript:',
                'productNumber': `${Random.string(3)}-${Random.date('yyyyMMdd')}-${Random.string('number', 6)}`,
                'type': Random.ctitle(7)
            }],
            'computerBooks|1-15': [{
                'title': Random.ctitle(3, 7),
                'time': Random.date(),
                'price': Random.float(1, 298, 0, 2),
                'src': Random.dataImage(),
                'content': Random.cparagraph(),
                'down': 'javascript:',
                'productNumber': `${Random.string(3)}-${Random.date('yyyyMMdd')}-${Random.string('number', 6)}`,
                'type': Random.ctitle(7)
            }],
            'literatureBook|1-15': [{
                'title': Random.ctitle(3, 7),
                'time': Random.date(),
                'price': Random.float(1, 298, 0, 2),
                'src': Random.dataImage(),
                'content': Random.cparagraph(),
                'down': 'javascript:',
                'productNumber': `${Random.string(3)}-${Random.date('yyyyMMdd')}-${Random.string('number', 6)}`,
                'type': Random.ctitle(7)
            }],
            'CompanyNews|1-15': [{
                'title': Random.ctitle(3, 7),
                'time': Random.date(),
                'price': Random.float(1, 298, 0, 2),
                'src': Random.dataImage(),
                'content': Random.cparagraph(),
                'down': 'javascript:',
                'productNumber': `${Random.string(3)}-${Random.date('yyyyMMdd')}-${Random.string('number', 6)}`,
                'type': Random.ctitle(7)
            }],
            'industryInformation|1-15': [{
                'title': Random.ctitle(3, 7),
                'time': Random.date(),
                'price': Random.float(1, 298, 0, 2),
                'src': Random.dataImage(),
                'content': Random.cparagraph(),
                'down': 'javascript:',
                'productNumber': `${Random.string(3)}-${Random.date('yyyyMMdd')}-${Random.string('number', 6)}`,
                'type': Random.ctitle(7)
            }],
        });
    }
}