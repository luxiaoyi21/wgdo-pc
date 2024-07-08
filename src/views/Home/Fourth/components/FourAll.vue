<template>
    <div class="item">
        <Headers />
        <div class="content">
            <div class="content-in">
                <Breadcrumb :urlData="urlData" />
                <p class="dynamic">{{$t('four.greendesign')}}</p>
                <div class="dsc-line" style="margin-top: 15px; margin-bottom: 5px;"></div>
                <div v-if="$route.path === '/fourall' ">
                    <div class="dynamic-dsc">
                        <div @click="sedTiaoZhuan(index)" class="dynamic-content" v-for="(dym,index) in moredetDatas"
                            :key="dym.mediacenterId">
                            <div class="dynamic-time">
                                <div class="dynamic-time-top">{{ dym.timer }}</div>
                                <div class="dynamic-time-buttom">{{ dym.year }}</div>
                            </div>
                            <div class="dynamic-blank">
                                <div class="dynamic-blankin"></div>
                            </div>
                            <div class="dynamic-dscall">
                                <div class="dynamic-dscall-top">{{ dym.title }}</div>
                                <div class="dynamic-dscall-buttom" :title="dym.intro">{{ dym.intro }}</div>
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
        name: "FourAll",
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
                urlData
            }
        },
        mounted() {
            console.log(this.$route.path);
            this.getFourthData()
            if (this.$store.state.lang.isEn !== 'en') {
                this.urlData.push(
                    { path: '/', name: '首页' },
                    { path: '/fourall', name: '世界绿色设计园' }
                )
            } else {
                this.urlData.push(
                    { path: '/', name: 'Home' },
                    { path: '/fourall', name: 'World Green Design Park' }
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
            getFourthData(p = this.$store.state.lang.version) {
                getContentList({ "moduleType": "5", "status": "1", version: p }).then(res => {
                    if (res.data && Array.isArray(res.data.rows) && res.data.rows.length > 0) {
                        this.topDatas = res.data.rows[0]
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
                    path: '/fourall/fourallinfo',
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
                    funs(this.getFourthData(), this.$store.state.lang.version)
                    this.urlData = []
                    if (this.$store.state.lang.isEn !== 'en') {
                        this.urlData.push(
                            { path: '/', name: '首页' },
                            { path: '/fourall', name: '世界绿色设计园' }
                        )
                    } else {
                        this.urlData.push(
                            { path: '/', name: 'Home' },
                            { path: '/fourall', name: 'World Green Design Park' }
                        )
                    }
                }
            },
            '$route'() {
                if (this.$route.path === '/fourall' && this.urlData.length >= 2) {
                    this.urlData.pop()
                }
            }
        },
        computed: {
            isShow() {
                return sessionStorage.getItem('isshow');
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
        cursor: pointer;
    }

    .dynamic-content {
        width: 100%;
        height: 120px;
        display: flex;
        border-bottom: 1px solid rgba(161, 161, 161, 1);
        align-items: center;
    }

    .dynamic-time {
        display: flex;
        flex-direction: column;
        justify-content: center;
        width: 12%;
    }

    .dynamic-time-top {
        opacity: 1;
        font-size: 22px;
        font-weight: 400;
        letter-spacing: 1px;
        line-height: 30px;
        color: rgba(165, 214, 63, 1);
        text-align: left;
        vertical-align: top;
    }

    .dynamic-time-buttom {
        opacity: 1;
        font-size: 20px;
        font-weight: 400;
        letter-spacing: 1px;
        line-height: 30px;
        color: rgba(62, 73, 56, 1);
        text-align: left;
        vertical-align: top;
    }

    .dynamic-blank {
        opacity: 1;
        display: flex;
        align-items: center;
    }

    .dynamic-blankin {
        width: 60px;
        opacity: 1;
        transform: rotate(130deg);
        border: 1px solid rgb(202, 202, 202);
    }

    .dynamic-dscall {
        display: flex;
        flex-direction: column;
        justify-content: center;
        width: 153%;
    }

    .dynamic-dscall-top {
        flex-grow: 1;
        opacity: 1;
        height: 25%;
        font-size: 18px;
        font-weight: 600;
        letter-spacing: 1px;
        line-height: 26.52px;
        color: rgba(40, 40, 40, 1);
        text-align: justify;
        display: -webkit-box;
        -webkit-line-clamp: 1;
        -webkit-box-orient: vertical;
        vertical-align: top;
        overflow: hidden;
        text-overflow: ellipsis;
    }

    .dynamic-dscall-buttom {
        flex-grow: 1;
        opacity: 1;
        height: 70%;
        font-size: 16px;
        font-weight: 400;
        letter-spacing: 0px;
        line-height: 23.87px;
        color: rgba(51, 51, 51, 1);
        text-align: justify;
        vertical-align: top;
        overflow: hidden;
        display: -webkit-box;
        -webkit-line-clamp: 3;
        -webkit-box-orient: vertical;
        text-overflow: ellipsis;
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