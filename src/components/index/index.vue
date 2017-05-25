<template>
    <div>
        <carousel></carousel>
        <div class="content">
            <div class="company">
                <div class="live">
                    <h2 class="title_h2">公司实景<a href="javascript:">更多</a></h2>
                    <carousel></carousel>
                </div>
                <div class="introduction">
                    <h2 class="title_h2">公司简介<a href="javascript:">更多</a></h2>
                    <p>北京腾远天下图书有限公司成立于 2005 年，注册资 3000 万元，现已成为一家从事各版图书批发业务的专业型公司。  <br>
                        公司下设财务部、销售中心、信息中心、生产中心、行政人事部。并已在全国 23 个省、市、自治区开设了区域性的销售及售后服务机构，是一家为高校图书馆及公共图书馆提供图书配送的专业图书发行企业。<br>
                        公司与全国 500 多家出版社建立了良好的业务关系，保证常年供货，由于信誉良好、业绩突出，众多出版社的信任和支持充分保证了公司的货源供应。
                                        </p>
                </div>
            </div>
            <div class="books">
                <h2 class="title_h2">新书上架<a href="javascript:">更多</a></h2>
                <ul>
                    <li v-for="book in books">
                        <a :href="book.href">
                            <div class="books_box">
                                <img :src="book.src" alt="">
                            </div>
                            <p>{{ book.title }}   <span>{{ book.price }}</span>元</p>
                        </a>
                    </li>
                </ul>
            </div>
            <div class="company">
                <div class="news">
                    <h2 class="title_h2">公司新闻<a href="javascript:">更多</a></h2>
                    <ul>
                        <li v-for="news in newss">
                            <a :href="news.href">
                                <h6>{{ news.title }}</h6>
                                <time>{{ news.time }}</time>
                            </a>
                        </li>
                    </ul>
                </div>
                <div class="down">
                    <h2 class="title_h2">书目下载<a href="javascript:">更多</a></h2>
                    <ul>
                        <li v-for="book in booklist">
                            <a :href="book.down">
                                <h6>{{ book.title }}</h6>
                                <span>点击下载</span>
                            </a>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import carousel from './Carousel/carousel.vue'
    export default {
        data() {
            return {
                books: [
                    {
                        title: '学习 JavaScript',
                        price: '32.00',
                        src: '',
                        href: 'javascript:'
                    },
                    {
                        title: '学习 123',
                        price: '31.00',
                        src: '',
                        href: 'javascript:'
                    },
                    {
                        title: '学习 321',
                        price: '30.00',
                        src: '',
                        href: 'javascript:'
                    },
                    {
                        title: '学习 4365',
                        price: '35.00',
                        src: '',
                        href: 'javascript:'
                    }
                ],
                newss: [
                    {
                        title: '学习 JavaScript',
                        time: '2013-04-22',
                        href: 'javascript:'
                    },
                    {
                        title: '学习 123',
                        time: '2013-04-22',
                        href: 'javascript:'
                    },
                    {
                        title: '学习 321',
                        time: '2013-04-22',
                        href: 'javascript:'
                    },
                    {
                        title: '学习 JavaScript',
                        time: '2013-04-22',
                        href: 'javascript:'
                    },
                    {
                        title: '学习 123',
                        time: '2013-04-22',
                        href: 'javascript:'
                    },
                    {
                        title: '学习 321',
                        time: '2013-04-22',
                        href: 'javascript:'
                    },
                    {
                        title: '学习 4365',
                        time: '2013-04-22',
                        href: 'javascript:'
                    }
                ],
                booklist: [
                    {
                        title: '学习 JavaScript',
                        down: 'javascript:'
                    },
                    {
                        title: '学习 123',
                        down: 'javascript:'
                    },
                    {
                        title: '学习 321',
                        down: 'javascript:'
                    },
                    {
                        title: '学习 4365',
                        down: 'javascript:'
                    }
                ]
            }
        },
        components: {carousel}
    }
</script>

<style lang="scss">
    @import "../../assets/sass/components/variables";
    @import "index.scss";
</style>
