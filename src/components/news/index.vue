<template>
    <div class="component">
        <div class="leftList">
            <el-menu default-active="/news" class="el-menu-vertical-demo" router>
                <el-menu-item-group title="图书分类">
                    <el-menu-item v-for="(news_warp, key, index) in book_types" :index="`/news/${key}`" :key="index">{{ news_warp.newstype }}</el-menu-item>
                </el-menu-item-group>
            </el-menu>
        </div>
        <div class="newsRight">
            <h2>公司新闻</h2>
            <ul>
                <li v-for="newsContent in newswarp">
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
        </div>
    </div>
</template>

<script>
    const ERR_OK = 200;
    export default {
        data() {
            return {
                newswarp: '',
                book_types: {},
                input: '',
                radio: '1'
            }
        },
        created() {
            this.$http.get('/json/news.json').then((response) => {
                if (response.status === ERR_OK) {
                    this.book_types = response.data;
                }
            });
        },
        watch: {
            '$route' (to, from) {
                if (to.params.id !== from.params.id) {
                    this.newswarp = this.book_types[to.params.id].data;
                }
            }
        }
    }
</script>

<style lang="scss">
    @import "../../assets/sass/components/variables";
    @import "index";
</style>
