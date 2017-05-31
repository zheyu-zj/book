<template>
    <div class="component">
        <div class="leftList">
            <el-menu :default-active="`/newArivals/${this.$route.params.id}`" class="el-menu-vertical-demo" router>
                <el-menu-item-group title="图书分类">
                    <el-menu-item v-for="(book_warp, key, index) in book_type" :index="`/newArivals/${key}`" :key="index">{{ book_warp.bookTitle }}</el-menu-item>
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
            <ul>
                <li v-for="bookContent in bookWarp">
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
    import {mapState} from 'vuex';

    export default {
        data() {
            return {
                bookWarp: {},
                input: '',
                radio: '1'
            }
        },
        computed: {
            ...mapState({
                book_type: state => state.bookList.newBookShelves
            })
        },
        methods: {
            fetchData() {
                let storage = window.localStorage;
                if (storage.newBookShelves) {
                    this.bookWarp = JSON.parse(storage.getItem('newBookShelves'))[this.$route.params.id].data;
                } else {
                    this.bookWarp = this.book_type[this.$route.params.id].data;
                }
            }
        },
        created() {
            this.fetchData();
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
