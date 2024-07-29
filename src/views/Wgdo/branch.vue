<template>
    <div class="item">
        <div class="content">
            <div class="big-leader">
                <router-link :to="{ name: '' }"
                    style="display: flex; align-items: center">
                    <span style="font-size: 15px;
font-weight: 600;
letter-spacing: 1px;
line-height: 19.89px;
color: rgba(51, 51, 51, 1);
text-align: left;
vertical-align: top;">雄安绿研院</span>
                    <!-- <span>{{ $t('prize.big') }}</span> -->
                    <!-- <i class="el-icon-arrow-right"></i> -->
                </router-link>

                <router-link :to="{ name: '' }"
                    style="display: flex; align-items: center">
                    <!-- <span>{{ $t('prize.rule') }}</span> -->
                    <span style="font-size: 14px;
font-weight: 500;
letter-spacing: 1px;
line-height: 18.56px;
color: rgba(85, 85, 85, 1);
text-align: left;
vertical-align: top;">广州绿研院</span>
                    <!-- <i class="el-icon-arrow-right"></i> -->
                </router-link>

                <!-- <router-link :to="{ name: 'bPersonal' }"
                    style="display: flex; align-items: center">
                    <span>{{ $t('prize.persons') }}</span>
                    <i class="el-icon-arrow-right"></i>
                </router-link> -->
            </div>

            <div class="content-in">
                <p class="aintro">{{ $t('wgdo.branch') }}</p>

                <div class="dsc-line" style="margin-top: 10px; margin-bottom: 5px;"></div>
                <div class="dsc-line" style=" margin-bottom: 15px;"></div>

                <div style="margin-bottom: 50px;">
                    <div v-for="(branch, index) in branchDatas" :key="branch.greeninstituteId">
                        <div class="intro">
                            <a :href="branch.externalLink" class="left" ref="left1">
                                <img :src="'http://www.wgdo.net' + branch.cover">
                            </a>

                            <div class="right">
                                <div class="right-top" ref="right1">
                                    <p class="ch">{{ branch.title }}</p>
                                </div>
                                <div class="right-bottom">
                                    {{ branch.intro }}
                                </div>
                            </div>
                        </div>

                        <div v-if="index !== branchDatas.length - 1" class="dsc-line" style="margin:50px 0"></div>
                    </div>
                </div>

            </div>

            <!-- <div class="intro" style="margin-bottom: 200px;">
                    <div class="right" ref="right2">
                        <div class="right-top">
                            <p class="ch">{{ tabDatas&&tabDatas[0]&&tabDatas[0].title }}</p>
                        </div>
                        <div class="right-bottom">
                            {{ tabDatas&&tabDatas[0]&&tabDatas[0].intro }}
                        </div>
                    </div>

                    <div class="left" ref="left2">
                        <img :src="'http://106.3.97.14:9002' + tabDatas[0].cover">
                    </div>
                </div> -->
        </div>
    </div>
</template>

<script>
import { getWgdo } from '@/api/requests.js'
import funs from '@/utils/index.js'

export default {
    name: "Branch",
    props: ['tabDatas'],
    data() {
        return {
            branchDatas: [],
        };
    },
    mounted() {
        this.getBranchData()
    },
    methods: {
        getBranchData(p = this.$store.state.lang.version) {
            getWgdo({ moduleType: '2', status: '1', version: p }).then(res => {
                if (res.data && Array.isArray(res.data.rows) && res.data.rows.length > 0) {
                    this.branchDatas = res.data.rows
                }
            })
        }
    },
    watch: {
        "$store.state.lang.version": {
            handler() {
                funs(this.getBranchData(), this.$store.state.lang.version)
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
    /*align-items: center;
    flex-direction: column;*/
}

.big-leader {
    width: 15%;
    height: 20%;
    opacity: 1;
    border-radius: 6px;
    background: rgba(220, 235, 192, 1);
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    align-items: center;
    margin: 14px 20px 0 0;
}

.big-leader a {
    margin: 8px 0;
}

.content-in {
    width: 85%;
    display: flex;
    flex-direction: column;
}

.aintro {
    opacity: 1;
    font-size: 24px;
    font-weight: 700;
    letter-spacing: 1px;
    line-height: 37.13px;
    color: rgba(51, 51, 51, 1);
    text-align: left;
    vertical-align: top;
    margin-top: 7px;
}

.dsc-line {
    width: 100%;
    opacity: 0.3;
    border: 1px solid rgba(161, 161, 161, 1);
}

.intro {
    display: flex;
    justify-content: space-between;
}

.left {
    width: 49%;
    height: 300px;
    opacity: 1;
}

.left img {
    width: 100%;
    height: 300px;
    opacity: 1;
}

.right {
    display: flex;
    flex-direction: column;
    width: 49%;
    justify-content: center;
}

.right-top {
    display: flex;
}

.ch {
    opacity: 1;
    font-size: 18px;
    font-weight: 600;
    letter-spacing: 1px;
    line-height: 26.52px;
    color: rgba(40, 40, 40, 1);
    text-align: left;
    vertical-align: top;
}

.right-bottom {
    opacity: 1;
    font-size: 16px;
    font-weight: 400;
    letter-spacing: 0px;
    line-height: 25px;
    color: rgba(51, 51, 51, 1);
    text-align: justify;
    vertical-align: top;
    margin-top: 20px;
}
</style>
