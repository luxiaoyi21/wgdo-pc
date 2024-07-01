<template>
    <div class="item">
        <router-view v-if="showChild"></router-view>
        <div class="content" v-if="!showChild">
            <div class="content-in">
                <p class="dynamic">{{ $t('meet.previewact') }}</p>

                <div class="dsc-line" style="margin-top: 15px; margin-bottom: 5px;"></div>
                <div class="dsc-line" style=" "></div>

                <div class="dynamic-dsc">
                    <router-link
                        :to="isSecondLink(index) ? { name: 'Previewinfo', query: { id: preview.conferenceId } } : { path: preview.externalLink }"
                        class="dynamic-content" @click.native="handleLinkClick()"
                        v-for="(preview, index) in previewDatas" :key="preview.conferenceId">
                        <div class="dynamic-img">
                            <img :src="'http://www.wgdo.net' + preview.cover" alt="">
                        </div>
                        <div class="dynamic-dscall">
                            <div class="dscall-top">
                                <div class="dscall-title">{{ preview.title }}</div>
                                <div class="dscall-content" :title="preview.intro">{{ preview.intro }}</div>
                            </div>
                            <div class="dscall-time">{{ preview.releaseTime }}</div>
                        </div>
                    </router-link>

                    <Pagination :tabDatas="tabDatas" :pageSize="pageSize" :currentPage="currentPage"
                        :totalItems="totalItems" @currentTabDatas="currentTabDatas" />
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import { Meet } from "@/api/requests.js";
import { Previewinfo } from "@/views/Meet/previewinfo.vue";
import Pagination from "@/components/Pagination.vue"
import funs from '@/utils/index.js'

export default {
    name: "Preview",
    props: ['tabDatas'],
    components: { Previewinfo, Pagination },
    data() {
        return {
            previewDatas: [...this.tabDatas],
            currentPage: 1,
            totalItems: 0,
            pageSize: 5,
            conferenceId: 0,
            showChild: false,
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
    created() {

    },
    methods: {
        isSecondLink(index) {
            return index % 2 === 0;
        },
        getPreviewData(p = this.$store.state.lang.version) {
            Meet({ moduleType: '1', status: '1', version: p }).then(res => {
                if (res.data && Array.isArray(res.data.rows) && res.data.rows.length > 0) {
                    this.previewDatas = res.data.rows
                    this.totalItems = res.data.rows.length;
                }
            })
        },
        handlePageChange(newPage) {
            this.currentPage = newPage;
        },
        handleLinkClick(id) {
            const currentQuery = this.$route.query;
            this.showChild = true;
            if (!currentQuery) {
                this.$router.push({ name: 'Previewinfo' });
            } else {
                // alert('已经跳转.');
            }
            // console.log('Navigating to Dynamicinfo with id:', id);
        }
    },
    watch: {
        "$store.state.lang.version": {
            handler() {
                funs(this.getPreviewData(), this.$store.state.lang.version)
            }
        },
        immediate: true
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
    width: 100%;
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
</style>
