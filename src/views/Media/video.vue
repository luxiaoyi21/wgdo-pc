<template>
    <div class="item">
        <div class="content">
            <div class="content-in">
                <p class="dynamic">{{ $t('dynamic.video') }}</p>

                <div class="dsc-line" style="margin-top: 10px; margin-bottom: 5px;"></div>
                <div class="dsc-line" style="margin-bottom: 15px;"></div>

                <div class="dynamic-dsc">
                    <div class="doing-in" v-for="video in videoDatas" :key="video.mediacenterId">
                        <div class="doing-img">
                            <img :src="'http://www.wgdo.net' + video.cover" alt="">
                            <!-- <video controls :src="'http://www.wgdo.net' + video.videoUrl" alt=""></video> -->
                        </div>

                        <p class="doing-intro">{{ video.title }}</p>
                    </div>
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
    name: "Video",
    props: ['tabDatas'],
    components: { Pagination },
    data() {
        return {
            videoDatas: [],
            currentPage: 1,
            totalItems: 0,
            pageSize: 9,
        };
    },
    computed: {
        currentTabDatas() {
            const start = (this.currentPage - 1) * this.pageSize;
            const end = start + this.pageSize;
            return this.videoDatas.slice(start, end);
        }
    },
    mounted() {
        this.getVideoData()
    },
    methods: {
        getVideoData(p = this.$store.state.lang.version) {
            Media({ moduleType: '2', status: '1', version: p }).then(res => {
                if (res.data && Array.isArray(res.data.rows) && res.data.rows.length > 0) {
                    this.videoDatas = res.data.rows
                    this.totalItems = res.data.rows.length;
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
                funs(this.getVideoData(), this.$store.state.lang.version)
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
    left: 18784px;
    top: -2871px;
    width: 100%;
    opacity: 1;
    background: rgba(255, 255, 255, 1);
    display: flex;
    flex-direction: column;
}

.content {
    left: 0px;
    top: 480px;
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
    margin-bottom: 30px;
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
    background-size: cover;
    background-position: center;
    object-fit: cover;
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
    margin-top: 10px;
    overflow: hidden;
    display: -webkit-box;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
    text-overflow: ellipsis;
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