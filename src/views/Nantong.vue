<template>
    <div class="nantong">
        <span class="title">南通</span>
        <el-button icon="el-icon-arrow-left" round @click="back">返 回</el-button>
        <el-button round @click="linkTo" style="margin-top: 50px">江苏代表美食<i class="el-icon-arrow-right el-icon--right"></i></el-button>
        <section class="description">
            <ul>
                <li>
                    <p>南通，江苏省地级市，位于江苏东南部，长江三角洲北翼 ，简称“通”，别称静海、崇州、崇川、紫琅、北上海，古称通州。中国首批对外开放的14个沿海城市之一，东抵黄海，南望长江，与上海、苏州灯火相邀，西、北与泰州、盐城接壤，“据江海之会、扼南北之喉 ”，被誉为“北上海” 。南通集“黄金海岸”与“黄金水道”优势于一身，拥有长江岸线226公里。</p>
                </li>
                <li>
                    <p>因涨沙冲积成洲，南通成陆至今已有5000多年的历史。自后周显德三年（956年），南通建城至今已有一千多年历史。辛亥革命后改通州为南通县，1983年，撤销南通地区，设立南通市。南通市下辖3区、2县，代管3个县级市，面积8544平方千米。首批沿海开放城市。 </p>
                </li>
                <li>
                    <p>在中国近代文化科教史上，南通创办第一所师范学校、第一座民间博物苑、第一所纺织学校、第一所刺绣学校、第一所戏剧学校、第一所中国人办的盲哑学校和第一所气象站等“七个第一”，被称为“中国近代第一城”。 入选“2012中国特色魅力城市200强”。</p>
                </li>
                <li>
                    <p>
                        作为中国老龄化最高的城市，南通人口平均寿命达80.71岁，百岁寿星多达1031位，2014年5月，南通被国际自然医学会、世界长寿乡认证委员会授予全球首个“世界长寿之都”。
                    </p>
                </li>
            </ul>
        </section>
        <section class="wall">
            <section>
                <el-image
                        style="width: 200px; height: 100px"
                        :src="'https://i.loli.net/2020/06/04/aesb2SNOpJrVDLB.jpg'"
                        :preview-src-list="['https://i.loli.net/2020/06/04/aesb2SNOpJrVDLB.jpg']"
                ></el-image>
                <section>
                    <span>狼山风景名胜区</span>
                </section>
            </section>
            <section>
                <el-image
                        style="width: 200px; height: 100px"
                        :src="'https://i.loli.net/2020/06/04/AsGPnM4Ztu5xwRo.jpg'"
                        :preview-src-list="['https://i.loli.net/2020/06/04/AsGPnM4Ztu5xwRo.jpg']"
                ></el-image>
                <section>
                    <span>中国工农红军第十四军纪念馆</span>
                </section>
            </section>
            <section>
                <el-image
                        style="width: 200px; height: 100px"
                        :src="'https://i.loli.net/2020/06/04/eDSNqBIvmx5Z1bw.jpg'"
                        :preview-src-list="['https://i.loli.net/2020/06/04/eDSNqBIvmx5Z1bw.jpg']"
                ></el-image>
                <section>
                    <span>南通博物苑</span>
                </section>
            </section>
            <section>
                <el-image
                        style="width: 200px; height: 100px"
                        :src="'https://i.loli.net/2020/06/04/EWDk3ZeHnNq65y7.jpg'"
                        :preview-src-list="['https://i.loli.net/2020/06/04/EWDk3ZeHnNq65y7.jpg']"
                ></el-image>
                <section>
                    <span>南通大学</span>
                </section>
            </section>
        </section>


        <el-dialog
                :visible.sync="visibleDialog"
                style="overflow: hidden"
                width="60%"
                center
        >
            <img src="https://i.loli.net/2020/06/07/WtaKPn8HSEVIUvz.png" width="100%" height="100%">
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
        name: 'Nantong',
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

<style lang="scss">
    .nantong{
        background: url("../assets/nantong/bg.jpg");
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
                        height: 50px;
                        text-align: center;
                        margin-top: 6px;
                    }
                }
            }
        }
    }
</style>