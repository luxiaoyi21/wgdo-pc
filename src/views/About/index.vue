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
import Aboutintro from "@/views/About/aboutintro.vue";
import Aboutor from "@/views/About/aboutor.vue";
import Person from "@/views/About/person.vue";
import Contact from "@/views/About/contact.vue";

export default {
    name: "Aboutus",
    components: { Headers, TabControl, Footers, Aboutintro, Aboutor, Person, Contact },
    props: ["urlData"],
    data() {
        let tabName = [
            "组织介绍",
            "组织架构",
            "重要人物",
            "联系我们",
        ];
        let AboutDatas = [];
        let tabDatas = [];
        let tabclickDatas = [];
        let name = [];
        return {
            tabName,
            AboutDatas,
            tabDatas,
            tabclickDatas: '组织介绍',
            name,
        };
    },
    mounted() {
        this.getAboutusData('组织介绍');
    },
    methods: {
        getAboutusData(data) {
            this.tabDatas = data;
        },
        getTabName(name) {
            this.tabclickDatas = name;
            console.log(name);
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