<template>
    <div class="item">
        <div class="content">
            <div class="big-leader">
                <router-link :to="{ name: 'Contribute' }"
                    style="display: flex; align-items: center;justify-content: space-between;width:95%;margin:10px 10px">
                    <span>{{ $t('prize.contribute') }}</span>
                    <i class="el-icon-arrow-right"></i>
                </router-link>

                <router-link :to="{ name: 'cRule' }"
                    style="display: flex; align-items: center;justify-content: space-between;width:95%;margin:10px 10px">
                    <span>{{ $t('prize.rule') }}</span>
                    <i class="el-icon-arrow-right"></i>
                </router-link>

                <router-link :to="{ name: 'cPersonal' }"
                    style="display: flex; align-items: center;justify-content: space-between;width:95%;margin:10px 10px">
                    <span>{{ $t('prize.person') }}</span>
                    <i class="el-icon-arrow-right"></i>
                </router-link>

                <router-link :to="{ name: 'Mechanism' }"
                    style="display: flex; align-items: center;justify-content: space-between;width:95%;margin:10px 10px">
                    <span>{{ $t('prize.mechanism') }}</span>
                    <i class="el-icon-arrow-right"></i>
                </router-link>
            </div>

            <div class="content-in">
                <div v-for="mechanism in mechanismDatas" :key="mechanism.greenawardId">
                    <p class="dynamic">{{ mechanism.title }}</p>

                    <div class="dsc-line" style="margin-top: 15px; margin-bottom: 5px;"></div>
                    <div class="dsc-line" style=" margin-bottom: 15px;"></div>

                    <p class="paper">2011绿色设计国际贡献奖机构获奖名单：</p>

                    <div class="person">
                        <!-- <div class="person-in"> -->
                        <div class="person-in">
                            <div v-html="mechanism.contentDetails"></div>
                            <!-- <div class="avatar">
                                <img src="https://img.js.design/assets/img/664b5214601c0a29c74be905.jpg" alt="">
                            </div>

                            <div class="intro">
                                <div class="intro-top">
                                    <div class="name">HTC</div>
                                    <div class="address">台湾</div>
                                    <div class="job">新能源</div>
                                </div>
                                <div class="intro-bottom">
                                    宏达电的智能手机通常拥有多个客制化版本，主要以其研发代号区分，如著名的CHT9000研发代号是Hermes，其中又会根据运营商的需求作些许变化，即Hermes分为100、200与300型，这些型号有一些略微的差别，表现在外观不同，有无摄像头、有无Wi-Fi、内存大小等，所有相同代号（如Hermes
                                    100）的不同版本（如Dopod 838 Pro，O2 Xda Trion）手机的配置基本上是相同的。同时宏达电亦有自主品牌的手机在销售，Hermes 100是HTC
                                    Z，Hermes 200是HTC
                                    TyTN，被称为宏达电原型机。通常宏达电的新产品会先在欧美地区上市，待市场成熟后才会在台湾、香港和中国大陆推出。目前在中国大陆，宏达电主要以多普达作为子品牌销售。<br>
                                    近年来由于受到新兴厂商崛起的压力，宏达电开始转型，摒弃之前的Qtek创立自主品牌hTC，并陆续推出了Touch系列手机，外观时尚超前，打破了Windows
                                    Mobile智能手机的呆板，并在其中采用TouchFLO触控技术，被认为是苹果iPhone的强劲对手。宏达电亦利用其在智能手机方面的优势，推出了性能强大的类似UMPC产品HTC
                                    Shift，在其中装配了Windows Mobile 6和Windows Vista双系统，以进军UMPC市场。</div>
                            </div> -->
                        </div>

                        <div class="person-line"></div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import { Prize } from "@/api/requests.js";
import funs from '@/utils/index.js'

export default {
    name: "Mechanism",
    props: ['tabDatas'],
    data() {
        return {
            mechanismDatas: [...this.tabDatas],
        };
    },
    mounted() {
        this.getMechanismData()
    },
    methods: {
        getMechanismData(p = this.$store.state.lang.version) {
            Prize({ moduleType: '5', status: '1', version: p }).then(res => {
                if (res.data && Array.isArray(res.data.rows) && res.data.rows.length > 0) {
                    this.mechanismDatas = res.data.rows
                }
            })
        }
    },
    watch: {
        "$store.state.lang.version": {
            handler() {
                funs(this.getMechanismData(), this.$store.state.lang.version)
            }
        }
    },
}
</script>

<style scoped>
* {
    margin: 0;
    padding: 0;
}

.item {
    width: 100%;
    opacity: 1;
    background: rgba(255, 255, 255, 1);
    display: flex;
    flex-direction: column;
}

.content {
    width: 100%;
    opacity: 1;
    background: rgba(242, 241, 221, 1);
    display: flex;
    justify-content: center;
    align-content: center;
}

.big-leader {
    left: 10px;
    top: 440px;
    width: 220px;
    opacity: 1;
    border-radius: 6px;
    background: rgba(220, 235, 192, 1);
    position: absolute;
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    align-items: center;
}

.big-leader a {
    margin: 8px 0;
}

.content-in {
    width: 67%;
    display: flex;
    flex-direction: column;
}

.dynamic {
    opacity: 1;
    font-size: 24px;
    font-weight: 700;
    letter-spacing: 1px;
    line-height: 37.13px;
    color: rgba(51, 51, 51, 1);
    text-align: left;
    vertical-align: top;
    margin-top: 15px;
}

.dsc-line {
    width: 100%;
    opacity: 0.3;
    border: 1px solid rgba(161, 161, 161, 1);
}

.paper {
    opacity: 1;
    font-size: 18px;
    font-weight: 700;
    letter-spacing: 1px;
    line-height: 26.52px;
    color: rgba(51, 51, 51, 1);
    text-align: left;
    vertical-align: top;
}

.person {
    display: flex;
    flex-direction: column;
    margin-bottom: 50px;
}

.person-in {
    display: flex;
    margin: 30px 0;
}

.avatar {
    width: 140px;
    height: 140px;
    opacity: 1;
}

.avatar img {
    width: 140px;
    height: 140px;
    opacity: 1;
}

.intro {
    display: flex;
    flex-direction: column;
    margin-left: 30px;
}

.intro-top {
    display: flex;
    margin: 10px 0;
}

.name {
    opacity: 1;
    font-size: 18px;
    font-weight: 700;
    letter-spacing: 1px;
    line-height: 26.52px;
    color: rgba(51, 51, 51, 1);
    text-align: left;
    vertical-align: top;
}

.address {
    opacity: 1;
    font-size: 18px;
    font-weight: 400;
    letter-spacing: 0px;
    line-height: 23.87px;
    color: rgba(102, 102, 102, 1);
    text-align: left;
    vertical-align: top;
    margin-left: 30px;
    margin-right: 10px;
}

.job {
    opacity: 1;
    font-size: 18px;
    font-weight: 400;
    letter-spacing: 0px;
    line-height: 23.87px;
    color: rgba(102, 102, 102, 1);
    text-align: left;
    vertical-align: top;
}

.intro-bottom {
    opacity: 1;
    font-size: 16px;
    font-weight: 400;
    letter-spacing: 0px;
    line-height: 23px;
    color: rgba(51, 51, 51, 1);
    text-align: justify;
    vertical-align: top;
}

.person-line {
    width: 100%;
    height: 0px;
    opacity: 1;
    border: 1px dashed rgba(161, 161, 161, 1);
}
</style>
