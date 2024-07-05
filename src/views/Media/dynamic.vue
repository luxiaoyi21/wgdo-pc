<template>
    <div class="item">
        <router-view v-if="showChild"></router-view>
        <div class="content" v-if="!showChild">
            <div class="content-in">
                <p class="dynamic">{{ $t('dynamic.dynamics') }}</p>

                <div class="dsc-line" style="margin-top: 15px; margin-bottom: 5px;"></div>
                <div class="dsc-line" style=""></div>

                <div class="dynamic-dsc" v-for="dym in dynamicDatas" :key="dym.mediacenterId">
                    <router-link :to="{ name: 'Dynamicinfo', query: { id: dym.mediacenterId } }" class="dynamic-content"
                        @click.native="handleLinkClick()">
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
                    </router-link>
                </div>

                <Pagination :tabDatas="tabDatas" :pageSize="pageSize" :currentPage="currentPage"
                    :totalItems="totalItems" @currentTabDatas="currentTabDatas" />
            </div>
        </div>
    </div>
</template>

<script>
import { Media } from "@/api/requests.js";
import funs from '@/utils/index.js'
import Pagination from "@/components/Pagination.vue";

export default {
    name: "Dynamic",
    props: ['tabDatas'],
    components: { Pagination },
    data() {
        return {
            dynamicDatas: [],
            // externalLink: this.$route.query.link,
            currentPage: 1,
            totalItems: 0,
            pageSize: 10,
            time: [],
            day: [],
            showChild: false,
        };
    },
    created() {
        // this.getMediaData()
    },
    mounted() {
        this.getMediaData()
    },
    computed: {
        currentTabDatas() {
            const start = (this.currentPage - 1) * this.pageSize;
            const end = start + this.pageSize;
            return this.dynamicDatas.slice(start, end);
        },
        // Route() {
        //     return router.currentRoute.value.fullPath;
        // }
    },
    methods: {
        getMediaData(p = this.$store.state.lang.version) {
            Media({ moduleType: '1', status: '1', version: p }).then(res => {
                if (res.data && Array.isArray(res.data.rows) && res.data.rows.length > 0) {
                    this.dynamicDatas = res.data.rows.map(row => {
                        const timeData = this.gettime(row.releaseTime);
                        return {
                            ...row,
                            year: timeData.year,
                            timer: timeData.timer
                        };
                    });
                    this.totalItems = res.data.rows.length;
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
        handlePageChange(newPage) {
            this.currentPage = newPage;
        },
        handleLinkClick(id) {
            const currentQuery = this.$route.query;
            this.showChild = true;
            if (!currentQuery) {
                this.$router.push({ name: 'Dynamicinfo' });
            } else {
                // alert('已经跳转.');
            }
            // console.log('Navigating to Dynamicinfo with id:', id);
        }
    },
    watch: {
        "$store.state.lang.version": {
            handler() {
                funs(this.getMediaData(), this.$store.state.lang.version)
            }
        },
    },
    // beforeRouteUpdate(to, from, next) {
    //     if (to.query.id !== from.query.id) {
    //         this.getMediaData();
    //     }
    //     next();
    // },
    // beforeRouteEnter(to, from, next) {
    //     next(vm => {
    //         vm.getMediaData();
    //     });
    // },
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
</style>
