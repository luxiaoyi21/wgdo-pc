<template>
    <div class="box">
        <!-- header -->
        <Headers />
        <!-- content -->
        <div class="content">
            <TabControl :tabName="tabName" @getHomeAllTitle="getPrizeData" @tabclickDatas="getTabName" />
            <!-- 首页传值 -->
            <!-- <Intro :tabDatas="tabDatas" /> -->
            <Big v-if="tabclickDatas === '绿色设计国际大奖'" :tabDatas="tabDatas" />
            <Contribute v-if="tabclickDatas === '绿色设计国际贡献奖'" :tabDatas="tabDatas" />
            <Rule v-if="tabclickDatas === '评定规则'" :tabDatas="tabDatas" />
            <Personal v-if="tabclickDatas === '获奖个人'" :tabDatas="tabDatas" />
            <Mechanism v-if="tabclickDatas === '获奖机构'" :tabDatas="tabDatas" />
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
import { Prize } from "@/api/requests.js";
import { getHomeAllTitle } from '@/api/requests.js'
import Big from "@/views/Prize/big.vue";
import Contribute from "@/views/Prize/contribute.vue";
import Rule from "@/views/Prize/rule.vue";
import Personal from "@/views/Prize/personal.vue";
import Mechanism from "@/views/Prize/mechanism.vue";
import funs from "@/utils/index.js"

export default {
    name: "Prize",
    components: { Headers, TabControl, Footers, Big, Contribute, Rule, Personal, Mechanism },
    props: ["urlData"],
    data() {
        return {
            tabName: [],
            PrizeDatas: [],
            tabDatas: [],
            tabclickDatas: '绿色设计国际大奖',
            name: [],
        };
    },
    mounted() {
        this.getPrizeData('绿色设计国际大奖');
        this.getTabNameData()
    },
    methods: {
        getPrizeData() {
            getHomeAllTitle({ parentId: '7' }).then(res => {
                if (res.data && Array.isArray(res.data.rows) && res.data.rows.length > 0) {
                    this.tabDatas = res.data.rows
                }
            })
            getHomeAllTitle({ parentId: '149' }).then(res => {
                if (res.data && Array.isArray(res.data.rows) && res.data.rows.length > 0) {
                    this.tabDatas = res.data.rows
                }
            })
        },
        getTabNameData(p = this.$store.state.lang.version) {
            getHomeAllTitle({ parentId: '7', version: p }).then(res => {
                if (res.data && Array.isArray(res.data.rows) && res.data.rows.length > 0) {
                    let resss = res.data.rows[0].children
                    this.tabName = resss.map(v => v.classifyName);
                }
            })
            getHomeAllTitle({ parentId: '149', version: p }).then(res => {
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