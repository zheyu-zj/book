<template>
    <div id="app">

        Clicked: {{ $store.state.count }} times, cout is {{ evenOrOdd }}.
        <button @click="increment">+</button>
        <button @click="decrement">-</button>
        <button @click="incrementIfOdd">Increment if odd</button>
        <button @click="incrementAsync">Increment async</button>


        <header>
            <el-row class="header-warp">
                <el-col :span="12">
                    <a href="javascript:" class="header-logo-a">
                        <img src="./assets/images/logo@2x.jpg" class="header_logo">
                    </a>
                </el-col>
                <el-col :span="12">
                    <el-menu class="el-menu-demo" mode="horizontal" router>
                        <el-menu-item index="/NewArivals"><i class="el-icon-menu contact">
                            <img src="./assets/images/contact@2x.jpg" alt="">
                        </i>联系方式
                        </el-menu-item>
                        <el-menu-item index="/news"><i class="el-icon-menu online">
                            <img src="./assets/images/online@2x.jpg" alt="">
                        </i>在线留言
                        </el-menu-item>
                        <el-menu-item index="/contact"><i class="el-icon-menu enshrine">
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
                        <el-menu-item v-for="(bookTitle, key, index) in book_list" :index="`/download/${key}`" :key="index">{{ bookTitle.bookTitle }}</el-menu-item>
                    </el-submenu>
                    <el-submenu class="el-col el-col-4" index="/newArivals">
                        <template slot="title">新书上架</template>
                        <el-menu-item v-for="(bookTitle, key, index) in book_type" :index="`/newArivals/${key}`" :key="index">{{ bookTitle.bookTitle }}</el-menu-item>
                    </el-submenu>
                    <el-submenu class="el-col el-col-4" index="/news">
                        <template slot="title">新闻动态</template>
                        <el-menu-item v-for="(bookTitle, key, index) in news_type" :index="`/news/${key}`" :key="index">{{ bookTitle.newstype }}</el-menu-item>
                    </el-submenu>
                    <el-menu-item class="el-col el-col-4" index="/contact/online">联系我们</el-menu-item>
                </el-menu>
            </nav>
        </header>
        <main>
            <router-view :book_list="book_list"></router-view>
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
    import { mapGetters, mapActions } from 'vuex'

    const ERR_OK = 200;
    export default {
        data() {
            return {
                book_list: {},
                book_type: {},
                news_type: {},
            }
        },
        created() {
            this.$http.get('/json/index.json').then((response) => {
                if (response.status === ERR_OK) {
                    this.book_list = response.data;
                }
            });
            this.$http.get('/json/newArivals.json').then((response) => {
                if (response.status === ERR_OK) {
                    this.book_type = response.data;
                }
            });
            this.$http.get('/json/news.json').then((response) => {
                if (response.status === ERR_OK) {
                    this.news_type = response.data;
                }
            });
        },
        computed: mapGetters([
            'evenOrOdd'
        ]),
        methods: mapActions([
            'increment',
            'decrement',
            'incrementIfOdd',
            'incrementAsync'
        ])
    }
</script>

<style lang="scss">
    @import "assets/sass/main";
</style>

