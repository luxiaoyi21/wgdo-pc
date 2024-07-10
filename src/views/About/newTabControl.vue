<template>
    <div class="tc">
        <el-tabs class="ets" v-model="activeName" @tab-click="handleClick">
            <el-tab-pane class="etp" v-for="(item, index) in tabName[0]?.children" :key="index"
                :label="item.classifyName" :name="item.classifyName">
                <Breadcrumb :urlData="urlData" />
            </el-tab-pane>

            <Aboutintro v-if="currentNum === 1" :tabDatas="localDatas" />
            <Aboutor v-if="currentNum === 2" :tabDatas="localDatas" />
            <Person v-if="currentNum === 3" :tabDatas="localDatas" />
            <Contact v-if="currentNum === 4" :tabDatas="localDatas" />
        </el-tabs>
    </div>
</template>

<script>
import { Aboutus, Meet, Media, Research, Project, Prize, getWgdo, getHomeAllTitle } from "@/api/requests.js";
import Breadcrumb from '@/components/Breadcrumb';
import Aboutintro from "@/views/About/aboutintro.vue";
import Aboutor from "@/views/About/aboutor.vue";
import Person from "@/views/About/person.vue";
import Contact from "@/views/About/contact.vue";

export default {
    name: 'Tc',
    components: { Breadcrumb, Aboutintro, Aboutor, Person, Contact },
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
    created() {
        this.activeName = this.tabName[0]?.children[0]?.classifyName;
        this.$nextTick(() => {
            this.currentNum = 1;
            this.handleClick({ $options: { propsData: { name: this.activeName } } });
        });
    },
    // beforeMount() {
    //     this.currentNum = 1;
    //     this.getCurrentData(1);
    //     console.log(this.currentNum);
    // },
    mounted() {
        this.getCurrentData()

        setTimeout(() => {
            this.activeName = this.tabName[0]?.children[0]?.classifyName;
            this.handleClick({ $options: { propsData: { name: this.activeName } } });

            this.$nextTick(() => {
                this.$forceUpdate()
            });
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
            const index = parseInt(tab.index);
            if (!isNaN(index)) {
                this.currentNum = index + 1;
                // this.currentNum = Number(tab.index) + 1
                sessionStorage.setItem('currentNums', this.currentNum)

                if (this.urlData.length > 1) {
                    this.urlData.pop()
                }
                let currentTabName = tab.$options.propsData.name
                this.urlData.push({ name: currentTabName })
            }
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
            if (v === '2') {
                getHomeAllTitle({ parentId: 2 }).then(res => {
                    this.localName = res.data.rows
                    sessionStorage.setItem('ln', JSON.stringify(this.localName))
                })
            } else if (v === '144') {
                getHomeAllTitle({ parentId: 144 }).then(res => {
                    this.localName = res.data.rows
                    sessionStorage.setItem('ln', JSON.stringify(this.localName))
                })
            }
        },
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
                    this.getTabNameData('144')
                } else {
                    this.getTabNameData('2')
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
    height: 50px;
    font-size: 16px;
    font-weight: 400;
    letter-spacing: 0.5px;
    line-height: 50px;
    color: rgba(150, 150, 150, 1);
    text-align: left;
    vertical-align: top;
}

/*选中时字体颜色*/
:deep(.el-tabs__item.is-active) {
    height: 50px;
    font-size: 16px;
    font-weight: 700;
    letter-spacing: 0.5px;
    line-height: 50px;
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