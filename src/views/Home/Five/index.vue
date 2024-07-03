<template>
    <div class="box">
        <div class="boxa">
            <div class="boxaTitle">{{ $store.state.lang.titles[6] }}</div>
            <div class="boxaDsc">{{ $t('five.dsc') }}</div>
            <div class="tomore">
                <a href="/prize">
                    {{ $t('five.tomore') }} <i class="iconfont icon-youjiantou"></i>
                </a>
            </div>
            <div class="boxaImgs">
                <div class="boxaImgsL">
                    <img :src=" 'http://www.wgdo.net' + leftImg.cover" alt="">
                    <div class="boxaImgsLl">
                        <div :class=" $store.state.lang.isEn === 'en' ? 'boxaImgsLlTitleEN' :'boxaImgsLlTitle' ">
                            {{leftImg.title}}</div>
                        <div :class=" $store.state.lang.isEn === 'en' ? 'boxaImgsLlDscEN' :'boxaImgsLlDsc' ">
                            {{leftImg.intro}}</div>
                        <div class="boxaImgsLlMore">
                            <router-link :to="detailsRoute">
                                <div :class=" $store.state.lang.isEn === 'en' ? 'learnMoreEN' :'learnMore' ">
                                    <span>{{$t('LearnMore.learnmore')}}<i class="iconfont icon-youjiantou"></i></span>
                                </div>
                            </router-link>
                        </div>
                    </div>
                </div>
                <div class="boxaImgsR">
                    <div class="boxaImgsRItem" v-for="(item,index) in rightImgLists" :key="item.hpId">
                        <img :src="'http://www.wgdo.net' + item.cover">
                        <div class="boxaTimgsRItemm">
                            <div
                                :class="$store.state.lang.isEn === 'en' ? 'boxaTmgsRItemmTitleEN' :'boxaTmgsRItemmTitle'">
                                {{item.title}}</div>
                            <div class=" boxaTmgsRItemmMore" @click="getIndex(index)">
                                <div :class=" $store.state.lang.isEn === 'en' ? 'learnMoresEN' :'learnMores' ">
                                    <span>{{$t('LearnMore.learnmore')}}<i class="iconfont icon-youjiantou"></i></span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="boxb">
            <div class="boxbTitle">{{ $t('five.mingdan') }}</div>
            <div class="boxbDsc">
                <TitleStyle :isTitle="$store.state.lang.titles[7]" :styles="boxTitleStyleB" :style2="style2" />
            </div>
            <div class="boxbInfo">
                <div class="boxbInfoItem" v-for="i in getPrice" :key="i.hpId">
                    <!-- <a href="#"> -->
                    <img :src=" 'http://www.wgdo.net' + i.cover">
                    <span>{{i.title}}</span>
                    <!-- </a> -->
                </div>
            </div>
        </div>
        <div class="boxc">
            <div class="boxcDsc">
                <TitleStyle :isTitle="$store.state.lang.titles[8]" :styles="boxTitleStyleB" :style2="style2" />
            </div>
            <div class="boxcInfo">
                <div class="boxcInfoItem" v-for="t in awardWinningOrganization" :key="t.hpId">
                    <!-- <a href="#"> -->
                    <img :src="'http://www.wgdo.net' + t.cover " alt="">
                    <span :class="  $store.state.lang.isEn === 'en' ? 'isEn' : 'isZn' ">{{t.title}}</span>
                    <!-- </a> -->
                </div>
            </div>
        </div>
        <div :class=" $store.state.lang.isEn === 'en' ? 'toLearnMoreEN' :'toLearnMore' ">
            <a href="/prize/big">
                {{ $t('five.seehistory') }} <i class="iconfont icon-youjiantou"></i>
            </a>
        </div>
    </div>
</template>

<script>
    import { mounted } from 'vue'
    import { getContentList } from '@/api/requests.js'
    import TitleStyle from '@/components/TitleStyle.vue'
    import funs from '@/utils/index.js'
    import store from '@/store/index.js'

    export default {
        name: 'Five',
        components: { TitleStyle },
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
                'color': '#3E4938',
                'vertical - align': 'top'
            }
            const style2 = {
                'background': '#3E4938'
            }
            let leftImg = []
            let rightImgLists = []
            let getPrice = []
            let awardWinningOrganization = []
            return {
                boxTitleStyleB,
                style2,
                leftImg,
                rightImgLists,
                getPrice,
                awardWinningOrganization
            }
        },
        mounted() {
            this.getFiveData();
        },
        methods: {
            getFiveData(p = this.$store.state.lang.version) {
                getContentList({ "moduleType": "6", "status": "1", version: p }).then(res => {
                    if (res.data && Array.isArray(res.data.rows) && res.data.rows.length > 0) {
                        let [leftImg, ...rightImgLists] = res.data.rows
                        this.leftImg = leftImg
                        this.rightImgLists = rightImgLists
                    }
                })
                getContentList({ "moduleType": "7", "status": "1", version: p }).then(res => {
                    this.getPrice = res.data.rows
                })
                getContentList({ "moduleType": "8", "status": "1", version: p }).then(res => {
                    this.awardWinningOrganization = res.data.rows
                })
            },
            getIndex(i) {
                this.$router.push({
                    path: '/details',
                    name: 'Details',
                    params: {
                        datas: this.rightImgLists,
                        fromPath: this.$route.path,
                        fromName: this.$route.name,
                        types: 'fiveList',
                        orders: Number(i)
                    }
                })
            }
        },
        computed: {
            detailsRoute() {
                return {
                    path: '/details',
                    name: 'Details',
                    params: {
                        datas: this.leftImg,
                        fromPath: this.$route.path,
                        fromName: this.$route.name,
                        types: 'fiveAll'
                    }
                }
            }
        },
        watch: {
            "$store.state.lang.version": {
                handler() {
                    funs(this.getFiveData(), this.$store.state.lang.version)
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
        width: 100%;
        overflow: hidden;
    }

    /* boxa */
    .boxa {
        width: 100vw;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
    }

    .boxa .boxaTitle {
        margin-top: 76px;
        height: 42.67px;
        font-size: 32px;
        font-weight: 700;
        letter-spacing: 0.76px;
        line-height: 42.43px;
        color: rgba(51, 51, 51, 1);
        text-align: left;
    }

    .boxa .boxaDsc {
        margin-top: 11px;
        width: 432.04px;
        font-size: 15.24px;
        font-weight: 400;
        letter-spacing: 0.76px;
        line-height: 20.21px;
        color: rgba(153, 153, 153, 0.8);
        text-align: center;
    }

    .tomore a {
        margin-top: 11px;
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

    .boxa .boxaImgs {
        margin-top: 50px;
        display: grid;
        grid-template-columns: 1fr 1fr;
        width: 100vw;
    }

    .boxaImgsL {
        position: relative;
        top: 0;
        left: 0;
        width: 731.5px;
        height: 434.33px;
        background-size: cover;
        background-position: center;
        overflow: hidden;
    }

    .boxaImgsL img {
        display: block;
        width: 100%;
        height: 100%;
        background-size: cover;
        background-position: center;
    }

    .boxaImgsLl {
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        text-indent: 14px;
        opacity: 0;
        z-index: 100;
        display: flex;
        flex-direction: column;
        align-items: center;
        background: rgba(62, 73, 56, 0.9);
    }

    .boxaImgsLl:hover {
        opacity: .9;
    }

    .boxaImgsLl .boxaImgsLlTitle {
        margin-top: 124px;
        width: 469.53px;
        height: 53.49px;
        font-size: 32px;
        font-weight: 500;
        letter-spacing: 0.76px;
        line-height: 42.43px;
        color: rgba(255, 255, 255, 1);
        text-align: center;
    }

    .boxaImgsLlTitleEN {
        margin-top: 74px;
        width: 469.53px;
        height: 53.49px;
        font-size: 32px;
        font-weight: 500;
        letter-spacing: 0.76px;
        line-height: 42.43px;
        color: rgba(255, 255, 255, 1);
        text-align: center;
    }

    .boxaImgsLl .boxaImgsLlDsc {
        margin-top: 45px;
        width: 80%;
        height: 41.15px;
        font-size: 15.24px;
        font-weight: 400;
        letter-spacing: 0.76px;
        line-height: 20.21px;
        color: rgba(255, 255, 255, 0.8);
        text-align: center;
        overflow: hidden;
        display: -webkit-box;
        -webkit-line-clamp: 3;
        -webkit-box-orient: vertical;
        word-break: break-all;
    }

    .boxaImgsLlDscEN {
        margin-top: 75px;
        width: 80%;
        height: 41.15px;
        font-size: 15.24px;
        font-weight: 400;
        letter-spacing: 0.76px;
        line-height: 20.21px;
        color: rgba(255, 255, 255, 0.8);
        text-align: center;
        overflow: hidden;
        display: -webkit-box;
        -webkit-line-clamp: 4;
        -webkit-box-orient: vertical;
        word-break: break-all;
    }

    .boxaImgsLl .boxaImgsLlMore {
        border-radius: 27.05px;
    }

    .learnMore {
        margin-top: 39px;
        position: relative;
        width: 154px;
        height: 35px;
        opacity: 1;
        border-radius: 50px;
        border: 2px solid rgba(166, 225, 99, 1);
    }

    .learnMore span {
        position: absolute;
        left: 10px;
        top: -9px;
        width: 100%;
        height: 50px;
        font-size: 20px;
        font-weight: 500;
        letter-spacing: 0px;
        line-height: 50px;
        color: rgba(166, 225, 99, 1);
    }

    .learnMore i {
        position: absolute;
        top: 2px;
    }

    .learnMoreEN {
        margin-top: 39px;
        position: relative;
        width: 154px;
        height: 35px;
        opacity: 1;
        border-radius: 50px;
        border: 2px solid rgba(166, 225, 99, 1);
    }

    .learnMoreEN span {
        position: absolute;
        left: 7px;
        top: -10px;
        width: 100%;
        height: 50px;
        font-size: 16px;
        font-weight: 500;
        letter-spacing: 0px;
        line-height: 50px;
        color: rgba(166, 225, 99, 1);
    }

    .learnMoreEN span i {
        position: absolute;
        top: 2px;
    }

    .boxaImgsR {
        background-size: cover;
        background-position: center;
        overflow: hidden;
        display: grid;
        grid-template-columns: 1fr 1fr;
    }

    .boxaImgsR .boxaImgsRItem {
        position: relative;
        top: 0;
        left: 0;
        width: 365.75px;
        height: 217.16px;
        overflow: hidden;
    }

    .boxaImgsR .boxaImgsRItem img {
        display: block;
        width: 100%;
        height: 100%;
        background-size: cover;
        background-position: center;
    }

    .boxaTimgsRItemm {
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        opacity: 0;
        z-index: 100;
        display: flex;
        flex-direction: column;
        align-items: center;
        background: rgba(62, 73, 56, 0.9);
    }

    .boxaTimgsRItemm:hover {
        opacity: 1;
    }

    .aaaa {}

    .boxaTimgsRItemm .boxaTmgsRItemmTitle {
        margin-top: 57px;
        width: 243.83px;
        font-size: 25.91px;
        font-weight: 500;
        letter-spacing: 0.76px;
        line-height: 34.35px;
        color: rgba(255, 255, 255, 1);
        text-align: center;
        overflow: hidden;
        text-overflow: ellipsis;
        -webkit-line-clamp: 2;
        display: -webkit-box;
        -webkit-box-orient: vertical;
        word-break: break-all;
    }

    .boxaTmgsRItemmTitleEN {
        margin-top: 47px;
        width: 300.83px;
        font-size: 25.91px;
        font-weight: 500;
        letter-spacing: 0.76px;
        line-height: 29px;
        color: rgba(255, 255, 255, 1);
        text-align: center;
        overflow: hidden;
        text-overflow: ellipsis;
        -webkit-line-clamp: 2;
        display: -webkit-box;
        -webkit-box-orient: vertical;
        text-indent: 20px;
    }

    .boxaTmgsRItemmMore {
        margin-top: 15px;
    }

    .learnMores {
        position: relative;
        width: 140px;
        height: 35px;
        opacity: 1;
        border-radius: 50px;
        border: 2px solid rgba(166, 225, 99, 1);
    }

    .learnMores span {
        position: absolute;
        top: 5px;
        left: 25px;
        width: 100%;
        height: 35px;
        font-size: 16px;
        font-weight: 500;
        letter-spacing: 0px;
        line-height: 20px;
        color: rgba(166, 225, 99, 1);
    }

    .learnMores span i {
        margin-left: 10px;
    }

    .learnMoresEN {
        position: relative;
        width: 140px;
        height: 35px;
        opacity: 1;
        border-radius: 50px;
        border: 2px solid rgba(166, 225, 99, 1);
    }

    .learnMoresEN span {
        position: absolute;
        top: 5px;
        left: 25px;
        width: 100%;
        height: 35px;
        font-size: 16px;
        font-weight: 500;
        letter-spacing: 0px;
        line-height: 20px;
        color: rgba(166, 225, 99, 1);
    }

    .learnMoresEN span i {
        position: absolute;
        top: 2px;
    }

    /* boxb */
    .boxb {
        margin: 90px auto 0;
        width: 80.2vw;
        display: flex;
        flex-direction: column;
        align-items: center;
    }

    .boxb .boxbTitle {
        height: 42.67px;
        font-size: 32px;
        font-weight: 700;
        letter-spacing: 0.76px;
        line-height: 42.43px;
        color: rgba(51, 51, 51, 1);
        vertical-align: top;
    }

    .boxb .boxbDsc {
        margin-top: 46px;
        height: 36.57px;
        font-size: 27.43px;
        font-weight: 600;
        letter-spacing: 0.76px;
        line-height: 36.38px;
        color: rgba(62, 73, 56, 1);
        vertical-align: top;
    }

    .boxb .boxbInfo {
        margin-top: 50px;
        width: 100%;
        display: grid;
        justify-content: space-between;
        grid-template-columns: repeat(auto-fill, 137px);
        gap: 16px 11px;
    }

    .boxb .boxbInfo .boxbInfoItem {
        width: 137.16px;
        height: 178.3px;
        opacity: 1;
        background: rgba(255, 255, 255, 1);
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
    }

    .boxb .boxbInfo .boxbInfoItem img {
        display: block;
        width: 137.16px;
        height: 143.25px;
        background-size: cover;
        background-position: center;
        object-fit: cover;
    }

    .boxb .boxbInfo .boxbInfoItem span {
        display: block;
        width: 137.16px;
        height: 35px;
        font-size: 12px;
        line-height: 35px;
        text-align: center;
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
        word-break: break-all;
    }

    .boxb .boxbInfo .boxbInfoItem:hover {
        background: #A6E163;
    }

    /* boxc */
    .boxc {
        margin: 77px auto 0;
        width: 80.2vw;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
    }

    .boxc .boxcDsc {
        height: 36.57px;
        font-size: 27.43px;
        font-weight: 600;
        letter-spacing: 0.76px;
        line-height: 36.57px;
        color: rgba(62, 73, 56, 1);
    }

    .boxc .boxcInfo {
        margin-top: 50px;
        width: 100%;
        height: 111.25px;
        display: grid;
        justify-content: space-between;
        grid-template-columns: repeat(auto-fill, 228.59px);
        gap: 13px 0px;
    }

    .boxc .boxcInfo .boxcInfoItem {
        /* display: flex;
        justify-content: center; */
        position: relative;
        top: 0;
        width: 228.59px;
        height: 111.25px;
        background: rgba(255, 255, 255, 1);
    }

    .boxc .boxcInfo .boxcInfoItem img {
        display: block;
        width: 228.59px;
        height: 76px;
        background-size: cover;
        background-position: center;
        object-fit: contain;
    }

    .boxc .boxcInfo .boxcInfoItem span {
        position: absolute;
        bottom: 0px;
        height: 35px;
        z-index: 200px;
    }

    .boxc .boxcInfo .boxcInfoItem:hover span {
        background: #A6E163;
    }

    .isZn {
        display: block;
        width: 228.59px;
        height: 35px;
        font-size: 12px;
        font-weight: 400;
        letter-spacing: 0.76px;
        line-height: 35px;
        color: rgba(16, 16, 16, 1);
        text-align: center;
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
    }

    .isEn {
        padding: 0 15px;
        display: block;
        width: 228.59px;
        height: 35px;
        font-size: 12px;
        font-weight: 400;
        letter-spacing: 0.76px;
        line-height: 35px;
        color: rgba(16, 16, 16, 1);
        text-align: center;
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
    }

    /* 了解更多 */
    .toLearnMore {
        margin: 83px auto 91px;
        width: 220px;
        height: 38.1px;
        opacity: 0.5;
        border-radius: 38.1px;
        border: 0.76px solid rgba(62, 73, 56, 1);
    }

    .toLearnMore a {
        display: block;
        width: 100%;
        height: 24.38px;
        font-size: 18.29px;
        font-weight: 400;
        letter-spacing: 0.76px;
        line-height: 35px;
        color: rgba(56, 56, 56, 1);
        text-align: center;
    }

    .toLearnMoreEN {
        margin: 83px auto 91px;
        width: 320px;
        height: 38.1px;
        opacity: 0.5;
        border-radius: 38.1px;
        border: 0.76px solid rgba(62, 73, 56, 1);
    }

    .toLearnMoreEN a {
        display: block;
        width: 100%;
        height: 24.38px;
        font-size: 18.29px;
        font-weight: 400;
        letter-spacing: 0.76px;
        line-height: 35px;
        color: rgba(56, 56, 56, 1);
        text-align: center;
    }

    .toLearnMore:hover {
        opacity: 1;
    }

    .toLearnMoreEN:hover {
        opacity: 1;
    }

    .toLearnMore:active {
        opacity: .8;
    }

    .toLearnMoreEN:active {
        opacity: .8;
    }
</style>