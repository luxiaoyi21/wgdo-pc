<template>
    <div class="item">
        <div class="content">
            <div class="content-in">
                <p class="dynamic">绿色设计培训</p>

                <div class="dsc-line" style="margin-top: 15px; margin-bottom: 5px;"></div>
                <div class="dsc-line" style="margin-bottom: 15px;"></div>

                <div class="dynamic-dsc">
                    <a :href="train.externalLink" class="doing-in" v-for="train in trainDatas" :key="train.greeninstituteId">
                        <div class="doing-img">
                            <img :src="'http://106.3.97.14:9002' + train.cover">
                            <div class="image-caption">
                                <p class="image-title">{{ train.title }}</p>
                                <p class="image-content"> {{ train.intro }}
                                </p>
                            </div>
                        </div>
                    </a>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import { getWgdo } from '@/api/requests.js'
import funs from '@/utils/index.js'

export default {
    name: "Train",
    props: ['tabDatas'],
    data() {
        return {
            trainDatas: [...this.tabDatas],
        };
    },
    mounted() {
        this.getTrainData()
    },
    methods: {
        getTrainData(p = this.$store.state.lang.version) {
            getWgdo({ moduleType: '4', status: '1', version: p }).then(res => {
                if (res.data && Array.isArray(res.data.rows) && res.data.rows.length > 0) {
                    this.trainDatas = res.data.rows
                    console.log(this.trainDatas);
                }
            })
        }
    },
    watch: {
        "$store.state.lang.version": {
            handler() {
                funs(this.getTrainData(), this.$store.state.lang.version)
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
    margin-bottom: 50px;
    height: 400px;
}

.doing-in {
    width: 100%;
}

.doing-img {
    width: 100%;
    height: 200px;
    position: relative;
}

.doing-img img {
    width: 100%;
    height: 200px;
}

.doing-img::after {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: linear-gradient(180deg, rgba(0, 0, 0, 0) 0%, rgba(0, 0, 0, 0.5) 100%);
    pointer-events: none;
}

.image-caption {
    width: 90%;
    position: absolute;
    bottom: 5px;
    left: 50%;
    z-index: 9;
    transform: translateX(-50%);
    padding: 20px;
}

.image-title {
    font-size: 16px;
    font-weight: 600;
    letter-spacing: 1px;
    line-height: 26.52px;
    color: rgba(255, 255, 255, 1);
    text-align: left;
    vertical-align: top;
}

.image-content {
    font-size: 14px;
    font-weight: 400;
    letter-spacing: 1px;
    line-height: 23.87px;
    color: rgba(255, 255, 255, 1);
    text-align: left;
    vertical-align: top;
}
</style>