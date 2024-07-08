<template>
    <div class="item">
        <div class="content">
            <!-- <div class="big-leader">
                <router-link :to="{ name: 'Contribute' }"
                    style="display: flex; align-items: center;justify-content: space-between;width:95%;margin:10px 10px">
                    <span>{{ $t('prize.contribute') }}</span>
                    <i class="el-icon-arrow-right"></i>
                </router-link>

                <router-link :to="{ name: 'cRule' }"
                    style="display: flex; align-items: center;justify-content: space-between;width:95%;margin:10px 10px">
                    <span>{{ $t('prize.rule') }}</span>
                    <i class="el-icon-arrow-right"></i>
                </router-link>

                <router-link :to="{ name: 'cPersonal' }"
                    style="display: flex; align-items: center;justify-content: space-between;width:95%;margin:10px 10px">
                    <span>{{ $t('prize.person') }}</span>
                    <i class="el-icon-arrow-right"></i>
                </router-link>

                <router-link :to="{ name: 'Mechanism' }"
                    style="display: flex; align-items: center;justify-content: space-between;width:95%;margin:10px 10px">
                    <span>{{ $t('prize.mechanism') }}</span>
                    <i class="el-icon-arrow-right"></i>
                </router-link>
            </div> -->

            <div class="content-in" v-for="rule in ruleDatas" :key="rule.greenawardId">
                <p class="dynamic">{{ rule.title }}</p>

                <div class="dsc-line" style="margin-top: 15px; margin-bottom: 5px;"></div>
                <div class="dsc-line" style=" margin-bottom: 15px;"></div>

                <div class="rule-all">
                    <div class="intro" v-html="rule.contentDetails"></div>
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
            ruleDatas: [],
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
    width: 220px;
    height: 20%;
    opacity: 1;
    border-radius: 6px;
    background: rgba(220, 235, 192, 1);
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    align-items: center;
    margin: 17px 20px 0 0;
}

.big-leader a {
    margin: 8px 0;
}

.content-in {
    width: 100%;
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

.intro {
    opacity: 1;
    font-size: 16px;
    font-weight: 400;
    letter-spacing: 0px;
    line-height: 25px;
    color: rgba(51, 51, 51, 1);
    text-align: justify;
    vertical-align: top;
    display: flex;
    flex-direction: column;
    justify-content: center;
}
</style>
