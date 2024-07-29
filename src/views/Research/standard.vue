<template>
    <div class="item">
        <div class="content">
            <div class="big-leader">
                <router-link :to="{ name: '' }"
                    style="display: flex; align-items: center;justify-content: space-between;width:80%">
                    <span style="font-size: 15px;
font-weight: 600;
letter-spacing: 1px;
line-height: 19.89px;
color: rgba(51, 51, 51, 1);
text-align: left;
vertical-align: top;">绿色设计国际标准1</span>
                    <!-- <span>{{ $t('prize.big') }}</span> -->
                    <!-- <i class="el-icon-arrow-right"></i> -->
                </router-link>

                <router-link :to="{ name: '' }"
                    style="display: flex; align-items: center;justify-content: space-between;width:80%">
                    <!-- <span>{{ $t('prize.rule') }}</span> -->
                    <span style="font-size: 14px;
font-weight: 500;
letter-spacing: 1px;
line-height: 18.56px;
color: rgba(85, 85, 85, 1);
text-align: left;
vertical-align: top;">绿色设计国际标准2</span>
                    <!-- <i class="el-icon-arrow-right"></i> -->
                </router-link>

                <!-- <router-link :to="{ name: 'bPersonal' }"
                    style="display: flex; align-items: center;justify-content: space-between;width:80%">
                    <span>{{ $t('prize.persons') }}</span>
                    <i class="el-icon-arrow-right"></i>
                </router-link> -->
            </div>

            <div class="content-in" v-for="str in standardDatas" :key="str.academicId">
                <p class="dynamic">{{ str.title }}</p>

                <div class="dsc-line" style="margin-top: 10px; margin-bottom: 5px;"></div>
                <div class="dsc-line" style="margin-bottom: 15px"></div>

                <div class="dynamic-dsc">
                    <div class="intro" v-html="str.contentDetails"></div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import { Research } from "@/api/requests.js";
import funs from '@/utils/index.js'

export default {
    name: "Standard",
    props: ['tabDatas'],
    data() {
        return {
            standardDatas: [],
        };
    },
    mounted() {
        this.getStandardData()
        this.Styles()
    },
    methods: {
        getStandardData(p = this.$store.state.lang.version) {
            Research({ moduleType: '2', status: '1', version: p }).then(res => {
                if (res.data && Array.isArray(res.data.rows) && res.data.rows.length > 0) {
                    this.standardDatas = res.data.rows
                }
            })
        },
        Styles() {
            const style = document.createElement('style');
            style.type = 'text/css';
            style.innerHTML = `
                .content-in img {
                    width: 100%;
                    
                    background-size: cover;
                    background-position: center;
                }

                .content-in p {
                    font-size: 16px;
                }
            `;
            document.head.appendChild(style);
        }
    },
    watch: {
        "$store.state.lang.version": {
            handler() {
                funs(this.getStandardData(), this.$store.state.lang.version)
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

.big-leader {
    width: 20%;
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
    width: 80%;
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
    margin-top: 7px;
}

.dsc-line {
    width: 100%;
    opacity: 0.3;
    border: 1px solid rgba(161, 161, 161, 1);
}

.dynamic-dsc {
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
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