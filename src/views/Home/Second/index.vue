<template>
    <div class="box">
        <div class="content">
            <div class="left">
                <div class="titletwo">
                    <span class="titletwoF">{{ $store.state.lang.titles[1] }}</span>
                    <span class="titletwoS">
                        <a href="/media/dynamic">{{ $t('second.more') }}<i class="iconfont icon-youjiantou"></i></a>
                    </span>
                </div>
                <div class="carouselS">
                    <el-carousel indicator-position="outside" arrow="always">
                        <el-carousel-item v-for="item in leftData" :key="item.hpId">
                            <router-link :to="{name:'Dynamicinfo'}">
                                <div class="leftimg">
                                    <img :src="'http://www.wgdo.net' + item.cover" alt="">
                                </div>
                                <div class="leftline"></div>
                                <div class="titlethr">
                                    {{ item.title }}
                                </div>
                                <div :class="$store.state.lang.isEn === 'en' ? 'titlefourEN' : 'titlefour'">
                                    {{ item.intro }}
                                </div>
                            </router-link>
                        </el-carousel-item>
                    </el-carousel>
                </div>
            </div>
            <div class="right">
                <div class="titone">
                    <div class="tiltonel">
                        <img src="@/static/imgs/lights.png">
                        <span>{{ $store.state.lang.titles[2] }}</span>
                    </div>
                    <div class="tiltoner">
                        <router-link :to="toSencondDetAll">
                            {{ $t('second.tomore') }}
                            <i class="iconfont icon-youjiantou"></i>
                        </router-link>
                    </div>
                </div>
                <div class="titoneLine"></div>
                <div class="rightList" v-for="(i, index) in rightData" :key="i.hpId" @click="toSencondDetList(index)">
                    <div class="rightListTitle">
                        {{ i.title }}
                    </div>
                    <div :class="$store.state.lang.isEn === 'en' ? 'rightListContentEN' : 'rightListContent'">
                        {{ i.intro }}
                    </div>
                    <div class="rightListLine"></div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import { mounted, watch } from 'vue'
    import { getContentList } from '@/api/requests.js'
    import funs from '@/utils/index.js'

    export default {
        name: 'Second',
        data() {
            let leftData = []
            let rightData = []
            return {
                leftData,
                rightData,
            }
        },
        mounted() {
            this.getSecondData()
        },
        methods: {
            getSecondData(p = this.$store.state.lang.version) {
                getContentList({ "moduleType": "1", "status": "1", version: p }).then(res => {
                    if (res.data && Array.isArray(res.data.rows) && res.data.rows.length > 0) {
                        this.leftData = res.data.rows
                    }
                })
                getContentList({ "moduleType": "2", "status": "1", version: p }).then(res => {
                    if (res.data && Array.isArray(res.data.rows) && res.data.rows.length > 0) {
                        this.rightData = res.data.rows.slice(0, 4)
                    }
                })
            },
            toSencondDetList(i) {
                this.$router.push({
                    path: '/sedmore/sedmoreinfo',
                    name: 'Sedmoreinfo',
                    params: {
                        fromPath: this.$route.path,
                        fromName: this.$route.name,
                        datas: this.rightData[i],
                        orders: i
                    }
                })
            }
        },
        computed: {
            toSencondDetAll() {
                return {
                    path: '/sedmore',
                    name: 'SedMore',
                    params: {
                        fromPath: this.$route.path,
                        fromName: this.$route.name,
                        orders: 'seAll',
                        datas: this.rightData
                    }
                }
            },
        },
        watch: {
            "$store.state.lang.version": {
                handler() {
                    funs(this.getSecondData(), this.$store.state.lang.version)
                }
            }
        }
    }
</script>

<style scoped>
    .box {
        padding-top: 76px;
        overflow: hidden;
        width: 100vw;
        height: 788.65px;
        display: flex;
    }

    .content {
        margin: 0 auto;
        width: 80.2vw;
        max-width: 80.2vw;
        display: flex;
    }

    .left {
        flex: 1;
        max-height: 650px;
    }

    .left .titleone {
        width: 522.72px;
        height: 42.67px;
        opacity: 1;
        font-size: 32px;
        font-weight: 700;
        letter-spacing: 0.76px;
        line-height: 42.43px;
        color: rgba(255, 255, 255, 1);
        text-align: left;
    }

    .left .titletwo {
        display: flex;
        justify-content: space-between;
        align-items: center;
    }

    .left .titletwo .titletwoF {
        height: 42.67px;
        font-size: 32px;
        font-weight: 500;
        letter-spacing: 0.76px;
        line-height: 42.43px;
        color: rgba(255, 255, 255, 1);
        text-align: left;
    }

    .left .titletwo .titletwoS a {
        padding-left: 15px;
        width: 70.96px;
        height: 42.67px;
        font-size: 15.24px;
        font-weight: 500;
        letter-spacing: 0px;
        line-height: 41.9px;
        color: rgba(166, 225, 99, 1);
        text-align: right;
    }

    .left .titletwo .titletwoS a i {
        display: inline-block;
        position: relative;
        top: 1px;
    }

    /* carousel */
    .carouselS {
        position: relative;
        margin-top: 31px;
        width: 579.1px;
        max-height: 620px;
    }

    .carouselS :deep(.el-carousel) {
        max-height: 600px;
    }

    .carouselS :deep(.el-carousel__container) {
        max-height: 600px;
    }

    .carouselS :deep(.el-carousel__item) {
        max-height: 600px;
    }

    /* 按钮rgba */
    .carouselS :deep(.el-carousel__indicators--horizontal) {
        position: absolute;
        left: -2px;
        top: 510px;
        width: 70%;
        height: 9.14px;
        text-align: left;
    }

    .carouselS :deep(.el-carousel__indicators--horizontal) li:first-child {
        margin-left: 0px;
    }

    .carouselS :deep(.el-carousel__button) {
        margin: 0px 3px;
        width: 9.14px;
        height: 9.14px;
        border-radius: 50%;
        background: rgba(255, 255, 255, 1);
    }

    .carouselS :deep(.is-active .el-carousel__button) {
        background: rgba(166, 225, 99, 1);
    }

    /* 方向键 */
    .carouselS :deep(.el-carousel__arrow) {
        position: relative;
        transform: translate(505px, 217px);
        width: 21.93px;
        height: 15.66px;
        border-radius: 0;
        background-color: #fff;
    }

    .carouselS :deep(.el-carousel__arrow--left) {
        width: 21.93px;
        height: 15.66px;
        background: url('@/static/imgs/topp.png');
        background-position: center;
        background-size: cover;
    }

    .carouselS :deep(.el-carousel__arrow--right) {
        margin-left: 40px;
        width: 21.93px;
        height: 15.66px;
        background: url('@/static/imgs/next.png');
        background-position: center;
        background-size: cover;
    }

    .carouselS :deep(.el-carousel__arrow i) {
        display: none;
    }

    .leftimg {
        width: 579.1px;
        height: 274.31px;
    }

    .leftimg img {
        width: 100%;
        height: 100%;
        background-size: cover;
        background-position: center;
        object-fit: cover;
    }

    .leftline {
        margin-top: 35px;
        width: 579.1px;
        height: 0px;
        opacity: 1;
        border: 1.52px solid rgba(255, 255, 255, 1);
    }

    .titlethr {
        margin-top: 31px;
        width: 579.05px;
        height: 35.05px;
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
        font-size: 25.91px;
        font-weight: 500;
        letter-spacing: 0.76px;
        line-height: 34.35px;
        color: rgba(255, 255, 255, 1);
        text-align: left;
    }

    .titlefour {
        margin-top: 11px;
        width: 548.05px;
        opacity: 1;
        font-size: 15.24px;
        font-weight: 400;
        letter-spacing: 0.76px;
        line-height: 20.21px;
        color: rgba(255, 255, 255, 0.8);
        text-align: left;
        display: -webkit-box;
        overflow: hidden;
        text-overflow: ellipsis;
        -webkit-box-orient: vertical;
        -webkit-line-clamp: 4;
    }

    .titlefourEN {
        margin-top: 11px;
        left: 143.25px;
        top: 1292.32px;
        width: 548.05px;
        opacity: 1;
        font-size: 15.24px;
        font-weight: 400;
        letter-spacing: 0.76px;
        line-height: 20.21px;
        color: rgba(255, 255, 255, 0.8);
        text-align: left;
        display: -webkit-box;
        overflow: hidden;
        text-overflow: ellipsis;
        -webkit-box-orient: vertical;
        -webkit-line-clamp: 4;
        text-align: justify;
    }

    /* right */
    .right {
        justify-content: flex-end;
        padding-left: 86px;
        width: 666px;
        border-left: 1px snow sienna;
        overflow: hidden;
        max-height: 650px;
    }

    .right .titone {
        display: flex;
        justify-content: space-between;
        align-items: center;
        left: 842.75px;
        top: 759.69px;
        height: 30.48px;
        font-size: 22.86px;
        font-weight: 600;
        letter-spacing: 0.76px;
        line-height: 30.31px;
        color: rgba(255, 255, 255, 1);
        text-align: left;
    }

    .right .tiltonel {
        display: flex;
        align-items: center;
    }

    .right .titone img {
        margin-right: 10px;
        width: 24.38px;
        height: 24.38px;
    }

    .right .titone .tiltoner a {
        padding-left: 15px;
        left: 147px;
        width: 70.96px;
        height: 42.67px;
        font-size: 15.24px;
        font-weight: 500;
        letter-spacing: 0px;
        line-height: 30.48px;
        color: rgba(166, 225, 99, 1);
    }

    .right .titone .tiltoner a i {
        display: inline-block;
        position: relative;
        top: 1px;
    }

    .right .titoneLine {
        margin-top: 19px;
        width: 507.48px;
        height: 0px;
        opacity: 1;
        border: 0.76px solid rgba(255, 255, 255, 1);
    }

    .right {
        max-height: 630px;
        overflow: hidden;
    }

    .right .rightList {
        cursor: pointer;
    }

    .right .rightList .rightListTitle {
        margin-top: 23px;
        width: 100%;
        height: 22.86px;
        opacity: 1;
        font-size: 16.76px;
        font-weight: 500;
        letter-spacing: 0.76px;
        line-height: 22.23px;
        color: rgba(255, 255, 255, 1);
        text-align: left;
        display: -webkit-box;
        overflow: hidden;
        text-overflow: ellipsis;
        -webkit-box-orient: vertical;
        -webkit-line-clamp: 1;
    }

    .right .rightList .rightListContent {
        margin-top: 8px;
        width: 100%;
        font-size: 15.24px;
        font-weight: 400;
        letter-spacing: 0.76px;
        line-height: 20.21px;
        color: rgba(255, 255, 255, 0.8);
        text-align: justify;
        display: -webkit-box;
        overflow: hidden;
        text-overflow: ellipsis;
        -webkit-box-orient: vertical;
        -webkit-line-clamp: 3;
    }

    .rightListContentEN {
        margin-top: 8px;
        width: 507px;
        font-size: 15.24px;
        font-weight: 400;
        letter-spacing: 0.76px;
        line-height: 20.21px;
        color: rgba(255, 255, 255, 0.8);
        text-align: justify;
        word-break: keep-all;
        text-align-last: left;
    }

    .right .rightList .rightListLine {
        margin-top: 23px;
        height: 0px;
        opacity: 1;
        border: 0.76px dashed rgba(255, 255, 255, 1);
    }
</style>