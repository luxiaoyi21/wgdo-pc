<template>
    <div class="box">
        <!-- header -->
        <Headers />
        <!-- content -->
        <div class="content">
            <TabControl :tabName="tabName" @Media="getMediaData" @tabclickDatas="getTabName" />
            <!-- 首页传值 -->
            <!-- <Intro :tabDatas="tabDatas" /> -->
            <Dynamic v-if="tabclickDatas === '组织动态'" :tabDatas="tabDatas" />
            <Video v-if="tabclickDatas === '论坛视频'" :tabDatas="tabDatas" />
            <Report v-if="tabclickDatas === '媒体报告'" :tabDatas="tabDatas" />
        </div>
        <!-- footer -->
        <div class="foot">
            <Footers />
        </div>
    </div>
</template>

<script>
import Headers from "@/components/Headers.vue";
import TabControl from "@/components/TabControl";
import Footers from "@/views/Home/Footer/index.vue";
import { Media } from "@/api/requests.js";
import Dynamic from "@/views/Media/dynamic.vue";
import Video from "@/views/Media/video.vue";
import Report from "@/views/Media/report.vue";

export default {
    name: "Media",
    components: { Headers, TabControl, Footers, Dynamic, Video, Report },
    props: ["urlData"],
    data() {
        let tabName = [
            "组织动态",
            "论坛视频",
            "媒体报告",
        ];
        let MediaDatas = [];
        let tabDatas = [];
        let tabclickDatas = [];
        let name = [];
        return {
            tabName,
            MediaDatas,
            tabDatas,
            tabclickDatas: '组织动态',
            name,
        };
    },
    mounted() {
        this.getMediaData('组织动态');
    },
    methods: {
        getMediaData(data) {
            this.tabDatas = data;
            // console.log(this.tabDatas);
        },
        getTabName(name) {
            this.tabclickDatas = name;
            console.log(this.tabclickDatas);
        },
        // switchPage() {
        //     this.currentPage = this.currentPage === 'intro' ? 'branch' : 'intro';
        // }
    },
};
</script>

<style scoped>
.box {
    margin: 0 auto;
}

.content {
    width: 100%;
    opacity: 1;
    background: rgba(242, 241, 221, 1);
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-content: center;
}

.foot {
    background: rgba(166, 225, 99, 1);
}
</style>