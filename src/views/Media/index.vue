<template>
    <div class="box">
        <!-- header -->
        <Headers />
        <!-- content -->
        <div class="content">
            <TabControl :tabName="tabName" @getHomeAllTitle="getMediaData" @tabclickDatas="getTabName" />
            <!-- 首页传值 -->
            <!-- <Intro :tabDatas="tabDatas" /> -->
            <Dynamic v-if="tabclickDatas === '组织动态'" :tabDatas="tabDatas" />
            <Dynamicinfo v-if="tabclickDatas === '动态详情'" :tabDatas="tabDatas" />
            <Video v-if="tabclickDatas === '论坛视频'" :tabDatas="tabDatas" />
            <Report v-if="tabclickDatas === '媒体报告'" :tabDatas="tabDatas" />
            <Reportinfo v-if="tabclickDatas === '报告详情'" :tabDatas="tabDatas" />
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
import { getHomeAllTitle } from '@/api/requests.js'
import Dynamic from "@/views/Media/dynamic.vue";
import Dynamicinfo from "@/views/Media/dynamicinfo.vue";
import Video from "@/views/Media/video.vue";
import Report from "@/views/Media/report.vue";
import Reportinfo from "@/views/Media/reportinfo.vue";
import funs from "@/utils/index.js"

export default {
    name: "Media",
    components: { Headers, TabControl, Footers, Dynamic, Video, Report,Dynamicinfo,Reportinfo },
    props: ["urlData"],
    data() {
        return {
            tabName:[
            "组织动态",
            "动态详情",
            "论坛视频",
            "媒体报告",
            "报告详情",
        ],
            MediaDatas:[],
            tabDatas:[],
            tabclickDatas: '组织动态',
            name:[],
        };
    },
    mounted() {
        this.getMediaData('组织动态');
    },
    methods: {
        async getMediaData(p = this.$store.state.lang.version) {
            try {
                // const response = await getHomeAllTitle({ parentId: 4, version: p });
                this.tabDatas = response.data;
                console.log(this.tabDatas);
            } catch {

            }
        },
        getTabName(name) {
            this.tabclickDatas = name;
            console.log(this.tabclickDatas);
        },
    },
    watch: {
        "$store.state.lang.version": {
            handler() {
                funs(this.getMediaData(), this.$store.state.lang.version)
            }
        },
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