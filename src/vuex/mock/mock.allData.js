import Mock from 'mockjs';
let Random = Mock.Random;

export const allData = [
    {
        path: '/json/allData.json',
        data: {
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
        }
    }
];