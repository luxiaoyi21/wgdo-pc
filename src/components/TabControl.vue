<template>
    <div class="box">
        <el-tabs class="ets" v-model="activeName" @tab-click="handleClick">
            <el-tab-pane v-for="(item, index) in tabName" class="etp" :label="item" :name="item" :key="index">
                <Breadcrumb :urlData="urlData" />
                <!-- <div class="wgdo-in" v-for="tab in tabDatas" :key="tab.hpId">
                        {{ tab.label }}
                    </div> -->
            </el-tab-pane>
        </el-tabs>
    </div>
</template>

<script>
import Breadcrumb from '@/components/Breadcrumb'
import { Aboutus, Meet, Media, Research, Project, Prize, getWgdo, getHomeAllTitle } from "@/api/requests.js";
import funs from '@/utils/index.js'

export default {
    components: { Breadcrumb },
    props: ['tabName'],
    data() {
        return {
            activeName: '',
            tabDatas: [],
            routesData: [],
            currentRoute: [],
            urlData: [],
            aboutmap: {
                '组织介绍': '1',
                '组织架构': "2",
                '重要人物': '3',
                '联系我们': '4',
            },
            meetmap: {
                '活动预告': '1',
                '正在进行': "2",
                '历届回顾': '3',
                // '活动详情': '4',
            },
            mediamap: {
                '组织动态': '1',
                '论坛视频': "2",
                '媒体报道': '3',
                '动态详情': '4',
                '报告详情': '5',
            },
            researchmap: {
                '绿色设计报告': '1',
                '绿色设计国际标准': '2',
                '绿色设计国际实验室': '3',
                '共享资源': '4',
                '绿色设计报告详情': '5',
            },
            projectmap: {
                '绿叶之家': '1',
                '绿丝带': "2",
                '绿丝带物资到货记录': "3",
                '绿丝带行动捐赠光荣榜': "5",
                '可信供方清单': "4",
                '抗疫宣传': "7",
                "联系方式": "6"
            },
            prizemap: {
                '绿色设计国际大奖': '1',
                '绿色设计国际贡献大奖': "3",
                '评定规则': "2",
                '获奖个人': "6",
                '获奖机构': "5",
            },
            Mapping: {
                '机构简介': '1',
                '分支扩建': '2',
                '品牌服务': '3',
                '绿色政策': '5',
                '绿色设计培训': '4',
            },
            Map: {
                ...this.aboutmap,
                ...this.meetmap,
                ...this.mediamap,
                ...this.researchmap,
                ...this.projectmap,
                ...this.prizemap,
                ...this.Mapping,
            },
        }
    },
    mounted() {
        this.activeName = this.tabName[0];

        this.routesData = this.$router.options.routes
        this.currentRoute = this.$router.history.current
        this.routesData.forEach(v => {
            if (v.name === this.currentRoute.name) {
                this.urlData.push(v)
            }
        });

        this.handleClick({ $options: { propsData: { name: this.activeName } } });
    },
    methods: {
        // 点击选项卡
        handleClick(tab, event) {
            // sessionStorage.setItem(this.activeName);

            if (this.urlData.length > 1) {
                this.urlData.pop()
            }
            let currentTabName = tab.$options.propsData.name
            this.urlData.push({ name: currentTabName })
            //在这里发请求 你点哪一个就发哪一个请求
            if (this.Map[currentTabName]) {
                this.getHomeAllTitleData(this.Map[currentTabName]);
                this.$emit('tabclickDatas', currentTabName);
            } else if (this.aboutmap[currentTabName]) {
                this.getAboutusData(this.aboutmap[currentTabName]);
                this.$emit('tabclickDatas', currentTabName);
            } else if (this.meetmap[currentTabName]) {
                this.getMeetData(this.meetmap[currentTabName]);
                this.$emit('tabclickDatas', currentTabName);
            } else if (this.mediamap[currentTabName]) {
                this.getMediaData(this.mediamap[currentTabName]);
                this.$emit('tabclickDatas', currentTabName);
            } else if (this.researchmap[currentTabName]) {
                this.getResearchData(this.researchmap[currentTabName]);
                this.$emit('tabclickDatas', currentTabName);
            } else if (this.projectmap[currentTabName]) {
                this.getProjectData(this.projectmap[currentTabName]);
                this.$emit('tabclickDatas', currentTabName);
            } else if (this.prizemap[currentTabName]) {
                this.getPrizeData(this.prizemap[currentTabName]);
                this.$emit('tabclickDatas', currentTabName);
            } else if (this.Mapping[currentTabName]) {
                this.getWgdoData(this.Mapping[currentTabName]);
                this.$emit('tabclickDatas', currentTabName);
            }
        },
        getAboutusData(p) {
            Aboutus({ moduleType: p, status: '1' }).then(res => {
                this.tabDatas = res.data.rows
                this.$emit('Aboutus', this.tabDatas)
            })
        },
        getMeetData(p) {
            Meet({ moduleType: p, status: '1' }).then(res => {
                this.tabDatas = res.data.rows
                this.$emit('Meet', this.tabDatas)
            })
        },
        getMediaData(p) {
            Media({ moduleType: p, status: '1' }).then(res => {
                this.tabDatas = res.data.rows
                this.$emit('Media', this.tabDatas)
            })
        },
        getResearchData(p) {
            Research({ moduleType: p, status: '1' }).then(res => {
                this.tabDatas = res.data.rows
                this.$emit('Research', this.tabDatas)
            })
        },
        getProjectData(p) {
            Project({ moduleType: p, status: '1' }).then(res => {
                this.tabDatas = res.data.rows
                this.$emit('Project', this.tabDatas)
            })
        },
        getPrizeData(p) {
            Prize({ moduleType: p, status: '1' }).then(res => {
                this.tabDatas = res.data.rows
                this.$emit('Prize', this.tabDatas)
            })
        },
        getWgdoData(p) {
            getWgdo({ moduleType: p, status: '1' }).then(res => {
                this.tabDatas = res.data.rows
                this.$emit('WgdoData', this.tabDatas)
            })
        },
        getHomeAllTitleData(p) {
            getHomeAllTitle({ parentId: p }).then(res => {
                this.tabDatas = res.data.rows
                this.$emit('getHomeAllTitle', this.tabDatas)
            })
        },
        // updateUrlData(newUrlData) {
        //     this.urlData = newUrlData;
        // }
    },
    watch: {
        tabName(newVal) {
            if (newVal && newVal.length > 0) {
                this.activeName = newVal[0];
                this.handleClick({ $options: { propsData: { name: this.activeName } } });
            }
        }
    },
}
</script>

<style scoped>
.box {
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