<template>
    <div class="yangzhou">
        <span class="title">南京</span>
        <el-button icon="el-icon-arrow-left" round @click="back">返 回</el-button>
        <el-button round @click="linkTo" style="margin-top: 50px">江苏代表美食<i class="el-icon-arrow-right el-icon--right"></i></el-button>
        <section class="description">
            <ul>
                <li>
                    <p>南京，简称“宁”，古称金陵、建康，是江苏省省会、副省级市、南京都市圈核心城市，国务院批复确定的中国东部地区重要的中心城市、全国重要的科研教育基地和综合交通枢纽。全市下辖11个区，总面积6587km²，2016年建成区面积1125.78km²，常住人口827万人，城镇人口678.14万人，城镇化率82%，是长三角及华东唯一的特大城市。</p>
                </li>
                <li>
                    <p>南京地处中国东部、长江下游、濒江近海，是中国东部战区司令部驻地，长江国际航运物流中心，长三角辐射带动中西部地区发展的国家重要门户城市，也是东部沿海经济带与长江经济带战略交汇的重要节点城市。</p>
                </li>
                <li>
                    <p>南京是中国四大古都、首批国家历史文化名城 ，是中华文明的重要发祥地，历史上曾数次庇佑华夏之正朔，是四大古都中唯一未做过异族政权首都的古都，长期是中国南方的政治、经济、文化中心 。南京早在100-120万年前就有古人类活动，35-60万年前已有南京猿人在汤山生活，有着7000多年文明史、近2600年建城史和近500年的建都史，有“六朝古都”、“十朝都会”之称。</p>
                </li>
                <li>
                    <p>南京是国家重要的科教中心，自古以来就是一座崇文重教的城市，有“天下文枢”、“东南第一学”的美誉，明清时期中国一半以上的状元均出自南京江南贡院。截至2016年，南京各类高等院校74所，其中111计划高校9所及学科25个，仅次于北京；两院院士81人、特聘专家87人，均居中国第三。</p>
                </li>
            </ul>
        </section>
        <section class="wall">
            <section>
                <el-image
                        style="width: 200px; height: 100px"
                        :src="'https://i.loli.net/2020/06/04/TWAqnfepKi8zLgb.jpg'"
                        :preview-src-list="['https://i.loli.net/2020/06/04/TWAqnfepKi8zLgb.jpg']"
                ></el-image>
                <section>
                    <span>夫子庙</span>
                </section>
            </section>
            <section>
                <el-image
                        style="width: 200px; height: 100px"
                        :src="'https://i.loli.net/2020/06/04/ZWHpMIrNAlwLoy9.jpg'"
                        :preview-src-list="['https://i.loli.net/2020/06/04/ZWHpMIrNAlwLoy9.jpg']"
                ></el-image>
                <section>
                    <span>玄武湖</span>
                </section>
            </section>
            <section>
                <el-image
                        style="width: 200px; height: 100px"
                        :src="'https://i.loli.net/2020/06/04/KGqyRETl4ShpWem.jpg'"
                        :preview-src-list="['https://i.loli.net/2020/06/04/KGqyRETl4ShpWem.jpg']"
                ></el-image>
                <section>
                    <span>中山陵</span>
                </section>
            </section>
            <section>
                <el-image
                        style="width: 200px; height: 100px"
                        :src="'https://i.loli.net/2020/06/04/Yq6NVtDXwOBI4uH.jpg'"
                        :preview-src-list="['https://i.loli.net/2020/06/04/Yq6NVtDXwOBI4uH.jpg']"
                ></el-image>
                <section>
                    <span>总统府</span>
                </section>
            </section>
        </section>


        <el-dialog
                :visible.sync="visibleDialog"
                style="overflow: hidden"
                width="60%"
                center
                >
            <img src="https://i.loli.net/2020/06/07/HzJpdtECQKS3xNg.png" width="100%" height="100%">
            <petal/>
            <span slot="footer" class="dialog-footer">
                <el-button @click="visibleDialog = false">关闭</el-button>
            </span>
        </el-dialog>

    </div>
</template>

<script>
    import petal from '../components/petal'
    export default {
        components:{
            petal
        },
        name: 'Nanjing',
        data(){
            return{
                visibleDialog:false
            }
        },
        mounted() {
          this.showDialog()
        },
        methods:{
            back(){
                this.$router.push('/home')
            },
            linkTo(){
                this.$router.push('/end')
            },
            showDialog(){
                this.visibleDialog = true
            },
        }
    }
</script>

<style lang="scss" scoped>
.yangzhou{
    background: url("../assets/nanjing/bg.jpg");
    background-size: cover;
    width: 100vw;
    height: 100vh;
    .title{
        font-size: 42px;
        padding: 4px 0 0 6px;
    }
    >.el-button{
        border: 2px solid white;
        background-color: rgba(255,255,255,.3);
        position: fixed;
        right: 16px;
        top: 8px;
    }
    .description{
        margin-top: 16px;
        width: 70%;
        margin-left: 40px;
        background: rgba(255,255,255,.3);
        >ul>li{
            padding: 6px 0;
        }
    }
    .wall{
        width: 70%;
        display: flex;
        justify-content: center;
        align-items: center;
        margin-left: 15%;
        background: rgba(255,255,255,.3);
        padding: 6px 0;
        margin-top: 215px;
        >section{
            margin-left: 20px;
            >section{
                >span{
                    font-size: 18px;
                    font-weight: bold;
                    display: inline-block;
                    width: 200px;
                    text-align: center;
                    margin-top: 6px;
                }
            }
        }
    }
}
</style>