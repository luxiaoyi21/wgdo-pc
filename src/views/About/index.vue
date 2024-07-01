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
import newTabControl from "@/views/About/newTabControl";
import Footers from "@/views/Home/Footer/index.vue";
import { Aboutus } from "@/api/requests.js";
import { getHomeAllTitle } from '@/api/requests.js'
import Aboutintro from "@/views/About/aboutintro.vue";
import Aboutor from "@/views/About/aboutor.vue";
import Person from "@/views/About/person.vue";
import Contact from "@/views/About/contact.vue";
import funs, { getTitle } from "@/utils/index.js"

export default {
    name: "Aboutus",
    components: { Headers, newTabControl, Footers, Aboutintro, Aboutor, Person, Contact },
    props: ["urlData"],
    data() {
        return {
            // AboutDatas: [],
            tabDatas: [],
            // tabclickDatas: '组织介绍',
            currentNum: 1,
            name: [],
            tabName: [],
            gindex: -1,
        };
    },
    mounted() {
        this.getTabNameData('组织介绍');
        if (this.$store.state.lang.isEn === 'en') {
            this.getTabNameData('144')
        } else {
            this.getTabNameData('2')
        }
        this.getAboutusData()
    },
    methods: {
        //获取TabName
        getTabNameData(v) {
            if (v === '2') {
                getHomeAllTitle({ parentId: 2 }).then(res => {
                    this.tabName = res.data.rows
                });
            } else if (v === '144') {
                getHomeAllTitle({ parentId: 144 }).then(res => {
                    this.tabName = res.data.rows
                    // console.log(this.tabName);
                });
            }
        },
        //获取对应数据
        getAboutusData(i, p = this.$store.state.lang.version) {
            Aboutus({ 'moduleType': i, 'version': p, 'status': '1' }).then(res => {
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
                    this.getTabNameData('144')
                } else {
                    this.getTabNameData('2')
                }
                this.getAboutusData(this.gindex, this.$store.state.lang.version)
            }
        },
        "gindex": {
            handler() {
                this.getAboutusData(this.gindex, this.$store.state.lang.version)
                // console.log(this.currentNum);
            }
        }
    },
}
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