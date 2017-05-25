<template>
    <div class="component">
        <div class="leftList">
            <el-menu default-active="/newArivals" class="el-menu-vertical-demo" router>
                <el-menu-item-group title="图书分类">
                    <el-menu-item v-for="(book_warp, key, index) in book_types" :index="`/newArivals/${key}`" :key="index">{{ book_warp.bookTitle }}</el-menu-item>
                </el-menu-item-group>
            </el-menu>
            <div class="newArivals_warp">
                <h4>图书搜索</h4>
                <el-input
                        placeholder="请输入搜索内容"
                        icon="search"
                        v-model="input"
                >
                </el-input>
                <el-button>搜索</el-button>
                <template>
                    <el-radio class="radio" v-model="radio" label="1">全部</el-radio>
                    <el-radio class="radio" v-model="radio" label="2">书名</el-radio>
                    <el-radio class="radio" v-model="radio" label="3">产品名称</el-radio>
                    <el-radio class="radio" v-model="radio" label="4">编号</el-radio>
                </template>
            </div>
        </div>
        <div class="newArivalsRight">
            <ul v-for="bookTitle in bookwarp">
                <li v-for="bookContent in bookTitle.data">
                    <img :src="bookContent.src" alt="">
                    <div>
                        <h6>{{ bookContent.title }}</h6>
                        <time>{{ bookContent.time }}</time>
                        <p class="price">{{ bookContent.price }}<span>元</span></p>
                        <p>产品名称：<span>{{ bookContent.name }}</span></p>
                        <p>产品编号：<span>{{ bookContent.serial}}</span></p>
                    </div>
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
                bookwarp:[],
                book_types: {},
                input: '',
                radio: '1'
            }
        },
        created() {
            this.$http.get('/json/newArivals.json').then((response) => {
                if (response.status === ERR_OK) {
                    this.book_types = response.data;
                    this.bookwarp = this.book_types
                    console.log(this.bookwarp)
                }
            });
        },
//        watch: {
//            '$route' (to, from) {
//                if (to.params.id !== from.params.id) {
//                    this.bookTitle = this.book_types[to.params.id].data;
//                }
//            }
//        }
    }
</script>

<style lang="scss">
    @import "../../assets/sass/components/variables";
    @import "index";
</style>
