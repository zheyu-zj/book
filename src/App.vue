<template>
    <div id="app">
        <header>
            <el-row class="header-warp">
                <el-col :span="12">
                    <a href="javascript:" class="header-logo-a">
                        <img src="./assets/images/logo@2x.jpg" class="header_logo">
                    </a>
                </el-col>
                <el-col :span="12">
                    <el-menu class="el-menu-demo" mode="horizontal" router>
                        <el-menu-item index="/NewArivals">
                            <i class="el-icon-menu contact">
                                <img src="./assets/images/contact@2x.jpg" alt="">
                            </i>联系方式

                        </el-menu-item>
                        <el-menu-item index="/news">
                            <i class="el-icon-menu online">
                                <img src="./assets/images/online@2x.jpg" alt="">
                            </i>在线留言

                        </el-menu-item>
                        <el-menu-item index="/contact">
                            <i class="el-icon-menu enshrine">
                                <img src="./assets/images/enshrine@2x.jpg" alt="">
                            </i>加入收藏

                        </el-menu-item>
                    </el-menu>
                </el-col>
            </el-row>
            <nav>
                <el-menu class="el-menu-demo el-row" mode="horizontal" router>
                    <el-menu-item class="el-col el-col-4" index="/">网站首页</el-menu-item>
                    <el-menu-item class="el-col el-col-4" index="/Company">公司概况</el-menu-item>
                    <el-submenu class="el-col el-col-4" index="/download">
                        <template slot="title">书目下载</template>
                        <el-menu-item v-for="(bookTitle, key, index) in nav[0]" :index="`/download/${key}`" :key="index">{{ bookTitle }}</el-menu-item>
                    </el-submenu>
                    <el-submenu class="el-col el-col-4" index="/newArivals">
                        <template slot="title">新书上架</template>
                        <el-menu-item v-for="(bookTitle, key, index) in nav[1]" :index="`/newArivals/${key}`" :key="index">{{ bookTitle }}</el-menu-item>
                    </el-submenu>
                    <el-submenu class="el-col el-col-4" index="/news">
                        <template slot="title">新闻动态</template>
                        <el-menu-item v-for="(bookTitle, key, index) in nav[2]" :index="`/news/${key}`" :key="index">{{ bookTitle }}</el-menu-item>
                    </el-submenu>
                    <el-menu-item class="el-col el-col-4" index="/contact/online">联系我们</el-menu-item>
                </el-menu>
            </nav>
        </header>
        <main>
            <router-view></router-view>
        </main>
        <footer>
            <div class="footer">
                <div class="footer_left">
                    <img src="./assets/images/logo@2x.jpg" class="footer_logo">
                    <p>
                        常见问题 <br>
                        <a href="javascript:">如何批发图书？</a>
                    </p>
                    <p>
                        诚聘英才 <br>
                        <a href="javascript:">欢迎加入腾远天下</a>
                    </p>
                </div>
                <div class="footer_right">
                    <h6>联系我们</h6>
                    <p>
                        <span>服务时间：</span>周一至周六 08:30-17:30 <br>
                        <span>订购热线：</span>13521345456,17732012258 <br>
                        <span>联系地址：</span>北京市通州区北苑杨庄中街6号
                    </p>
                    <p>
                        <span>服务邮箱：</span>757378575@qq.com <br>
                        <span>官方网址：</span>www.tytxbook.com <br>
                        <span>服务Q Q：</span>757378575(相册样品库)
                    </p>
                </div>
            </div>
            <p class="copyright">Copyright © 2009-2017 All Rights Reserved. 北京腾远天下图书有限公司 版权所有</p>
        </footer>
    </div>
</template>

<script>
    import {mapState} from 'vuex';

    export default {
        data(){
            return {
                "book_list":{},
                "book_type":{},
                "news_type":{}
            }
        },
        computed: {
            ...mapState({
                nav: state => state.bookList.downloadTheBibliography,
            })
        },
        methods: {
            fetchData(){
                this.$store.dispatch('get_a_list');
//                this.$store.dispatch('getNews');
//                this.book_list = this.nav[0].list;
//                this.book_type = this.nav[1].list;
//                this.news_type = this.nav[2].list;

//                let storage = window.localStorage;
//                if(storage.downloadTheBibliography){
//                    this.book_list = JSON.parse(storage.getItem('downloadTheBibliography'))[0].list;
//                    this.book_type = JSON.parse(storage.getItem('downloadTheBibliography'))[1].list;
//                    this.news_type = JSON.parse(storage.getItem('downloadTheBibliography'))[2].list;
//                }else{
//                    this.book_content = this.book_list[this.$route.params.id].data;
//                    this.total = this.book_content.length;
//                    console.log(this.total)
//                }
            },
        },
        created() {
            this.fetchData();
        },
        watch: {
            '$route': 'fetchData'
        },
    }
    //范式化数据JSON
    //    import { normalize, schema } from 'normalizr';
    //    import indexJson from './index'
    //    // 原始数据
    //    const mydata = {
    //        "id": "123",
    //        "author": {
    //            "id": "1",
    //            "name": "Paul"
    //        },
    //        "title": "My awesome blog post",
    //        "comments": [
    //            {
    //                "id": "324",
    //                "commenter": {
    //                    "id": "2",
    //                    "name": "Nicole"
    //                }
    //            }
    //        ]
    //    };
    //    // 定义一个用户模式
    //    const length = new schema.Entity('lengths');
    //
    //    // 定义你的文章
    //    const article = [ length ];
    //
    //    // 开始规范化
    //    const normalizedData = normalize(indexJson, article);
    //    const data = [ { id: '123', name: 'Jim' }, { id: '456', name: 'Jane' } ];
</script>

<style lang="scss">
    @import "assets/sass/main";
</style>