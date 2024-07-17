<template>
    <div class="box">
        <div class="boxa">
            <div class="boxaTitle">{{ $store.state.lang.titles[9] }}</div>
            <div class="boxaDsc">{{ $t('six.dsc') }}</div>
            <div class="contentInfo">
                <logoPic :logoPicData="sixOne" />
            </div>
        </div>
        <div class="boxb">
            <div class="boxbTop">
                <TitleStyle :isTitle="$store.state.lang.titles[10]" :styles="boxTitleStyleB" :style2="style2" />
            </div>
            <div class="tomore">
                <a href="/caseall">
                    {{ $t('five.tomore') }} <i class="iconfont icon-youjiantou"></i>
                </a>
            </div>
            <div class="boxbContent">
                <vue-seamless-scroll :data="sixTwo" :class-option="classOption">
                    <ul class="ul-item">
                        <li class=" boxbContentItem" v-for="t in sixTwo" :key="t.hpId" @click="toCaseinfo(index)">
                            <img :src="'http://www.wgdo.net' + t.cover" alt="">
                            <div class="dsc">{{ t.title }}</div>
                        </li>
                    </ul>
                </vue-seamless-scroll>
            </div>
        </div>
        <div class="boxc">
            <div class="boxcTitle">
                <TitleStyle :isTitle="$store.state.lang.titles[11]" :styles="boxTitleStyleB" :style2="style2" />
            </div>
            <div class="boxcContent">
                <logoPic :logoPicData="sixThree" />
            </div>
        </div>
        <div class="boxd">
            <div class="boxdTitle">
                <TitleStyle :isTitle="$store.state.lang.titles[12]" :styles="boxTitleStyleB" :style2="style2" />
            </div>
            <div class="boxdContent">
                <logoPic :logoPicData="sixFour" />
            </div>
        </div>
    </div>
</template>

<script>
import { getContentList } from '@/api/requests.js'
import TitleStyle from '@/components/TitleStyle.vue'
import logoPic from '@/components/logoPic.vue'
import funs from '@/utils/index.js'
import vueSeamlessScroll from 'vue-seamless-scroll'

export default {
    name: 'Sixth',
    components: { TitleStyle, logoPic, vueSeamlessScroll },
    data() {
        const boxTitleStyleB = {
            'margin': '0 30px',
            'width': '100%',
            'height': '36.57px',
            'font-size': '27.43px',
            'font-weight': '600',
            'letter-spacing': '0.76px',
            'line-height': '36.38px',
            'text-align': 'center',
            'color': 'rgba(255, 255, 255, 1)',
            'vertical - align': 'top'
        }
        const style2 = {
            'background': '#fff'
        }
        let sixOne = []
        let sixTwo = []
        let sixThree = []
        let sixFour = []
        return {
            boxTitleStyleB,
            style2,
            sixOne,
            sixTwo,
            sixThree,
            sixFour,
            classOption: {
                step: .3,
                limitMoveNum: 0,
                hoverStop: true,
                direction: 2,
                switchOffset: 10,
                switchSingleStep: 134
            }
        }
    },
    mounted() {
        this.getSixData()
    },
    methods: {
        getSixData(p = this.$store.state.lang.version) {
            getContentList({ "moduleType": "9", "status": "1", version: p }).then(res => {
                if (res.data && Array.isArray(res.data.rows) && res.data.rows.length > 0) {
                    this.sixOne = res.data.rows
                }
            })
            getContentList({ "moduleType": "10", "status": "1", version: p }).then(res => {
                if (res.data && Array.isArray(res.data.rows) && res.data.rows.length > 0) {
                    this.sixTwo = res.data.rows
                    this.classOption.limitMoveNum = this.sixTwo.length
                }
            })
            getContentList({ "moduleType": "11", "status": "1", version: p }).then(res => {
                if (res.data && Array.isArray(res.data.rows) && res.data.rows.length > 0) {
                    this.sixThree = res.data.rows
                }
            })
            getContentList({ "moduleType": "12", "status": "1", version: p }).then(res => {
                if (res.data && Array.isArray(res.data.rows) && res.data.rows.length > 0) {
                    this.sixFour = res.data.rows
                }
            })
        },
        toCaseinfo(i) {
            this.$router.push({
                path: 'caseinfo',
                name: 'Caseinfo',
                params: {
                    fromPath: this.$route.path,
                    fromName: this.$route.name,
                    datas: this.rightData[i],//数据不对
                    orders: i
                }
            })
        }
    },
    watch: {
        "$store.state.lang.version": {
            handler() {
                funs(this.getSixData(), this.$store.state.lang.version)
            }
        }
    }
}
</script>

<style scoped>
.box {
    position: relative;
    top: 0;
    left: 0;
}

.boxa {
    margin: 0 auto;
    width: 80.2vw;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
}

.boxa .boxaTitle {
    margin-top: 77px;
    height: 42.67px;
    font-size: 32px;
    font-weight: 700;
    letter-spacing: 0.76px;
    line-height: 42.43px;
    color: rgba(255, 255, 255, 1);
    vertical-align: top;
}

.boxa .boxaDsc {
    margin-top: 11px;
    width: 77%;
    font-size: 15.24px;
    font-weight: 400;
    letter-spacing: 0.76px;
    line-height: 20.21px;
    color: rgba(255, 255, 255, 0.8);
    text-align: center;
    vertical-align: top;
}

.boxa .contentInfo {
    width: 100%;
}

/* boxb */
.box .boxb {
    margin-top: 46px;
    width: 100vw;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
}

.boxb .boxbTop {
    display: flex;
    justify-content: center;
    align-items: center;
}

.tomore{
    margin-top: 11px;
    margin-left: 1vw;
}

.tomore a {
    width: 60.96px;
    height: 20.57px;
    font-size: 15.24px;
    font-weight: 500;
    letter-spacing: 0px;
    line-height: 20.21px;
    color: rgba(166, 225, 99, 1);
    text-align: right;
    vertical-align: top;
}

.tomore a i {
    display: inline-block;
    position: relative;
    top: 1px;
}

.boxb .boxbContent {
    margin-top: 50px;
    width: 100vw;
    height: 199px;
    overflow: hidden;
    /* display: grid;
        justify-content: space-between;
        grid-template-columns: repeat(auto-fill, 285px);
        gap: 10px 0; */
}

.boxb .boxbContent .ul-item {
    display: flex;
    flex-wrap: nowrap;
    overflow-x: auto;
    width: calc(285.04px * 5);
}

.boxb .boxbContent .boxbContentItem {
    position: relative;
    width: 305.04px;
    height: 198.11px;
    margin: 0 5px;
}

.boxb .boxbContent .boxbContentItem img {
    display: block;
    width: 100%;
    height: 100%;
    background-size: cover;
    background-position: center;
    object-fit: cover;
}

.boxb .boxbContent .boxbContentItem .dsc {
    position: absolute;
    bottom: 0;
    width: 100%;
    height: 45.42px;
    line-height: 45.42px;
    text-align: center;
    color: rgba(255, 255, 255, 1);
    background: rgba(44, 43, 44, 0.7);
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
}

.boxb .boxbContent .boxbContentItem:hover .dsc {
    background: rgba(166, 225, 99, 1);
}

/* boxc */
.box .boxc {
    margin: 0 auto;
    width: 80.2vw;
    margin-top: 76px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
}

.boxc .boxcTitle {
    display: flex;
    justify-content: center;
    align-items: center;
}

.boxc .boxcContent {
    width: 80.2vw;
}

/* boxd */
.boxd {
    margin: 0 auto;
    padding-bottom: 91px;
    width: 80.2vw;
    margin-top: 76px;
    padding-bottom: 90px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
}

.boxd .boxdTitle {
    display: flex;
    justify-content: center;
    align-items: center;
}

.boxd .boxdContent {
    width: 80.2vw;
}
</style>