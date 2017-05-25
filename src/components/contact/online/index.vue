<template>
    <div class="feature">
        <h2>在线留言</h2>
        <el-form :label-position="labelPosition" label-width="80px" :model="formLabelAlign">
            <el-form-item label="用户名：">
                <el-input v-model="formLabelAlign.name"></el-input>
            </el-form-item>
            <el-form-item label="验证码：">
                <el-input placeholder="请输入内容" v-model="formLabelAlign.input4">
                    <template slot="append">
                        <img :src="formLabelAlign.src" alt="">
                    </template>
                </el-input>
            </el-form-item>
            <el-form-item label="联系邮箱：">
                <el-input v-model="formLabelAlign.type"></el-input>
            </el-form-item>
            <el-form-item label="联系电话：">
                <el-input v-model="formLabelAlign.type"></el-input>
            </el-form-item>
            <el-form-item label="留言内容：" class="textarea">
                <el-input type="textarea" v-model="labelPosition.desc"></el-input>
            </el-form-item>
            <el-form-item>
                <el-button type="primary">提交留言</el-button>
                <el-button>重新填写</el-button>
            </el-form-item>
        </el-form>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                labelPosition: 'top',
                formLabelAlign: {
                    name: '',
                    region: '',
                    type: '',
                    desc: '',
                    src: '',
                    input4:''
                }
            };
        }
    }
</script>

<style lang="scss">
    @import "../../../assets/sass/components/variables";
    @import "index";
</style>
