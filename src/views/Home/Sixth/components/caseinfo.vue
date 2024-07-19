<template>
    <div class="item">
        <div class="content">
            <div class="content-in" v-for="caseinfo in caseinfoDatas" :key="caseinfo.mediacenterId">
                <p class="dynamic">{{ caseinfo.title }}</p>
                <div class="info">
                    <div class="info-browser">{{ $t('meet.browser') }}：{{ caseinfo.clickVolume }}</div>
                    <div class="info-create">{{ $t('meet.create') }}：{{ caseinfo.releaseTime }}</div>
                </div>
                <div class="dsc-line" style="margin-top: 15px; margin-bottom: 5px;"></div>
                <div class="dsc-line" style="margin-bottom: 15px;"></div>
                <div class="dynamic-dsc">
                    <div class="intro" v-html="caseinfo.contentDetails"></div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import { getContentList } from '@/api/requests.js'
import funs from '@/utils/index.js'

export default {
    name: "Caseinfo",
    data() {
        return {
            caseinfoDatas: [],
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
        this.getSixData()
        this.ImageStyles()
    },
    methods: {
        getSixData(p = this.$store.state.lang.version) {
            getContentList({ "moduleType": "10", "status": "1", version: p }).then(res => {
                if (res.data && Array.isArray(res.data.rows) && res.data.rows.length > 0) {
                    this.rightData = res.data.rows
                    this.rightData.forEach((v, index) => {
                        // console.log(this.cindex, 'c');
                        if (index === this.cindex) {
                            // console.log(v, 'vvv');
                            this.caseinfoDatas.pop()
                            this.caseinfoDatas.push(v)
                        }
                    })
                }
                this.$emit('childrenUrl', {
                    path: '/caseall/caseinfo',
                    name: this.caseinfoDatas[0]?.title
                })
            })
        },
        ImageStyles() {
            const style = document.createElement('style');
            style.type = 'text/css';
            style.innerHTML = `
                .intro img {
                    width: 100%;
                    
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
                funs(this.getSixData(), this.$store.state.lang.version)
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

.intro {
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