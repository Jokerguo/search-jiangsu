<template>
    <div class="end">
        <img src="../assets/end.jpg" alt="">

        <el-button icon="el-icon-arrow-left" round @click="back">返 回</el-button>

    </div>
</template>

<script>
    export default {
        name: 'end',
        methods:{
            back(){
                this.$router.go(-1)
            },

        }
    }
</script>

<style lang="scss" scoped>
    .end{
        /*background: url("../assets/end.jpg") no-repeat;*/
        /*background-size: contain;*/
        /*width: 100vw;*/
        /*height: 100vh;*/
        >.el-button{
            border: 2px solid  #ddd;
            background-color: rgba(255,255,255,.5);
            position: fixed;
            top: 10px;
            left: 10px;
            color: #000;
            font-weight: bold;
        }
    }
</style>