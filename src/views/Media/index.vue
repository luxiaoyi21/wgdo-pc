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
import TabControl from "@/components/TabControl";
// import newTabControl from "@/components/newTabControl";
import newTabControl from "@/views/Media/newTabControl";
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
    components: { Headers, newTabControl, TabControl, Footers, Dynamic, Video, Report, Dynamicinfo, Reportinfo },
    props: ["urlData"],
    data() {
        return {
            MediaDatas: [],
            tabDatas: [],
            // tabclickDatas: '组织动态',
            currentNum: 1,
            name: [],
            tabName: [],
            gindex: -1,
        };
    },
    mounted() {
        this.getTabNameData('组织动态')
        if (this.$store.state.lang.isEn === 'en') {
            this.getTabNameData('146')
        } else {
            this.getTabNameData('4')
        }
        this.getMediaData()
    },
    methods: {
        //获取TabName
        getTabNameData(v) {
            if (v === '4') {
                getHomeAllTitle({ parentId: 4 }).then(res => {
                    this.tabName = res.data.rows
                });
            } else if (v === '146') {
                getHomeAllTitle({ parentId: 146 }).then(res => {
                    this.tabName = res.data.rows
                    // console.log(this.tabName);
                });
            }
        },
        //获取对应数据
        getMediaData(i, p = this.$store.state.lang.version) {
            Media({ 'moduleType': i, 'version': p, 'status': '1' }).then(res => {
                this.tabDatas = res.data.rows
                // this.$emit('tabDatas',this.tabDatas)
                // console.log(this.tabDatas)
            })
        },
        getGindex(i) {
            this.gindex = i
            // console.log(this.gindex)
        },

        // getMediaData() {
        //     Media({ parentId: '4' }).then(res => {
        //         if (res.data && Array.isArray(res.data.rows) && res.data.rows.length > 0) {
        //             this.tabDatas = res.data.rows
        //         }
        //     })
        //     Media({ parentId: '146' }).then(res => {
        //         if (res.data && Array.isArray(res.data.rows) && res.data.rows.length > 0) {
        //             this.tabDatas = res.data.rows
        //         }
        //     })
        // },
        // getTabNameData(p = this.$store.state.lang.version) {
        //     getHomeAllTitle({ parentId: '4', version: p }).then(res => {
        //         if (res.data && Array.isArray(res.data.rows) && res.data.rows.length > 0) {
        //             let resss = res.data.rows[0].children
        //             this.tabName = resss.map(v => v.classifyName);
        //         }
        //     })
        //     getHomeAllTitle({ parentId: '146', version: p }).then(res => {
        //         if (res.data && Array.isArray(res.data.rows) && res.data.rows.length > 0) {
        //             let resss = res.data.rows[0].children
        //             this.tabName = resss.map(v => v.classifyName);
        //         }
        //     })
        // },
        // getTabName(name) {
        //     this.tabclickDatas = name;
        //     // console.log(name);
        // },
    },
    watch: {
        "$store.state.lang.version": {
            handler() {
                funs(this.getTabNameData(), this.$store.state.lang.version)
                if (this.$store.state.lang.isEn === 'en') {
                    this.getTabNameData('146')
                } else {
                    this.getTabNameData('4')
                }
                this.getMediaData(this.gindex, this.$store.state.lang.version)
            }
        },
        "gindex": {
            handler() {
                this.getMediaData(this.gindex, this.$store.state.lang.version)
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