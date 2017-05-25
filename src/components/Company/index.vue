<template>
    <div class="component">
        <div class="leftList">
            <el-menu default-active="/Company" class="el-menu-vertical-demo" router>
                <el-menu-item-group title="公司概况"></el-menu-item-group>
                <el-menu-item index="/Company">公司简介</el-menu-item>
                <el-menu-item index="/Company/structure">组织结构</el-menu-item>
                <el-menu-item index="/Company/scene">公司场景</el-menu-item>
                <el-menu-item index="/Company/feature">经营特色</el-menu-item>
                <el-menu-item index="/Company/advantage">公司优势</el-menu-item>
                <el-menu-item index="/Company/serve">售后服务</el-menu-item>
                <el-menu-item index="/Company/goods">投标货物</el-menu-item>
            </el-menu>
        </div>
        <div class="rightContent">
            <router-view></router-view>
        </div>
    </div>
</template>

<script>

</script>

<style lang="scss">
    @import "../../assets/sass/components/variables";
    @import "index";
</style>
