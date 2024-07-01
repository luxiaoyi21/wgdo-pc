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
import newTabControl from "@/views/Project/newTabControl";
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
    components: { Headers, newTabControl, Footers, Greenhome, Publicity, Record, Glory, Inventory, Disseminate, Contactform },
    props: ["urlData"],
    data() {
        return {
            tabName: [],
            ProjectDatas: [],
            tabDatas: [],
            // tabclickDatas: '绿叶之家',
            currentNum: 1,
            name: [],
            gindex: -1,
        };
    },
    mounted() {
        if (this.$store.state.lang.isEn === 'en') {
            this.getTabNameData('148')
        } else {
            this.getTabNameData('6')
        }
        this.getProjectData()
    },
    methods: {
        //获取TabName
        getTabNameData(v) {
            if (v === '6') {
                getHomeAllTitle({ parentId: 6 }).then(res => {
                    this.tabName = res.data.rows
                });
            } else if (v === '148') {
                getHomeAllTitle({ parentId: 148 }).then(res => {
                    this.tabName = res.data.rows
                    // console.log(this.tabName);
                });
            }
        },
        //获取对应数据
        getProjectData(i, p = this.$store.state.lang.version) {
            Project({ 'moduleType': i, 'version': p, 'status': '1' }).then(res => {
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
                    this.getTabNameData('148')
                } else {
                    this.getTabNameData('6')
                }
                this.getProjectData(this.gindex, this.$store.state.lang.version)
            }
        },
        "gindex": {
            handler() {
                this.getProjectData(this.gindex, this.$store.state.lang.version)
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