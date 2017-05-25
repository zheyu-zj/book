<template>
    <div class="block">
        <el-carousel>
            <el-carousel-item v-for="item in 4" :key="item">
                <h3>{{ item }}</h3>
                <img :src="item" alt="">
            </el-carousel-item>
        </el-carousel>
    </div>
</template>

<script>
    export default {}
</script>

<style lang="scss">
    @import "carousel.scss";
</style>
