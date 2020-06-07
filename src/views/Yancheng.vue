<template>
    <div class="yangzhou">
        <span class="title">盐城</span>
        <el-button icon="el-icon-arrow-left" round @click="back">返 回</el-button>
        <el-button round @click="linkTo" style="margin-top: 50px">江苏代表美食<i class="el-icon-arrow-right el-icon--right"></i></el-button>
        <section class="description">
            <ul>
                <li>
                    <p>盐城，隶属于江苏省，地处中国东部沿海中部，江苏省中东部，位于长江三角洲北翼。盐城是江苏省面积最大的地级市，市域面积1.7万平方公里，常住人口721.06万人；其中市辖区面积4921平方公里，常住人口240万人。</p>
                </li>
                <li>
                    <p>盐城东临黄海，南与南通接壤，西南与扬州、泰州为邻，西北与淮安相连，北隔灌河和连云港市相望。全市地势平坦，河渠纵横，物产富饶，素有“鱼米之乡”的美称。盐城是江苏沿海地区新兴的工商业城市，也是长江三角洲重要的区域性中心城市</p>
                </li>
                <li>
                    <p>
                        盐城拥有江苏省最长的海岸线、最大的沿海滩涂、最广的海域面积，同时也是丹顶鹤的家园、麋鹿的故乡，在沿海滩涂上建有麋鹿和丹顶鹤两个国家级自然保护区，被誉为“东方湿地之都，仙鹤神鹿世界”。
                    </p>
                </li>
                <li>
                    <p>
                        盐城大多数人口是历朝江南移民后裔，因而民俗文化属于传统的江南文化范畴。盐城也是淮剧主要的发源地。
                    </p>
                </li>
            </ul>
        </section>
        <section class="wall">
            <section>
                <el-image
                        style="width: 200px; height: 100px"
                        :src="'https://i.loli.net/2020/06/04/7KnLOCtdFqQyJsM.jpg'"
                        :preview-src-list="['https://i.loli.net/2020/06/04/7KnLOCtdFqQyJsM.jpg']"
                ></el-image>
                <section>
                    <span>新四军纪念馆</span>
                </section>
            </section>
            <section>
                <el-image
                        style="width: 200px; height: 100px"
                        :src="'https://i.loli.net/2020/06/04/Jiz45p8KfduWvb9.jpg'"
                        :preview-src-list="['https://i.loli.net/2020/06/04/Jiz45p8KfduWvb9.jpg']"
                ></el-image>
                <section>
                    <span>大纵湖旅游度假区</span>
                </section>
            </section>
            <section>
                <el-image
                        style="width: 200px; height: 100px"
                        :src="'https://i.loli.net/2020/06/04/TMvSdJYhbD6p42K.jpg'"
                        :preview-src-list="['https://i.loli.net/2020/06/04/TMvSdJYhbD6p42K.jpg']"
                ></el-image>
                <section>
                    <span>中华麋鹿园</span>
                </section>
            </section>
            <section>
                <el-image
                        style="width: 200px; height: 100px"
                        :src="'https://i.loli.net/2020/06/04/waGyluHj2dqIYMf.jpg'"
                        :preview-src-list="['https://i.loli.net/2020/06/04/waGyluHj2dqIYMf.jpg']"
                ></el-image>
                <section>
                    <span>荷兰花海</span>
                </section>
            </section>
        </section>


        <el-dialog
                :visible.sync="visibleDialog"
                style="overflow: hidden"
                width="60%"
                center
        >
            <img src="https://i.loli.net/2020/06/07/pJkXRVHB4ALsx7j.png" width="100%" height="100%">
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
        name: 'Yancheng',
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
        background: url("../assets/yancheng/bg.jpg");
        background-size: cover;
        width: 100vw;
        height: 100vh;
        .title{
            font-size: 42px;
            padding: 4px 0 0 6px;
        }
        >.el-button{
            border: 2px solid  #ddd;
            background-color: rgba(255,255,255,.5);
            position: fixed;
            right: 16px;
            top: 8px;
        }
        .description{
            margin-top: 16px;
            width: 70%;
            margin-left: 40px;
            background: rgba(255,255,255,.4);
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