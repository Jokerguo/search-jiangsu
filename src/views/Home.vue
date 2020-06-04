<template>
    <div class="home">
        <el-form>
            <el-form-item class="inputWrapper">
                <el-input class="input" v-model="content" placeholder="请输入地区" clearable></el-input>
            </el-form-item>
            <el-form-item class="buttonWrapper">
                <el-button plain @click="lingTo">查 询</el-button>
            </el-form-item>
        </el-form>
    </div>
</template>

<script>
export default {
  name: 'Home',
    data(){
      return{
          content:''
      }
    },
    methods:{
        lingTo(){
            switch (this.content) {
                case '南京' :
                    this.$router.push('/nanjing')
                    break
                case '苏州' :
                    this.$router.push('/suzhou')
                    break
                case '盐城' :
                    this.$router.push('/yancheng')
                    break
                case '扬州' :
                    this.$router.push('/yangzhou')
                    break
                case '无锡' :
                    this.$router.push('/wuxi')
                    break
                case '南通' :
                    this.$router.push('/nantong')
                    break
                default :
                    this.$message({type: "warning",message: `${this.content}还未加入，仅限江苏地区查询！！`})
                    this.content = ''

            }
        },
    }
}
</script>

<style >
.home{
    background: url("../assets/bg.jpg") no-repeat;
    background-size: cover;
    width: 100vw;
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
}
.inputWrapper {
    max-width: 280px;
    margin-top: 250px;
}
.buttonWrapper{
    text-align: center;
}
</style>


