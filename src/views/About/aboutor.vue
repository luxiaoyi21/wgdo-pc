<template>
    <div class="item">
        <div class="leader">
            <div ref="leadertop" class="leader-title">
                <span>{{ $t('about.structure') }}</span>
                <i class="el-icon-arrow-right"></i>
            </div>
            <a href="#" class="leader-in">
                <span>{{ $t('about.Korean') }}</span>
                <i class="el-icon-arrow-right"></i>
            </a>
            <a href="#" class="leader-in">
                <span>{{ $t('about.UK') }}</span>
                <i class="el-icon-arrow-right"></i>
            </a>
            <a href="#" class="leader-in">
                <span>{{ $t('about.Germany') }}</span>
                <i class="el-icon-arrow-right"></i>
            </a>
            <a href="#" class="leader-in">
                <span>{{ $t('about.Norwegian') }}</span>
                <i class="el-icon-arrow-right"></i>
            </a>
        </div>

        <div class="content">
            <div class="content-in">
                <p class="aintro">{{ $t('about.structure') }}</p>

                <div class="dsc-line" style="margin-top: 10px; margin-bottom: 5px;"></div>
                <div class="dsc-line" style=" margin-bottom: 15px;"></div>

                <div style="margin-bottom: 50px;" v-for="or in orDatas" :key="or.aboutusId">
                    <div class="intro" v-html="or.contentDetails"></div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import { Aboutus } from '@/api/requests.js'
import funs from '@/utils/index.js'

export default {
    name: "Aboutor",
    props: ['tabDatas'],
    data() {
        return {
            orDatas: []
        };
    },
    mounted() {
        this.getAboutorData();
        this.Styles();
    },
    methods: {
        getAboutorData(p = this.$store.state.lang.version) {
            Aboutus({ moduleType: '2', status: '1', version: p }).then(res => {
                if (res.data && Array.isArray(res.data.rows) && res.data.rows.length > 0) {
                    this.orDatas = res.data.rows
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
            `;
            document.head.appendChild(style);
        }
    },
    watch: {
        "$store.state.lang.version": {
            handler() {
                funs(this.getAboutorData(), this.$store.state.lang.version)
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
    display: flex;
    justify-content: space-between;
}

.leader {
    width: 230px;
    height: 20%;
    opacity: 1;
    border-radius: 6px;
    background: rgba(220, 235, 192, 1);
    margin: 14px 18px 0 0;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
}

.leader-title {
    width: 100%;
    margin: 10px 0;
    text-align: center;
    display: flex;
    justify-content: space-between;
    align-items: center;
    font-size: 15px;
    font-weight: 600;
    letter-spacing: 1px;
    line-height: 19.89px;
    color: rgba(51, 51, 51, 1);
    text-align: left;
    vertical-align: top;
    padding: 0 10px;
}

.leader-in {
    width: 100%;
    margin: 10px 0;
    text-align: center;
    display: flex;
    justify-content: space-between;
    align-items: center;
    font-size: 14px;
    font-weight: 400;
    letter-spacing: 1px;
    line-height: 18px;
    color: rgba(102, 102, 102, 1);
    text-align: left;
    vertical-align: top;
    padding: 0 10px;
}

.leader-in:active {
    font-size: 15px;
    font-weight: 600;
    letter-spacing: 1px;
    line-height: 19.89px;
    color: rgba(51, 51, 51, 1);
    text-align: left;
    vertical-align: top;
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
