<template>
    <div class="item">
        <div class="content">
            <div class="content-in">
                <p class="aintro">{{$t('wgdo.intro')}}</p>

                <div class="dsc-line" style="margin-top: 15px; margin-bottom: 5px;"></div>
                <div class="dsc-line" style=" margin-bottom: 15px;"></div>

                <div class="intro" v-for="intro in introDatas" :key="intro.greeninstituteId">
                    <div class="left">
                        <img :src="'http://www.wgdo.net' + intro.cover">
                    </div>

                    <div class="right">
                        <div class="right-top">
                            <p class="ch">{{ intro.title }}</p>
                            <!-- <p class="en">About Us</p> -->
                        </div>
                        <div class="right-bottom">
                            {{ intro.intro }}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import { getWgdo } from '@/api/requests.js'
import funs from '@/utils/index.js'

export default {
    name: "Intro",
    props: ['tabDatas'],
    data() {
        return {
            introDatas: [...this.tabDatas],
        };
    },
    mounted() {
        this.getIntroData()
    },
    methods: {
        getIntroData(p=this.$store.state.lang.version) {
            getWgdo({ moduleType: '1', status: '1',version:p }).then(res => {
                if (res.data && Array.isArray(res.data.rows) && res.data.rows.length > 0) {
                    this.introDatas = res.data.rows
                }
            })
        }
    },
    watch: {
        "$store.state.lang.version": {
            handler() {
                funs(this.getIntroData(), this.$store.state.lang.version)
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
    align-items: center;
    flex-direction: column;
}

.content-in {
    width: 67%;
    display: flex;
    flex-direction: column;
}

.aintro {
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

.intro {
    display: flex;
    margin-bottom: 150px;
    justify-content: space-between;
}

.left {
    width: 49%;
    height: 300px;
    opacity: 1;
}

.left img {
    width: 100%;
    height: 300px;
    opacity: 1;
}

.right {
    display: flex;
    flex-direction: column;
    width: 49%;
    justify-content: center;
}

.right-top {
    display: flex;
}

.ch {
    opacity: 1;
    font-size: 18px;
    font-weight: 600;
    letter-spacing: 1px;
    line-height: 26.52px;
    color: rgba(40, 40, 40, 1);
    text-align: left;
    vertical-align: top;
}

.right-bottom {
    opacity: 1;
    font-size: 16px;
    font-weight: 400;
    letter-spacing: 0px;
    line-height: 23.87px;
    color: rgba(51, 51, 51, 1);
    text-align: justify;
    vertical-align: top;
    margin-top: 20px;
}
</style>
