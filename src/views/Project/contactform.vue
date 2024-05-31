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

            <!-- <div class="content-in" v-for="invent in contactDatas" :key="invent.benefitId"> -->
            <div class="content-in">
                <p class="dynamic">{{$t('project.contactform')}}</p>
                <!-- <p class="dynamic">{{invent.title}}</p> -->

                <div class="dsc-line" style="margin-top: 15px; margin-bottom: 5px;"></div>
                <div class="dsc-line" style=""></div>

                <!-- <div class="dynamic-dsc" v-html="invent.contentDetails"> -->
                <div class="dynamic-dsc">
                    <div class="dsc-img">
                        <img src="https://img.js.design/assets/img/664dc37f4ae252d9eb123351.png#9aa2310b24408c59b8ff34f3e199d9d1"
                            alt="">
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
    name: "Inventory",
    props: ['tabDatas'],
    data() {
        return {
            contactDatas: [...this.tabDatas],
        };
    },
    mounted() {
        this.getInventData()
    },
    methods: {
        getInventData(p = this.$store.state.lang.version) {
            Project({ moduleType: '6', status: '1', version: p }).then(res => {
                if (res.data && Array.isArray(res.data.rows) && res.data.rows.length > 0) {
                    this.contactDatas = res.data.rows
                }
            })
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
    left: 25px;
    top: 440px;
    width: 200px;
    height: 220px;
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

.dynamic-dsc {
    width: 100%;
    display: flex;
    justify-content: center;
    margin-top: 15px;
    margin-bottom: 50px;
}

.dsc-img {
    opacity: 1;
}

.dsc-img img {
    width: 100%;
    height: 100%;
    opacity: 1;
}
</style>
