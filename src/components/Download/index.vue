<template>
    <div class="component">
        <div class="leftList">
            <el-menu :default-active="`/download/${$route.params.id}`" class="el-menu-vertical-demo" router>
                <el-menu-item-group title="书目下载">
                    <el-menu-item v-for="(bookTitle, key, index) in nav[0]" :index="`/download/${key}`" :key="index">{{ bookTitle }}</el-menu-item>
                </el-menu-item-group>
            </el-menu>
        </div>
        <div class="rightContent">
            <ul>
                <li v-for="(book, key, index) in book_content[$route.params.id]">
                    <div>
                        <h3>{{ book.title }}</h3>
                        <a :href="book.down">点击下载</a>
                    </div>
                    <p>{{ book.content }}</p>
                </li>
            </ul>
            <div class="block">
                <el-pagination
                        @size-change="handleSizeChange"
                        @current-change="handleCurrentChange"
                        :current-page="currentPage4"
                        :page-sizes="[10, 15, 20, 30]"
                        :page-size="10"
                        layout="prev, pager, next, jumper, total, sizes"
                        :total=total>
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
                index: '',
                currentPage4: 1,
                total:1,
            }
        },
        computed: {
            ...mapState({
                nav: state => state.bookList.downloadTheBibliography,
                book_content: state => state.bookList.newBookShelves
            })
        },
        methods: {
            fetchData(){
                this.$store.dispatch('getNewBook');
//                let storage = window.localStorage;
//                if(storage.downloadTheBibliography){
//                this.book_content = JSON.parse(storage.getItem('newBookShelves'))[this.$route.params.id];
//                    this.total = this.book_content.length;
//                    console.log(this.total)
//                }else{
//                    this.book_content = this.book_list[this.$route.params.id].data;
//                    this.total = this.book_content.length;
//                    console.log(this.total)
//                }
            },
            handleSizeChange(val) {
                console.log(`每页 ${val} 条`);
            },
            handleCurrentChange(val) {
                console.log(`当前页: ${val}`);
            }
        },
        created() {
            this.fetchData();
        },
        watch: {
            '$route': 'fetchData',
        },
    }
</script>

<style lang="scss">
    @import "../../assets/sass/components/variables";
    @import "index";
</style>
