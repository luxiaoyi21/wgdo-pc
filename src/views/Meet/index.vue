<template>
    <div class="box">
        <!-- header -->
        <Headers />
        <!-- content -->
        <div class="content">
            <TabControl :tabName="tabName" @getHomeAllTitle="getMeetData" @tabclickDatas="getTabName" />
            <!-- 首页传值 -->
            <!-- <Intro :tabDatas="tabDatas" /> -->
            <Preview v-if="tabclickDatas === '活动预告'" :tabDatas="tabDatas" />
            <Info v-if="tabclickDatas === '活动详情'" :tabDatas="tabDatas" />
            <Doing v-if="tabclickDatas === '正在进行'" :tabDatas="tabDatas" />
            <Lookback v-if="tabclickDatas === '历届回顾'" :tabDatas="tabDatas" />
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
import { Meet } from "@/api/requests.js";
import { getHomeAllTitle } from '@/api/requests.js'
import Preview from "@/views/Meet/preview.vue";
import Info from "@/views/Meet/info.vue";
import Doing from "@/views/Meet/doing.vue";
import Lookback from "@/views/Meet/lookback.vue";
import funs from "@/utils/index.js"

export default {
    name: "Meet",
    components: { Headers, TabControl, Footers, Preview, Info, Doing, Lookback },
    props: ["urlData"],
    data() {
        return {
            tabName: [
                // "活动详情"
            ],
            MeetDatas: [],
            tabDatas: [],
            tabclickDatas: '活动预告',
            name: [],
        };
    },
    mounted() {
        this.getMeetData('活动预告');
        this.getTabNameData()
    },
    methods: {
        getMeetData(p = this.$store.state.lang.version) {
            getHomeAllTitle({ parentId: '3', version: p }).then(res => {
                if (res.data && Array.isArray(res.data.rows) && res.data.rows.length > 0) {
                    this.tabDatas = res.data.rows
                }
            })
        },
        getTabNameData(p = this.$store.state.lang.version) {
            getHomeAllTitle({ parentId: '3', version: p }).then(res => {
                if (res.data && Array.isArray(res.data.rows) && res.data.rows.length > 0) {
                    let resss = res.data.rows[0].children
                    this.tabName = resss.map(v => v.classifyName);
                }
            })
        },
        getTabName(name) {
            this.tabclickDatas = name;
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