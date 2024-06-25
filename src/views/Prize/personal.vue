<template>
    <div class="item">
        <div class="content">
            <div class="big-leader">
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
            </div>

            <div class="content-in">
                <div v-for="person in perDatas" :key="person.greenawardId">
                    <p class="dynamic">{{ person.title }}</p>

                    <div class="dsc-line" style="margin-top: 15px; margin-bottom: 5px;"></div>
                    <div class="dsc-line" style=" margin-bottom: 15px;"></div>

                    <p class="paper">2011绿色设计国际贡献奖个人获奖名单：</p>

                    <div class="person">
                        <div class="person-in" v-for="per in perDatas">
                            <div class="avatar">
                                <img :src="'http://www.wgdo.net' + per.cover" alt="">
                            </div>

                            <div class="intro">
                                <div class="intro-top">
                                    <div class="name">{{ per.awardName }}</div>
                                    <!-- <div class="address">瑞典</div>
                                <div class="job">宜家亚太总裁</div> -->
                                </div>
                                <div class="intro-bottom">{{ per.awardIntro }}
                                </div>
                            </div>
                        </div>

                        <div class="person-line"></div>
                    </div>
                </div>
            </div>
        </div>
    </div>

</template>

<script>
import { Prize } from "@/api/requests.js";
import funs from '@/utils/index.js'

export default {
    name: "Personal",
    props: ['tabDatas'],
    data() {
        return {
            perDatas: [...this.tabDatas],
        };
    },
    mounted() {
        this.getPersonalData()
    },
    methods: {
        getPersonalData(p = this.$store.state.lang.version) {
            Prize({ moduleType: '6', status: '1', version: p }).then(res => {
                if (res.data && Array.isArray(res.data.rows) && res.data.rows.length > 0) {
                    this.perDatas = res.data.rows
                }
            })
        }
    },
    watch: {
        "$store.state.lang.version": {
            handler() {
                funs(this.getPersonalData(), this.$store.state.lang.version)
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
    margin: 8px 0;
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

.paper {
    opacity: 1;
    font-size: 18px;
    font-weight: 700;
    letter-spacing: 1px;
    line-height: 26.52px;
    color: rgba(51, 51, 51, 1);
    text-align: left;
    vertical-align: top;
}

.person {
    display: flex;
    flex-direction: column;
    margin-bottom: 50px;
}

.person-in {
    display: flex;
    margin: 30px 0;
}

.avatar {
    width: 140px;
    height: 180px;
    opacity: 1;
}

.avatar img {
    width: 140px;
    height: 180px;
    opacity: 1;
}

.intro {
    display: flex;
    flex-direction: column;
    margin-left: 30px;
}

.intro-top {
    display: flex;
    margin: 10px 0;
}

.name {
    opacity: 1;
    font-size: 18px;
    font-weight: 700;
    letter-spacing: 1px;
    line-height: 26.52px;
    color: rgba(51, 51, 51, 1);
    text-align: left;
    vertical-align: top;
}

.address {
    opacity: 1;
    font-size: 18px;
    font-weight: 400;
    letter-spacing: 0px;
    line-height: 23.87px;
    color: rgba(102, 102, 102, 1);
    text-align: left;
    vertical-align: top;
    margin-left: 30px;
    margin-right: 10px;
}

.job {
    opacity: 1;
    font-size: 18px;
    font-weight: 400;
    letter-spacing: 0px;
    line-height: 23.87px;
    color: rgba(102, 102, 102, 1);
    text-align: left;
    vertical-align: top;
}

.intro-bottom {
    opacity: 1;
    font-size: 16px;
    font-weight: 400;
    letter-spacing: 0px;
    line-height: 23px;
    color: rgba(51, 51, 51, 1);
    text-align: justify;
    vertical-align: top;
}

.person-line {
    width: 100%;
    height: 0px;
    opacity: 1;
    border: 1px dashed rgba(161, 161, 161, 1);
}
</style>
