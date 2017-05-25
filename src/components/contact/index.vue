<template>
    <div class="contacts">
        <div class="leftList">
            <el-menu default-active="/contact/online" class="el-menu-vertical-demo" router>
                <el-menu-item-group title="联系我们"></el-menu-item-group>
                <el-menu-item index="/contact/online">在线留言</el-menu-item>
                <el-menu-item index="/contact/contactUs">联系我们</el-menu-item>
                <el-menu-item index="/contact/talented">诚聘英才</el-menu-item>
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
