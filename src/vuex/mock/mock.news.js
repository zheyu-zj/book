export const news = [
    {
        path: '/json/news.json',
        data: {
            'total': '400',
            'data|10': [
                {
                    'title': Random.ctitle(3, 7),
                    'time': Random.date(),
                    'price': Random.float(1, 298, 0, 2),
                    'src': Random.dataImage(),
                    'content': Random.cparagraph(),
                    'down': 'javascript:',
                    'productNumber': `${Random.string(3)}-${Random.date('yyyyMMdd')}-${Random.string('number', 6)}`,
                    'type': Random.ctitle(7)
                }
            ]
        }
    }
];