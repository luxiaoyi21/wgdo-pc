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
import newTabControl from "@/views/Prize/newTabControl";
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
    components: { Headers, newTabControl, Footers, Big, Contribute, Rule, Personal, Mechanism },
    props: ["urlData"],
    data() {
        return {
            tabName: [],
            PrizeDatas: [],
            tabDatas: [],
            // tabclickDatas: '绿色设计国际大奖',
            currentNum: 1,
            name: [],
            gindex: -1,
        };
    },
    mounted() {
        if (this.$store.state.lang.isEn === 'en') {
            this.getTabNameData('149')
        } else {
            this.getTabNameData('7')
        }
        this.getPrizeData()
    },
    methods: {
        //获取TabName
        getTabNameData(v) {
            if (v === '7') {
                getHomeAllTitle({ parentId: 7 }).then(res => {
                    this.tabName = res.data.rows
                });
            } else if (v === '149') {
                getHomeAllTitle({ parentId: 149 }).then(res => {
                    this.tabName = res.data.rows
                    // console.log(this.tabName);
                });
            }
        },
        //获取对应数据
        getPrizeData(i, p = this.$store.state.lang.version) {
            Prize({ 'moduleType': i, 'version': p, 'status': '1' }).then(res => {
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
                    this.getTabNameData('149')
                } else {
                    this.getTabNameData('7')
                }
                this.getPrizeData(this.gindex, this.$store.state.lang.version)
            }
        },
        "gindex": {
            handler() {
                this.getPrizeData(this.gindex, this.$store.state.lang.version)
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