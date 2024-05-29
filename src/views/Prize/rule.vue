<template>
    <div class="item">
        <div class="content">
            <div class="big-leader">
                <a href="/prize/contribute"
                    style="display: flex; align-items: center;justify-content: space-between;width:90%">
                    <span>绿色设计国际贡献奖</span>
                    <i class="el-icon-arrow-right"></i>
                </a>

                <a href="/prize/rule"
                    style="display: flex; align-items: center;justify-content: space-between;width:90%">
                    <span>评定规则</span>
                    <i class="el-icon-arrow-right"></i>
                </a>

                <a href="/prize/personal"
                    style="display: flex; align-items: center;justify-content: space-between;width:90%">
                    <span>2011国际贡献奖获奖个人</span>
                    <i class="el-icon-arrow-right"></i>
                </a>

                <a href="" style="display: flex; align-items: center;justify-content: space-between;width:90%">
                    <span>2011国际贡献奖获奖机构</span>
                    <i class="el-icon-arrow-right"></i>
                </a>
            </div>

            <div class="content-in" v-for="rule in ruleDatas" :key="rule.greenawardId">
                <p class="dynamic">{{ rule.title }}</p>

                <div class="dsc-line" style="margin-top: 15px; margin-bottom: 5px;"></div>
                <div class="dsc-line" style=" margin-bottom: 15px;"></div>

                <div class="rule-all">
                    <div style="opacity: 1;
                    font-size: 15px;
                    font-weight: 400;
                    letter-spacing: 0px;
                    line-height: 25px;
                    color: rgba(51, 51, 51, 1);
                    text-align: justify;
                    vertical-align: top;" v-html="rule.contentDetails"></div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import { Prize } from "@/api/requests.js";
import funs from '@/utils/index.js'

export default {
    name: "Rule",
    props: ['tabDatas'],
    data() {
        return {
            ruleDatas: [...this.tabDatas],
        };
    },
    mounted() {
        this.getRuleData()
    },
    methods: {
        getRuleData(p = this.$store.state.lang.version) {
            Prize({ moduleType: '2', status: '1', version: p }).then(res => {
                if (res.data && Array.isArray(res.data.rows) && res.data.rows.length > 0) {
                    this.ruleDatas = res.data.rows
                    console.log(this.ruleDatas);
                }
            })
        }
    },
    watch: {
        "$store.state.lang.version": {
            handler() {
                funs(this.getContriData(), this.$store.state.lang.version)
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
    left: 10px;
    top: 440px;
    width: 220px;
    height: 180px;
    opacity: 1;
    border-radius: 6px;
    background: rgba(220, 235, 192, 1);
    position: absolute;
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    align-items: center;
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

.rule-all {
    display: flex;
    flex-direction: column;
    margin-bottom: 80px;
}
</style>
