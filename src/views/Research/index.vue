<template>
    <div class="box">
        <!-- header -->
        <Headers />
        <!-- content -->
        <div class="content">
            <TabControl :tabName="tabName" @getHomeAllTitle="getResearchData" @tabclickDatas="getTabName" />
            <!-- 首页传值 -->
            <!-- <Intro :tabDatas="tabDatas" /> -->
            <Design v-if="tabclickDatas === '绿色设计报告'" :tabDatas="tabDatas" />
            <Designinfo v-if="tabclickDatas === '绿色设计报告详情'" :tabDatas="tabDatas" />
            <Standard v-if="tabclickDatas === '绿色设计国际标准'" :tabDatas="tabDatas" />
            <Laboratory v-if="tabclickDatas === '绿色设计国际实验室'" :tabDatas="tabDatas" />
            <Resource v-if="tabclickDatas === '共享资源'" :tabDatas="tabDatas" />
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
import { Research } from "@/api/requests.js";
import { getHomeAllTitle } from '@/api/requests.js'
import Design from "@/views/Research/design.vue";
import Standard from "@/views/Research/standard.vue";
import Laboratory from "@/views/Research/laboratory.vue";
import Resource from "@/views/Research/resource.vue";
import Designinfo from "@/views/Research/designinfo.vue";
import funs from "@/utils/index.js"

export default {
    name: "Research",
    components: { Headers, TabControl, Footers, Design, Standard, Laboratory, Resource, Designinfo },
    props: ["urlData"],
    data() {
        return {
            tabName: [],
            ResearchDatas: [],
            tabDatas: [],
            tabclickDatas: '绿色设计报告',
            name: [],
        };
    },
    mounted() {
        this.getResearchData('绿色设计报告');
        this.getTabNameData()
    },
    methods: {
        getResearchData() {
            getHomeAllTitle({ parentId: '5' }).then(res => {
                if (res.data && Array.isArray(res.data.rows) && res.data.rows.length > 0) {
                    this.tabDatas = res.data.rows
                }
            })
            getHomeAllTitle({ parentId: '147' }).then(res => {
                if (res.data && Array.isArray(res.data.rows) && res.data.rows.length > 0) {
                    this.tabDatas = res.data.rows
                }
            })
        },
        getTabNameData(p = this.$store.state.lang.version) {
            getHomeAllTitle({ parentId: '5', version: p }).then(res => {
                if (res.data && Array.isArray(res.data.rows) && res.data.rows.length > 0) {
                    let resss = res.data.rows[0].children
                    this.tabName = resss.map(v => v.classifyName);
                }
            })
            getHomeAllTitle({ parentId: '147', version: p }).then(res => {
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