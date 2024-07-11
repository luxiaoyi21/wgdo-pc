<template>
    <div class="item">
        <Headers />
        <div class="content">
            <div class="content-in">
                <Breadcrumb :urlData="urlData" />
                <p class="dynamic">{{ $t('five.pingpaixiangmu') }}</p>
                <div class="dsc-line" style="margin-top: 15px; margin-bottom: 5px;"></div>
                <div v-if="$route.path === '/fiveall'">
                    <div class="dynamic-dsc">
                        <div @click="sedTiaoZhuan(index)" class="dynamic-content" v-for="(dym, index) in moredetDatas"
                            :key="dym.mediacenterId">
                            <div class="dynamic-img">
                                <img :src="'http://www.wgdo.net' + dym.cover" alt="">
                            </div>
                            <div class="dynamic-dscall">
                                <div class="dscall-top">
                                    <div class="dscall-title">{{ dym.title }}</div>
                                    <div class="dscall-content" :title="dym.intro">{{ dym.intro }}</div>
                                </div>
                                <div class="dscall-time">{{ dym.releaseTime }}</div>
                            </div>
                        </div>
                    </div>
                    <div class="dynamic-data">
                        <div class="dynamic-data-num">
                            <div class="data-page">第{{ currentPage }}页</div>
                            <div class="data-limit">共{{ totalItems }}条</div>
                        </div>
                        <div class="devide-page">
                            <el-pagination background layout="prev, pager, next" :total="totalItems"
                                :page-size="pageSize" :current-page.sync="currentPage"
                                @current-change="handlePageChange">>
                            </el-pagination>
                        </div>
                    </div>
                </div>
                <router-view v-else @childrenUrl="handleChildrenUrl"></router-view>
            </div>
        </div>
        <div class="foot">
            <Footers />
        </div>
    </div>
</template>

<script>
import { getContentList } from "@/api/requests.js";
import Headers from "@/components/Headers.vue";
import Breadcrumb from '@/components/Breadcrumb'
import Footers from "@/views/Home/Footer/index.vue";
import funs from '@/utils/index.js'

export default {
    name: "MoreDet",
    components: { Headers, Breadcrumb, Footers },
    data() {
        let moredetDatas = []
        let urlData = []
        let totalItems = 0
        return {
            moredetDatas,
            currentPage: 1,
            totalItems: 0,
            pageSize: 10,
            urlData,
            isShow: true
        };
    },
    mounted() {
        this.getFiveData()
        if (this.$store.state.lang.isEn !== 'en') {
            this.urlData.push(
                { path: '/', name: '首页' },
                { path: '/fiveall', name: '品牌项目' }
            )
        } else {
            this.urlData.push(
                { path: '/', name: 'Home' },
                { path: '/fiveall', name: 'Brand project' }
            )
        }
    },
    computed: {
        currentTabDatas() {
            const start = (this.currentPage - 1) * this.pageSize;
            const end = start + this.pageSize;
            return this.moredetDatas.slice(start, end);
        }
    },
    methods: {
        getFiveData(p = this.$store.state.lang.version) {
            getContentList({ "moduleType": "6", "status": "1", version: p }).then(res => {
                if (res.data && Array.isArray(res.data.rows) && res.data.rows.length > 0) {
                    // let [leftImg, ...rightImgLists] = res.data.rows
                    // this.leftImg = leftImg
                    // this.rightImgLists = rightImgLists
                    this.moredetDatas = res.data.rows
                }
            })
        },
        gettime(t) {
            const originalDate = new Date(t);
            const year = originalDate.getFullYear();
            const month = ('0' + (originalDate.getMonth() + 1)).slice(-2)
            const day = ('0' + originalDate.getDate()).slice(-2)
            return {
                year: year,
                timer: month + "-" + day,
            };
        },
        handlePageChange(newPage) { this.currentPage = newPage },
        sedTiaoZhuan(index) {
            this.$router.push({
                path: '/fiveall/fiveinfo',
                query: { index }
            })
        },
        handleChildrenUrl(i) {
            this.urlData.push(i)
        }
    },
    watch: {
        "$store.state.lang.version": {
            handler() {
                funs(this.getFiveData(), this.$store.state.lang.version)
                this.urlData = []
                if (this.$store.state.lang.isEn !== 'en') {
                    this.urlData.push(
                        { path: '/', name: '首页' },
                        { path: '/fiveall', name: '品牌项目' }
                    )
                } else {
                    this.urlData.push(
                        { path: '/', name: 'Home' },
                        { path: '/fiveall', name: 'Brand project' }
                    )
                }
            }
        },
        '$route'() {
            if (this.$route.path === '/fiveall' && this.urlData.length >= 2) {
                this.urlData.pop()
            }
        }
    }
}
</script>

<style scoped>
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
    margin-top: 30px;
}

.dsc-line {
    width: 100%;
    opacity: 0.3;
    border: 1px solid rgba(161, 161, 161, 1);
}

.dynamic-dsc {
    display: flex;
    flex-direction: column;
}

.dynamic-content {
    width: 100%;
    height: 200px;
    display: flex;
    border-bottom: 1px solid rgba(161, 161, 161, 1);
    align-items: center;
    justify-content: space-between;
}

.dynamic-img {
    width: 350px;
    height: 180px;
    opacity: 1;
}

.dynamic-img img {
    width: 350px;
    height: 180px;
    opacity: 1;
    background: rgba(204, 204, 204, 1);
    background-size: cover;
    background-position: center;
}

.dynamic-dscall {
    height: 80%;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    margin-left: 20px;
}

.dscall-top {
    height: 90%;
}

.dscall-title {
    opacity: 1;
    font-size: 22px;
    height: 25%;
    font-weight: 600;
    letter-spacing: 1px;
    line-height: 34.48px;
    color: rgba(51, 51, 51, 1);
    text-align: left;
    vertical-align: top;
    overflow: hidden;
}

.dscall-content {
    opacity: 1;
    font-size: 16px;
    font-weight: 400;
    letter-spacing: 0px;
    line-height: 23.87px;
    color: rgba(51, 51, 51, 1);
    text-align: justify;
    vertical-align: top;
    margin-top: 5px;
    overflow: hidden;
    display: -webkit-box;
    -webkit-line-clamp: 4;
    -webkit-box-orient: vertical;
    text-overflow: ellipsis;
    transition: all 0.3s ease;
}

.dscall-time {
    opacity: 1;
    font-size: 15px;
    font-weight: 400;
    letter-spacing: 0px;
    line-height: 23.87px;
    color: rgba(153, 153, 153, 1);
    text-align: left;
    vertical-align: top;
}

.dynamic-data {
    width: 100%;
    height: 120px;
    display: flex;
    justify-content: space-between;
    align-items: center;
}

.dynamic-data-num {
    width: 12%;
    display: flex;
    justify-content: space-between;
}

.foot {
    background: rgba(166, 225, 99, 1);
}
</style>