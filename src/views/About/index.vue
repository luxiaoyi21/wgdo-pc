<template>
    <div class="box">
        <!-- header -->
        <Headers />
        <!-- content -->
        <div class="content">
            <TabControl :tabName="tabName" @Aboutus="getAboutusData" @tabclickDatas="getTabName" />
            <!-- 首页传值 -->
            <Aboutintro v-if="tabclickDatas === '组织介绍'" :tabDatas="tabDatas" />
            <Aboutor v-if="tabclickDatas === '组织架构'" :tabDatas="tabDatas" />
            <Person v-if="tabclickDatas === '重要人物'" :tabDatas="tabDatas" />
            <Contact v-if="tabclickDatas === '联系我们'" :tabDatas="tabDatas" />
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
import { Aboutus } from "@/api/requests.js";
import { getHomeAllTitle } from '@/api/requests.js'
import Aboutintro from "@/views/About/aboutintro.vue";
import Aboutor from "@/views/About/aboutor.vue";
import Person from "@/views/About/person.vue";
import Contact from "@/views/About/contact.vue";
import funs, { getTitle } from "@/utils/index.js"

export default {
    name: "Aboutus",
    components: { Headers, TabControl, Footers, Aboutintro, Aboutor, Person, Contact },
    props: ["urlData"],
    data() {
        return {
            tabName: [],
            // AboutDatas: [],
            tabDatas: [],
            tabclickDatas: '组织介绍',
        };
    },
    mounted() {
        this.getAboutusData('组织介绍');
        this.getTabNameData()
        if (this.$store.state.lang.isEn === 'en') {
            this.getAboutusData('144')
        } else {
            this.getAboutusData('2')
        }
    },
    methods: {
        getAboutusData(par) {
            // Aboutus({ parentId: par }).then(res => {
            //     if (res.data && Array.isArray(res.data.rows) && res.data.rows.length > 0) {
            //         this.tabDatas = res.data.rows
            //     }
            // })
            Aboutus({ parentId: '2' }).then(res => {
                if (res.data && Array.isArray(res.data.rows) && res.data.rows.length > 0) {
                    this.tabDatas = res.data.rows
                }
            })
            Aboutus({ parentId: '144' }).then(res => {
                if (res.data && Array.isArray(res.data.rows) && res.data.rows.length > 0) {
                    this.tabDatas = res.data.rows
                }
            })
        },
        getTabNameData(p = this.$store.state.lang.version) {
            getHomeAllTitle({ parentId: '2', version: p }).then(res => {
                if (res.data && Array.isArray(res.data.rows) && res.data.rows.length > 0) {
                    let resss = res.data.rows[0].children
                    this.tabName = resss.map(v => v.classifyName);
                }
            })
            getHomeAllTitle({ parentId: '144', version: p }).then(res => {
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
                funs(this.getAboutusData(), this.$store.state.lang.version)
                funs(this.getTabNameData(), this.$store.state.lang.version)
            }
        },
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