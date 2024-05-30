<template>
    <div class="item">
        <div class="content">
            <div class="content-in">
                <p class="dynamic">{{$t('dynamic.report')}}</p>

                <div class="dsc-line" style="margin-top: 15px; margin-bottom: 5px;"></div>
                <div class="dsc-line" style=" "></div>

                <div class="dynamic-dsc">
                    <a :href="video.externalLink" class="dynamic-content" v-for="video in reportDatas"
                        :key="video.mediacenterId">
                        <div class="dynamic-time">
                            <div class="dynamic-time-top">{{video.timer}}</div>
                            <div class="dynamic-time-buttom">{{video.year}}</div>
                        </div>
                        <div class="dynamic-blank">
                            <div class="dynamic-blankin"></div>
                        </div>
                        <div class="dynamic-dscall">
                            <div class="dynamic-dscall-top">{{ video.title }}</div>
                            <div class="dynamic-dscall-buttom">{{ video.intro }}</div>
                        </div>
                    </a>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import { Media } from "@/api/requests.js";
import funs from '@/utils/index.js'

export default {
    name: "Report",
    props: ['tabDatas'],
    data() {
        return {
            reportDatas: [...this.tabDatas],
        };
    },
    mounted() {
        this.getReportData()
    },
    methods: {
        getReportData(p = this.$store.state.lang.version) {
            Media({ moduleType: '3', status: '1', version: p }).then(res => {
                if (res.data && Array.isArray(res.data.rows) && res.data.rows.length > 0) {
                    this.reportDatas = res.data.rows.map(row => {
                        const timeData = this.gettime(row.releaseTime);
                        return {
                            ...row,
                            year: timeData.year,
                            timer: timeData.timer
                        };
                    });
                }
            })
        },
        gettime(t) {
            const originalDate = new Date(t);
            const year = originalDate.getFullYear();
            const month = ('0' + (originalDate.getMonth() + 1)).slice(-2)
            const day = ('0' + originalDate.getDate()).slice(-2)
            return {
                year: year,
                timer: month + "-" + day,
            };
        },
    },
    watch: {
        "$store.state.lang.version": {
            handler() {
                funs(this.getReportData(), this.$store.state.lang.version)
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
    display: flex;
    flex-direction: column;
    margin-bottom: 50px;
}

.dynamic-content {
    width: 100%;
    height: 120px;
    display: flex;
    border-bottom: 1px solid rgba(161, 161, 161, 1);
    align-items: center;
}

.dynamic-time {
    display: flex;
    flex-direction: column;
    justify-content: center;
    width: 12%;
}

.dynamic-time-top {
    opacity: 1;
    font-size: 22px;
    font-weight: 400;
    letter-spacing: 1px;
    line-height: 30px;
    color: rgba(165, 214, 63, 1);
    text-align: left;
    vertical-align: top;

}

.dynamic-time-buttom {
    opacity: 1;
    font-size: 20px;
    font-weight: 400;
    letter-spacing: 1px;
    line-height: 30px;
    color: rgba(62, 73, 56, 1);
    text-align: left;
    vertical-align: top;
}

.dynamic-blank {
    opacity: 1;
    display: flex;
    align-items: center;
}

.dynamic-blankin {
    width: 60px;
    opacity: 1;
    transform: rotate(130deg);
    border: 1px solid rgb(202, 202, 202);
}

.dynamic-dscall {
    display: flex;
    flex-direction: column;
    justify-content: center;
    width: 153%;
}

.dynamic-dscall-top {
    flex-grow: 1;
    opacity: 1;
    height: 25%;
    font-size: 18px;
    font-weight: 600;
    letter-spacing: 1px;
    line-height: 26.52px;
    color: rgba(40, 40, 40, 1);
    text-align: justify;
    display: -webkit-box;
    -webkit-line-clamp: 1;
    -webkit-box-orient: vertical;
    vertical-align: top;
    overflow: hidden;
}

.dynamic-dscall-buttom {
    flex-grow: 1;
    opacity: 1;
    height: 70%;
    font-size: 16px;
    font-weight: 400;
    letter-spacing: 0px;
    line-height: 23.87px;
    color: rgba(51, 51, 51, 1);
    text-align: justify;
    vertical-align: top;
    overflow: hidden;
    display: -webkit-box;
    -webkit-line-clamp: 3;
    -webkit-box-orient: vertical;
    text-overflow: ellipsis;
}
</style>
