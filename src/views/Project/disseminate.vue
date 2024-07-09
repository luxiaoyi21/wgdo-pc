<template>
    <div class="item">
        <div class="content">
            <!-- <div class="big-leader">
                <a href="" style="display: flex; align-items: center;justify-content: space-between;width:80%">
                    <span>{{ $t('project.require') }}</span>
                    <i class="el-icon-arrow-right"></i>
                </a>

                <router-link :to="{ name: 'Inventory' }"
                    style="display: flex; align-items: center;justify-content: space-between;width:80%">
                    <span>{{ $t('project.inventory') }}</span>
                    <i class="el-icon-arrow-right"></i>
                </router-link>

                <router-link :to="{ name: 'Publicity' }"
                    style="display: flex; align-items: center;justify-content: space-between;width:80%">
                    <span>{{ $t('project.publicity') }}</span>
                    <i class="el-icon-arrow-right"></i>
                </router-link>

                <a href="" style="display: flex; align-items: center;justify-content: space-between;width:80%">
                    <span>{{ $t('project.news') }}</span>
                    <i class="el-icon-arrow-right"></i>
                </a>

                <router-link :to="{ name: 'Disseminate' }"
                    style="display: flex; align-items: center;justify-content: space-between;width:80%">
                    <span>{{ $t('project.disseminate') }}</span>
                    <i class="el-icon-arrow-right"></i>
                </router-link>

                <router-link :to="{ name: 'Contactform' }"
                    style="display: flex; align-items: center;justify-content: space-between;width:80%">
                    <span>{{ $t('project.contactform') }}</span>
                    <i class="el-icon-arrow-right"></i>
                </router-link>
            </div> -->

            <div class="content-in" v-for="save in saveDatas" :key="save.benefitId">
                <p class="dynamic">{{ save.title }}</p>

                <div class="info">
                    <div class="info-browser">{{ $t('meet.browser') }}：{{ save.clickVolume }}</div>
                    <div class="info-create">{{ $t('meet.create') }}：{{ save.releaseTime }}</div>
                </div>

                <div class="dsc-line" style="margin-top: 10px; margin-bottom: 5px;"></div>
                <div class="dsc-line" style=""></div>

                <div class="dynamic-dsc">
                    <div style="opacity: 1;
                    font-size: 15px;
                    font-weight: 400;
                    letter-spacing: 0px;
                    line-height: 25px;
                    color: rgba(51, 51, 51, 1);
                    text-align: justify;
                    vertical-align: top;" v-html="save.contentDetails"></div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import { Project } from "@/api/requests.js";
import funs from '@/utils/index.js'

export default {
    name: "Disseminate",
    props: ['tabDatas'],
    data() {
        return {
            saveDatas: [],
        };
    },
    mounted() {
        this.addImageStyles();
        this.getDissminateData()
    },
    methods: {
        getDissminateData(p = this.$store.state.lang.version) {
            Project({ moduleType: '2', status: '1', version: p }).then(res => {
                if (res.data && Array.isArray(res.data.rows) && res.data.rows.length > 0) {
                    this.saveDatas = res.data.rows
                }
            })
        },
        addImageStyles() {
            const style = document.createElement('style');
            style.type = 'text/css';
            style.innerHTML = `
                .content-in img:nth-of-type(1) {
                    width: 100%;
                    height: 323px;
                },
                .content-in img:nth-of-type(2) {
                    width: 589px;
                    height: 883px;
        }
            `;
            document.head.appendChild(style);
        }
    },
    watch: {
        "$store.state.lang.version": {
            handler() {
                funs(this.getDissminateData(), this.$store.state.lang.version)
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
    width: 200px;
    height: 20%;
    opacity: 1;
    border-radius: 6px;
    background: rgba(220, 235, 192, 1);
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    align-items: center;
    z-index: 999;
    margin: 17px 20px 0 0;
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
    text-align: center;
    vertical-align: top;
    margin-top: 7px;
}

.info {
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top: 10px;
}

.info-browser {
    height: 22px;
    opacity: 1;
    font-size: 15px;
    font-weight: 400;
    letter-spacing: 1px;
    line-height: 21.22px;
    color: rgba(153, 153, 153, 1);
    text-align: center;
    vertical-align: top;
    margin-right: 10px;
}

.info-create {
    height: 22px;
    opacity: 1;
    font-size: 15px;
    font-weight: 400;
    letter-spacing: 1px;
    line-height: 21.22px;
    color: rgba(153, 153, 153, 1);
    text-align: center;
    vertical-align: top;
}

.dsc-line {
    width: 100%;
    opacity: 0.3;
    border: 1px solid rgba(161, 161, 161, 1);
}

.dynamic-dsc {
    width: 100%;
    display: flex;
    flex-direction: column;
    margin-top: 15px;
    margin-bottom: 88px;
}
</style>
