<template>
    <div class="item">
        <div class="content">
            <div class="content-in">
                <div v-for="info in infoDatas" :key="info.conferenceId">
                    <div class="info-img">
                        <img :src="'http://www.wgdo.net' + info.cover" alt="">
                    </div>

                    <p class="dynamic">{{ info.title }}</p>

                    <div class="info">
                        <div class="info-browser">{{ $t('meet.browser') }}：{{ info.clickVolume }}</div>
                        <div class="info-create">{{ $t('meet.create') }}：{{ info.releaseTime }}</div>
                    </div>

                    <div class="dsc-line" style="margin-top: 15px; margin-bottom: 5px;"></div>
                    <div class="dsc-line" style=""></div>

                    <div class="info-introall">
                        <!-- <div class="info-introall" v-if="!infoDatas"> -->
                        <img src="https://img.js.design/assets/img/665546d2b6575a3ddda1f94c.jpg" alt="">
                        <div>
                            <p class="info-title">{{ $t('meet.Summit') }}</p>
                            <p class="info-intro" v-html="info.summitIntroduction"></p>
                        </div>
                    </div>

                    <!-- <div class="dsc-line" style="margin-top: 30px; margin-bottom: 30px;"></div> -->

                    <div class="info-countdown">
                        <p class="countdown-dsc">{{ $t('meet.Countdown') }}</p>
                        <p class="countdown-time">{{ info.summitCountdown }}</p>
                    </div>

                    <div style="border-bottom: 2px solid rgba(161, 161, 161, 0.3);padding:20px 0;">
                        <p class="act-dsc">{{ $t('meet.Event') }}</p>

                        <div class="act">
                            <img src="https://img.js.design/assets/img/665546d2b6575a3ddda1f94c.jpg" alt="">
                            <img src="https://img.js.design/assets/img/665546d2b6575a3ddda1f94c.jpg" alt="">
                            <img src="https://img.js.design/assets/img/665546d2b6575a3ddda1f94c.jpg" alt="">
                            <img src="https://img.js.design/assets/img/665546d2b6575a3ddda1f94c.jpg" alt="">
                            <img src="https://img.js.design/assets/img/665546d2b6575a3ddda1f94c.jpg" alt="">
                            <img src="https://img.js.design/assets/img/665546d2b6575a3ddda1f94c.jpg" alt="">
                        </div>
                    </div>

                    <div style="border-bottom: 2px solid rgba(161, 161, 161, 0.3);padding:20px 0;">
                        <p class="chairman">{{ $t('meet.chairman') }}</p>

                        <div class="chairman-all">
                            <div class="intro-in">
                                <div class="chairman-img">
                                    <img src="https://img.js.design/assets/img/658a283d24c60bfaf888fd7a.png#efa7891e9abd3f2ad0c66835caee57e8"
                                        alt="">
                                </div>

                                <div class="chairman-intro">
                                    <div class="chairman-intro-top">
                                        布鲁塞尔是比利时的首都，也是欧洲联盟的主要行政机构所在地以及最具投资性的地区之一。“中欧绿色设计合作新机遇”已是必然趋势，中欧两国的绿色创新技术和管理优势起到互补性，我相信此次的国际交流将产生新的合作模式。<br>
                                    </div>
                                    <div class="chairman-intro-buttom">——中国原国务院参事　石定寰</div>
                                </div>
                            </div>

                            <div class="intro-in">
                                <div class="chairman-img">
                                    <img src="https://img.js.design/assets/img/658a281ab25fc345ddafdd08.png#99a749c0399837a293ba982d6b19d0fb"
                                        alt="">
                                </div>

                                <div class="chairman-intro">
                                    <div class="chairman-intro-top">
                                        “绿色设计创新”一直是中欧双方讨论的主题，此次的交流将进一步推动中欧双方在绿色产业发展的进程，因为绿色设计创新在研发和技术转换领域正不断更新，新的合作模式逐渐显现，这将会是一次具有深远意义的合作。<br>
                                    </div>
                                    <div class="chairman-intro-buttom">——欧洲议会对华关系代表团主席议员　乔·莱恩</div>
                                </div>
                            </div>
                        </div>

                    </div>

                    <div class="address">
                        <!-- <div class="address-left">
                            <img src="https://img.js.design/assets/img/662775561e96d9217229fd2f.jpg#6a2768da4f7e12c6735e26823d148748"
                                alt="">
                        </div> -->
                        <div class="address-right">
                            <p class="address-title">{{ $t('meet.address') }}</p>
                            <p class="address-intro" v-html="info.tlorganization"></p>
                        </div>
                    </div>

                    <div style="border-bottom: 2px solid rgba(161, 161, 161, 0.3);padding:20px 0;">
                        <p class="pre-person">{{ $t('meet.preview') }}</p>

                        <div class="pre-all">
                            <div class="pre-in">
                                <div class="pre-in-img">
                                    <img src="https://img.js.design/assets/img/66277836b04e9e24cb45331f.jpg#15730a82d3719e83ca1d337c78c96af2"
                                        alt="">
                                </div>

                                <div class="pre-in-all">
                                    <p class="pre-in-name">阿罗兹·比特勒 Alojz Peterle</p>
                                    <p class="pre-in-intro">欧洲议会议员-欧洲人民党党团<br>
                                        欧洲议会与马其顿共和国联合议会委员会主席</p>
                                </div>
                            </div>

                            <div class="pre-in">
                                <div class="pre-in-img">
                                    <img src="https://img.js.design/assets/img/66277850db954bccd78bb9b1.jpg#54ea980215ad40430ae972916f6b9c7e"
                                        alt="">
                                </div>

                                <div class="pre-in-all">
                                    <p class="pre-in-name">艾琳·皮维蒂Irene Pivetti</p>
                                    <p class="pre-in-intro">世界绿色设计组织荣誉主席<br>
                                        意大利前众议院议长</p>
                                </div>
                            </div>

                            <div class="pre-in">
                                <div class="pre-in-img">
                                    <img src="https://img.js.design/assets/img/66277859fa2ea2743c4210f4.jpg#c138d9fb02e81b567a9bee071bf8dc13"
                                        alt="">
                                </div>

                                <div class="pre-in-all">
                                    <p class="pre-in-name">Guus Keder吉斯·达尔</p>
                                    <p class="pre-in-intro">WGDO执委<br>
                                        比利时新能源与环保科总裁<br>
                                        Scientific SA-TruEnergy unit Division President</p>
                                </div>
                            </div>

                            <div class="pre-in">
                                <div class="pre-in-img">
                                    <img src="https://img.js.design/assets/img/6627785ffa2ea2743c421381.jpg#75863f1715d05731a6d786dafaa26c64"
                                        alt="">
                                </div>

                                <div class="pre-in-all">
                                    <p class="pre-in-name">周中星 Zhou Zhongxing</p>
                                    <p class="pre-in-intro">世界绿色设计组织意大利分会副主席<br>
                                        意大利亚得里亚华商会会长<br>
                                        意大利华商总会执行会长<br>
                                        意大利里米尼省外籍常务议员</p>
                                </div>
                            </div>

                            <div class="pre-in">
                                <div class="pre-in-img">
                                    <img src="https://img.js.design/assets/img/66277864e122a8ca79a4a7b7.jpg#864ae1cadad37d2328a8c8a129486e1b"
                                        alt="">
                                </div>

                                <div class="pre-in-all">
                                    <p class="pre-in-name">李肇星 Li Zhaoxing</p>
                                    <p class="pre-in-intro">外交部前部长<br>
                                        中国公共外交协会会长</p>
                                </div>
                            </div>

                            <div class="pre-in">
                                <div class="pre-in-img">
                                    <img src="https://img.js.design/assets/img/6627786998acf9fc6d478205.jpg#90101f284f7d800f51332b945bd6e862"
                                        alt="">
                                </div>

                                <div class="pre-in-all">
                                    <p class="pre-in-name">李秉仁 Lin Bingren</p>
                                    <p class="pre-in-intro">世界绿色设计组织副主席<br>
                                        住房和城乡建设部原总经济师<br>
                                        中国建筑装饰协会会长<br>
                                        大会亮点</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div style="border-bottom: 2px solid rgba(161, 161, 161, 0.3);padding:20px 0;">
                        <p class="pre-person">{{ $t('meet.back') }}</p>

                        <div class="pre-all">
                            <div class="pre-in">
                                <div class="pre-in-img">
                                    <img src="https://img.js.design/assets/img/66277836b04e9e24cb45331f.jpg#15730a82d3719e83ca1d337c78c96af2"
                                        alt="">
                                </div>

                                <div class="pre-in-all">
                                    <p class="pre-in-name">阿罗兹·比特勒 Alojz Peterle</p>
                                    <p class="pre-in-intro">欧洲议会议员-欧洲人民党党团<br>
                                        欧洲议会与马其顿共和国联合议会委员会主席</p>
                                </div>
                            </div>

                            <div class="pre-in">
                                <div class="pre-in-img">
                                    <img src="https://img.js.design/assets/img/66277850db954bccd78bb9b1.jpg#54ea980215ad40430ae972916f6b9c7e"
                                        alt="">
                                </div>

                                <div class="pre-in-all">
                                    <p class="pre-in-name">艾琳·皮维蒂Irene Pivetti</p>
                                    <p class="pre-in-intro">世界绿色设计组织荣誉主席<br>
                                        意大利前众议院议长</p>
                                </div>
                            </div>

                            <div class="pre-in">
                                <div class="pre-in-img">
                                    <img src="https://img.js.design/assets/img/66277859fa2ea2743c4210f4.jpg#c138d9fb02e81b567a9bee071bf8dc13"
                                        alt="">
                                </div>

                                <div class="pre-in-all">
                                    <p class="pre-in-name">Guus Keder吉斯·达尔</p>
                                    <p class="pre-in-intro">WGDO执委<br>
                                        比利时新能源与环保科总裁<br>
                                        Scientific SA-TruEnergy unit Division President</p>
                                </div>
                            </div>

                            <div class="pre-in">
                                <div class="pre-in-img">
                                    <img src="https://img.js.design/assets/img/6627785ffa2ea2743c421381.jpg#75863f1715d05731a6d786dafaa26c64"
                                        alt="">
                                </div>

                                <div class="pre-in-all">
                                    <p class="pre-in-name">周中星 Zhou Zhongxing</p>
                                    <p class="pre-in-intro">世界绿色设计组织意大利分会副主席<br>
                                        意大利亚得里亚华商会会长<br>
                                        意大利华商总会执行会长<br>
                                        意大利里米尼省外籍常务议员</p>
                                </div>
                            </div>

                            <div class="pre-in">
                                <div class="pre-in-img">
                                    <img src="https://img.js.design/assets/img/66277864e122a8ca79a4a7b7.jpg#864ae1cadad37d2328a8c8a129486e1b"
                                        alt="">
                                </div>

                                <div class="pre-in-all">
                                    <p class="pre-in-name">李肇星 Li Zhaoxing</p>
                                    <p class="pre-in-intro">外交部前部长<br>
                                        中国公共外交协会会长</p>
                                </div>
                            </div>

                            <div class="pre-in">
                                <div class="pre-in-img">
                                    <img src="https://img.js.design/assets/img/6627786998acf9fc6d478205.jpg#90101f284f7d800f51332b945bd6e862"
                                        alt="">
                                </div>

                                <div class="pre-in-all">
                                    <p class="pre-in-name">李秉仁 Lin Bingren</p>
                                    <p class="pre-in-intro">世界绿色设计组织副主席<br>
                                        住房和城乡建设部原总经济师<br>
                                        中国建筑装饰协会会长<br>
                                        大会亮点</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div style="border-bottom: 2px solid rgba(161, 161, 161, 0.3);padding:20px 0;">
                        <p class="Highlights">{{ $t('meet.Highlights') }}</p>

                        <div class="Highlights-all" v-html="info.conferenceHighlights"></div>
                    </div>

                    <div class="schedule">
                        <div class="schedule-left">
                            <p class="schedule-title">{{ $t('meet.schedule') }}</p>
                            <p class="schedule-all" v-html="info.conferenceSchedule"></p>
                        </div>
                        <!-- <div class="schedule-right">
                        <img src="https://img.js.design/assets/img/66277b1617da5b2b3506757b.jpg#c8f368a0e271cae196bc0e76e2606fac"
                            alt="">
                    </div> -->
                    </div>


                    <div style="border-bottom: 2px solid rgba(161, 161, 161, 0.3);padding:20px 0;">
                        <p class="discuss">{{ $t('meet.discuss') }}</p>

                        <div class="discuss-content" v-html="info.subDiscussion"></div>
                    </div>

                    <div style="border-bottom: 2px solid rgba(161, 161, 161, 0.3);padding:20px 0;">
                        <p class="organization">{{ $t('meet.organization') }}</p>

                        <div class="organization-person">
                            <div class="organization-in">
                                <div class="organization-left">
                                    <img src="https://img.js.design/assets/img/66277df46c43aedeb924869b.jpg#ad7737cc94600affb0e1310325010ab4"
                                        alt="">
                                </div>

                                <div class="organization-right">
                                    <p class="organization-name">石定寰</p>
                                    <p class="organization-intro">原科技部党组成员秘书长原国务院参事</p>
                                    <p class="organization-intro">WGDO主席</p>
                                </div>
                            </div>

                            <div class="organization-in">
                                <div class="organization-left">
                                    <img src="https://img.js.design/assets/img/66277dfb17da5b2b350781e9.jpg#a0eb47a1aeb9f88042cd9c03fcf396ed"
                                        alt="">
                                </div>

                                <div class="organization-right">
                                    <p class="organization-name">牛文元</p>
                                    <p class="organization-intro">中国科学院可持续发展战略研究组组长</p>
                                    <p class="organization-intro">原国务院参事</p>
                                </div>
                            </div>

                            <div class="organization-in">
                                <div class="organization-left">
                                    <img src="https://img.js.design/assets/img/66277e0166a4c636d8bf5ed8.jpg#895aeecce171f1a11860635a64c3ecb2"
                                        alt="">
                                </div>

                                <div class="organization-right">
                                    <p class="organization-name">张 琦</p>
                                    <p class="organization-intro">北京光华设计发展基金会理事长</p>
                                    <p class="organization-intro">wgdo组织执委</p>
                                </div>
                            </div>
                        </div>

                        <div class="organization-details" v-html="info.introduction"></div>
                    </div>

                    <div style="border-bottom: 2px solid rgba(161, 161, 161, 0.3);padding:20px 0;">
                        <p class="mode">{{ $t('meet.mode') }}</p>

                        <div class="partner" v-html="info.summitCooperation"></div>
                    </div>

                    <div style="border-bottom: 2px solid rgba(161, 161, 161, 0.3);padding:20px 0;">
                        <p class="guide">{{ $t('meet.guide') }}</p>

                        <div class="guide-all" v-html="info.attendanceGuide">
                        </div>
                    </div>
                </div>
            </div>

            <div class="leader">
                <div class="leader-in">{{ $t('meet.Summit') }}</div>
                <div class="leader-in">{{ $t('meet.Countdown') }}</div>
                <div class="leader-in">{{ $t('meet.chairman') }}</div>
                <div class="leader-in">{{ $t('meet.preview') }}</div>
                <div class="leader-in">{{ $t('meet.back') }}</div>
                <div class="leader-in">{{ $t('meet.Highlights') }}</div>
                <div class="leader-in">{{ $t('meet.schedule') }}</div>
                <div class="leader-in">{{ $t('meet.discuss') }}</div>
                <div class="leader-in">{{ $t('meet.discuss') }}</div>
                <div class="leader-in">{{ $t('meet.organization') }}</div>
                <div class="leader-in">{{ $t('meet.mode') }}</div>
                <div class="leader-in">{{ $t('meet.guide') }}</div>
            </div>
        </div>

        <!-- <div class="enroll">
            <div class="enroll-in">
                <div class="enroll-input">
                    <div>
                        <p class="enroll-title">{{ $t('meet.name') }}</p>
                        <el-input v-model="name" placeholder="请填写姓名"></el-input>
                    </div>

                    <div>
                        <p class="enroll-title">{{ $t('meet.gender') }}</p>
                        <el-input v-model="gender" placeholder="请填写性别"></el-input>
                    </div>

                    <div>
                        <p class="enroll-title">{{ $t('meet.nationality') }}</p>
                        <el-input v-model="nationality" placeholder="请填写国籍"></el-input>
                    </div>

                    <div>
                        <p class="enroll-title">{{ $t('meet.contact') }}</p>
                        <el-input v-model="contact" placeholder="请填写联系电话"></el-input>
                    </div>
                </div>

                <div class="Remarks">
                    <div class="enroll-ps">{{ $t('meet.remark') }}</div>
                    <el-input type="textarea" :rows="2" placeholder="请输入内容" v-model="remark">
                    </el-input>
                </div>

                <div style="display: flex;width:100%;justify-content: center;">
                    <el-button type="success" @click="send" round>
                        <img src="@/static/imgs/send.png" alt="">
                        <p>{{ $t('meet.register') }}</p>
                    </el-button>
                </div>
            </div>
        </div> -->
    </div>
</template>

<script>
import { Meet } from "@/api/requests.js";
import funs from '@/utils/index.js'

export default {
    name: "Lookbackinfo",
    props: ['tabDatas'],
    data() {
        return {
            infoDatas: [],
            name: '',
            gender: '',
            nationality: '',
            contact: '',
            remark: '',
        };
    },
    created() {
        this.getLookbackinfoData();
    },
    mounted() {
        this.getLookbackinfoData()
    },
    methods: {
        getLookbackinfoData(p = this.$store.state.lang.version) {
            const id = this.$route.query.id;
            Meet({ moduleType: '3', status: '1', version: p, id: id }).then(res => {
                if (res.data && Array.isArray(res.data.rows) && res.data.rows.length > 0) {
                    this.infoDatas = res.data.rows.filter(row => row.mediacenterId === id);
                }
            })
        },
        async send() {
            console.log('提交的信息：', {
                name: this.name,
                gender: this.gender,
                nationality: this.nationality,
                contact: this.contact,
                remark: this.remark,
            });
        }
    },
    watch: {
        "$store.state.lang.version": {
            handler() {
                funs(this.getLookbackinfoData(), this.$store.state.lang.version)
            }
        },
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
    opacity: 1;
    background: rgba(242, 241, 221, 1);
    display: flex;
    justify-content: center;
    align-content: center;
}

.content-in {
    width: 100%;
    display: flex;
    flex-direction: column;
}

.leader {
    width: 280px;
    height: 20%;
    opacity: 1;
    border-radius: 6px;
    background: linear-gradient(180deg, rgba(220, 235, 192, 1) 0%, rgba(203, 232, 139, 1) 100%);
    margin: 29px 0 0 18px;
}

.leader-in {
    width: 100%;
    padding: 15px 0;
    text-align: center;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 20px;
    font-weight: 600;
    letter-spacing: 1px;
    line-height: 26.52px;
    color: rgba(19, 98, 0, 1);
    text-align: center;
    vertical-align: top;
    border-bottom: 1px solid #fff;
}

.leader-in:last-child {
    border-bottom: none;
}

.leader-in:active {
    font-size: 20px;
    font-weight: 700;
    letter-spacing: 1px;
    line-height: 26.52px;
    color: rgba(165, 214, 63, 1);
    text-align: center;
    vertical-align: top;
}

.dynamic {
    opacity: 1;
    font-size: 24px;
    font-weight: 700;
    letter-spacing: 1px;
    line-height: 34.48px;
    color: rgba(51, 51, 51, 1);
    text-align: left;
    vertical-align: top;
    text-align: center;
    margin-top: 40px;
}

.info {
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top: 10px;
}

.info-browser {
    opacity: 1;
    font-size: 15px;
    font-weight: 400;
    letter-spacing: 1px;
    line-height: 21.22px;
    color: rgba(153, 153, 153, 1);
    text-align: center;
    vertical-align: top;
    margin-right: 10px;
}

.info-create {
    opacity: 1;
    font-size: 15px;
    font-weight: 400;
    letter-spacing: 1px;
    line-height: 21.22px;
    color: rgba(153, 153, 153, 1);
    text-align: center;
    vertical-align: top;
}

.dsc-line {
    width: 100%;
    opacity: 0.3;
    border: 1px solid rgba(161, 161, 161, 1);
}

.info-img {
    width: 100%;
    height: 280px;
    opacity: 1;
    margin: 30px 0;
}

.info-img img {
    width: 100%;
    height: 280px;
    opacity: 1;
    background-size: cover;
    background-position: center;
    object-fit: cover;
}

.info-introall {
    width: 100%;
    opacity: 1;
    border-bottom: 2px solid rgba(161, 161, 161, 0.3);
    display: flex;
    padding: 15px 0;
    align-items: center;
}

.info-introall img {
    width: 40%;
    height: 420px;
    opacity: 1;
    background-size: cover;
    background-position: center;
    object-fit: cover;
}

.info-introall div {
    margin-left: 10px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    width: 60%;
}

.info-title {
    margin: 15px 0;
}

.info-intro {
    font-size: 16px;
    font-weight: 400;
    letter-spacing: 0px;
    line-height: 23.87px;
    color: rgba(51, 51, 51, 1);
    text-align: justify;
    vertical-align: top;
}

.info-countdown {
    width: 100%;
    opacity: 1;
    padding: 20px 0;
    display: flex;
    flex-direction: column;
    border-bottom: 2px solid rgba(161, 161, 161, 0.3);
}

.countdown-dsc,
.act-dsc,
.info-title,
.chairman,
.address-title,
.pre-person,
.Highlights,
.schedule-title,
.discuss,
.organization,
.mode,
.guide {
    font-size: 18px;
    font-weight: 700;
    letter-spacing: 0px;
    line-height: 26.52px;
    color: rgba(51, 51, 51, 1);
}

.countdown-time {
    font-size: 16px;
    font-weight: 400;
    letter-spacing: 0px;
    line-height: 23.87px;
    color: rgba(51, 51, 51, 1);
    text-align: left;
    vertical-align: top;
}

.act {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(calc(33.33% - 20px), 1fr));
    grid-gap: 20px;
    margin-top: 30px;
}

.act img {
    width: 100%;
    height: 200px;
    background-size: cover;
    background-position: center;
    object-fit: cover;
}

.chairman-all {
    display: flex;
    margin-top: 15px;
    justify-content: space-between;
}

.intro-in {
    width: 49%;
    display: flex;
    justify-content: space-between;
}

.chairman-img {
    width: 120px;
    height: 160px;
    opacity: 1;
}

.chairman-img img {
    width: 120px;
    height: 160px;
    opacity: 1;
    background-size: cover;
    background-position: center;
    object-fit: cover;
}

.chairman-intro {
    opacity: 1;
    display: flex;
    flex-direction: column;
    margin-left: 16px;
}

.chairman-intro-top {
    font-size: 16px;
    font-weight: 400;
    letter-spacing: 0px;
    line-height: 23.87px;
    color: rgba(51, 51, 51, 1);
    display: flex;
    justify-content: flex-start;
}

.chairman-intro-buttom {
    font-size: 15px;
    font-weight: 600;
    letter-spacing: 0px;
    line-height: 23.87px;
    color: rgba(51, 51, 51, 1);
    text-align: justify;
    vertical-align: top;
    display: flex;
    justify-content: flex-end;
}

.address {
    display: flex;
    align-items: center;
    width: 100%;
}

.address-left {
    width: 600px;
    height: 280px;
    opacity: 1;
}

.address-left img {
    width: 600px;
    height: 280px;
    opacity: 1;
    background-size: cover;
    background-position: center;
    object-fit: cover;
}

.address-right {
    display: flex;
    flex-direction: column;
    opacity: 1;
    padding: 20px 0;
    border-bottom: 2px solid rgba(161, 161, 161, 0.3);
    width: 100%;
}

.address-intro {
    font-size: 16px;
    font-weight: 400;
    letter-spacing: 0px;
    line-height: 23.87px;
    color: rgba(51, 51, 51, 1);
    text-align: justify;
    vertical-align: top;
}

.pre-all {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
}

.pre-in {
    display: flex;
    width: 50%;
    margin-top: 30px;
    align-items: center;
}

.pre-in-img {
    width: 120px;
    height: 160px;
    opacity: 1;
}

.pre-in-img img {
    width: 120px;
    height: 160px;
    opacity: 1;
    background-size: cover;
    background-position: center;
    object-fit: cover;
}

.pre-in-all {
    display: flex;
    flex-direction: column;
    justify-content: center;
    margin-left: 10px;
}

.pre-in-name {
    opacity: 1;
    font-size: 16px;
    font-weight: 700;
    letter-spacing: 1px;
    line-height: 23.87px;
    color: rgba(51, 51, 51, 1);
    text-align: left;
    vertical-align: top;
}

.pre-in-intro {
    opacity: 1;
    font-size: 16px;
    font-weight: 400;
    letter-spacing: 0px;
    line-height: 23.87px;
    color: rgba(102, 102, 102, 1);
    text-align: justify;
    vertical-align: top;
    margin-top: 15px;
}

.Highlights-all {
    margin-top: 30px;
    opacity: 1;
    font-size: 16px;
    font-weight: 400;
    letter-spacing: 0px;
    line-height: 23.87px;
    color: rgba(51, 51, 51, 1);
    text-align: justify;
}

.Highlights-all span {
    font-size: 16px;
    font-weight: 700;
    letter-spacing: 0px;
    line-height: 23.87px;
    color: rgba(51, 51, 51, 1);
}

.schedule {
    display: flex;
    justify-content: space-between;
    border-bottom: 2px solid rgba(161, 161, 161, 0.3);
    padding: 20px 0;
}

.schedule-left {
    display: flex;
    flex-direction: column;
    width: 50%;
    opacity: 1;
    justify-content: space-evenly;
}

.schedule-all {
    font-size: 16px;
    font-weight: 400;
    letter-spacing: 0px;
    line-height: 23.87px;
    color: rgba(51, 51, 51, 1);
    text-align: justify;
    vertical-align: top;
}

.schedule-right {
    width: 50%;
    height: 296px;
    opacity: 1;
}

.schedule-right img {
    width: 100%;
    height: 296px;
    opacity: 1;
    background-size: cover;
    background-position: center;
    object-fit: cover;
}

.discuss {
    margin-bottom: 30px;
}

.discuss-content {
    opacity: 1;
    text-align: justify;
}

.discuss-title {
    font-size: 16px;
    font-weight: 700;
    letter-spacing: 0px;
    line-height: 23.87px;
    color: rgba(51, 51, 51, 1);
}

.discuss-intro {
    font-size: 16px;
    font-weight: 400;
    letter-spacing: 0px;
    line-height: 30px;
    color: rgba(51, 51, 51, 1);
}

.organization-person {
    display: flex;
    margin-top: 30px;
}

.organization-in {
    display: flex;
}

.organization-left {
    width: 120.88px;
    height: 160.96px;
    opacity: 1;
}

.organization-left img {
    width: 120.88px;
    height: 160.96px;
    opacity: 1;
    background-size: cover;
    background-position: center;
    object-fit: cover;
}

.organization-right {
    display: flex;
    flex-direction: column;
    justify-content: center;
    margin: 0 10px;
}

.organization-name {
    opacity: 1;
    font-size: 18px;
    font-weight: 700;
    letter-spacing: 1px;
    line-height: 23.87px;
    color: rgba(51, 51, 51, 1);
    margin-bottom: 10px;
}

.organization-intro {
    opacity: 1;
    font-size: 16px;
    font-weight: 400;
    letter-spacing: 0px;
    line-height: 23.87px;
    color: rgba(102, 102, 102, 1);
    text-align: left;
    vertical-align: top;
    margin-bottom: 10px;
}

.organization-details {
    display: flex;
    flex-direction: column;
    margin-top: 30px;
    text-align: justify;
}

.organization-title {
    font-size: 18px;
    font-weight: 700;
    letter-spacing: 0px;
    line-height: 23.87px;
    color: rgba(51, 51, 51, 1);
}

.organization-content {
    font-size: 16px;
    font-weight: 400;
    letter-spacing: 0px;
    line-height: 23.87px;
    color: rgba(51, 51, 51, 1);
    text-align: justify;
    vertical-align: top;
}

.partner {
    display: flex;
    flex-direction: column;
    margin-top: 30px;
    text-align: justify;
}

.partner-in {
    display: flex;
    flex-direction: column;
    opacity: 1;
}

.partner-name,
.partner-condition,
.repay-title,
.contact {
    font-size: 18px;
    font-weight: 700;
    letter-spacing: 0px;
    line-height: 30px;
    color: rgba(51, 51, 51, 1);
}

.partner-benefit,
.condition-all,
.repay-all,
.contact-in {
    font-size: 16px;
    font-weight: 400;
    letter-spacing: 0px;
    line-height: 30px;
    color: rgba(51, 51, 51, 1);
}

.repay {
    display: flex;
}

.repay-left,
.repay-right {
    display: flex;
    width: 49%;
    flex-direction: column;
}

.repay-right {
    margin-left: 15px;
}

.guide-all {
    display: flex;
    flex-direction: column;
    margin-bottom: 100px;
    margin-top: 30px;
    text-align: justify;
}

.guide-in {
    display: flex;
    flex-direction: column;

    left: 360px;
    top: 6862px;
    opacity: 1;
}

.guide-name,
.guide-see,
.guide-deadline {
    font-size: 18px;
    font-weight: 600;
    letter-spacing: 0px;
    line-height: 30px;
    color: rgba(51, 51, 51, 1);
}

.guide-content {
    font-size: 16px;
    font-weight: 400;
    letter-spacing: 0px;
    line-height: 23.87px;
    color: rgba(51, 51, 51, 1);
}

.guide-ps {
    font-size: 20px;
    font-weight: 600;
    letter-spacing: 0px;
    line-height: 23.87px;
    color: rgba(165, 214, 63, 1);
}

.enroll {
    width: 100%;
    height: 631px;
    opacity: 1;
    background: rgba(62, 73, 56, 1);
    display: flex;
    justify-content: center;
    align-items: center;
}

.enroll-in {
    width: 67%;
    display: flex;
    flex-direction: column;
    flex-wrap: wrap;
}

.enroll-input {
    display: flex;
    flex-wrap: wrap;
    width: 100%;
    justify-content: space-between;
}

.Remarks {
    margin-top: 15px;
    margin-bottom: 45px;
    display: flex;
    flex-direction: column;
    justify-content: center;
}

.enroll-input div {
    width: 48%;
    margin: 5px 0;
    display: flex;
    flex-direction: column;
}

.enroll-title,
.enroll-ps {
    opacity: 1;
    font-size: 20px;
    font-weight: 500;
    letter-spacing: 0px;
    line-height: 26.52px;
    color: rgba(255, 255, 255, 1);
    text-align: left;
    vertical-align: top;
    margin-bottom: 10px;
}

:deep(.el-input__inner) {
    border-radius: 2px;
    background: rgba(255, 255, 255, 0.1);
    width: 200%;
    color: #fff;
}

.el-textarea {
    width: 98%;
}

:deep(.el-textarea__inner) {
    background: rgba(255, 255, 255, 0.1);
    color: #fff;
}

.el-button img {
    scale: 0.5;
}

.el-button.is-round {
    border-radius: 21px;
    padding: 0.82023vw 1.57211vw;
    width: 20%;
    height: 42px;
    display: flex;
    align-items: center;
    justify-content: center;
}

:deep(.el-button.is-round span) {
    display: flex;
    align-items: center;
}
</style>