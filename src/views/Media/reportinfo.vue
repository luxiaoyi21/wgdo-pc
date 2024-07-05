<template>
    <div class="item">
        <div class="content">
            <div class="content-in" v-if="reportinfoData.length > 0" v-for="reportinfo in reportinfoData"
                :key="reportinfo.mediacenterId">
                <!-- <div class="content-in"> -->
                <p class="dynamic">{{ reportinfo.title }}</p>

                <div class="info">
                    <div class="info-browser">{{ $t('meet.browser') }}：{{ reportinfo.clickVolume }}</div>
                    <div class="info-create">{{ $t('meet.create') }}：{{ reportinfo.releaseTime }}</div>
                </div>

                <div class="dsc-line" style="margin-top: 15px; margin-bottom: 5px;"></div>
                <div class="dsc-line" style="margin-bottom: 15px;"></div>

                <div class="dynamic-dsc">
                    <div style="opacity: 1;
                    font-size: 15px;
                    font-weight: 400;
                    letter-spacing: 0px;
                    line-height: 25px;
                    color: rgba(51, 51, 51, 1);
                    text-align: justify;
                    vertical-align: top;" v-html="reportinfo.contentDetails"></div>
                </div>

                <!-- <div class="dynamic-dsc">
                    <img src="https://img.js.design/assets/img/664c585ee95bdb802e70fe67.png" alt="">
                </div> -->
            </div>
        </div>
    </div>
</template>

<script>
import { Media } from "@/api/requests.js";
import funs from '@/utils/index.js'

export default {
    name: "Reportinfo",
    props: ['tabDatas'],
    data() {
        return {
            reportinfoData: [],
        };
    },
    mounted() {
        this.getReportinfoData()
    },
    methods: {
        getReportinfoData(p = this.$store.state.lang.version) {
            const id = this.$route.query.id;
            Media({ moduleType: '3', status: '1', version: p, id: id }).then(res => {
                if (res.data && Array.isArray(res.data.rows) && res.data.rows.length > 0) {
                    this.reportinfoData = res.data.rows.filter(row => row.mediacenterId === id);
                }
            })
        },
    },
    watch: {
        "$store.state.lang.version": {
            handler() {
                funs(this.getReportinfoData(), this.$store.state.lang.version)
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
    flex-direction: column;
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
    margin-top: 15px;
}

.info {
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top: 10px;
}

.info-browser {
    width: 30%;
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

.info-create {
    width: 32%;
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
    height: 821px;
    margin-bottom: 140px;
}

.dynamic-dsc img {
    width: 100%;
    height: 821px;
}
</style>
