<template>
    <div class="component">
        <div class="leftList">
            <el-menu :default-active="`/news/${this.$route.params.id}`" class="el-menu-vertical-demo" router>
                <el-menu-item-group title="图书分类">
                    <el-menu-item v-for="(news_warp, key, index) in nav[2]" :index="`/news/${key}`" :key="index">{{ news_warp }}</el-menu-item>
                </el-menu-item-group>
            </el-menu>
        </div>
        <div class="newsRight">
            <h2>公司新闻</h2>
            <ul>
                <li v-for="newsContent in newswarp[$route.params.id]">
                    <h4>{{ newsContent.title }}</h4>
                    <div>
                        <time>{{ newsContent.time }}</time>
                        <span>{{ newsContent.browse }}</span>
                    </div>
                    <p>
                        {{ newsContent.content }}
                        <a :href="newsContent.href">查看全文</a>
                    </p>
                </li>
            </ul>
            <!--分页-->
            <br>
            <div class="block">
                <el-pagination
                        @size-change="handleSizeChange"
                        @current-change="handleCurrentChange"
                        :current-page="currentPage4"
                        :page-sizes="[100, 200, 300, 400]"
                        :page-size="100"
                        layout="total, sizes, prev, pager, next, jumper"
                        :total="400">
                </el-pagination>
            </div>
        </div>
    </div>
</template>

<script>
    import {mapState} from 'vuex';

    export default {
        data() {
            return {
//                newswarp: '',
                input: '',
                radio: '1',
                currentPage1: 5,
                currentPage2: 5,
                currentPage3: 5,
                currentPage4: 4
            }
        },
        computed: {
            ...mapState({
                nav: state => state.bookList.downloadTheBibliography,
                newswarp: state => state.bookList.newBookShelves
            })
        },
        created() {
            this.fetchData();
        },
        methods: {
            fetchData() {
                this.$store.dispatch('getNewBook');
//                let storage = window.localStorage;
//                if(storage.news){
//                    this.newswarp = JSON.parse(storage.getItem('newBookShelves'))[this.$route.params.id];
//                }else{
//                    this.newswarp = this.book_list[this.$route.params.id].data;
//                }
            },
            handleSizeChange(val) {
                console.log(`每页 ${val} 条`);
            },
            handleCurrentChange(val) {
                console.log(`当前页: ${val}`);
            }
        },
        watch: {
            '$route': 'fetchData'
        }
    }

</script>

<style lang="scss">
    @import "../../assets/sass/components/variables";
    @import "index";
</style>
