<template>
    <div class="box">
        <!-- header -->
        <Headers />
        <!-- content -->
        <div class="content">
            <TabControl :tabName="tabName" @getHomeAllTitle="getWgdoData" @tabclickDatas="getTabName" />
            <!-- 首页传值 -->
            <Intro v-if="tabclickDatas === '机构简介'" :tabDatas="tabDatas" />
            <Branch v-if="tabclickDatas === '分支扩建'" :tabDatas="tabDatas" />
            <Service v-if="tabclickDatas === '品牌服务'" :tabDatas="tabDatas" />
            <Train v-if="tabclickDatas === '绿色设计培训'" :tabDatas="tabDatas" />
            <Policy v-if="tabclickDatas === '绿色政策'" :tabDatas="tabDatas" />
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
import { getWgdo } from "@/api/requests.js";
import { getHomeAllTitle } from '@/api/requests.js'
import Intro from "@/views/Wgdo/intro.vue";
import Branch from '@/views/Wgdo/branch.vue'
import Service from '@/views/Wgdo/service.vue'
import Train from '@/views/Wgdo/train.vue'
import Policy from '@/views/Wgdo/policy.vue'
import funs from "@/utils/index.js"

export default {
    name: "Wgdo",
    components: { Headers, TabControl, Footers, Intro, Branch, Service, Train, Policy },
    props: ["urlData"],
    data() {
        return {
            tabName: [],
            wgdoDatas: [],
            tabDatas: [],
            tabclickDatas: '机构简介',
            name: [],
        };
    },
    mounted() {
    },
    created() {
        this.getWgdoData('机构简介');
        this.getTabNameData()
    },
    methods: {
        getWgdoData() {
            getHomeAllTitle({ parentId: '8' }).then(res => {
                if (res.data && Array.isArray(res.data.rows) && res.data.rows.length > 0) {
                    this.tabDatas = res.data.rows
                }
            })
            getHomeAllTitle({ parentId: '150' }).then(res => {
                if (res.data && Array.isArray(res.data.rows) && res.data.rows.length > 0) {
                    this.tabDatas = res.data.rows
                }
            })
        },
        getTabNameData(p = this.$store.state.lang.version) {
            getHomeAllTitle({ parentId: '8', version: p }).then(res => {
                if (res.data && Array.isArray(res.data.rows) && res.data.rows.length > 0) {
                    let resss = res.data.rows[0].children
                    this.tabName = resss.map(v => v.classifyName);
                }
            })
            getHomeAllTitle({ parentId: '150', version: p }).then(res => {
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