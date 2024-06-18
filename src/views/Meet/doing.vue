<template>
    <div class="item">
        <div class="content">
            <div class="content-in">
                <p class="dynamic">{{ $t('meet.doing') }}</p>

                <div class="dsc-line" style="margin-top: 15px; margin-bottom: 5px;"></div>
                <div class="dsc-line" style=""></div>

                <div class="dynamic-dsc">
                    <router-link
                        :to="isSecondLink(index) ? { path: '/doing/doinginfo', query: { id: doing.conferenceId } } : { path: doing.externalLink }"
                        class="doing-in" v-for="(doing, index) in doingDatas" :key="doing.conferenceId">
                        <div class="doing-img">
                            <img :src="'http://106.3.97.14:9002' + doing.cover" alt="">
                        </div>

                        <p class="doing-intro">{{ doing.title }}</p>
                    </router-link>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import { Meet } from "@/api/requests.js";
import funs from '@/utils/index.js'

export default {
    name: "Doing",
    props: ['tabDatas'],
    data() {
        return {
            doingDatas: [...this.tabDatas],
        };
    },
    mounted() {
        this.getDoingData()
    },
    methods: {
        isSecondLink(index) {
            return index % 2 === 0;
        },
        getDoingData(p = this.$store.state.lang.version) {
            Meet({ moduleType: '2', status: '1', version: p }).then(res => {
                if (res.data && Array.isArray(res.data.rows) && res.data.rows.length > 0) {
                    this.doingDatas = res.data.rows
                }
            })
        }
    },
    watch: {
        "$store.state.lang.version": {
            handler() {
                funs(this.getDoingData(), this.$store.state.lang.version)
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
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(calc(33.33% - 20px), 1fr));
    grid-gap: 20px;
    margin-bottom: 30px;
}

.doing-in {
    width: 100%;
}

.doing-img {
    width: 100%;
    height: 200px;
    opacity: 1;
    margin: 15px 0;
}

.doing-img img {
    width: 100%;
    height: 200px;
    opacity: 1;
}

.doing-intro {
    opacity: 1;
    font-size: 18px;
    font-weight: 400;
    letter-spacing: 0px;
    line-height: 23.87px;
    color: rgba(0, 0, 0, 1);
    text-align: center;
    vertical-align: top;
    margin-bottom: 50px;
}
</style>