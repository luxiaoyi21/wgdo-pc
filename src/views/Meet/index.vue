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
            <Previewinfo v-if="tabclickDatas === '活动预告详情'" :tabDatas="tabDatas" />
            <Doing v-if="tabclickDatas === '正在进行'" :tabDatas="tabDatas" />
            <Doinginfo v-if="tabclickDatas === '正在进行详情'" :tabDatas="tabDatas" />
            <Lookback v-if="tabclickDatas === '历届回顾'" :tabDatas="tabDatas" />
            <Lookbackinfo v-if="tabclickDatas === '历届回顾详情'" :tabDatas="tabDatas" />
            <!-- <router-view></router-view> -->
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
import Previewinfo from "@/views/Meet/previewinfo.vue";
import Doing from "@/views/Meet/doing.vue";
import Doinginfo from "@/views/Meet/doinginfo.vue";
import Lookback from "@/views/Meet/lookback.vue";
import Lookbackinfo from "@/views/Meet/lookbackinfo.vue";
import funs from "@/utils/index.js"

export default {
    // onLoad(){
    //     this.getMeetData('活动预告');
    //     this.getTabNameData()
    // },
    name: "Meet",
    components: { Headers, TabControl, Footers, Preview, Previewinfo, Doing, Doinginfo, Lookback, Lookbackinfo },
    props: ["urlData"],
    data() {
        return {
            tabName: [],
            MeetDatas: [],
            tabDatas: [],
            tabclickDatas: '活动预告',
            name: [],
        };
    },
    created() {
        // this.getMeetData('活动预告');
        // this.getTabNameData()
    },
    mounted() {
        this.getMeetData('活动预告');
        this.getTabNameData()
    },
    methods: {
        getMeetData(p = this.$store.state.lang.version) {
            Meet({ parentId: '3' }).then(res => {
                if (res.data && Array.isArray(res.data.rows) && res.data.rows.length > 0) {
                    this.tabDatas = res.data.rows
                }
            })
            Meet({ parentId: '145' }).then(res => {
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
            getHomeAllTitle({ parentId: '145', version: p }).then(res => {
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