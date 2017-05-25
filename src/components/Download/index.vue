<template>
    <div class="component">
        <div class="leftList">
            <el-menu default-active="/Download" class="el-menu-vertical-demo" router>
                <el-menu-item-group title="书目下载">
                    <el-menu-item v-for="(bookTitle, key, index) in book_list" :index="`/download/${key}`" :key="index">{{ bookTitle.bookTitle }}</el-menu-item>
                </el-menu-item-group>
            </el-menu>
        </div>
        <div class="rightContent">
            <ul>
                <li v-for="(book, key, index) in book_content">
                    <div>
                        <h3>{{ book.title }}</h3>
                        <a :href="book.down">点击下载</a>
                    </div>
                    <p>{{ book.content }}</p>
                </li>
            </ul>
        </div>
    </div>
</template>

<script>
    const ERR_OK = 200;
    export default {
        props: ['book_list'],
        data() {
            return {
                book_content: {},
                index: '',
            }
        },
        created() {
            console.log(this.$store)
//            this.$http.get('/json/index.json').then((response) => {
//                if (response.status === ERR_OK) {
//                    this.book_list = response.data;
//            let str = this.$route.path.split("/");
//                    this.book_content = this.book_list[str[str.length-1]].data
//            console.log(str)
//                }
//            });
        },
        watch: {
            '$route' (path) {
                console.log(this.$route.path)
            },
            '$route' (to, from) {
                if (to.params.id !== from.params.id) {
                    this.book_content = this.book_list[to.params.id].data;
                } else {
                    let str = this.$route.path.split("/");
                    this.book_content = this.book_list[str[str.length - 1]].data
                }
            }
        }
    }
</script>

<style lang="scss">
    @import "../../assets/sass/components/variables";
    @import "index";
</style>
