<template>
    <div class="item">
        <div class="content">
            <div class="big-leader">
                <router-link :to="{ name: 'Big' }"
                    style="display: flex; align-items: center;justify-content: space-between;width:80%">
                    <span>{{ $t('prize.big') }}</span>
                    <!-- <i class="el-icon-arrow-right"></i> -->
                </router-link>

                <router-link :to="{ name: 'bRule' }"
                    style="display: flex; align-items: center;justify-content: space-between;width:80%">
                    <span>{{ $t('prize.rule') }}</span>
                    <!-- <i class="el-icon-arrow-right"></i> -->
                </router-link>

                <router-link :to="{ name: 'bPersonal' }"
                    style="display: flex; align-items: center;justify-content: space-between;width:80%">
                    <span>{{ $t('prize.persons') }}</span>
                    <!-- <i class="el-icon-arrow-right"></i> -->
                </router-link>
            </div>

            <div class="content-in" v-for="big in bigDatas" :key="big.greenawardId" v-if="isShow">
                <p class="dynamic">{{ big.title }}</p>

                <div class="dsc-line" style="margin-top: 10px; margin-bottom: 5px;"></div>
                <div class="dsc-line" style=" margin-bottom: 15px;"></div>

                <div class="big-content" v-html="big.contentDetails"></div>
            </div>
            <router-view v-else></router-view>
        </div>
    </div>
</template>

<script>
import { Prize } from "@/api/requests.js";
import funs from '@/utils/index.js'

export default {
    name: "Big",
    props: ['tabDatas'],
    data() {
        return {
            bigDatas: [],
            isShow: true,
        };
    },
    mounted() {
        this.getBigData()
        this.addImageStyles();
    },
    methods: {
        getBigData(p = this.$store.state.lang.version) {
            Prize({ moduleType: '1', status: '1', version: p }).then(res => {
                if (res.data && Array.isArray(res.data.rows) && res.data.rows.length > 0) {
                    this.bigDatas = res.data.rows
                }
            })
        },
        addImageStyles() {
            const style = document.createElement('style');
            style.type = 'text/css';
            style.innerHTML = `
                .big-content img {
                    width: 560px;
                    mix-blend-mode: multiply;
                    opacity: 1;
                    margin: auto;
                    background-size: cover;
                    background-position: center;
                }
            `;
            document.head.appendChild(style);
        }
    },
    watch: {
        "$store.state.lang.version": {
            handler() {
                funs(this.getBigData(), this.$store.state.lang.version)
            }
        },
        "$route.matched.length": {
            handler() {
                if (this.$route.matched.length > 0) {
                    this.isShow = false
                } else {
                    this.isShow = true
                }
            }
        },
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
    width: 210px;
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
    width: 75%;
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
    margin-top: 7px;
}

.dsc-line {
    width: 100%;
    opacity: 0.3;
    border: 1px solid rgba(161, 161, 161, 1);
}

.big-content {
    opacity: 1;
    font-size: 16px;
    font-weight: 400;
    letter-spacing: 0px;
    line-height: 23.87px;
    color: rgba(51, 51, 51, 1);
    vertical-align: top;
    margin-bottom: 50px;
    text-align: justify;
    display: flex;
    flex-direction: column;
    justify-content: center;
}
</style>
