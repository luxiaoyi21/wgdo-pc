<template>
    <div class="item">
        <router-view v-if="showChild"></router-view>
        <div class="content" v-if="!showChild">
            <div class="content-in">
                <p class="dynamic">{{ $t('meet.lookback') }}</p>

                <div class="dsc-line" style="margin-top: 10px; margin-bottom: 5px;"></div>
                <div class="dsc-line" style="margin-bottom: 15px;"></div>

                <div class="dynamic-dsc">
                    <router-link
                        :to="isSecondLink(index) ? { name: 'Lookbackinfo', query: { id: back.conferenceId } } : { path: back.externalLink }"
                        class="doing-in" @click.native="handleLinkClick()" v-for="(back, index) in lookbackDatas" :key="back.conferenceId">
                        <div class="doing-img">
                            <img :src="'http://www.wgdo.net' + back.cover" alt="">
                        </div>

                        <p class="doing-intro">{{ back.title }}</p>
                    </router-link>
                </div>

                <Pagination :tabDatas="tabDatas" :pageSize="pageSize" :currentPage="currentPage"
                    :totalItems="totalItems" @currentTabDatas="currentTabDatas" />
            </div>
        </div>
    </div>
</template>

<script>
import { Meet } from "@/api/requests.js";
import funs from '@/utils/index.js'
import Pagination from "@/components/Pagination.vue";

export default {
    name: "Lookback",
    props: ['tabDatas'],
    components: { Pagination },
    data() {
        return {
            lookbackDatas: [],
            currentPage: 1,
            totalItems: 0,
            pageSize: 9,
            showChild: false,
        };
    },
    computed: {
        currentTabDatas() {
            const start = (this.currentPage - 1) * this.pageSize;
            const end = start + this.pageSize;
            return this.lookbackDatas.slice(start, end);
        }
    },
    mounted() {
        this.getLookbackData()
    },
    methods: {
        isSecondLink(index) {
            return index % 2 === 0;
        },
        getLookbackData(p = this.$store.state.lang.version) {
            Meet({ moduleType: '3', status: '1', version: p }).then(res => {
                if (res.data && Array.isArray(res.data.rows) && res.data.rows.length > 0) {
                    this.lookbackDatas = res.data.rows
                    this.totalItems = res.data.rows.length;
                }
            })
        },
        handlePageChange(newPage) {
            this.c,urrentPage = newPage;
        },
        handleLinkClick(id) {
            const currentQuery = this.$route.query;
            this.showChild = true;
            if (!currentQuery) {
                this.$router.push({ name: 'Lookbackinfo' });
            } else {
                // alert('已经跳转.');
            }
            // console.log('Navigating to Dynamicinfo with id:', id);
        }
    },
    watch: {
        "$store.state.lang.version": {
            handler() {
                funs(this.getLookbackData(), this.$store.state.lang.version)
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
    margin-top: 7px;
}

.dsc-line {
    width: 100%;
    opacity: 0.3;
    border: 1px solid rgba(161, 161, 161, 1);
}

.dynamic-dsc {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(calc(33.33% - 20px), 1fr));
    grid-gap: 20px;
    margin-bottom: 20px;
}

.doing-in {
    width: 100%;
}

.doing-img {
    width: 100%;
    height: 200px;
    opacity: 1;
}

.doing-img img {
    width: 100%;
    height: 200px;
    opacity: 1;
}

.doing-intro {
    opacity: 1;
    font-size: 18px;
    font-weight: 400;
    letter-spacing: 0px;
    line-height: 23.87px;
    color: rgba(0, 0, 0, 1);
    text-align: center;
    vertical-align: top;
}

.dynamic-data {
    width: 100%;
    height: 80px;
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