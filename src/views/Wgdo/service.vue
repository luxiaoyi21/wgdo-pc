<template>
    <div class="item">
        <div class="content">
            <div class="big-leader">
                <router-link :to="{ name: '' }"
                    style="display: flex; align-items: center;">
                    <span style="font-size: 15px;
font-weight: 600;
letter-spacing: 1px;
line-height: 19.89px;
color: rgba(51, 51, 51, 1);
text-align: left;
vertical-align: top;">人才培养1</span>
                    <!-- <span>{{ $t('prize.big') }}</span> -->
                    <!-- <i class="el-icon-arrow-right"></i> -->
                </router-link>

                <router-link :to="{ name: '' }"
                    style="display: flex; align-items: center;">
                    <!-- <span>{{ $t('prize.rule') }}</span> -->
                    <span style="font-size: 14px;
font-weight: 500;
letter-spacing: 1px;
line-height: 18.56px;
color: rgba(85, 85, 85, 1);
text-align: left;
vertical-align: top;">人才培养2</span>
                    <!-- <i class="el-icon-arrow-right"></i> -->
                </router-link>

                <!-- <router-link :to="{ name: 'bPersonal' }"
                    style="display: flex; align-items: center;">
                    <span>{{ $t('prize.persons') }}</span>
                    <i class="el-icon-arrow-right"></i>
                </router-link> -->
            </div>

            <div class="content-in">
                <p class="aintro">{{$t('wgdo.service')}}</p>

                <div class="dsc-line" style="margin-top: 10px; margin-bottom: 5px;"></div>
                <div class="dsc-line" style=" margin-bottom: 15px;"></div>

                <div class="serviceall">
                    <div class="servicein" v-for="service in serviceDatas" :key="service.greeninstituteId">
                        <p class="service-content" v-html="service.contentDetails"></p>
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
    name: "Service",
    props: ['tabDatas'],
    data() {
        return {
            serviceDatas: [],
        };
    },
    mounted() {
        this.getServiceData()
    },
    methods: {
        getServiceData(p = this.$store.state.lang.version) {
            getWgdo({ moduleType: '3', status: '1', version: p }).then(res => {
                if (res.data && Array.isArray(res.data.rows) && res.data.rows.length > 0) {
                    this.serviceDatas = res.data.rows
                }
            })
        },
    },
    watch: {
        "$store.state.lang.version": {
            handler() {
                funs(this.getServiceData(), this.$store.state.lang.version)
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
    /*align-items: center;
    flex-direction: column;*/
}

.big-leader {
    width: 15%;
    height: 20%;
    opacity: 1;
    border-radius: 6px;
    background: rgba(220, 235, 192, 1);
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    align-items: center;
    margin: 14px 20px 0 0;
}

.big-leader a {
    margin: 8px 0;
}

.content-in {
    width: 85%;
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
    margin-top: 7px;
}

.dsc-line {
    width: 100%;
    opacity: 0.3;
    border: 1px solid rgba(161, 161, 161, 1);
}

.serviceall {
    display: flex;
    flex-direction: column;
    margin-bottom: 40px;
}

.servicein {
    display: flex;
    flex-direction: column;
}

.service-content {
    font-size: 16px;
    font-weight: 400;
    letter-spacing: 0px;
    line-height: 25px;
    color: rgba(51, 51, 51, 1);
    text-align: justify;
}
</style>
