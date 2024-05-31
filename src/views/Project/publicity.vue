<template>
    <div class="item">
        <div class="content">
            <div class="big-leader">
                <a href="" style="display: flex; align-items: center;justify-content: space-between;width:80%">
                    <span>{{ $t('project.require') }}</span>
                    <i class="el-icon-arrow-right"></i>
                </a>

                <a href="/project/inventory"
                    style="display: flex; align-items: center;justify-content: space-between;width:80%">
                    <span>{{ $t('project.inventory') }}</span>
                    <i class="el-icon-arrow-right"></i>
                </a>

                <a href="/project/publicity"
                    style="display: flex; align-items: center;justify-content: space-between;width:80%">
                    <span>{{ $t('project.publicity') }}</span>
                    <i class="el-icon-arrow-right"></i>
                </a>

                <a href="" style="display: flex; align-items: center;justify-content: space-between;width:80%">
                    <span>{{ $t('project.news') }}</span>
                    <i class="el-icon-arrow-right"></i>
                </a>

                <a href="/project/disseminate"
                    style="display: flex; align-items: center;justify-content: space-between;width:80%">
                    <span>{{ $t('project.disseminate') }}</span>
                    <i class="el-icon-arrow-right"></i>
                </a>

                <a href="/project/contactform"
                    style="display: flex; align-items: center;justify-content: space-between;width:80%">
                    <span>{{ $t('project.contactform') }}</span>
                    <i class="el-icon-arrow-right"></i>
                </a>
            </div>

            <div class="content-in">
                <router-view></router-view>
                <p class="dynamic">{{ $t('project.publicity') }}</p>

                <div class="dsc-line" style="margin-top: 15px; margin-bottom: 5px;"></div>
                <div class="dsc-line" style=""></div>

                <div class="dynamic-dsc">
                    <div class="dynamic-content" v-for="(pub, index) in pubDatas" :key="pub.benefitId"
                        @click="toNext(index)">
                        <div class="dynamic-dscall">
                            <div class="dynamic-dscall-top">{{ pub.title }}</div>
                        </div>

                        <div class="grip-time">{{ pub.createTime }}</div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import { Project } from "@/api/requests.js";
import funs from '@/utils/index.js'

export default {
    name: "Publicity",
    props: ['tabDatas'],
    data() {
        return {
            pubDatas: [...this.tabDatas],
        };
    },
    mounted() {
        this.getPubData()
    },
    methods: {
        getPubData(p = this.$store.state.lang.version) {
            Project({ moduleType: '2', status: '1', version: p }).then(res => {
                if (res.data && Array.isArray(res.data.rows) && res.data.rows.length > 0) {
                    this.pubDatas = res.data.rows
                }
            })
        },
        toNext(pub) {
            this.$router.push({
                path: '/record',
                name: 'Record',
                params: {
                    fromPath: this.$route.path,
                    fromName: this.$route.name,
                    datas: this.pubDatas[pub],
                    orders: pub
                }
            })
        }
    },
    watch: {
        "$store.state.lang.version": {
            handler() {
                funs(this.getPubData(), this.$store.state.lang.version)
            }
        }
    },
}
</script>

<style scoped>
* {
    margin: 0;
    padding: 0;
}

.item {
    width: 100%;
    opacity: 1;
    background: rgba(255, 255, 255, 1);
    display: flex;
    flex-direction: column;
}

.content {
    width: 100%;
    opacity: 1;
    background: rgba(242, 241, 221, 1);
    display: flex;
    justify-content: center;
    align-content: center;
}

.big-leader {
    left: 25px;
    top: 440px;
    width: 200px;
    opacity: 1;
    border-radius: 6px;
    background: rgba(220, 235, 192, 1);
    position: absolute;
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    align-items: center;
}

.big-leader a {
    margin: 10px 0;
}

.content-in {
    width: 67%;
    display: flex;
    flex-direction: column;
}

.dynamic {
    opacity: 1;
    font-size: 24px;
    font-weight: 700;
    letter-spacing: 1px;
    line-height: 37.13px;
    color: rgba(51, 51, 51, 1);
    text-align: left;
    vertical-align: top;
    margin-top: 15px;
}

.dsc-line {
    width: 100%;
    opacity: 0.3;
    border: 1px solid rgba(161, 161, 161, 1);
}

.dynamic-dsc {
    display: flex;
    flex-direction: column;
    margin-bottom: 100px;
}

.dynamic-content {
    width: 100%;
    height: 70px;
    display: flex;
    border-bottom: 1px solid rgba(161, 161, 161, 1);
    align-items: center;
    justify-content: space-between;
}

.dynamic-dscall {
    display: flex;
    flex-direction: column;
}

.dynamic-dscall-top {
    opacity: 1;
    font-size: 18px;
    font-family: 'Misans-Regular';
    letter-spacing: 1px;
    line-height: 29.17px;
    color: rgba(51, 51, 51, 1);
    text-align: left;
    vertical-align: top;
}

.grip-time {
    opacity: 1;
    font-size: 15px;
    font-weight: 400;
    letter-spacing: 1px;
    line-height: 23.87px;
    color: rgba(153, 153, 153, 1);
    text-align: left;
    vertical-align: top;
}
</style>
