<template>
    <div class="box">
        <!-- header -->
        <Headers />
        <!-- content -->
        <div class="content">
            <TabControl :tabName="tabName" @getHomeAllTitle="getProjectData" @tabclickDatas="getTabName" />
            <!-- 首页传值 -->
            <!-- <Intro :tabDatas="tabDatas" /> -->
            <Greenhome v-if="tabclickDatas === '绿叶之家'" :tabDatas="tabDatas" />
            <Publicity v-if="tabclickDatas === '绿丝带'" :tabDatas="tabDatas" />
            <Record v-if="tabclickDatas === '绿丝带物资到货记录'" :tabDatas="tabDatas" />
            <Glory v-if="tabclickDatas === '绿丝带行动捐赠光荣榜'" :tabDatas="tabDatas" />
            <Inventory v-if="tabclickDatas === '可信供方清单'" :tabDatas="tabDatas" />
            <Disseminate v-if="tabclickDatas === '抗疫宣传'" :tabDatas="tabDatas" />
            <Contactform v-if="tabclickDatas === '联系方式'" :tabDatas="tabDatas" />
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
import { Project } from "@/api/requests.js";
import { getHomeAllTitle } from '@/api/requests.js'
import Greenhome from "@/views/Project/greenhome.vue";
import Publicity from "@/views/Project/publicity.vue";
import Record from "@/views/Project/record.vue";
import Glory from "@/views/Project/glory.vue";
import Inventory from "@/views/Project/inventory.vue";
import Disseminate from "@/views/Project/disseminate.vue";
import Contactform from "@/views/Project/contactform.vue";
import funs from "@/utils/index.js"

export default {
    name: "Project",
    components: { Headers, TabControl, Footers, Greenhome, Publicity, Record, Glory, Inventory, Disseminate, Contactform },
    props: ["urlData"],
    data() {
        return {
            tabName: [
                // "绿丝带物资到货记录",
                // "绿丝带行动捐赠光荣榜",
                // "可信供方清单",
                // "抗疫宣传",
                // "联系方式",
            ],
            ProjectDatas: [],
            tabDatas: [],
            tabclickDatas: '绿叶之家',
            name: [],
        };
    },
    mounted() {
        this.getProjectData('绿叶之家');
        this.getTabNameData()
    },
    methods: {
        getProjectData(p = this.$store.state.lang.version) {
            getHomeAllTitle({ parentId: '6', version: p }).then(res => {
                if (res.data && Array.isArray(res.data.rows) && res.data.rows.length > 0) {
                    this.tabDatas = res.data.rows
                }
            })
        },
        getTabNameData(p = this.$store.state.lang.version) {
            getHomeAllTitle({ parentId: '6', version: p }).then(res => {
                if (res.data && Array.isArray(res.data.rows) && res.data.rows.length > 0) {
                    let resss = res.data.rows[0].children
                    this.tabName = resss.map(v => v.classifyName);
                }
            })
            getHomeAllTitle({ parentId: '148', version: p }).then(res => {
                if (res.data && Array.isArray(res.data.rows) && res.data.rows.length > 0) {
                    let resss = res.data.rows[0].children
                    this.tabName = resss.map(v => v.classifyName);
                }
            })
        },
        getTabName(name) {
            this.tabclickDatas = name;
            console.log(this.tabclickDatas);
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