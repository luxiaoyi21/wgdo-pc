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
import newTabControl from "@/views/Meet/newTabControl";
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
    name: "Meet",
    components: { Headers, newTabControl, Footers, Preview, Previewinfo, Doing, Doinginfo, Lookback, Lookbackinfo },
    props: ["urlData"],
    data() {
        return {
            tabName: [],
            MeetDatas: [],
            tabDatas: [],
            // tabclickDatas: '活动预告',
            currentNum: 1,
            name: [],
            gindex: -1,
        };
    },
    created() {
        // this.getMeetData('活动预告');
        // this.getTabNameData()
    },
    mounted() {
        if (this.$store.state.lang.isEn === 'en') {
            this.getTabNameData('145')
        } else {
            this.getTabNameData('3')
        }
        this.getMeetData()
    },
    methods: {
        //获取TabName
        getTabNameData(v) {
            if (v === '3') {
                getHomeAllTitle({ parentId: 3 }).then(res => {
                    this.tabName = res.data.rows
                });
            } else if (v === '145') {
                getHomeAllTitle({ parentId: 145 }).then(res => {
                    this.tabName = res.data.rows
                    // console.log(this.tabName);
                });
            }
        },
        //获取对应数据
        getMeetData(i, p = this.$store.state.lang.version) {
            Meet({ 'moduleType': i, 'version': p, 'status': '1' }).then(res => {
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
                    this.getTabNameData('145')
                } else {
                    this.getTabNameData('3')
                }
                this.getMeetData(this.gindex, this.$store.state.lang.version)
            }
        },
        "gindex": {
            handler() {
                this.getMeetData(this.gindex, this.$store.state.lang.version)
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