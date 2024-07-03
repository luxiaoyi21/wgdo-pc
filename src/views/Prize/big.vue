<template>
    <div class="item">
        <div class="content">
            <div class="big-leader">
                <router-link :to="{ name: 'Big' }"
                    style="display: flex; align-items: center;justify-content: space-between;width:80%">
                    <span>{{ $t('prize.big') }}</span>
                    <i class="el-icon-arrow-right"></i>
                </router-link>

                <router-link :to="{ name: 'bRule' }"
                    style="display: flex; align-items: center;justify-content: space-between;width:80%">
                    <span>{{ $t('prize.rule') }}</span>
                    <i class="el-icon-arrow-right"></i>
                </router-link>

                <router-link :to="{ name: 'bPersonal' }"
                    style="display: flex; align-items: center;justify-content: space-between;width:80%">
                    <span>{{ $t('prize.persons') }}</span>
                    <i class="el-icon-arrow-right"></i>
                </router-link>
            </div>

            <div class="content-in" v-for="big in bigDatas" :key="big.greenawardId">
                <p class="dynamic">{{ big.title }}</p>

                <div class="dsc-line" style="margin-top: 15px; margin-bottom: 5px;"></div>
                <div class="dsc-line" style=" margin-bottom: 15px;"></div>

                <div class="big-content" v-html="big.contentDetails"></div>
            </div>
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
                .content-in img {
                    width: 560px;
                    height: 436.4px;
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
    left: 22px;
    top: 440px;
    width: 210px;
    opacity: 1;
    border-radius: 6px;
    background: rgba(220, 235, 192, 1);
    position: absolute;
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    align-items: center;
    z-index: 999;
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
}
</style>
