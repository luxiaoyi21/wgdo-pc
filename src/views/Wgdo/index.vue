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
import newTabControl from "@/views/Wgdo/newTabControl";
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
    components: { Headers, newTabControl, Footers, Intro, Branch, Service, Train, Policy },
    props: ["urlData"],
    data() {
        return {
            tabName: [],
            wgdoDatas: [],
            tabDatas: [],
            // tabclickDatas: '机构简介',
            currentNum: 1,
            name: [],
            gindex: -1,
        };
    },
    mounted() {
        if (this.$store.state.lang.isEn === 'en') {
            this.getTabNameData('150')
        } else {
            this.getTabNameData('8')
        }
        this.getWgdoData()
    },
    methods: {
        //获取TabName
        getTabNameData(v) {
            if (v === '8') {
                getHomeAllTitle({ parentId: 8 }).then(res => {
                    this.tabName = res.data.rows
                });
            } else if (v === '150') {
                getHomeAllTitle({ parentId: 150 }).then(res => {
                    this.tabName = res.data.rows
                    // console.log(this.tabName);
                });
            }
        },
        //获取对应数据
        getWgdoData(i, p = this.$store.state.lang.version) {
            getWgdo({ 'moduleType': i, 'version': p, 'status': '1' }).then(res => {
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
                    this.getTabNameData('150')
                } else {
                    this.getTabNameData('8')
                }
                this.getWgdoData(this.gindex, this.$store.state.lang.version)
            }
        },
        "gindex": {
            handler() {
                this.getWgdoData(this.gindex, this.$store.state.lang.version)
                // console.log(this.currentNum);
            }
        }
    }
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