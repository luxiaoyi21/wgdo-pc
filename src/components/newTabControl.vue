<template>
    <div class="newtabcontrol">
        <el-tabs class="ets" v-model="activeName" @tab-click="handleClick">
            <el-tab-pane class="etp" v-for="(item, index) in tabName[0]?.children" :label="item.classifyName"
                :name="item.classifyName" :key="index">
                <Breadcrumb :urlData="urlData" />

                <div v-for="i in localtabDatas" :key="i.category" style="font-size: 12px;">{{ i.title }}</div>
                <router-view></router-view>
            </el-tab-pane>
        </el-tabs>
    </div>
</template>

<script>
import { Aboutus, Meet, Media, Research, Project, Prize, getWgdo, getHomeAllTitle } from "@/api/requests.js";
import Breadcrumb from '@/components/Breadcrumb'

export default {
    name: 'newtabcontrol',
    components: { Breadcrumb },
    props: ['tabName','tabDatas'],
    data() {
        return {
            activeName: '',
            localtabDatas: [],
            urlData: [],
            currentNums: [],
        }
    },
    mounted() {
        // console.log(this.tabName)
        this.activeName = this.tabName && this.tabName.length > 0 ? this.tabName[0] : '';

        this.routesData = this.$router.options.routes;
        this.currentRoute = this.$router.history.current;
        this.routesData.forEach(v => {
            if (v.name === this.currentRoute.name) {
                this.urlData.push(v);
            }
        });

        const currentNumsString = sessionStorage.getItem('currentNums');
        if (currentNumsString !== null) {
            const currentNums = JSON.parse(currentNumsString);
            this.currentNums = currentNums;
        }

        this.handleClick({ $options: { propsData: { name: this.activeName } } });
    },
    methods: {
        handleClick(tab) {
            if (this.urlData.length > 1) {
                this.urlData.pop()
            }
            let currentTabName = tab.$options.propsData.name
            this.urlData.push({ name: currentTabName })
            // console.log(this.urlData);

            let gi = Number(tab.index) + 1
            sessionStorage.setItem('currentNums', JSON.stringify(tab.index))
            // const currentNums = sessionStorage.getItem('currentNums') ? JSON.parse(sessionStorage.getItem('currentNums')) : null;
            this.$emit('gindex', tab.index)
            this.getMediaData(gi)
        },
        getMediaData(i, p = this.$store.state.lang.version) {
            Media({ 'moduleType': i, 'version': p, 'status': '1' }).then(res => {
                this.tabDatas = res.data.rows
                // console.log(this.localtabDatas);
            })
        }
    },
    watch: {
        'tabName': {
            handler() {
                const currentNums = JSON.parse(sessionStorage.getItem('currentNums'));
                if (this.tabName && this.tabName[0]?.children) {
                    if (currentNums) {
                        this.activeName = this.tabName[0]?.children[Number(currentNums)].classifyName;
                    } else {
                        this.activeName = this.tabName[0]?.children[0].classifyName;
                    }
                }
                this.getMediaData(currentNums)
            },
            deep: true
        }
    },
    beforeRouteLeave(to, from, next) {
        sessionStorage.removeItem('currentNums')
        next();
    }
}
</script>

<style scoped>
.newtabcontrol {
    width: 100%;
    display: flex;
    flex-direction: row;
}

.ets {
    margin: 0 auto;
    background: rgba(242, 241, 221, 1);
    width: 67%;
}

.etp {
    font-size: 348.33px;
    font-weight: 700;
    letter-spacing: 17.42px;
    line-height: 461.89px;
    /* color: rgba(62, 73, 56, 1); */
    text-align: left;
    vertical-align: top;
    /* background-color: #ffd; */
    height: 550px;
}

/*未选中时字体颜色*/
:deep(.el-tabs__item) {
    height: 60px;
    font-size: 18px;
    font-weight: 400;
    letter-spacing: 1px;
    line-height: 60px;
    color: rgba(150, 150, 150, 1);
    text-align: left;
    vertical-align: top;
}

/*选中时字体颜色*/
:deep(.el-tabs__item.is-active) {
    height: 60px;
    font-size: 18px;
    font-weight: 700;
    letter-spacing: 1px;
    line-height: 60px;
    color: rgba(62, 73, 56, 1);
    text-align: left;
    vertical-align: top;
}

/* 下划线颜色 */
:deep(.el-tabs__active-bar) {
    color: rgba(62, 73, 56, 1);
}

/* 修改底部最长的边颜色 */
:deep(.el-tabs--card>.el-tabs__header) {
    border: 17.42px solid rgba(219, 219, 219, 1);
}

:deep(.el-tabs__header) {
    padding: 0;
    position: relative;
    margin: 0;
}

.wgdo-in {
    display: flex;
    font-size: 18px;
    font-weight: 400;
    letter-spacing: 0px;
    line-height: 23.87px;
    color: rgba(51, 51, 51, 1);
    text-align: justify;
    vertical-align: top;
}
</style>