<template>
    <div class="box">
        <Headers />
        <div class="content">
            <Breadcrumb class="mianbai" :urlData="urlDatas" />
            <div class="cont" v-for="item in detData" :key="item.hpId">
                <div class="title" :class="$store.state.lang.isEn === 'en' ? 'titleEN' : 'title'">{{ item.title }}</div>
                <div class="titletwo">
                    <span>{{ $t('meet.browser') }}:{{ item.clickVolume }}</span>
                    <span>{{ $t('meet.create') }}:{{ item.releaseTime }}</span>
                </div>
                <div class="lines">
                    <div class="line"></div>
                    <div class="line"></div>
                </div>
                <div class="dsc" style=" margin-top: 15px;
                font-size: 15px;
                font-weight: 400;
                letter-spacing: 0px;
                line-height: 25px;
                color: rgba(51, 51, 51, 1);
                text-align: justify;" v-html="item.contentDetails"></div>
            </div>
        </div>
        <div class="footer">
            <Footers />
        </div>
    </div>
</template>

<script>
import Headers from '@/components/Headers'
import Breadcrumb from '@/components/Breadcrumb.vue'
import Footers from '@/views/Home/Footer/index.vue'
import { getContentList } from '@/api/requests.js'
import funs from '@/utils/index.js'

export default {
    name: 'Det',
    components: { Headers, Breadcrumb, Footers },
    data() {
        let detData = []
        let urlDatas = []
        let orders
        return {
            detData,
            urlDatas,
            orders
        }
    },
    mounted() {
        if (typeof (this.$route.params.orders) === 'string') {
            this.getSecondData()
        } else {
            this.orders = this.$route.params.orders
            this.getSecondData(this.orders)
        }
        if (this.$store.state.lang.isEn !== 'en') {
            this.urlDatas = []
            this.urlDatas.push(
                { path: '/', name: '首页' },
                { path: this.$route.path, name: '组织动态' }
            )
        } else {
            this.urlDatas = []
            this.urlDatas.push(
                { path: '/', name: 'Home' },
                { path: this.$route.path, name: 'Organizational dynamics' }
            )
        }
        this.ImageStyles();
    },
    methods: {
        getSecondData(currentIndex = '', p = this.$store.state.lang.version) {
            getContentList({ "moduleType": "2", "status": "1", version: p, currentIndex }).then(res => {
                if (res.data && Array.isArray(res.data.rows) && res.data.rows.length > 0) {
                    if (currentIndex === '') {
                        this.detData = res.data.rows
                    } else {
                        this.detData.pop()
                        this.detData.push(res.data.rows[currentIndex])
                    }
                }
            })
        },
        ImageStyles() {
            const style = document.createElement('style');
            style.type = 'text/css';
            style.innerHTML = `
                .dsc img {
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
                if (this.orders > 9999) {
                    funs(this.getSecondData(), this.$store.state.lang.version)
                } else {
                    funs(this.getSecondData(this.orders), this.$store.state.lang.version)
                }
                if (this.$store.state.lang.isEn !== 'en') {
                    this.urlDatas = []
                    this.urlDatas.push(
                        { path: '/', name: '首页' },
                        { path: this.$route.path, name: '组织动态' }
                    )
                } else {
                    this.urlDatas = []
                    this.urlDatas.push(
                        { path: '/', name: 'Home' },
                        { path: this.$route.path, name: 'Organizational dynamics' }
                    )
                }
            }
        }
    }
}
</script>

<style scoped>
.box {
    width: 100vw;
}

.content {
    width: 100vw;
    padding: 30px 16vw 120px;
    background: rgba(242, 241, 221, 1);
}

.mianbai {
    width: 100%;
}

.cont .title {
    margin-top: 30px;
    font-size: 24px;
    font-weight: 700;
    letter-spacing: 0.76px;
    line-height: 35px;
    color: rgba(51, 51, 51, 1);
    text-align: center;
    vertical-align: top;
}

.cont .titleEN {
    margin-top: 30px;
    /* max-width: 600px; */
    height: 100%;
    font-size: 24px;
    font-weight: 700;
    letter-spacing: 0.76px;
    line-height: 24px;
    color: rgba(51, 51, 51, 1);
    text-align: center;
    text-wrap: wrap;
}

.cont .titletwo {
    margin: 20px 0 20px;
    display: flex;
    justify-content: center;
    align-items: center;
    width: auto;
    height: 22px;
}

.cont .titletwo span {
    margin: 0 10px;
    height: 22px;
    font-size: 16px;
    font-weight: 400;
    letter-spacing: 1px;
    line-height: 21.22px;
    color: rgba(153, 153, 153, 1);
    text-align: center;
}

.cont .lines {
    margin-top: 20px;
    margin-bottom: 30px;
}

.cont .lines .line {
    width: 100%;
    height: 0px;
    border: 1px solid rgba(161, 161, 161, 1);
}

.cont .lines .line:first-child {
    margin-bottom: 10px;
}

.cont .dsc {
    margin-top: 15px;
    font-size: 15px;
    font-weight: 400;
    letter-spacing: 0px;
    line-height: 25px;
    color: rgba(51, 51, 51, 1);
    text-align: justify;
}

.cont .dsc p {
    display: block !important;
    margin: 20px 0 !important;
}

.box .footer {
    background: rgba(166, 225, 99, 1) !important;
}
</style>