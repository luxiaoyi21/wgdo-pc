<template>
    <div class="item">
        <!-- <router-view :key="$route.query.id" /> -->
        <div class="content">
            <div class="content-in" v-if="dynamicinfoDatas.length > 0" v-for="dyninfo in dynamicinfoDatas"
                :key="dyninfo.mediacenterId">
                <!-- <div class="content-in"> -->
                <p class="dynamic">{{ dyninfo.title }}</p>

                <div class="info">
                    <div class="info-browser">{{ $t('meet.browser') }}：{{ dyninfo.clickVolume }}</div>
                    <div class="info-create">{{ $t('meet.create') }}：{{ dyninfo.releaseTime }}</div>
                </div>

                <div class="dsc-line" style="margin-top: 15px; margin-bottom: 5px;"></div>
                <div class="dsc-line" style="margin-bottom: 15px;"></div>

                <div class="dynamic-dsc">
                    <div class="intro" v-html="dyninfo.contentDetails"></div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import { Media } from "@/api/requests.js";
import funs from '@/utils/index.js'

export default {
    name: "Dynamicinfo",
    props: ['tabDatas','id'],
    data() {
        return {
            dynamicinfoDatas: [],
        };
    },
    mounted() {
        this.getDynamicinfoData()
        // console.log(this.$route.query.id);
    },
    methods: {
        getDynamicinfoData() {
            const id = this.$route.query.id;
            const p = this.$store.state.lang.version;
            Media({ status: '1', version: p, id: id }).then(res => {
                if (res.data && Array.isArray(res.data.rows) && res.data.rows.length > 0) {
                    this.dynamicinfoDatas = res.data.rows.filter(row => row.mediacenterId === id);
                    // console.log(this.dynamicinfoDatas);
                }
            })
        },
    },
    watch: {
        "$store.state.lang.version": {
            handler() {
                funs(this.getDynamicinfoData(), this.$store.state.lang.version)
            }
        },
        '$route.query.id': {
            handler() {
                this.getDynamicinfoData();
            },
            immediate: true
        },
    }
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
    opacity: 1;
    font-size: 16px;
    font-weight: 400;
    letter-spacing: 0px;
    line-height: 23.87px;
    color: rgba(51, 51, 51, 1);
    text-align: justify;
    vertical-align: top;
    margin-bottom: 150px;
}

.dsc-title {
    font-size: 18px;
    font-weight: 700;
    letter-spacing: 0px;
    line-height: 30px;
    color: rgba(51, 51, 51, 1);
}

.intro{
    opacity: 1;
    font-size: 16px;
    font-weight: 400;
    letter-spacing: 0px;
    line-height: 25px;
    color: rgba(51, 51, 51, 1);
    text-align: justify;
    vertical-align: top;
}
</style>
