<template>
    <div class="item">
        <div class="content">
            <div class="content-in" v-for="designinfo in designinfoDatas" :key="designinfo.academicId">
                <!-- <div class="content-in"> -->
                <p class="dynamic">{{ designinfo.title }}</p>

                <div class="info">
                    <div class="info-browser">{{ $t('meet.browser') }}：{{ designinfo.clickVolume }}</div>
                    <div class="info-create">{{ $t('meet.create') }}：{{ designinfo.releaseTime }}</div>
                </div>

                <div class="dsc-line" style="margin-top: 10px; margin-bottom: 5px;"></div>
                <div class="dsc-line" style="margin-bottom: 15px;"></div>

                <div class="dynamic-dsc">
                    <div class="intro" v-html="designinfo.contentDetails"></div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import { Research } from "@/api/requests.js";
import funs from '@/utils/index.js'

export default {
    name: "Designinfo",
    props: ['tabDatas'],
    data() {
        return {
            designinfoDatas: [],
        };
    },
    mounted() {
        this.getDesigninfoData()
    },
    methods: {
        getDesigninfoData(p = this.$store.state.lang.version) {
            const id = this.$route.query.id;
            Research({ moduleType: '1', status: '1', version: p, id: id }).then(res => {
                if (res.data && Array.isArray(res.data.rows) && res.data.rows.length > 0) {
                    this.designinfoDatas = res.data.rows.filter(row => row.academicId === id);
                }
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
                funs(this.getDesigninfoData(), this.$store.state.lang.version)
            }
        },
        '$route.query.id': {
            handler(newId) {
                this.id = newId;
                this.getDesigninfoData();
            },
            immediate: true
        },
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
    margin-top: 7px;
}

.info {
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top: 10px;
}

.info-browser {
    width: 15%;
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
    width: 28%;
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

.intro {
    opacity: 1;
    font-size: 16px;
    font-weight: 400;
    letter-spacing: 0px;
    line-height: 25px;
    color: rgba(51, 51, 51, 1);
    text-align: justify;
    vertical-align: top;
    display: flex;
    flex-direction: column;
    justify-content: center;
}
</style>
