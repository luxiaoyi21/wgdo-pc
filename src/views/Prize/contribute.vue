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

            <div class="content-in" v-for="contri in contriDatas" :key="contri.greenawardId">

                <p class="dynamic">{{ contri.title }}</p>

                <div class="dsc-line" style="margin-top: 15px; margin-bottom: 5px;"></div>
                <div class="dsc-line" style=" margin-bottom: 15px;"></div>

                <div style="opacity: 1;
                font-size: 15px;
                font-weight: 400;
                letter-spacing: 0px;
                line-height: 25px;
                color: rgba(51, 51, 51, 1);
                text-align: justify;
                vertical-align: top;" v-html="contri.contentDetails"></div>
            </div>
        </div>
    </div>
</template>

<script>
import { Prize } from "@/api/requests.js";
import funs from '@/utils/index.js'

export default {
    name: "Contribute",
    props: ['tabDatas'],
    data() {
        return {
            contriDatas: [...this.tabDatas],
        };
    },
    mounted() {
        this.getContriData()
        this.addImageStyles();
    },
    methods: {
        getContriData(p = this.$store.state.lang.version) {
            Prize({ moduleType: '3', status: '1', version: p }).then(res => {
                if (res.data && Array.isArray(res.data.rows) && res.data.rows.length > 0) {
                    this.contriDatas = res.data.rows
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
                    display:flex;
                }
            `;
            document.head.appendChild(style);
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
    left: 5px;
    top: 440px;
    width: 230px;
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
</style>
