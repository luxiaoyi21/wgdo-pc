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

            <div class="content-in" v-for="invent in inventDatas" :key="invent.benefitId">
                <p class="dynamic">{{ invent.title }}</p>

                <div class="dsc-line" style="margin-top: 10px; margin-bottom: 5px;"></div>
                <div class="dsc-line" style=""></div>

                <div class="dynamic-dsc">
                    <div v-html="invent.contentDetails"></div>
                </div>
            </div>
        </div>
    </div>

</template>

<script>
import { Project } from "@/api/requests.js";
import funs from '@/utils/index.js'

export default {
    name: "Inventory",
    props: ['tabDatas'],
    data() {
        return {
            inventDatas: [],
        };
    },
    mounted() {
        this.getInventData()
        this.addImageStyles();
    },
    methods: {
        getInventData(p = this.$store.state.lang.version) {
            Project({ moduleType: '4', status: '1', version: p }).then(res => {
                if (res.data && Array.isArray(res.data.rows) && res.data.rows.length > 0) {
                    this.inventDatas = res.data.rows
                }
            })
        },
        addImageStyles() {
            const style = document.createElement('style');
            style.type = 'text/css';
            style.innerHTML = `
                .dynamic-dsc p{
                    display: flex;
                    flex-wrap:wrap;
                }

                .dynamic-dsc img {
                    display: flex;
                    width: 50%;
                    height: 1064px;
                    margin-bottom:20px;
                },
            `;
            document.head.appendChild(style);
        }
    },
    watch: {
        "$store.state.lang.version": {
            handler() {
                funs(this.getInventData(), this.$store.state.lang.version)
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
    text-align: left;
    vertical-align: top;
    margin-top: 7px;
}

.dsc-line {
    width: 100%;
    opacity: 0.3;
    border: 1px solid rgba(161, 161, 161, 1);
}

.dynamic-dsc {
    width: 100%;
    justify-content: center;
    flex-wrap: wrap;
    margin-top: 15px;
    margin-bottom: 50px;
}
</style>
