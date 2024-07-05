<template>
    <div class="tc">
        <el-tabs class="ets" v-model="activeName" @tab-click="handleClick">
            <el-tab-pane class="etp" v-for="(item, index) in tabName[0]?.children" :key="index"
                :label="item.classifyName" :name="item.classifyName">
                <Breadcrumb :urlData="urlData" />
            </el-tab-pane>

            <Preview v-if="currentNum === 1" :tabDatas="localDatas" />
            <!-- <Previewinfo v-if="tabclickDatas === '活动预告详情'" :tabDatas="tabDatas" /> -->
            <Doing v-if="currentNum === 2" :tabDatas="localDatas" />
            <!-- <Doinginfo v-if="tabclickDatas === '正在进行详情'" :tabDatas="tabDatas" /> -->
            <Lookback v-if="currentNum === 3" :tabDatas="localDatas" />
            <!-- <Lookbackinfo v-if="tabclickDatas === '历届回顾详情'" :tabDatas="tabDatas" /> -->
        </el-tabs>
    </div>
</template>

<script>
import { Aboutus, Meet, Media, Research, Project, Prize, getWgdo, getHomeAllTitle } from "@/api/requests.js";
import Breadcrumb from '@/components/Breadcrumb';
import Preview from "@/views/Meet/preview.vue";
import Previewinfo from "@/views/Meet/previewinfo.vue";
import Doing from "@/views/Meet/doing.vue";
import Doinginfo from "@/views/Meet/doinginfo.vue";
import Lookback from "@/views/Meet/lookback.vue";
import Lookbackinfo from "@/views/Meet/lookbackinfo.vue";

export default {
    name: 'Tc',
    components: { Breadcrumb, Preview, Doing, Lookback },
    props: ['tabName', 'tabDatas'],
    data() {
        return {
            activeName: '',
            currentNum: 1,
            localName: [],
            localDatas: [],
            routesData: [],
            currentRoute: [],
            urlData: [],
        }
    },
    mounted() {
        this.getCurrentData()

        setTimeout(() => {
            this.activeName = this.tabName[0]?.children[0]?.classifyName;
            this.handleClick({ $options: { propsData: { name: this.activeName } } });
        }, 500);

        this.routesData = this.$router.options.routes
        this.currentRoute = this.$router.history.current
        this.routesData.forEach(v => {
            if (v.name === this.currentRoute.name) {
                this.urlData.push(v)
            }
        });
    },
    methods: {
        handleClick(tab) {
            this.currentNum = Number(tab.index) + 1
            // console.log(this.currentNum);
            sessionStorage.setItem('currentNums', this.currentNum)

            if (this.urlData.length > 1) {
                this.urlData.pop()
            }
            let currentTabName = tab.$options.propsData.name
            this.urlData.push({ name: currentTabName })
            // this.$forceUpdate()
        },
        getCurrentData() {
            let cn = sessionStorage.getItem('currentNums')
            this.localName = this.tabName
            // console.log(this.tabName);
            this.localDatas = this.tabDatas
            let ln = JSON.parse(sessionStorage.getItem('ln'))
            if (!ln) {
                sessionStorage.setItem('ln', JSON.stringify(this.localName))
                let ln = JSON.parse(sessionStorage.getItem('ln'))
            }
            this.$emit('gindex', this.currentNum);
            if (cn === undefined) {
                this.currentNum = 1
                this.activeName = ln[0].children[0].classifyName
            } else {
                this.currentNum = cn
                ln[0].children.forEach((v, indexs) => {
                    if ((Number(indexs) + 1) == this.currentNum) {
                        this.activeName = v.classifyName
                    }
                })
            }
        },
        getTabNameData(v) {
            if (v === '3') {
                getHomeAllTitle({ parentId: 3 }).then(res => {
                    this.localName = res.data.rows
                    sessionStorage.setItem('ln', JSON.stringify(this.localName))
                })
            } else if (v === '145') {
                getHomeAllTitle({ parentId: 145 }).then(res => {
                    this.localName = res.data.rows
                    sessionStorage.setItem('ln', JSON.stringify(this.localName))
                })
            }
        }
    },
    watch: {
        'currentNum': {
            handler() {
                this.$emit('gindex', this.currentNum)
                let ln = JSON.parse(sessionStorage.getItem('ln'))
                // this.activeName = ln[0].children[(Number(this.currentNum) - 1)].classifyName
                if (ln && ln[0] && ln[0].children && ln[0].children.length > 0) {
                    let currentChild = ln[0].children.find(child => Number(child.index) === Number(this.currentNum));
                    if (currentChild) {
                        this.activeName = currentChild.classifyName;
                    }
                }
            }
        },
        "tabDatas": {
            handler(n) {
                this.localDatas = n
            }
        },
        "$store.state.lang.version": {
            handler() {
                if (this.$store.state.lang.isEn === 'en') {
                    this.getTabNameData('145')
                } else {
                    this.getTabNameData('3')
                }
            }
        }
    },
    beforeRouteLeave(to, from, next) {
        sessionStorage.removeItem('currentNums')
        sessionStorage.removeItem('ln')
        next();
    }
}
</script>

<style scoped>
.tc {
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
}

/*未选中时字体颜色*/
:deep(.el-tabs__item) {
    height: 60px;
    font-size: 16px;
    font-weight: 400;
    letter-spacing: 0.5px;
    line-height: 60px;
    color: rgba(150, 150, 150, 1);
    text-align: left;
    vertical-align: top;
}

/*选中时字体颜色*/
:deep(.el-tabs__item.is-active) {
    height: 60px;
    font-size: 16px;
    font-weight: 700;
    letter-spacing: 0.5px;
    line-height: 60px;
    color: rgba(62, 73, 56, 1);
    text-align: left;
    vertical-align: top;
}

/* 下划线颜色 */
::v-deep .el-tabs__active-bar {
    background-color: rgba(62, 73, 56, 1);
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
</style>