<template>
    <div class="item">
        <div class="content">
            <div class="content-in">
                <p class="dynamic">活动预告</p>

                <div class="dsc-line" style="margin-top: 15px; margin-bottom: 5px;"></div>
                <div class="dsc-line" style=" "></div>

                <div class="dynamic-dsc">
                    <a :href="preview.externalLink" class="dynamic-content" v-for="preview in previewDatas"
                        :key="preview.conferenceId">
                        <div class="dynamic-img">
                            <img :src="'http://106.3.97.14:9002' + preview.cover" alt="">
                        </div>
                        <div class="dynamic-dscall">
                            <div class="dscall-top">
                                <div class="dscall-title">{{ preview.title }}</div>
                                <div class="dscall-content">{{ preview.intro }}</div>
                            </div>
                            <div class="dscall-time">{{ preview.releaseTime }}</div>
                        </div>
                    </a>
                </div>

                <div class="dynamic-data">
                    <div class="dynamic-data-num">
                        <div class="data-page">第{{ currentPage }}页</div>
                        <div class="data-limit">共{{ totalItems }}条</div>
                    </div>

                    <div class="devide-page">
                        <el-pagination background layout="prev, pager, next" :total="totalItems" :page-size="pageSize"
                            :current-page.sync="currentPage" @current-change="handlePageChange">>
                        </el-pagination>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import { Meet } from "@/api/requests.js";
import { Info } from "@/views/Meet/info.vue";
import funs from '@/utils/index.js'

export default {
    name: "Preview",
    props: ['tabDatas'],
    components: { Info },
    data() {
        return {
            previewDatas: [...this.tabDatas],
            currentPage: 1,
            totalItems: 0,
            pageSize: 10,
        };
    },
    computed: {
        currentTabDatas() {
            const start = (this.currentPage - 1) * this.pageSize;
            const end = start + this.pageSize;
            return this.previewDatas.slice(start, end);
        }
    },
    mounted() {
        this.getPreviewData()
    },
    methods: {
        getPreviewData(p = this.$store.state.lang.version) {
            Meet({ moduleType: '1', status: '1', version: p }).then(res => {
                if (res.data && Array.isArray(res.data.rows) && res.data.rows.length > 0) {
                    this.previewDatas = res.data.rows
                    this.totalItems = res.data.rows.length;
                    console.log(this.previewDatas);
                }
            })
        },
        handlePageChange(newPage) {
            this.currentPage = newPage;
        }
    },
    watch: {
        "$store.state.lang.version": {
            handler() {
                funs(this.getPreviewData(), this.$store.state.lang.version)
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
    background: rgba(204, 204, 204, 1);
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
</style>
