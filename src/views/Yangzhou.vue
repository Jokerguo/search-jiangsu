<template>
    <div class="yangzhou">
        <span class="title">扬州</span>
        <el-button icon="el-icon-arrow-left" round @click="back">返 回</el-button>
        <el-button round @click="linkTo" style="margin-top: 50px">江苏代表美食<i class="el-icon-arrow-right el-icon--right"></i></el-button>
        <section class="description">
            <ul>
                <li>
                    <p>扬州，古称广陵、江都、维扬，建城史可上溯至公元前486年，扬州历史悠久，文化璀璨，商业昌盛，人杰地灵。地处江苏省中部，长江与京杭大运河交汇处，是南京都市圈紧密圈城市和长三角城市群城市，国家重点工程南水北调东线水源地。有着“淮左名都，竹西佳处”之称；又有着中国运河第一城的美誉，也是中国首批历史文化名城。 </p>
                </li>
                <li>
                    <p>
                        在中国历史上，扬州因其独特的地理位置和优越的自然环境，自汉至清几乎经历了通史式的繁荣，并伴随着文化的兴盛。具体而言，扬州在经济上有曾有过三次鼎盛，第一次是在西汉中叶；第二次是在隋唐到赵宋时期；第三次是在明清时期。总体上，扬州城市的繁荣总是和整个国家的盛世重合。隋唐、明清时期的扬州财富、资本的高度集中，是整个中国乃至东亚地区资本最为集中的地区，规模最大的金融中心，其繁荣程度如同当今世界之伦敦、香港。 </p>
                </li>
                <li>
                    <p>
                        扬州被誉为“扬一益二”有“月亮城”的美誉。扬州市境内的重大体育赛事有中国扬州鉴真国际半程马拉松赛、环高邮湖国际自行车赛、高邮大运河半程马拉松赛、高邮市运动会、横渡高邮湖游泳赛、仪征自行车公开赛。2018年，扬州市将举办江苏省第十九届运动会。
                    </p>
                </li>
            </ul>
        </section>
        <section class="wall">
            <section>
                <el-image
                        style="width: 200px; height: 100px"
                        :src="'https://i.loli.net/2020/06/04/ok9j3VCuOxqMaZ7.jpg'"
                        :preview-src-list="['https://i.loli.net/2020/06/04/ok9j3VCuOxqMaZ7.jpg']"
                ></el-image>
                <section>
                    <span>大明寺</span>
                </section>
            </section>
            <section>
                <el-image
                        style="width: 200px; height: 100px"
                        :src="'https://i.loli.net/2020/06/04/RHOMmkZBusnAzfE.jpg'"
                        :preview-src-list="['https://i.loli.net/2020/06/04/RHOMmkZBusnAzfE.jpg']"
                ></el-image>
                <section>
                    <span>东关街历史街区</span>
                </section>
            </section>
            <section>
                <el-image
                        style="width: 200px; height: 100px"
                        :src="'https://i.loli.net/2020/06/04/yr5DSvwKU6QscM3.jpg'"
                        :preview-src-list="['https://i.loli.net/2020/06/04/yr5DSvwKU6QscM3.jpg']"
                ></el-image>
                <section>
                    <span>汉广陵王墓博物馆</span>
                </section>
            </section>
            <section>
                <el-image
                        style="width: 200px; height: 100px"
                        :src="'https://i.loli.net/2020/06/04/EkG7xPidNKl1tsD.jpg'"
                        :preview-src-list="['https://i.loli.net/2020/06/04/EkG7xPidNKl1tsD.jpg']"
                ></el-image>
                <section>
                    <span>盂城驿</span>
                </section>
            </section>
        </section>


        <el-dialog
                :visible.sync="visibleDialog"
                style="overflow: hidden"
                width="60%"
                center
                top="6%"
        >
            <img src="https://i.loli.net/2020/06/07/vbGrIZ6oAqRtV5w.png" width="100%" height="100%">
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
        name: 'Yangzhou',
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
                this.$router.push('home')
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
        background: url("../assets/yangzhou/bg.jpg");
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
            margin-top: 100px;
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