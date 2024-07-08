<template>
    <div class="item">
        <div class="content">
            <div class="content-in" v-for="sedinfo in sedmoreinfoDatas" :key="sedinfo.mediacenterId">
                <p class="dynamic">{{ sedinfo.title }}</p>
                <div class="info">
                    <div class="info-browser">{{ $t('meet.browser') }}：{{ sedinfo.clickVolume }}</div>
                    <div class="info-create">{{ $t('meet.create') }}：{{ sedinfo.releaseTime }}</div>
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
                    vertical-align: top;" v-html="sedinfo.contentDetails"></div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import { getContentList } from '@/api/requests.js'
    import funs from '@/utils/index.js'

    export default {
        name: "Sedinfo",
        data() {
            return {
                sedmoreinfoDatas: [],
                cindex: Number(0)
            }
        },
        mounted() {
            if (this.$route.params.orders || this.$route.params.orders === Number(0)) {
                this.cindex = this.$route.params.orders
            } else {
                if (this.$route.query.index) {
                    sessionStorage.setItem('currentIndex', this.$route.query.index)
                }
                let currentIndex = sessionStorage.getItem('currentIndex')
                if (currentIndex) {
                    this.cindex = Number(currentIndex)
                    sessionStorage.setItem('currentIndex', this.cindex)
                } else {
                    this.cindex = Number(this.$route.query.index)
                    sessionStorage.setItem('currentIndex', this.cindex)
                }
            }
            this.getFiveData()
        },
        methods: {
            getFiveData(p = this.$store.state.lang.version) {
                getContentList({ "moduleType": "6", "status": "1", version: p }).then(res => {
                    if (res.data && Array.isArray(res.data.rows) && res.data.rows.length > 0) {
                        // let [leftImg, ...rightImgLists] = res.data.rows
                        // this.leftImg = leftImg
                        // this.rightImgLists = rightImgLists
                        this.moredetDatas = res.data.rows
                        this.moredetDatas.forEach((v, index) => {
                            if (index === this.cindex) {
                                this.sedmoreinfoDatas.pop()
                                this.sedmoreinfoDatas.push(v)
                            }
                        })
                        this.$emit('childrenUrl', {
                            path: '/fivall/fiveinfo',
                            name: this.sedmoreinfoDatas[0]?.title
                        })
                    }
                })
            },
            getSecondData(p = this.$store.state.lang.version) {
                getContentList({ "moduleType": "2", "status": "1", version: p }).then(res => {
                    if (res.data && Array.isArray(res.data.rows) && res.data.rows.length > 0) {
                        this.rightData = res.data.rows
                        this.rightData.forEach((v, index) => {
                            if (index === this.cindex) {
                                this.sedmoreinfoDatas.pop()
                                this.sedmoreinfoDatas.push(v)
                            }
                        })
                    }
                })
            }
        },
        watch: {
            "$store.state.lang.version": {
                handler() {
                    funs(this.getFiveData(), this.$store.state.lang.version)
                }
            }
        },
        beforeRouteLeave(to, from, next) {
            sessionStorage.removeItem('currentIndex')
            next()
        },
    }
</script>

<style scoped>
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

    .dsc-intro {
        font-size: 18px;
        font-weight: 400;
        letter-spacing: 0px;
        line-height: 30px;
        color: rgba(51, 51, 51, 1);
        text-align: justify;
    }
</style>