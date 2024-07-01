<template>
    <div class="box">
        <!-- header -->
        <Headers />
        <!-- content -->
        <div class="content">
            <newTabControl :tabName="tabName" :tabDatas="tabDatas" v-if="tabName, tabDatas" @gindex="getGindex" />
        </div>
        <!-- footer -->
        <div class="foot">
            <Footers />
        </div>
    </div>
</template>

<script>
import Headers from "@/components/Headers.vue";
import newTabControl from "@/views/Research/newTabControl";
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
    components: { Headers, newTabControl, Footers, Design, Standard, Laboratory, Resource, Designinfo },
    props: ["urlData"],
    data() {
        return {
            tabName: [],
            ResearchDatas: [],
            tabDatas: [],
            // tabclickDatas: '绿色设计报告',
            currentNum: 1,
            name: [],
            gindex: -1,
        };
    },
    mounted() {
        if (this.$store.state.lang.isEn === 'en') {
            this.getTabNameData('147')
        } else {
            this.getTabNameData('5')
        }
        this.getResearchData()
    },
    methods: {
        //获取TabName
        getTabNameData(v) {
            if (v === '5') {
                getHomeAllTitle({ parentId: 5 }).then(res => {
                    this.tabName = res.data.rows
                });
            } else if (v === '147') {
                getHomeAllTitle({ parentId: 147 }).then(res => {
                    this.tabName = res.data.rows
                    // console.log(this.tabName);
                });
            }
        },
        //获取对应数据
        getResearchData(i, p = this.$store.state.lang.version) {
            Research({ 'moduleType': i, 'version': p, 'status': '1' }).then(res => {
                this.tabDatas = res.data.rows
                // this.$emit('tabDatas',this.tabDatas)
                // console.log(this.tabDatas)
            })
        },
        getGindex(i) {
            this.gindex = i
            // console.log(this.gindex)
        },
    },
    watch: {
        "$store.state.lang.version": {
            handler() {
                funs(this.getTabNameData(), this.$store.state.lang.version)
                if (this.$store.state.lang.isEn === 'en') {
                    this.getTabNameData('147')
                } else {
                    this.getTabNameData('5')
                }
                this.getResearchData(this.gindex, this.$store.state.lang.version)
            }
        },
        "gindex": {
            handler() {
                this.getResearchData(this.gindex, this.$store.state.lang.version)
                // console.log(this.currentNum);
            }
        }
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