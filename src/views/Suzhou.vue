<template>
    <div class="yangzhou">
        <span class="title">苏州</span>
        <el-button icon="el-icon-arrow-left" round @click="back">返 回</el-button>
        <el-button round @click="linkTo" style="margin-top: 50px">江苏代表美食<i class="el-icon-arrow-right el-icon--right"></i></el-button>
        <section class="description">
            <ul>
                <li>
                    <p>苏州，古称吴，简称为苏，又称姑苏、平江等，是国家历史文化名城和风景旅游城市，国家高新技术产业基地，长江三角洲重要的中心城市之一。位于江苏省东南部，长江三角洲中部，是江苏长江经济带重要组成部分。东临上海，南接嘉兴，西抱太湖，北依长江。</p>
                </li>
                <li>
                    <p>苏州属亚热带季风海洋性气候，四季分明，雨量充沛。种植水稻、小麦、油菜，出产棉花、蚕桑、林果，特产有碧螺春茶叶、长江刀鱼、太湖银鱼、阳澄湖大闸蟹等。</p>
                </li>
                <li>
                    <p>苏州是中国首批24座国家历史文化名城之一，有近2500年历史，是吴文化的发祥地。苏州人多属江浙民系，使用吴语。苏州园林是中国私家园林的代表，被联合国教科文组织列为世界文化遗产。中国大运河苏州段入选世界遗产名录。</p>
                </li>
                <li>
                    <p>截至2015年，苏州下辖5个市辖区、代管4个县级市，全市面积8488.42平方公里。地处东经119°55′～121°20′，北纬30°47′～32°02′之间。全市地势低平，平原占总面积的54.8%，海拔4米左右。丘陵占总面积的2.7%。</p>
                </li>
                <li>
                    <p>2016年1月，苏州被住房和城乡建设部评为首批“国家生态园林城市”；同年2月，苏州被国家旅游局评为首批国家全域旅游示范区。 </p>
                </li>
                <li>
                    <p>
                        2017年5月，苏州成功举办世界城市峰会。</p>
                </li>
            </ul>
        </section>
        <section class="wall">
            <section>
                <el-image
                        style="width: 200px; height: 100px"
                        :src="'https://i.loli.net/2020/06/04/CnSzHNI3scE8546.jpg'"
                        :preview-src-list="['https://i.loli.net/2020/06/04/CnSzHNI3scE8546.jpg']"
                ></el-image>
                <section>
                    <span>苏州天平山</span>
                </section>
            </section>
            <section>
                <el-image
                        style="width: 200px; height: 100px"
                        :src="'https://i.loli.net/2020/06/04/TcZtXVuAeR3YBLj.jpg'"
                        :preview-src-list="['https://i.loli.net/2020/06/04/TcZtXVuAeR3YBLj.jpg']"
                ></el-image>
                <section>
                    <span>阳澄湖</span>
                </section>
            </section>
            <section>
                <el-image
                        style="width: 200px; height: 100px"
                        :src="'https://i.loli.net/2020/06/04/g6873yX4r2Pncjl.jpg'"
                        :preview-src-list="['https://i.loli.net/2020/06/04/g6873yX4r2Pncjl.jpg']"
                ></el-image>
                <section>
                    <span>寒山寺</span>
                </section>
            </section>
            <section>
                <el-image
                        style="width: 200px; height: 100px"
                        :src="'https://i.loli.net/2020/06/04/rNiyDQFOKg9mRXH.jpg'"
                        :preview-src-list="['https://i.loli.net/2020/06/04/rNiyDQFOKg9mRXH.jpg']"
                ></el-image>
                <section>
                    <span>苏州园林</span>
                </section>
            </section>
        </section>


        <el-dialog
                :visible.sync="visibleDialog"
                style="overflow: hidden"
                width="60%"
                center
        >
            <img src="https://i.loli.net/2020/06/07/rM1m8WbsBupHnOo.png" width="100%" height="100%">
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
        name: 'Suzhou',
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
                console.log(11);
                this.visibleDialog = true
            },
        }
    }
</script>

<style lang="scss" scoped>
    .yangzhou{
        background: url("../assets/suzhou/bg.jpg");
        background-size: cover;
        width: 100vw;
        height: 100vh;
        .title{
            font-size: 42px;
            padding: 4px 0 0 6px;
            color: #fff;
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