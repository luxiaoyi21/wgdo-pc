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
            <Dynamicinfo v-if="tabclickDatas === '动态详情'" :tabDatas="tabDatas" />
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
    components: { Headers, TabControl, Footers, Dynamic, Video, Report, Dynamicinfo, Reportinfo },
    props: ["urlData"],
    data() {
        return {
            tabName: [],
            MediaDatas: [],
            tabDatas: [],
            tabclickDatas: '组织动态',
            name: [],
        };
    },
    mounted() {
        this.getMediaData('组织动态');
        this.getTabNameData()
    },
    methods: {
        getMediaData() {
            Media({ parentId: '4' }).then(res => {
                if (res.data && Array.isArray(res.data.rows) && res.data.rows.length > 0) {
                    this.tabDatas = res.data.rows
                }
            })
            Media({ parentId: '146' }).then(res => {
                if (res.data && Array.isArray(res.data.rows) && res.data.rows.length > 0) {
                    this.tabDatas = res.data.rows
                }
            })
        },
        getTabNameData(p = this.$store.state.lang.version) {
            getHomeAllTitle({ parentId: '4', version: p }).then(res => {
                if (res.data && Array.isArray(res.data.rows) && res.data.rows.length > 0) {
                    let resss = res.data.rows[0].children
                    this.tabName = resss.map(v => v.classifyName);
                }
            })
            getHomeAllTitle({ parentId: '146', version: p }).then(res => {
                if (res.data && Array.isArray(res.data.rows) && res.data.rows.length > 0) {
                    let resss = res.data.rows[0].children
                    this.tabName = resss.map(v => v.classifyName);
                }
            })
        },
        getTabName(name) {
            this.tabclickDatas = name;
            // console.log(name);
        },
    },
    watch: {
        "$store.state.lang.version": {
            handler() {
                funs(this.getTabNameData(), this.$store.state.lang.version)
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