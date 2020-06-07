<template>
    <div class="yangzhou">
        <span class="title">无锡</span>
        <el-button icon="el-icon-arrow-left" round @click="back">返 回</el-button>
        <el-button round @click="linkTo" style="margin-top: 50px">江苏代表美食<i class="el-icon-arrow-right el-icon--right"></i></el-button>

        <section class="description">
            <ul>
                <li>
                    <p>无锡，简称“锡”，古称梁溪、金匮，被誉为“太湖明珠”。无锡市位于长江三角洲平原腹地，江苏南部，太湖流域的交通中枢，京杭大运河从中穿过。无锡北倚长江，南濒太湖，东接苏州，西连常州，构成苏锡常都市圈。</p>
                </li>
                <li>
                    <p>无锡自古就是鱼米之乡，素有布码头、钱码头、窑码头、丝都、米市之称，是中国国家历史文化名城。无锡是中国民族工业和乡镇工业的摇篮，是苏南模式的发祥地。无锡文化属吴越文化，无锡人属江浙民系使用吴语。</p>
                </li>
                <li>
                    <p>
                        无锡有鼋头渚、灵山大佛、无锡中视影视基地（三国城、水浒城、唐城）、梅园、蠡园、惠山古镇、荡口古镇、东林书院、崇安寺、南禅寺等景点，是中国优秀旅游城市。“太湖佳绝处，毕竟在鼋头”是诗人郭沫若用来形容无锡太湖的风景的。</p>
                </li>
            </ul>
        </section>
        <section class="wall">
            <section>
                <el-image
                        style="width: 200px; height: 100px"
                        :src="'https://i.loli.net/2020/06/04/kzB2PeEaH47DZod.jpg'"
                        :preview-src-list="['https://i.loli.net/2020/06/04/kzB2PeEaH47DZod.jpg']"
                ></el-image>
                <section>
                    <span>南长街</span>
                </section>
            </section>
            <section>
                <el-image
                        style="width: 200px; height: 100px"
                        :src="'https://i.loli.net/2020/06/04/rVtwozLvITuP6iB.jpg'"
                        :preview-src-list="['https://i.loli.net/2020/06/04/rVtwozLvITuP6iB.jpg']"
                ></el-image>
                <section>
                    <span>南禅寺</span>
                </section>
            </section>
            <section>
                <el-image
                        style="width: 200px; height: 100px"
                        :src="'https://i.loli.net/2020/06/04/HabV2ClJKpxUrBy.jpg'"
                        :preview-src-list="['https://i.loli.net/2020/06/04/HabV2ClJKpxUrBy.jpg']"
                ></el-image>
                <section>
                    <span>灵山大佛</span>
                </section>
            </section>
            <section>
                <el-image
                        style="width: 200px; height: 100px"
                        :src="'https://i.loli.net/2020/06/04/maAsRDgOvu9iN1M.jpg'"
                        :preview-src-list="['https://i.loli.net/2020/06/04/maAsRDgOvu9iN1M.jpg']"
                ></el-image>
                <section>
                    <span>水浒城</span>
                </section>
            </section>
        </section>


        <el-dialog
                :visible.sync="visibleDialog"
                style="overflow: hidden"
                width="60%"
                center
        >
            <img src="https://i.loli.net/2020/06/07/vt7IUqf8nYVguRL.png" width="100%" height="100%">
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
        name: 'Wuxi',
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
        background: url("../assets/wuxi/bg.jpg");
        background-size: cover;
        width: 100vw;
        height: 100vh;
        .title{
            font-size: 42px;
            padding: 4px 0 0 6px;
            color: #fff;
        }
        >.el-button{
            border: 2px solid  #fff;
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